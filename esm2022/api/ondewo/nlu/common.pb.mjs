import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export var SortingMode;
(function (SortingMode) {
	SortingMode[(SortingMode['ASCENDING'] = 0)] = 'ASCENDING';
	SortingMode[(SortingMode['DESCENDING'] = 1)] = 'DESCENDING';
})(SortingMode || (SortingMode = {}));
export var NotificationFlaggedStatus;
(function (NotificationFlaggedStatus) {
	NotificationFlaggedStatus[(NotificationFlaggedStatus['NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED'] = 0)] =
		'NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED';
	NotificationFlaggedStatus[(NotificationFlaggedStatus['NOTIFICATION_FLAGGED_STATUS_FLAGGED'] = 1)] =
		'NOTIFICATION_FLAGGED_STATUS_FLAGGED';
	NotificationFlaggedStatus[(NotificationFlaggedStatus['NOTIFICATION_FLAGGED_STATUS_UNFLAGGED'] = 2)] =
		'NOTIFICATION_FLAGGED_STATUS_UNFLAGGED';
})(NotificationFlaggedStatus || (NotificationFlaggedStatus = {}));
export var NotificationReadStatus;
(function (NotificationReadStatus) {
	NotificationReadStatus[(NotificationReadStatus['NOTIFICATION_READ_STATUS_UNSPECIFIED'] = 0)] =
		'NOTIFICATION_READ_STATUS_UNSPECIFIED';
	NotificationReadStatus[(NotificationReadStatus['NOTIFICATION_READ_STATUS_READ'] = 1)] =
		'NOTIFICATION_READ_STATUS_READ';
	NotificationReadStatus[(NotificationReadStatus['NOTIFICATION_READ_STATUS_UNREAD'] = 2)] =
		'NOTIFICATION_READ_STATUS_UNREAD';
})(NotificationReadStatus || (NotificationReadStatus = {}));
export var NotificationVisibility;
(function (NotificationVisibility) {
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_UNSPECIFIED'] = 0)] =
		'NOTIFICATION_VISIBILITY_UNSPECIFIED';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_USER'] = 1)] = 'NOTIFICATION_VISIBILITY_USER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT'] = 2)] =
		'NOTIFICATION_VISIBILITY_PROJECT';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_OWNER'] = 3)] =
		'NOTIFICATION_VISIBILITY_PROJECT_OWNER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_ADMIN'] = 4)] =
		'NOTIFICATION_VISIBILITY_PROJECT_ADMIN';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER'] = 5)] =
		'NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_USER'] = 6)] =
		'NOTIFICATION_VISIBILITY_PROJECT_USER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR'] = 7)] =
		'NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_PROJECT_INACTIVE'] = 8)] =
		'NOTIFICATION_VISIBILITY_PROJECT_INACTIVE';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_SERVER_ADMIN'] = 9)] =
		'NOTIFICATION_VISIBILITY_SERVER_ADMIN';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_SERVER_MANAGER'] = 10)] =
		'NOTIFICATION_VISIBILITY_SERVER_MANAGER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_SERVER_USER'] = 11)] =
		'NOTIFICATION_VISIBILITY_SERVER_USER';
	NotificationVisibility[(NotificationVisibility['NOTIFICATION_VISIBILITY_SERVER_INACTIVE'] = 12)] =
		'NOTIFICATION_VISIBILITY_SERVER_INACTIVE';
})(NotificationVisibility || (NotificationVisibility = {}));
export var NotificationType;
(function (NotificationType) {
	NotificationType[(NotificationType['NOTIFICATION_TYPE_UNSPECIFIED'] = 0)] = 'NOTIFICATION_TYPE_UNSPECIFIED';
	NotificationType[(NotificationType['NOTIFICATION_TYPE_DEBUG'] = 1)] = 'NOTIFICATION_TYPE_DEBUG';
	NotificationType[(NotificationType['NOTIFICATION_TYPE_WARNING'] = 2)] = 'NOTIFICATION_TYPE_WARNING';
	NotificationType[(NotificationType['NOTIFICATION_TYPE_INFO'] = 3)] = 'NOTIFICATION_TYPE_INFO';
	NotificationType[(NotificationType['NOTIFICATION_TYPE_ERROR'] = 4)] = 'NOTIFICATION_TYPE_ERROR';
	NotificationType[(NotificationType['NOTIFICATION_TYPE_NEWS'] = 5)] = 'NOTIFICATION_TYPE_NEWS';
})(NotificationType || (NotificationType = {}));
export var NotificationOrigin;
(function (NotificationOrigin) {
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_UNSPECIFIED'] = 0)] = 'NOTIFICATION_ORIGIN_UNSPECIFIED';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_AIM'] = 1)] = 'NOTIFICATION_ORIGIN_ONDEWO_AIM';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_BPI'] = 2)] = 'NOTIFICATION_ORIGIN_ONDEWO_BPI';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_CSI'] = 3)] = 'NOTIFICATION_ORIGIN_ONDEWO_CSI';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_NLU'] = 4)] = 'NOTIFICATION_ORIGIN_ONDEWO_NLU';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_S2T'] = 5)] = 'NOTIFICATION_ORIGIN_ONDEWO_S2T';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_SIP'] = 6)] = 'NOTIFICATION_ORIGIN_ONDEWO_SIP';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_T2S'] = 7)] = 'NOTIFICATION_ORIGIN_ONDEWO_T2S';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_VTSI'] = 8)] = 'NOTIFICATION_ORIGIN_ONDEWO_VTSI';
	NotificationOrigin[(NotificationOrigin['NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ'] = 9)] =
		'NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ';
})(NotificationOrigin || (NotificationOrigin = {}));
/**
 * Message implementation for ondewo.nlu.StatResponse
 */
export class StatResponse {
	static {
		this.id = 'ondewo.nlu.StatResponse';
	}
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
			if (_reader.isEndGroup()) break;
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
		options
	) {
		return {
			value: this.value
		};
	}
}
/**
 * Message implementation for ondewo.nlu.Comment
 */
export class Comment {
	static {
		this.id = 'ondewo.nlu.Comment';
	}
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
			if (_reader.isEndGroup()) break;
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
		this.createdAt = _value.createdAt ? new googleProtobuf001.Timestamp(_value.createdAt) : undefined;
		this.modifiedAt = _value.modifiedAt ? new googleProtobuf001.Timestamp(_value.modifiedAt) : undefined;
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
		options
	) {
		return {
			name: this.name,
			text: this.text,
			userId: this.userId,
			commentAboutName: this.commentAboutName,
			parentCommentName: this.parentCommentName,
			createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
			modifiedAt: this.modifiedAt ? this.modifiedAt.toProtobufJSON(options) : null,
			createdBy: this.createdBy,
			modifiedBy: this.modifiedBy
		};
	}
}
/**
 * Message implementation for ondewo.nlu.Notification
 */
export class Notification {
	static {
		this.id = 'ondewo.nlu.Notification';
	}
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
		_instance.notificationFlaggedStatus = _instance.notificationFlaggedStatus || 0;
		_instance.notificationFlaggedTimestamp = _instance.notificationFlaggedTimestamp || undefined;
		_instance.notificationReadStatus = _instance.notificationReadStatus || 0;
		_instance.notificationReadTimestamp = _instance.notificationReadTimestamp || undefined;
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
			if (_reader.isEndGroup()) break;
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
					_reader.readMessage(
						_instance.notificationFlaggedTimestamp,
						googleProtobuf001.Timestamp.deserializeBinaryFromReader
					);
					break;
				case 8:
					_instance.notificationReadStatus = _reader.readEnum();
					break;
				case 9:
					_instance.notificationReadTimestamp = new googleProtobuf001.Timestamp();
					_reader.readMessage(
						_instance.notificationReadTimestamp,
						googleProtobuf001.Timestamp.deserializeBinaryFromReader
					);
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
			_writer.writeMessage(
				7,
				_instance.notificationFlaggedTimestamp,
				googleProtobuf001.Timestamp.serializeBinaryToWriter
			);
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
		this.createdAt = _value.createdAt ? new googleProtobuf001.Timestamp(_value.createdAt) : undefined;
		this.modifiedAt = _value.modifiedAt ? new googleProtobuf001.Timestamp(_value.modifiedAt) : undefined;
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
			notificationReadTimestamp: this.notificationReadTimestamp ? this.notificationReadTimestamp.toObject() : undefined,
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
		options
	) {
		return {
			name: this.name,
			userName: this.userName,
			title: this.title,
			descriptionShort: this.descriptionShort,
			descriptionLong: this.descriptionLong,
			notificationFlaggedStatus:
				NotificationFlaggedStatus[
					this.notificationFlaggedStatus === null || this.notificationFlaggedStatus === undefined
						? 0
						: this.notificationFlaggedStatus
				],
			notificationFlaggedTimestamp: this.notificationFlaggedTimestamp
				? this.notificationFlaggedTimestamp.toProtobufJSON(options)
				: null,
			notificationReadStatus:
				NotificationReadStatus[
					this.notificationReadStatus === null || this.notificationReadStatus === undefined
						? 0
						: this.notificationReadStatus
				],
			notificationReadTimestamp: this.notificationReadTimestamp
				? this.notificationReadTimestamp.toProtobufJSON(options)
				: null,
			notificationOrigin:
				NotificationOrigin[
					this.notificationOrigin === null || this.notificationOrigin === undefined ? 0 : this.notificationOrigin
				],
			originName: this.originName,
			originLanguage: this.originLanguage,
			notificationType:
				NotificationType[
					this.notificationType === null || this.notificationType === undefined ? 0 : this.notificationType
				],
			notificationVisibility:
				NotificationVisibility[
					this.notificationVisibility === null || this.notificationVisibility === undefined
						? 0
						: this.notificationVisibility
				],
			createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
			modifiedAt: this.modifiedAt ? this.modifiedAt.toProtobufJSON(options) : null,
			createdBy: this.createdBy,
			modifiedBy: this.modifiedBy
		};
	}
}
/**
 * Message implementation for ondewo.nlu.AddNotificationsRequest
 */
export class AddNotificationsRequest {
	static {
		this.id = 'ondewo.nlu.AddNotificationsRequest';
	}
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
		_instance.notification = _instance.notification || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Notification();
					_reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
					(_instance.notification = _instance.notification || []).push(messageInitializer1);
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
		if (_instance.notification && _instance.notification.length) {
			_writer.writeRepeatedMessage(1, _instance.notification, Notification.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddNotificationsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.notification = (_value.notification || []).map((m) => new Notification(m));
		AddNotificationsRequest.refineValues(this);
	}
	get notification() {
		return this._notification;
	}
	set notification(value) {
		this._notification = value;
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
			notification: (this.notification || []).map((m) => m.toObject())
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
		options
	) {
		return {
			notification: (this.notification || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.nlu.AddNotificationsResponse
 */
export class AddNotificationsResponse {
	static {
		this.id = 'ondewo.nlu.AddNotificationsResponse';
	}
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
		_instance.notification = _instance.notification || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Notification();
					_reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
					(_instance.notification = _instance.notification || []).push(messageInitializer1);
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
		if (_instance.notification && _instance.notification.length) {
			_writer.writeRepeatedMessage(1, _instance.notification, Notification.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddNotificationsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.notification = (_value.notification || []).map((m) => new Notification(m));
		AddNotificationsResponse.refineValues(this);
	}
	get notification() {
		return this._notification;
	}
	set notification(value) {
		this._notification = value;
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
			notification: (this.notification || []).map((m) => m.toObject())
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
		options
	) {
		return {
			notification: (this.notification || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.nlu.NotificationFilter
 */
export class NotificationFilter {
	static {
		this.id = 'ondewo.nlu.NotificationFilter';
	}
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
		_instance.notificationVisibilities = _instance.notificationVisibilities || [];
		_instance.notificationFlaggedStatus = _instance.notificationFlaggedStatus || [];
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
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
					break;
				case 2:
					(_instance.notificationOrigins = _instance.notificationOrigins || []).push(
						...(_reader.readPackedEnum() || [])
					);
					break;
				case 3:
					(_instance.notificationVisibilities = _instance.notificationVisibilities || []).push(
						...(_reader.readPackedEnum() || [])
					);
					break;
				case 4:
					(_instance.notificationFlaggedStatus = _instance.notificationFlaggedStatus || []).push(
						...(_reader.readPackedEnum() || [])
					);
					break;
				case 5:
					(_instance.notificationReadStatus = _instance.notificationReadStatus || []).push(
						...(_reader.readPackedEnum() || [])
					);
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
		if (_instance.notificationVisibilities && _instance.notificationVisibilities.length) {
			_writer.writePackedEnum(3, _instance.notificationVisibilities);
		}
		if (_instance.notificationFlaggedStatus && _instance.notificationFlaggedStatus.length) {
			_writer.writePackedEnum(4, _instance.notificationFlaggedStatus);
		}
		if (_instance.notificationReadStatus && _instance.notificationReadStatus.length) {
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
		this.earliest = _value.earliest ? new googleProtobuf001.Timestamp(_value.earliest) : undefined;
		this.latest = _value.latest ? new googleProtobuf001.Timestamp(_value.latest) : undefined;
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
		options
	) {
		return {
			languageCodes: (this.languageCodes || []).slice(),
			notificationOrigins: (this.notificationOrigins || []).map((v) => NotificationOrigin[v]),
			notificationVisibilities: (this.notificationVisibilities || []).map((v) => NotificationVisibility[v]),
			notificationFlaggedStatus: (this.notificationFlaggedStatus || []).map((v) => NotificationFlaggedStatus[v]),
			notificationReadStatus: (this.notificationReadStatus || []).map((v) => NotificationReadStatus[v]),
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
	static {
		this.id = 'ondewo.nlu.ListNotificationsRequest';
	}
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
			if (_reader.isEndGroup()) break;
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
		this.notificationFilter = _value.notificationFilter ? new NotificationFilter(_value.notificationFilter) : undefined;
		this.pageToken = _value.pageToken;
		this.fieldMask = _value.fieldMask ? new googleProtobuf000.FieldMask(_value.fieldMask) : undefined;
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
			notificationFilter: this.notificationFilter ? this.notificationFilter.toObject() : undefined,
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
		options
	) {
		return {
			notificationFilter: this.notificationFilter ? this.notificationFilter.toProtobufJSON(options) : null,
			pageToken: this.pageToken,
			fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.nlu.ListNotificationsResponse
 */
export class ListNotificationsResponse {
	static {
		this.id = 'ondewo.nlu.ListNotificationsResponse';
	}
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
		_instance.notification = _instance.notification || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					const messageInitializer1 = new Notification();
					_reader.readMessage(messageInitializer1, Notification.deserializeBinaryFromReader);
					(_instance.notification = _instance.notification || []).push(messageInitializer1);
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
		if (_instance.notification && _instance.notification.length) {
			_writer.writeRepeatedMessage(1, _instance.notification, Notification.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListNotificationsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.notification = (_value.notification || []).map((m) => new Notification(m));
		ListNotificationsResponse.refineValues(this);
	}
	get notification() {
		return this._notification;
	}
	set notification(value) {
		this._notification = value;
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
			notification: (this.notification || []).map((m) => m.toObject())
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
		options
	) {
		return {
			notification: (this.notification || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export class SetNotificationsFlaggedStatusRequest {
	static {
		this.id = 'ondewo.nlu.SetNotificationsFlaggedStatusRequest';
	}
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
		_instance.notificationName = _instance.notificationName || [];
		_instance.flagged = _instance.flagged || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.notificationName = _instance.notificationName || []).push(_reader.readString());
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
		if (_instance.notificationName && _instance.notificationName.length) {
			_writer.writeRepeatedString(1, _instance.notificationName);
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
		this.notificationName = (_value.notificationName || []).slice();
		this.flagged = (_value.flagged || []).slice();
		SetNotificationsFlaggedStatusRequest.refineValues(this);
	}
	get notificationName() {
		return this._notificationName;
	}
	set notificationName(value) {
		this._notificationName = value;
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
			notificationName: (this.notificationName || []).slice(),
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
		options
	) {
		return {
			notificationName: (this.notificationName || []).slice(),
			flagged: (this.flagged || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.nlu.SetNotificationsReadStatusRequest
 */
export class SetNotificationsReadStatusRequest {
	static {
		this.id = 'ondewo.nlu.SetNotificationsReadStatusRequest';
	}
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
		_instance.notificationName = _instance.notificationName || [];
		_instance.flagged = _instance.flagged || [];
	}
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance, _reader) {
		while (_reader.nextField()) {
			if (_reader.isEndGroup()) break;
			switch (_reader.getFieldNumber()) {
				case 1:
					(_instance.notificationName = _instance.notificationName || []).push(_reader.readString());
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
		if (_instance.notificationName && _instance.notificationName.length) {
			_writer.writeRepeatedString(1, _instance.notificationName);
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
		this.notificationName = (_value.notificationName || []).slice();
		this.flagged = (_value.flagged || []).slice();
		SetNotificationsReadStatusRequest.refineValues(this);
	}
	get notificationName() {
		return this._notificationName;
	}
	set notificationName(value) {
		this._notificationName = value;
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
			notificationName: (this.notificationName || []).slice(),
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
		options
	) {
		return {
			notificationName: (this.notificationName || []).slice(),
			flagged: (this.flagged || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.nlu.KeyValuePair
 */
export class KeyValuePair {
	static {
		this.id = 'ondewo.nlu.KeyValuePair';
	}
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
			if (_reader.isEndGroup()) break;
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
		this.createdAt = _value.createdAt ? new googleProtobuf001.Timestamp(_value.createdAt) : undefined;
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
		options
	) {
		return {
			key: this.key,
			intValue: this.intValue === null || this.intValue === undefined ? null : this.intValue,
			floatValue: this.floatValue === null || this.floatValue === undefined ? null : this.floatValue,
			doubleValue: this.doubleValue === null || this.doubleValue === undefined ? null : this.doubleValue,
			stringValue: this.stringValue === null || this.stringValue === undefined ? null : this.stringValue,
			createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
		};
	}
}
(function (KeyValuePair) {
	let ValueCase;
	(function (ValueCase) {
		ValueCase[(ValueCase['none'] = 0)] = 'none';
		ValueCase[(ValueCase['intValue'] = 1)] = 'intValue';
		ValueCase[(ValueCase['floatValue'] = 2)] = 'floatValue';
		ValueCase[(ValueCase['doubleValue'] = 3)] = 'doubleValue';
		ValueCase[(ValueCase['stringValue'] = 4)] = 'stringValue';
		ValueCase[(ValueCase['createdAt'] = 5)] = 'createdAt';
	})((ValueCase = KeyValuePair.ValueCase || (KeyValuePair.ValueCase = {})));
})(KeyValuePair || (KeyValuePair = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvY29tbW9uLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxNQUFNLENBQU4sSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLHVEQUFhLENBQUE7SUFDYix5REFBYyxDQUFBO0FBQ2hCLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQUNELE1BQU0sQ0FBTixJQUFZLHlCQUlYO0FBSkQsV0FBWSx5QkFBeUI7SUFDbkMsK0lBQTJDLENBQUE7SUFDM0MsdUlBQXVDLENBQUE7SUFDdkMsMklBQXlDLENBQUE7QUFDM0MsQ0FBQyxFQUpXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFJcEM7QUFDRCxNQUFNLENBQU4sSUFBWSxzQkFJWDtBQUpELFdBQVksc0JBQXNCO0lBQ2hDLG1JQUF3QyxDQUFBO0lBQ3hDLHFIQUFpQyxDQUFBO0lBQ2pDLHlIQUFtQyxDQUFBO0FBQ3JDLENBQUMsRUFKVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSWpDO0FBQ0QsTUFBTSxDQUFOLElBQVksc0JBY1g7QUFkRCxXQUFZLHNCQUFzQjtJQUNoQyxpSUFBdUMsQ0FBQTtJQUN2QyxtSEFBZ0MsQ0FBQTtJQUNoQyx5SEFBbUMsQ0FBQTtJQUNuQyxxSUFBeUMsQ0FBQTtJQUN6QyxxSUFBeUMsQ0FBQTtJQUN6Qyw2SUFBNkMsQ0FBQTtJQUM3QyxtSUFBd0MsQ0FBQTtJQUN4QywySUFBNEMsQ0FBQTtJQUM1QywySUFBNEMsQ0FBQTtJQUM1QyxtSUFBd0MsQ0FBQTtJQUN4Qyx3SUFBMkMsQ0FBQTtJQUMzQyxr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VCxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7Z0JBQ3pELENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUN0QixXQUFXLEVBQ1QsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUN6RCxDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzFFLENBQUM7SUFDSixDQUFDOztBQUVILFdBQWMsWUFBWTtJQXdCeEIsSUFBWSxTQU9YO0lBUEQsV0FBWSxTQUFTO1FBQ25CLHlDQUFRLENBQUE7UUFDUixpREFBWSxDQUFBO1FBQ1oscURBQWMsQ0FBQTtRQUNkLHVEQUFlLENBQUE7UUFDZix1REFBZSxDQUFBO1FBQ2YsbURBQWEsQ0FBQTtJQUNmLENBQUMsRUFQVyxTQUFTLEdBQVQsc0JBQVMsS0FBVCxzQkFBUyxRQU9wQjtBQUNILENBQUMsRUFoQ2EsWUFBWSxLQUFaLFlBQVksUUFnQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAwIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmV4cG9ydCBlbnVtIFNvcnRpbmdNb2RlIHtcbiAgQVNDRU5ESU5HID0gMCxcbiAgREVTQ0VORElORyA9IDFcbn1cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMge1xuICBOT1RJRklDQVRJT05fRkxBR0dFRF9TVEFUVVNfVU5TUEVDSUZJRUQgPSAwLFxuICBOT1RJRklDQVRJT05fRkxBR0dFRF9TVEFUVVNfRkxBR0dFRCA9IDEsXG4gIE5PVElGSUNBVElPTl9GTEFHR0VEX1NUQVRVU19VTkZMQUdHRUQgPSAyXG59XG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25SZWFkU3RhdHVzIHtcbiAgTk9USUZJQ0FUSU9OX1JFQURfU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgTk9USUZJQ0FUSU9OX1JFQURfU1RBVFVTX1JFQUQgPSAxLFxuICBOT1RJRklDQVRJT05fUkVBRF9TVEFUVVNfVU5SRUFEID0gMlxufVxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVmlzaWJpbGl0eSB7XG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1VOU1BFQ0lGSUVEID0gMCxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfVVNFUiA9IDEsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1QgPSAyLFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9QUk9KRUNUX09XTkVSID0gMyxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfUFJPSkVDVF9BRE1JTiA9IDQsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1RfREVWRUxPUEVSID0gNSxcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfUFJPSkVDVF9VU0VSID0gNixcbiAgTk9USUZJQ0FUSU9OX1ZJU0lCSUxJVFlfUFJPSkVDVF9FWEVDVVRPUiA9IDcsXG4gIE5PVElGSUNBVElPTl9WSVNJQklMSVRZX1BST0pFQ1RfSU5BQ1RJVkUgPSA4LFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9TRVJWRVJfQURNSU4gPSA5LFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9TRVJWRVJfTUFOQUdFUiA9IDEwLFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9TRVJWRVJfVVNFUiA9IDExLFxuICBOT1RJRklDQVRJT05fVklTSUJJTElUWV9TRVJWRVJfSU5BQ1RJVkUgPSAxMlxufVxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gIE5PVElGSUNBVElPTl9UWVBFX1VOU1BFQ0lGSUVEID0gMCxcbiAgTk9USUZJQ0FUSU9OX1RZUEVfREVCVUcgPSAxLFxuICBOT1RJRklDQVRJT05fVFlQRV9XQVJOSU5HID0gMixcbiAgTk9USUZJQ0FUSU9OX1RZUEVfSU5GTyA9IDMsXG4gIE5PVElGSUNBVElPTl9UWVBFX0VSUk9SID0gNCxcbiAgTk9USUZJQ0FUSU9OX1RZUEVfTkVXUyA9IDVcbn1cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbk9yaWdpbiB7XG4gIE5PVElGSUNBVElPTl9PUklHSU5fVU5TUEVDSUZJRUQgPSAwLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19BSU0gPSAxLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19CUEkgPSAyLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19DU0kgPSAzLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19OTFUgPSA0LFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19TMlQgPSA1LFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19TSVAgPSA2LFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19UMlMgPSA3LFxuICBOT1RJRklDQVRJT05fT1JJR0lOX09OREVXT19WVFNJID0gOCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9PTkRFV09fVlRTSV9SQUJCSVRNUSA9IDlcbn1cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TdGF0UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU3RhdFJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3RhdFJlc3BvbnNlKCk7XG4gICAgU3RhdFJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3RhdFJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnZhbHVlID0gX2luc3RhbmNlLnZhbHVlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTdGF0UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnZhbHVlID0gX3JlYWRlci5yZWFkVWludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdGF0UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTdGF0UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVVaW50MzIoMSwgX2luc3RhbmNlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3RhdFJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN0YXRSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy52YWx1ZSA9IF92YWx1ZS52YWx1ZTtcbiAgICBTdGF0UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RhdFJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN0YXRSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RhdFJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0YXRSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3RhdFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB2YWx1ZTogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFN0YXRSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ29tbWVudFxuICovXG5leHBvcnQgY2xhc3MgQ29tbWVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ29tbWVudCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbW1lbnQoKTtcbiAgICBDb21tZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ29tbWVudCkge1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlcklkID0gX2luc3RhbmNlLnVzZXJJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuY29tbWVudEFib3V0TmFtZSA9IF9pbnN0YW5jZS5jb21tZW50QWJvdXROYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXJlbnRDb21tZW50TmFtZSA9IF9pbnN0YW5jZS5wYXJlbnRDb21tZW50TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gX2luc3RhbmNlLmNyZWF0ZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgPSBfaW5zdGFuY2UubW9kaWZpZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRCeSA9IF9pbnN0YW5jZS5jcmVhdGVkQnkgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQnkgPSBfaW5zdGFuY2UubW9kaWZpZWRCeSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENvbW1lbnQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlcklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY29tbWVudEFib3V0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudENvbW1lbnROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEJ5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb21tZW50LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogQ29tbWVudCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnVzZXJJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29tbWVudEFib3V0TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuY29tbWVudEFib3V0TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyZW50Q29tbWVudE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhcmVudENvbW1lbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jcmVhdGVkQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0IGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGlmaWVkQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jcmVhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLmNyZWF0ZWRCeSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kaWZpZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg5LCBfaW5zdGFuY2UubW9kaWZpZWRCeSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIF9jb21tZW50QWJvdXROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudENvbW1lbnROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfY3JlYXRlZEJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21vZGlmaWVkQnk6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENvbW1lbnQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q29tbWVudC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy51c2VySWQgPSBfdmFsdWUudXNlcklkO1xuICAgIHRoaXMuY29tbWVudEFib3V0TmFtZSA9IF92YWx1ZS5jb21tZW50QWJvdXROYW1lO1xuICAgIHRoaXMucGFyZW50Q29tbWVudE5hbWUgPSBfdmFsdWUucGFyZW50Q29tbWVudE5hbWU7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubW9kaWZpZWRBdCA9IF92YWx1ZS5tb2RpZmllZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm1vZGlmaWVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IF92YWx1ZS5jcmVhdGVkQnk7XG4gICAgdGhpcy5tb2RpZmllZEJ5ID0gX3ZhbHVlLm1vZGlmaWVkQnk7XG4gICAgQ29tbWVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuICBzZXQgdXNlcklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VySWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tbWVudEFib3V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50QWJvdXROYW1lO1xuICB9XG4gIHNldCBjb21tZW50QWJvdXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50QWJvdXROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudENvbW1lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudENvbW1lbnROYW1lO1xuICB9XG4gIHNldCBwYXJlbnRDb21tZW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50Q29tbWVudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlZEF0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRBdDtcbiAgfVxuICBzZXQgY3JlYXRlZEF0KHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kaWZpZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZmllZEF0O1xuICB9XG4gIHNldCBtb2RpZmllZEF0KHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tb2RpZmllZEF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQnk7XG4gIH1cbiAgc2V0IGNyZWF0ZWRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGlmaWVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZpZWRCeTtcbiAgfVxuICBzZXQgbW9kaWZpZWRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kaWZpZWRCeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENvbW1lbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ29tbWVudC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICBjb21tZW50QWJvdXROYW1lOiB0aGlzLmNvbW1lbnRBYm91dE5hbWUsXG4gICAgICBwYXJlbnRDb21tZW50TmFtZTogdGhpcy5wYXJlbnRDb21tZW50TmFtZSxcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jcmVhdGVkQXQgPyB0aGlzLmNyZWF0ZWRBdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbW9kaWZpZWRBdDogdGhpcy5tb2RpZmllZEF0ID8gdGhpcy5tb2RpZmllZEF0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQnk6IHRoaXMuY3JlYXRlZEJ5LFxuICAgICAgbW9kaWZpZWRCeTogdGhpcy5tb2RpZmllZEJ5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ29tbWVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICBjb21tZW50QWJvdXROYW1lOiB0aGlzLmNvbW1lbnRBYm91dE5hbWUsXG4gICAgICBwYXJlbnRDb21tZW50TmFtZTogdGhpcy5wYXJlbnRDb21tZW50TmFtZSxcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jcmVhdGVkQXQgPyB0aGlzLmNyZWF0ZWRBdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtb2RpZmllZEF0OiB0aGlzLm1vZGlmaWVkQXRcbiAgICAgICAgPyB0aGlzLm1vZGlmaWVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ29tbWVudCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ29tbWVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBjb21tZW50QWJvdXROYW1lOiBzdHJpbmc7XG4gICAgcGFyZW50Q29tbWVudE5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ29tbWVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBjb21tZW50QWJvdXROYW1lOiBzdHJpbmc7XG4gICAgcGFyZW50Q29tbWVudE5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbW9kaWZpZWRBdDogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lk5vdGlmaWNhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5Ob3RpZmljYXRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb24oKTtcbiAgICBOb3RpZmljYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBOb3RpZmljYXRpb24pIHtcbiAgICBfaW5zdGFuY2UubmFtZSA9IF9pbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51c2VyTmFtZSA9IF9pbnN0YW5jZS51c2VyTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudGl0bGUgPSBfaW5zdGFuY2UudGl0bGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uU2hvcnQgPSBfaW5zdGFuY2UuZGVzY3JpcHRpb25TaG9ydCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb25Mb25nID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uTG9uZyB8fCAnJztcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyA9XG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyB8fCAwO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wID1cbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAgPVxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW4gPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2luIHx8IDA7XG4gICAgX2luc3RhbmNlLm9yaWdpbk5hbWUgPSBfaW5zdGFuY2Uub3JpZ2luTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uub3JpZ2luTGFuZ3VhZ2UgPSBfaW5zdGFuY2Uub3JpZ2luTGFuZ3VhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblR5cGUgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXR5ID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdHkgfHwgMDtcbiAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gX2luc3RhbmNlLmNyZWF0ZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgPSBfaW5zdGFuY2UubW9kaWZpZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRCeSA9IF9pbnN0YW5jZS5jcmVhdGVkQnkgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQnkgPSBfaW5zdGFuY2UubW9kaWZpZWRCeSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE5vdGlmaWNhdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvblNob3J0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb25Mb25nID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2luID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS5vcmlnaW5OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLm9yaWdpbkxhbmd1YWdlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdHkgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQnkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRCeSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTm90aWZpY2F0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTm90aWZpY2F0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS51c2VyTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvblNob3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5kZXNjcmlwdGlvblNob3J0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbkxvbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLmRlc2NyaXB0aW9uTG9uZyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXApIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg4LCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDksXG4gICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbikge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMTAsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9yaWdpbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTEsIF9pbnN0YW5jZS5vcmlnaW5OYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vcmlnaW5MYW5ndWFnZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMiwgX2luc3RhbmNlLm9yaWdpbkxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25UeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxMywgX2luc3RhbmNlLm5vdGlmaWNhdGlvblR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDE0LCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0eSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTUsXG4gICAgICAgIF9pbnN0YW5jZS5jcmVhdGVkQXQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kaWZpZWRBdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE2LFxuICAgICAgICBfaW5zdGFuY2UubW9kaWZpZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jcmVhdGVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTcsIF9pbnN0YW5jZS5jcmVhdGVkQnkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1vZGlmaWVkQnkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTgsIF9pbnN0YW5jZS5tb2RpZmllZEJ5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uU2hvcnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb25Mb25nOiBzdHJpbmc7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXA/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblJlYWRTdGF0dXM6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXM7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbk9yaWdpbjogTm90aWZpY2F0aW9uT3JpZ2luO1xuICBwcml2YXRlIF9vcmlnaW5OYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX29yaWdpbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGU7XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblZpc2liaWxpdHk6IE5vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gIHByaXZhdGUgX2NyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfbW9kaWZpZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfY3JlYXRlZEJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21vZGlmaWVkQnk6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIE5vdGlmaWNhdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxOb3RpZmljYXRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMudXNlck5hbWUgPSBfdmFsdWUudXNlck5hbWU7XG4gICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uU2hvcnQgPSBfdmFsdWUuZGVzY3JpcHRpb25TaG9ydDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uTG9uZyA9IF92YWx1ZS5kZXNjcmlwdGlvbkxvbmc7XG4gICAgdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID0gX3ZhbHVlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM7XG4gICAgdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wID0gX3ZhbHVlLm5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXBcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcChfdmFsdWUubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9IF92YWx1ZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzO1xuICAgIHRoaXMubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcCA9IF92YWx1ZS5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLm5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk9yaWdpbiA9IF92YWx1ZS5ub3RpZmljYXRpb25PcmlnaW47XG4gICAgdGhpcy5vcmlnaW5OYW1lID0gX3ZhbHVlLm9yaWdpbk5hbWU7XG4gICAgdGhpcy5vcmlnaW5MYW5ndWFnZSA9IF92YWx1ZS5vcmlnaW5MYW5ndWFnZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblR5cGUgPSBfdmFsdWUubm90aWZpY2F0aW9uVHlwZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdHkgPSBfdmFsdWUubm90aWZpY2F0aW9uVmlzaWJpbGl0eTtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IF92YWx1ZS5jcmVhdGVkQXRcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcChfdmFsdWUuY3JlYXRlZEF0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tb2RpZmllZEF0ID0gX3ZhbHVlLm1vZGlmaWVkQXRcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcChfdmFsdWUubW9kaWZpZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY3JlYXRlZEJ5ID0gX3ZhbHVlLmNyZWF0ZWRCeTtcbiAgICB0aGlzLm1vZGlmaWVkQnkgPSBfdmFsdWUubW9kaWZpZWRCeTtcbiAgICBOb3RpZmljYXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlck5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck5hbWU7XG4gIH1cbiAgc2V0IHVzZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlc2NyaXB0aW9uU2hvcnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25TaG9ydDtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb25TaG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb25TaG9ydCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbkxvbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25Mb25nO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbkxvbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uTG9uZyA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKCk6IE5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKHZhbHVlOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wKCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXA7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXAoXG4gICAgdmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvblJlYWRTdGF0dXMoKTogTm90aWZpY2F0aW9uUmVhZFN0YXR1cyB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblJlYWRTdGF0dXM7XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvblJlYWRTdGF0dXModmFsdWU6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXMpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25SZWFkU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAoKTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcDtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcChcbiAgICB2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXAgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uT3JpZ2luKCk6IE5vdGlmaWNhdGlvbk9yaWdpbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbk9yaWdpbjtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uT3JpZ2luKHZhbHVlOiBOb3RpZmljYXRpb25PcmlnaW4pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25PcmlnaW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3JpZ2luTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5OYW1lO1xuICB9XG4gIHNldCBvcmlnaW5OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmlnaW5OYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9yaWdpbkxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWdpbkxhbmd1YWdlO1xuICB9XG4gIHNldCBvcmlnaW5MYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JpZ2luTGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uVHlwZSgpOiBOb3RpZmljYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVHlwZTtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uVHlwZSh2YWx1ZTogTm90aWZpY2F0aW9uVHlwZSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uVmlzaWJpbGl0eSgpOiBOb3RpZmljYXRpb25WaXNpYmlsaXR5IHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVmlzaWJpbGl0eTtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uVmlzaWJpbGl0eSh2YWx1ZTogTm90aWZpY2F0aW9uVmlzaWJpbGl0eSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblZpc2liaWxpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlZEF0KCk6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRBdDtcbiAgfVxuICBzZXQgY3JlYXRlZEF0KHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kaWZpZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZmllZEF0O1xuICB9XG4gIHNldCBtb2RpZmllZEF0KHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tb2RpZmllZEF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRCeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQnk7XG4gIH1cbiAgc2V0IGNyZWF0ZWRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGlmaWVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZpZWRCeTtcbiAgfVxuICBzZXQgbW9kaWZpZWRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kaWZpZWRCeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE5vdGlmaWNhdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBOb3RpZmljYXRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb25TaG9ydDogdGhpcy5kZXNjcmlwdGlvblNob3J0LFxuICAgICAgZGVzY3JpcHRpb25Mb25nOiB0aGlzLmRlc2NyaXB0aW9uTG9uZyxcbiAgICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyxcbiAgICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXA6IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcFxuICAgICAgICA/IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogdGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzLFxuICAgICAgbm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcDogdGhpcy5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wXG4gICAgICAgID8gdGhpcy5ub3RpZmljYXRpb25SZWFkVGltZXN0YW1wLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBub3RpZmljYXRpb25PcmlnaW46IHRoaXMubm90aWZpY2F0aW9uT3JpZ2luLFxuICAgICAgb3JpZ2luTmFtZTogdGhpcy5vcmlnaW5OYW1lLFxuICAgICAgb3JpZ2luTGFuZ3VhZ2U6IHRoaXMub3JpZ2luTGFuZ3VhZ2UsXG4gICAgICBub3RpZmljYXRpb25UeXBlOiB0aGlzLm5vdGlmaWNhdGlvblR5cGUsXG4gICAgICBub3RpZmljYXRpb25WaXNpYmlsaXR5OiB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdHksXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdCA/IHRoaXMubW9kaWZpZWRBdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmNyZWF0ZWRCeSxcbiAgICAgIG1vZGlmaWVkQnk6IHRoaXMubW9kaWZpZWRCeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE5vdGlmaWNhdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHVzZXJOYW1lOiB0aGlzLnVzZXJOYW1lLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvblNob3J0OiB0aGlzLmRlc2NyaXB0aW9uU2hvcnQsXG4gICAgICBkZXNjcmlwdGlvbkxvbmc6IHRoaXMuZGVzY3JpcHRpb25Mb25nLFxuICAgICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czpcbiAgICAgICAgTm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1c1tcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1c1xuICAgICAgICBdLFxuICAgICAgbm90aWZpY2F0aW9uRmxhZ2dlZFRpbWVzdGFtcDogdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wXG4gICAgICAgID8gdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6XG4gICAgICAgIE5vdGlmaWNhdGlvblJlYWRTdGF0dXNbXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm5vdGlmaWNhdGlvblJlYWRTdGF0dXNcbiAgICAgICAgXSxcbiAgICAgIG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA6IHRoaXMubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcFxuICAgICAgICA/IHRoaXMubm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBub3RpZmljYXRpb25PcmlnaW46XG4gICAgICAgIE5vdGlmaWNhdGlvbk9yaWdpbltcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk9yaWdpbiA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uT3JpZ2luID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm5vdGlmaWNhdGlvbk9yaWdpblxuICAgICAgICBdLFxuICAgICAgb3JpZ2luTmFtZTogdGhpcy5vcmlnaW5OYW1lLFxuICAgICAgb3JpZ2luTGFuZ3VhZ2U6IHRoaXMub3JpZ2luTGFuZ3VhZ2UsXG4gICAgICBub3RpZmljYXRpb25UeXBlOlxuICAgICAgICBOb3RpZmljYXRpb25UeXBlW1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uVHlwZSA9PT0gbnVsbCB8fCB0aGlzLm5vdGlmaWNhdGlvblR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubm90aWZpY2F0aW9uVHlwZVxuICAgICAgICBdLFxuICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eTpcbiAgICAgICAgTm90aWZpY2F0aW9uVmlzaWJpbGl0eVtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdHkgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdHkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubm90aWZpY2F0aW9uVmlzaWJpbGl0eVxuICAgICAgICBdLFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdFxuICAgICAgICA/IHRoaXMubW9kaWZpZWRBdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjcmVhdGVkQnk6IHRoaXMuY3JlYXRlZEJ5LFxuICAgICAgbW9kaWZpZWRCeTogdGhpcy5tb2RpZmllZEJ5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE5vdGlmaWNhdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvblNob3J0OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb25Mb25nOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogTm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cztcbiAgICBub3RpZmljYXRpb25GbGFnZ2VkVGltZXN0YW1wPzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXM7XG4gICAgbm90aWZpY2F0aW9uUmVhZFRpbWVzdGFtcD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBub3RpZmljYXRpb25PcmlnaW46IE5vdGlmaWNhdGlvbk9yaWdpbjtcbiAgICBvcmlnaW5OYW1lOiBzdHJpbmc7XG4gICAgb3JpZ2luTGFuZ3VhZ2U6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlO1xuICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdHk6IE5vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gICAgY3JlYXRlZEF0PzogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIG1vZGlmaWVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE5vdGlmaWNhdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvblNob3J0OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb25Mb25nOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRUaW1lc3RhbXA6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvblJlYWRUaW1lc3RhbXA6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbm90aWZpY2F0aW9uT3JpZ2luOiBzdHJpbmc7XG4gICAgb3JpZ2luTmFtZTogc3RyaW5nO1xuICAgIG9yaWdpbkxhbmd1YWdlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uVHlwZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdHk6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbW9kaWZpZWRBdDogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBtb2RpZmllZEJ5OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGROb3RpZmljYXRpb25zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGROb3RpZmljYXRpb25zUmVxdWVzdCgpO1xuICAgIEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBOb3RpZmljYXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbiA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb24gfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb24ubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uIGFzIGFueSxcbiAgICAgICAgTm90aWZpY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbj86IE5vdGlmaWNhdGlvbltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkTm90aWZpY2F0aW9uc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubm90aWZpY2F0aW9uID0gKF92YWx1ZS5ub3RpZmljYXRpb24gfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IE5vdGlmaWNhdGlvbihtKVxuICAgICk7XG4gICAgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBub3RpZmljYXRpb24oKTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb247XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbih2YWx1ZTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGROb3RpZmljYXRpb25zUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbjogKHRoaXMubm90aWZpY2F0aW9uIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWRkTm90aWZpY2F0aW9uc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb246ICh0aGlzLm5vdGlmaWNhdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkTm90aWZpY2F0aW9uc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFkZE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb24uQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGROb3RpZmljYXRpb25zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGROb3RpZmljYXRpb25zUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb24gPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb24ubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uIGFzIGFueSxcbiAgICAgICAgTm90aWZpY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbj86IE5vdGlmaWNhdGlvbltdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSAoX3ZhbHVlLm5vdGlmaWNhdGlvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgTm90aWZpY2F0aW9uKG0pXG4gICAgKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBub3RpZmljYXRpb24oKTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb247XG4gIH1cbiAgc2V0IG5vdGlmaWNhdGlvbih2YWx1ZTogTm90aWZpY2F0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGROb3RpZmljYXRpb25zUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uOiAodGhpcy5ub3RpZmljYXRpb24gfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGROb3RpZmljYXRpb25zUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb246ICh0aGlzLm5vdGlmaWNhdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkTm90aWZpY2F0aW9uc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGROb3RpZmljYXRpb25zUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIG5vdGlmaWNhdGlvbj86IE5vdGlmaWNhdGlvbi5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFkZE5vdGlmaWNhdGlvbnNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lk5vdGlmaWNhdGlvbkZpbHRlclxuICovXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRmlsdGVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5Ob3RpZmljYXRpb25GaWx0ZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb25GaWx0ZXIoKTtcbiAgICBOb3RpZmljYXRpb25GaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBOb3RpZmljYXRpb25GaWx0ZXIpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW5zID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMgfHwgW107XG4gICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyA9XG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID1cbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgfHwgW107XG4gICAgX2luc3RhbmNlLmVhcmxpZXN0ID0gX2luc3RhbmNlLmVhcmxpZXN0IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubGF0ZXN0ID0gX2luc3RhbmNlLmxhdGVzdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnVzZXJOYW1lcyA9IF9pbnN0YW5jZS51c2VyTmFtZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm9yaWdpbk5hbWVzID0gX2luc3RhbmNlLm9yaWdpbk5hbWVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTm90aWZpY2F0aW9uRmlsdGVyLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW5zID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25PcmlnaW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRFbnVtKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRFbnVtKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIChfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRFbnVtKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5lYXJsaWVzdCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVhcmxpZXN0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubGF0ZXN0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UubGF0ZXN0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAoX2luc3RhbmNlLnVzZXJOYW1lcyA9IF9pbnN0YW5jZS51c2VyTmFtZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAoX2luc3RhbmNlLm9yaWdpbk5hbWVzID0gX2luc3RhbmNlLm9yaWdpbk5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTm90aWZpY2F0aW9uRmlsdGVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTm90aWZpY2F0aW9uRmlsdGVyLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgJiYgX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMgJiYgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk9yaWdpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkRW51bSgyLCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uT3JpZ2lucyk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgJiZcbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkRW51bSgzLCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgJiZcbiAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzLmxlbmd0aFxuICAgICkge1xuICAgICAgX3dyaXRlci53cml0ZVBhY2tlZEVudW0oNCwgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyAmJlxuICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkRW51bSg1LCBfaW5zdGFuY2Uubm90aWZpY2F0aW9uUmVhZFN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZWFybGllc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuZWFybGllc3QgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGF0ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLmxhdGVzdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VyTmFtZXMgJiYgX2luc3RhbmNlLnVzZXJOYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg4LCBfaW5zdGFuY2UudXNlck5hbWVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vcmlnaW5OYW1lcyAmJiBfaW5zdGFuY2Uub3JpZ2luTmFtZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoOSwgX2luc3RhbmNlLm9yaWdpbk5hbWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZUNvZGVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uT3JpZ2luczogTm90aWZpY2F0aW9uT3JpZ2luW107XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblZpc2liaWxpdGllczogTm90aWZpY2F0aW9uVmlzaWJpbGl0eVtdO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzW107XG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblJlYWRTdGF0dXM6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXNbXTtcbiAgcHJpdmF0ZSBfZWFybGllc3Q/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2xhdGVzdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfdXNlck5hbWVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfb3JpZ2luTmFtZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTm90aWZpY2F0aW9uRmlsdGVyIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE5vdGlmaWNhdGlvbkZpbHRlci5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZUNvZGVzID0gKF92YWx1ZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9uT3JpZ2lucyA9IChfdmFsdWUubm90aWZpY2F0aW9uT3JpZ2lucyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblZpc2liaWxpdGllcyA9IChcbiAgICAgIF92YWx1ZS5ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgfHwgW11cbiAgICApLnNsaWNlKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID0gKFxuICAgICAgX3ZhbHVlLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgfHwgW11cbiAgICApLnNsaWNlKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25SZWFkU3RhdHVzID0gKF92YWx1ZS5ub3RpZmljYXRpb25SZWFkU3RhdHVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZWFybGllc3QgPSBfdmFsdWUuZWFybGllc3RcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcChfdmFsdWUuZWFybGllc3QpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhdGVzdCA9IF92YWx1ZS5sYXRlc3RcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcChfdmFsdWUubGF0ZXN0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VyTmFtZXMgPSAoX3ZhbHVlLnVzZXJOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm9yaWdpbk5hbWVzID0gKF92YWx1ZS5vcmlnaW5OYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBOb3RpZmljYXRpb25GaWx0ZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2Rlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbk9yaWdpbnMoKTogTm90aWZpY2F0aW9uT3JpZ2luW10ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25PcmlnaW5zO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25PcmlnaW5zKHZhbHVlOiBOb3RpZmljYXRpb25PcmlnaW5bXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbk9yaWdpbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzKCk6IE5vdGlmaWNhdGlvblZpc2liaWxpdHlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblZpc2liaWxpdGllcztcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzKHZhbHVlOiBOb3RpZmljYXRpb25WaXNpYmlsaXR5W10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25WaXNpYmlsaXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cygpOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzW10ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzKHZhbHVlOiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvblJlYWRTdGF0dXMoKTogTm90aWZpY2F0aW9uUmVhZFN0YXR1c1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uUmVhZFN0YXR1cztcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uUmVhZFN0YXR1cyh2YWx1ZTogTm90aWZpY2F0aW9uUmVhZFN0YXR1c1tdKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uUmVhZFN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBlYXJsaWVzdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lYXJsaWVzdDtcbiAgfVxuICBzZXQgZWFybGllc3QodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VhcmxpZXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhdGVzdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYXRlc3Q7XG4gIH1cbiAgc2V0IGxhdGVzdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGF0ZXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJOYW1lcztcbiAgfVxuICBzZXQgdXNlck5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3VzZXJOYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBvcmlnaW5OYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWdpbk5hbWVzO1xuICB9XG4gIHNldCBvcmlnaW5OYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9vcmlnaW5OYW1lcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE5vdGlmaWNhdGlvbkZpbHRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBOb3RpZmljYXRpb25GaWx0ZXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGVzOiAodGhpcy5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbm90aWZpY2F0aW9uT3JpZ2luczogKHRoaXMubm90aWZpY2F0aW9uT3JpZ2lucyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdGllczogKHRoaXMubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogKHRoaXMubm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6ICh0aGlzLm5vdGlmaWNhdGlvblJlYWRTdGF0dXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBlYXJsaWVzdDogdGhpcy5lYXJsaWVzdCA/IHRoaXMuZWFybGllc3QudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxhdGVzdDogdGhpcy5sYXRlc3QgPyB0aGlzLmxhdGVzdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdXNlck5hbWVzOiAodGhpcy51c2VyTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBvcmlnaW5OYW1lczogKHRoaXMub3JpZ2luTmFtZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBOb3RpZmljYXRpb25GaWx0ZXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGVzOiAodGhpcy5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbm90aWZpY2F0aW9uT3JpZ2luczogKHRoaXMubm90aWZpY2F0aW9uT3JpZ2lucyB8fCBbXSkubWFwKFxuICAgICAgICB2ID0+IE5vdGlmaWNhdGlvbk9yaWdpblt2XVxuICAgICAgKSxcbiAgICAgIG5vdGlmaWNhdGlvblZpc2liaWxpdGllczogKHRoaXMubm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzIHx8IFtdKS5tYXAoXG4gICAgICAgIHYgPT4gTm90aWZpY2F0aW9uVmlzaWJpbGl0eVt2XVxuICAgICAgKSxcbiAgICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6ICh0aGlzLm5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXMgfHwgW10pLm1hcChcbiAgICAgICAgdiA9PiBOb3RpZmljYXRpb25GbGFnZ2VkU3RhdHVzW3ZdXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uUmVhZFN0YXR1czogKHRoaXMubm90aWZpY2F0aW9uUmVhZFN0YXR1cyB8fCBbXSkubWFwKFxuICAgICAgICB2ID0+IE5vdGlmaWNhdGlvblJlYWRTdGF0dXNbdl1cbiAgICAgICksXG4gICAgICBlYXJsaWVzdDogdGhpcy5lYXJsaWVzdCA/IHRoaXMuZWFybGllc3QudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdCA/IHRoaXMubGF0ZXN0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHVzZXJOYW1lczogKHRoaXMudXNlck5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgb3JpZ2luTmFtZXM6ICh0aGlzLm9yaWdpbk5hbWVzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBOb3RpZmljYXRpb25GaWx0ZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE5vdGlmaWNhdGlvbkZpbHRlclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VDb2Rlczogc3RyaW5nW107XG4gICAgbm90aWZpY2F0aW9uT3JpZ2luczogTm90aWZpY2F0aW9uT3JpZ2luW107XG4gICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0aWVzOiBOb3RpZmljYXRpb25WaXNpYmlsaXR5W107XG4gICAgbm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1czogTm90aWZpY2F0aW9uRmxhZ2dlZFN0YXR1c1tdO1xuICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6IE5vdGlmaWNhdGlvblJlYWRTdGF0dXNbXTtcbiAgICBlYXJsaWVzdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBsYXRlc3Q/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgdXNlck5hbWVzOiBzdHJpbmdbXTtcbiAgICBvcmlnaW5OYW1lczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTm90aWZpY2F0aW9uRmlsdGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZUNvZGVzOiBzdHJpbmdbXTtcbiAgICBub3RpZmljYXRpb25PcmlnaW5zOiBzdHJpbmdbXTtcbiAgICBub3RpZmljYXRpb25WaXNpYmlsaXRpZXM6IHN0cmluZ1tdO1xuICAgIG5vdGlmaWNhdGlvbkZsYWdnZWRTdGF0dXM6IHN0cmluZ1tdO1xuICAgIG5vdGlmaWNhdGlvblJlYWRTdGF0dXM6IHN0cmluZ1tdO1xuICAgIGVhcmxpZXN0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhdGVzdDogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB1c2VyTmFtZXM6IHN0cmluZ1tdO1xuICAgIG9yaWdpbk5hbWVzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkxpc3ROb3RpZmljYXRpb25zUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3ROb3RpZmljYXRpb25zUmVxdWVzdCgpO1xuICAgIExpc3ROb3RpZmljYXRpb25zUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3ROb3RpZmljYXRpb25zUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GaWx0ZXIgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uRmlsdGVyIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucGFnZVRva2VuID0gX2luc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuZmllbGRNYXNrID0gX2luc3RhbmNlLmZpZWxkTWFzayB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZpbHRlciA9IG5ldyBOb3RpZmljYXRpb25GaWx0ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZpbHRlcixcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkZpbHRlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBhZ2VUb2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmZpZWxkTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2soKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmZpZWxkTWFzayxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzay5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbkZpbHRlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25GaWx0ZXIgYXMgYW55LFxuICAgICAgICBOb3RpZmljYXRpb25GaWx0ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFnZVRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZpZWxkTWFzaykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5maWVsZE1hc2sgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2suc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uRmlsdGVyPzogTm90aWZpY2F0aW9uRmlsdGVyO1xuICBwcml2YXRlIF9wYWdlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBfZmllbGRNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3ROb3RpZmljYXRpb25zUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ub3RpZmljYXRpb25GaWx0ZXIgPSBfdmFsdWUubm90aWZpY2F0aW9uRmlsdGVyXG4gICAgICA/IG5ldyBOb3RpZmljYXRpb25GaWx0ZXIoX3ZhbHVlLm5vdGlmaWNhdGlvbkZpbHRlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVRva2VuID0gX3ZhbHVlLnBhZ2VUb2tlbjtcbiAgICB0aGlzLmZpZWxkTWFzayA9IF92YWx1ZS5maWVsZE1hc2tcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzayhfdmFsdWUuZmllbGRNYXNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbm90aWZpY2F0aW9uRmlsdGVyKCk6IE5vdGlmaWNhdGlvbkZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkZpbHRlcjtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uRmlsdGVyKHZhbHVlOiBOb3RpZmljYXRpb25GaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25GaWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFnZVRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VUb2tlbjtcbiAgfVxuICBzZXQgcGFnZVRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmllbGRNYXNrKCk6IGdvb2dsZVByb3RvYnVmMDAwLkZpZWxkTWFzayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTWFzaztcbiAgfVxuICBzZXQgZmllbGRNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMC5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9maWVsZE1hc2sgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uRmlsdGVyOiB0aGlzLm5vdGlmaWNhdGlvbkZpbHRlclxuICAgICAgICA/IHRoaXMubm90aWZpY2F0aW9uRmlsdGVyLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuLFxuICAgICAgZmllbGRNYXNrOiB0aGlzLmZpZWxkTWFzayA/IHRoaXMuZmllbGRNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0Tm90aWZpY2F0aW9uc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25GaWx0ZXI6IHRoaXMubm90aWZpY2F0aW9uRmlsdGVyXG4gICAgICAgID8gdGhpcy5ub3RpZmljYXRpb25GaWx0ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlbixcbiAgICAgIGZpZWxkTWFzazogdGhpcy5maWVsZE1hc2sgPyB0aGlzLmZpZWxkTWFzay50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3ROb3RpZmljYXRpb25zUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdE5vdGlmaWNhdGlvbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBub3RpZmljYXRpb25GaWx0ZXI/OiBOb3RpZmljYXRpb25GaWx0ZXIuQXNPYmplY3Q7XG4gICAgcGFnZVRva2VuOiBzdHJpbmc7XG4gICAgZmllbGRNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3ROb3RpZmljYXRpb25zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbm90aWZpY2F0aW9uRmlsdGVyOiBOb3RpZmljYXRpb25GaWx0ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBhZ2VUb2tlbjogc3RyaW5nO1xuICAgIGZpZWxkTWFzazogZ29vZ2xlUHJvdG9idWYwMDAuRmllbGRNYXNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2UoKTtcbiAgICBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb24gPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb24gPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb24gJiYgX2luc3RhbmNlLm5vdGlmaWNhdGlvbi5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb24gYXMgYW55LFxuICAgICAgICBOb3RpZmljYXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uPzogTm90aWZpY2F0aW9uW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubm90aWZpY2F0aW9uID0gKF92YWx1ZS5ub3RpZmljYXRpb24gfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IE5vdGlmaWNhdGlvbihtKVxuICAgICk7XG4gICAgTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbigpOiBOb3RpZmljYXRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbjtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uKHZhbHVlOiBOb3RpZmljYXRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3ROb3RpZmljYXRpb25zUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbjogKHRoaXMubm90aWZpY2F0aW9uIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdE5vdGlmaWNhdGlvbnNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbjogKHRoaXMubm90aWZpY2F0aW9uIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBub3RpZmljYXRpb24/OiBOb3RpZmljYXRpb24uQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0Tm90aWZpY2F0aW9uc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbi5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCgpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUgfHwgW107XG4gICAgX2luc3RhbmNlLmZsYWdnZWQgPSBfaW5zdGFuY2UuZmxhZ2dlZCB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUgPSBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UuZmxhZ2dlZCA9IF9pbnN0YW5jZS5mbGFnZ2VkIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEJvb2woKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUgJiYgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZsYWdnZWQgJiYgX2luc3RhbmNlLmZsYWdnZWQubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUGFja2VkQm9vbCgyLCBfaW5zdGFuY2UuZmxhZ2dlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uTmFtZTogc3RyaW5nW107XG4gIHByaXZhdGUgX2ZsYWdnZWQ6IGJvb2xlYW5bXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXROb3RpZmljYXRpb25zRmxhZ2dlZFN0YXR1c1JlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk5hbWUgPSAoX3ZhbHVlLm5vdGlmaWNhdGlvbk5hbWUgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5mbGFnZ2VkID0gKF92YWx1ZS5mbGFnZ2VkIHx8IFtdKS5zbGljZSgpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5vdGlmaWNhdGlvbk5hbWUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25OYW1lO1xuICB9XG4gIHNldCBub3RpZmljYXRpb25OYW1lKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmxhZ2dlZCgpOiBib29sZWFuW10ge1xuICAgIHJldHVybiB0aGlzLl9mbGFnZ2VkO1xuICB9XG4gIHNldCBmbGFnZ2VkKHZhbHVlOiBib29sZWFuW10pIHtcbiAgICB0aGlzLl9mbGFnZ2VkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbk5hbWU6ICh0aGlzLm5vdGlmaWNhdGlvbk5hbWUgfHwgW10pLnNsaWNlKCksXG4gICAgICBmbGFnZ2VkOiAodGhpcy5mbGFnZ2VkIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uTmFtZTogKHRoaXMubm90aWZpY2F0aW9uTmFtZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGZsYWdnZWQ6ICh0aGlzLmZsYWdnZWQgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNldE5vdGlmaWNhdGlvbnNGbGFnZ2VkU3RhdHVzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBub3RpZmljYXRpb25OYW1lOiBzdHJpbmdbXTtcbiAgICBmbGFnZ2VkOiBib29sZWFuW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2V0Tm90aWZpY2F0aW9uc0ZsYWdnZWRTdGF0dXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBub3RpZmljYXRpb25OYW1lOiBzdHJpbmdbXTtcbiAgICBmbGFnZ2VkOiBib29sZWFuW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgU2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QoKTtcbiAgICBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uubm90aWZpY2F0aW9uTmFtZSA9IF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5mbGFnZ2VkID0gX2luc3RhbmNlLmZsYWdnZWQgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lID0gX2luc3RhbmNlLm5vdGlmaWNhdGlvbk5hbWUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLmZsYWdnZWQgPSBfaW5zdGFuY2UuZmxhZ2dlZCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIC4uLihfcmVhZGVyLnJlYWRQYWNrZWRCb29sKCkgfHwgW10pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lICYmIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5ub3RpZmljYXRpb25OYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mbGFnZ2VkICYmIF9pbnN0YW5jZS5mbGFnZ2VkLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVBhY2tlZEJvb2woMiwgX2luc3RhbmNlLmZsYWdnZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbk5hbWU6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9mbGFnZ2VkOiBib29sZWFuW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2V0Tm90aWZpY2F0aW9uc1JlYWRTdGF0dXNSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5ub3RpZmljYXRpb25OYW1lID0gKF92YWx1ZS5ub3RpZmljYXRpb25OYW1lIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZmxhZ2dlZCA9IChfdmFsdWUuZmxhZ2dlZCB8fCBbXSkuc2xpY2UoKTtcbiAgICBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBub3RpZmljYXRpb25OYW1lKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uTmFtZTtcbiAgfVxuICBzZXQgbm90aWZpY2F0aW9uTmFtZSh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZsYWdnZWQoKTogYm9vbGVhbltdIHtcbiAgICByZXR1cm4gdGhpcy5fZmxhZ2dlZDtcbiAgfVxuICBzZXQgZmxhZ2dlZCh2YWx1ZTogYm9vbGVhbltdKSB7XG4gICAgdGhpcy5fZmxhZ2dlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub3RpZmljYXRpb25OYW1lOiAodGhpcy5ub3RpZmljYXRpb25OYW1lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZmxhZ2dlZDogKHRoaXMuZmxhZ2dlZCB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGlmaWNhdGlvbk5hbWU6ICh0aGlzLm5vdGlmaWNhdGlvbk5hbWUgfHwgW10pLnNsaWNlKCksXG4gICAgICBmbGFnZ2VkOiAodGhpcy5mbGFnZ2VkIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXROb3RpZmljYXRpb25zUmVhZFN0YXR1c1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbm90aWZpY2F0aW9uTmFtZTogc3RyaW5nW107XG4gICAgZmxhZ2dlZDogYm9vbGVhbltdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNldE5vdGlmaWNhdGlvbnNSZWFkU3RhdHVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbm90aWZpY2F0aW9uTmFtZTogc3RyaW5nW107XG4gICAgZmxhZ2dlZDogYm9vbGVhbltdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5LZXlWYWx1ZVBhaXJcbiAqL1xuZXhwb3J0IGNsYXNzIEtleVZhbHVlUGFpciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuS2V5VmFsdWVQYWlyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgS2V5VmFsdWVQYWlyKCk7XG4gICAgS2V5VmFsdWVQYWlyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogS2V5VmFsdWVQYWlyKSB7XG4gICAgX2luc3RhbmNlLmtleSA9IF9pbnN0YW5jZS5rZXkgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBLZXlWYWx1ZVBhaXIsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmtleSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludFZhbHVlID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5mbG9hdFZhbHVlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5kb3VibGVWYWx1ZSA9IF9yZWFkZXIucmVhZERvdWJsZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnN0cmluZ1ZhbHVlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBLZXlWYWx1ZVBhaXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBLZXlWYWx1ZVBhaXIsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uua2V5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5rZXkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludFZhbHVlIHx8IF9pbnN0YW5jZS5pbnRWYWx1ZSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIsIF9pbnN0YW5jZS5pbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmxvYXRWYWx1ZSB8fCBfaW5zdGFuY2UuZmxvYXRWYWx1ZSA9PT0gMCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDMsIF9pbnN0YW5jZS5mbG9hdFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kb3VibGVWYWx1ZSB8fCBfaW5zdGFuY2UuZG91YmxlVmFsdWUgPT09IDApIHtcbiAgICAgIF93cml0ZXIud3JpdGVEb3VibGUoNCwgX2luc3RhbmNlLmRvdWJsZVZhbHVlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdHJpbmdWYWx1ZSB8fCBfaW5zdGFuY2Uuc3RyaW5nVmFsdWUgPT09ICcnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zdHJpbmdWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50VmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZmxvYXRWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9kb3VibGVWYWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9zdHJpbmdWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIF9jcmVhdGVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXA7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UgPSBLZXlWYWx1ZVBhaXIuVmFsdWVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBLZXlWYWx1ZVBhaXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8S2V5VmFsdWVQYWlyLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmtleSA9IF92YWx1ZS5rZXk7XG4gICAgdGhpcy5pbnRWYWx1ZSA9IF92YWx1ZS5pbnRWYWx1ZTtcbiAgICB0aGlzLmZsb2F0VmFsdWUgPSBfdmFsdWUuZmxvYXRWYWx1ZTtcbiAgICB0aGlzLmRvdWJsZVZhbHVlID0gX3ZhbHVlLmRvdWJsZVZhbHVlO1xuICAgIHRoaXMuc3RyaW5nVmFsdWUgPSBfdmFsdWUuc3RyaW5nVmFsdWU7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIEtleVZhbHVlUGFpci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cbiAgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ludFZhbHVlO1xuICB9XG4gIHNldCBpbnRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Zsb2F0VmFsdWUgPSB0aGlzLl9kb3VibGVWYWx1ZSA9IHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5fY3JlYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSBLZXlWYWx1ZVBhaXIuVmFsdWVDYXNlLmludFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9pbnRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmbG9hdFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0VmFsdWU7XG4gIH1cbiAgc2V0IGZsb2F0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRWYWx1ZSA9IHRoaXMuX2RvdWJsZVZhbHVlID0gdGhpcy5fc3RyaW5nVmFsdWUgPSB0aGlzLl9jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UuZmxvYXRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fZmxvYXRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkb3VibGVWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kb3VibGVWYWx1ZTtcbiAgfVxuICBzZXQgZG91YmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRWYWx1ZSA9IHRoaXMuX2Zsb2F0VmFsdWUgPSB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuX2NyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gS2V5VmFsdWVQYWlyLlZhbHVlQ2FzZS5kb3VibGVWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fZG91YmxlVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RyaW5nVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWU7XG4gIH1cbiAgc2V0IHN0cmluZ1ZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5faW50VmFsdWUgPSB0aGlzLl9mbG9hdFZhbHVlID0gdGhpcy5fZG91YmxlVmFsdWUgPSB0aGlzLl9jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2Uuc3RyaW5nVmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ludFZhbHVlID0gdGhpcy5fZmxvYXRWYWx1ZSA9IHRoaXMuX2RvdWJsZVZhbHVlID0gdGhpcy5fc3RyaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IEtleVZhbHVlUGFpci5WYWx1ZUNhc2UuY3JlYXRlZEF0O1xuICAgIH1cbiAgICB0aGlzLl9jcmVhdGVkQXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEtleVZhbHVlUGFpci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBLZXlWYWx1ZVBhaXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgaW50VmFsdWU6IHRoaXMuaW50VmFsdWUsXG4gICAgICBmbG9hdFZhbHVlOiB0aGlzLmZsb2F0VmFsdWUsXG4gICAgICBkb3VibGVWYWx1ZTogdGhpcy5kb3VibGVWYWx1ZSxcbiAgICAgIHN0cmluZ1ZhbHVlOiB0aGlzLnN0cmluZ1ZhbHVlLFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBLZXlWYWx1ZVBhaXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgaW50VmFsdWU6XG4gICAgICAgIHRoaXMuaW50VmFsdWUgPT09IG51bGwgfHwgdGhpcy5pbnRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLmludFZhbHVlLFxuICAgICAgZmxvYXRWYWx1ZTpcbiAgICAgICAgdGhpcy5mbG9hdFZhbHVlID09PSBudWxsIHx8IHRoaXMuZmxvYXRWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLmZsb2F0VmFsdWUsXG4gICAgICBkb3VibGVWYWx1ZTpcbiAgICAgICAgdGhpcy5kb3VibGVWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLmRvdWJsZVZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMuZG91YmxlVmFsdWUsXG4gICAgICBzdHJpbmdWYWx1ZTpcbiAgICAgICAgdGhpcy5zdHJpbmdWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLnN0cmluZ1ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHRoaXMuc3RyaW5nVmFsdWUsXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0ID8gdGhpcy5jcmVhdGVkQXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBLZXlWYWx1ZVBhaXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEtleVZhbHVlUGFpclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgaW50VmFsdWU6IG51bWJlcjtcbiAgICBmbG9hdFZhbHVlOiBudW1iZXI7XG4gICAgZG91YmxlVmFsdWU6IG51bWJlcjtcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdD86IGdvb2dsZVByb3RvYnVmMDAxLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBLZXlWYWx1ZVBhaXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGludFZhbHVlOiBudW1iZXIgfCBudWxsO1xuICAgIGZsb2F0VmFsdWU6IG51bWJlciB8IG51bGw7XG4gICAgZG91YmxlVmFsdWU6IG51bWJlciB8IG51bGw7XG4gICAgc3RyaW5nVmFsdWU6IHN0cmluZyB8IG51bGw7XG4gICAgY3JlYXRlZEF0OiBnb29nbGVQcm90b2J1ZjAwMS5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFZhbHVlQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgaW50VmFsdWUgPSAxLFxuICAgIGZsb2F0VmFsdWUgPSAyLFxuICAgIGRvdWJsZVZhbHVlID0gMyxcbiAgICBzdHJpbmdWYWx1ZSA9IDQsXG4gICAgY3JlYXRlZEF0ID0gNVxuICB9XG59XG4iXX0=
