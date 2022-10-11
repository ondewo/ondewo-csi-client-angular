/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/entity-type.pb';
export var ReannotateEntitiesOptions;
(function (ReannotateEntitiesOptions) {
	ReannotateEntitiesOptions[(ReannotateEntitiesOptions['REANNOTATE_NEVER'] = 0)] = 'REANNOTATE_NEVER';
	ReannotateEntitiesOptions[(ReannotateEntitiesOptions['REANNOTATE_ALWAYS'] = 1)] = 'REANNOTATE_ALWAYS';
	ReannotateEntitiesOptions[(ReannotateEntitiesOptions['REANNOTATE_IF_EMPTY'] = 2)] = 'REANNOTATE_IF_EMPTY';
	ReannotateEntitiesOptions[(ReannotateEntitiesOptions['REANNOTATE_AFTER_DELETION'] = 3)] = 'REANNOTATE_AFTER_DELETION';
	ReannotateEntitiesOptions[(ReannotateEntitiesOptions['REANNOTATE_IF_EMPTY_OR_AFTER_DELETION'] = 4)] =
		'REANNOTATE_IF_EMPTY_OR_AFTER_DELETION';
})(ReannotateEntitiesOptions || (ReannotateEntitiesOptions = {}));
/**
 * Message implementation for ondewo.nlu.ValidateRegexRequest
 */
export class ValidateRegexRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ValidateRegexRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.regex = _value.regex;
		ValidateRegexRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ValidateRegexRequest();
		ValidateRegexRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.regex = _instance.regex || '';
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
					_instance.regex = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		ValidateRegexRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.regex) {
			_writer.writeString(1, _instance.regex);
		}
	}
	get regex() {
		return this._regex;
	}
	set regex(value) {
		this._regex = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ValidateRegexRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			regex: this.regex
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
			regex: this.regex
		};
	}
}
ValidateRegexRequest.id = 'ondewo.nlu.ValidateRegexRequest';
/**
 * Message implementation for ondewo.nlu.ValidateRegexResponse
 */
export class ValidateRegexResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ValidateRegexResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.errorMessages = (_value.errorMessages || []).slice();
		ValidateRegexResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ValidateRegexResponse();
		ValidateRegexResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.errorMessages = _instance.errorMessages || [];
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
					(_instance.errorMessages = _instance.errorMessages || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ValidateRegexResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.errorMessages && _instance.errorMessages.length) {
			_writer.writeRepeatedString(1, _instance.errorMessages);
		}
	}
	get errorMessages() {
		return this._errorMessages;
	}
	set errorMessages(value) {
		this._errorMessages = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ValidateRegexResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			errorMessages: (this.errorMessages || []).slice()
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
			errorMessages: (this.errorMessages || []).slice()
		};
	}
}
ValidateRegexResponse.id = 'ondewo.nlu.ValidateRegexResponse';
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export class ValidateEmbeddedRegexRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ValidateEmbeddedRegexRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.entityType = _value.entityType ? new ondewoNlu009.EntityType.Entity(_value.entityType) : undefined;
		ValidateEmbeddedRegexRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ValidateEmbeddedRegexRequest();
		ValidateEmbeddedRegexRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.entityType = _instance.entityType || undefined;
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
					_instance.entityType = new ondewoNlu009.EntityType.Entity();
					_reader.readMessage(_instance.entityType, ondewoNlu009.EntityType.Entity.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		ValidateEmbeddedRegexRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.entityType) {
			_writer.writeMessage(1, _instance.entityType, ondewoNlu009.EntityType.Entity.serializeBinaryToWriter);
		}
	}
	get entityType() {
		return this._entityType;
	}
	set entityType(value) {
		this._entityType = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ValidateEmbeddedRegexRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			entityType: this.entityType ? this.entityType.toObject() : undefined
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
			entityType: this.entityType ? this.entityType.toProtobufJSON(options) : null
		};
	}
}
ValidateEmbeddedRegexRequest.id = 'ondewo.nlu.ValidateEmbeddedRegexRequest';
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export class ValidateEmbeddedRegexResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ValidateEmbeddedRegexResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.errorMessages = (_value.errorMessages || []).slice();
		ValidateEmbeddedRegexResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ValidateEmbeddedRegexResponse();
		ValidateEmbeddedRegexResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.errorMessages = _instance.errorMessages || [];
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
					(_instance.errorMessages = _instance.errorMessages || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ValidateEmbeddedRegexResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.errorMessages && _instance.errorMessages.length) {
			_writer.writeRepeatedString(1, _instance.errorMessages);
		}
	}
	get errorMessages() {
		return this._errorMessages;
	}
	set errorMessages(value) {
		this._errorMessages = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ValidateEmbeddedRegexResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			errorMessages: (this.errorMessages || []).slice()
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
			errorMessages: (this.errorMessages || []).slice()
		};
	}
}
ValidateEmbeddedRegexResponse.id = 'ondewo.nlu.ValidateEmbeddedRegexResponse';
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsRequest
 */
export class CleanAllIntentsRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanAllIntentsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.languageCode = _value.languageCode;
		this.specialCharacters = _value.specialCharacters;
		this.substringWhiteList = (_value.substringWhiteList || []).slice();
		this.dryRun = _value.dryRun;
		this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
			? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
			: undefined;
		this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
		this.numberOfWorkers = _value.numberOfWorkers;
		CleanAllIntentsRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanAllIntentsRequest();
		CleanAllIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.substringWhiteList = _instance.substringWhiteList || [];
		_instance.dryRun = _instance.dryRun || false;
		_instance.trainingPhraseCleanerOptions = _instance.trainingPhraseCleanerOptions || undefined;
		_instance.reannotateEntitiesOptions = _instance.reannotateEntitiesOptions || 0;
		_instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.languageCode = _reader.readString();
					break;
				case 3:
					_instance.specialCharacters = _reader.readString();
					break;
				case 4:
					(_instance.substringWhiteList = _instance.substringWhiteList || []).push(_reader.readString());
					break;
				case 5:
					_instance.dryRun = _reader.readBool();
					break;
				case 6:
					_instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
					_reader.readMessage(
						_instance.trainingPhraseCleanerOptions,
						TrainingPhraseCleanerOptions.deserializeBinaryFromReader
					);
					break;
				case 7:
					_instance.reannotateEntitiesOptions = _reader.readEnum();
					break;
				case 8:
					_instance.numberOfWorkers = _reader.readInt32();
					break;
				default:
					_reader.skipField();
			}
		}
		CleanAllIntentsRequest.refineValues(_instance);
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
		if (_instance.specialCharacters) {
			_writer.writeString(3, _instance.specialCharacters);
		}
		if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
			_writer.writeRepeatedString(4, _instance.substringWhiteList);
		}
		if (_instance.dryRun) {
			_writer.writeBool(5, _instance.dryRun);
		}
		if (_instance.trainingPhraseCleanerOptions) {
			_writer.writeMessage(
				6,
				_instance.trainingPhraseCleanerOptions,
				TrainingPhraseCleanerOptions.serializeBinaryToWriter
			);
		}
		if (_instance.reannotateEntitiesOptions) {
			_writer.writeEnum(7, _instance.reannotateEntitiesOptions);
		}
		if (_instance.numberOfWorkers) {
			_writer.writeInt32(8, _instance.numberOfWorkers);
		}
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
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get substringWhiteList() {
		return this._substringWhiteList;
	}
	set substringWhiteList(value) {
		this._substringWhiteList = value;
	}
	get dryRun() {
		return this._dryRun;
	}
	set dryRun(value) {
		this._dryRun = value;
	}
	get trainingPhraseCleanerOptions() {
		return this._trainingPhraseCleanerOptions;
	}
	set trainingPhraseCleanerOptions(value) {
		this._trainingPhraseCleanerOptions = value;
	}
	get reannotateEntitiesOptions() {
		return this._reannotateEntitiesOptions;
	}
	set reannotateEntitiesOptions(value) {
		this._reannotateEntitiesOptions = value;
	}
	get numberOfWorkers() {
		return this._numberOfWorkers;
	}
	set numberOfWorkers(value) {
		this._numberOfWorkers = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanAllIntentsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			dryRun: this.dryRun,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toObject()
				: undefined,
			reannotateEntitiesOptions: this.reannotateEntitiesOptions,
			numberOfWorkers: this.numberOfWorkers
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
			parent: this.parent,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			dryRun: this.dryRun,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
				: null,
			reannotateEntitiesOptions:
				ReannotateEntitiesOptions[
					this.reannotateEntitiesOptions === null || this.reannotateEntitiesOptions === undefined
						? 0
						: this.reannotateEntitiesOptions
				],
			numberOfWorkers: this.numberOfWorkers
		};
	}
}
CleanAllIntentsRequest.id = 'ondewo.nlu.CleanAllIntentsRequest';
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsResponse
 */
export class CleanAllIntentsResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanAllIntentsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.cleanedIntents = (_value.cleanedIntents || []).map((m) => new ondewoNlu008.Intent(m));
		this.intentUpdateList = (_value.intentUpdateList || []).map((m) => new IntentUpdate(m));
		CleanAllIntentsResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanAllIntentsResponse();
		CleanAllIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.cleanedIntents = _instance.cleanedIntents || [];
		_instance.intentUpdateList = _instance.intentUpdateList || [];
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
					const messageInitializer1 = new ondewoNlu008.Intent();
					_reader.readMessage(messageInitializer1, ondewoNlu008.Intent.deserializeBinaryFromReader);
					(_instance.cleanedIntents = _instance.cleanedIntents || []).push(messageInitializer1);
					break;
				case 2:
					const messageInitializer2 = new IntentUpdate();
					_reader.readMessage(messageInitializer2, IntentUpdate.deserializeBinaryFromReader);
					(_instance.intentUpdateList = _instance.intentUpdateList || []).push(messageInitializer2);
					break;
				default:
					_reader.skipField();
			}
		}
		CleanAllIntentsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.cleanedIntents && _instance.cleanedIntents.length) {
			_writer.writeRepeatedMessage(1, _instance.cleanedIntents, ondewoNlu008.Intent.serializeBinaryToWriter);
		}
		if (_instance.intentUpdateList && _instance.intentUpdateList.length) {
			_writer.writeRepeatedMessage(2, _instance.intentUpdateList, IntentUpdate.serializeBinaryToWriter);
		}
	}
	get cleanedIntents() {
		return this._cleanedIntents;
	}
	set cleanedIntents(value) {
		this._cleanedIntents = value;
	}
	get intentUpdateList() {
		return this._intentUpdateList;
	}
	set intentUpdateList(value) {
		this._intentUpdateList = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanAllIntentsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			cleanedIntents: (this.cleanedIntents || []).map((m) => m.toObject()),
			intentUpdateList: (this.intentUpdateList || []).map((m) => m.toObject())
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
			cleanedIntents: (this.cleanedIntents || []).map((m) => m.toProtobufJSON(options)),
			intentUpdateList: (this.intentUpdateList || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
CleanAllIntentsResponse.id = 'ondewo.nlu.CleanAllIntentsResponse';
/**
 * Message implementation for ondewo.nlu.CleanIntentRequest
 */
export class CleanIntentRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanIntentRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.intentName = _value.intentName;
		this.languageCode = _value.languageCode;
		this.specialCharacters = _value.specialCharacters;
		this.substringWhiteList = (_value.substringWhiteList || []).slice();
		this.dryRun = _value.dryRun;
		this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
			? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
			: undefined;
		this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
		CleanIntentRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanIntentRequest();
		CleanIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.intentName = _instance.intentName || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.substringWhiteList = _instance.substringWhiteList || [];
		_instance.dryRun = _instance.dryRun || false;
		_instance.trainingPhraseCleanerOptions = _instance.trainingPhraseCleanerOptions || undefined;
		_instance.reannotateEntitiesOptions = _instance.reannotateEntitiesOptions || 0;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.intentName = _reader.readString();
					break;
				case 3:
					_instance.languageCode = _reader.readString();
					break;
				case 4:
					_instance.specialCharacters = _reader.readString();
					break;
				case 5:
					(_instance.substringWhiteList = _instance.substringWhiteList || []).push(_reader.readString());
					break;
				case 6:
					_instance.dryRun = _reader.readBool();
					break;
				case 7:
					_instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
					_reader.readMessage(
						_instance.trainingPhraseCleanerOptions,
						TrainingPhraseCleanerOptions.deserializeBinaryFromReader
					);
					break;
				case 8:
					_instance.reannotateEntitiesOptions = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		CleanIntentRequest.refineValues(_instance);
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
		if (_instance.intentName) {
			_writer.writeString(2, _instance.intentName);
		}
		if (_instance.languageCode) {
			_writer.writeString(3, _instance.languageCode);
		}
		if (_instance.specialCharacters) {
			_writer.writeString(4, _instance.specialCharacters);
		}
		if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
			_writer.writeRepeatedString(5, _instance.substringWhiteList);
		}
		if (_instance.dryRun) {
			_writer.writeBool(6, _instance.dryRun);
		}
		if (_instance.trainingPhraseCleanerOptions) {
			_writer.writeMessage(
				7,
				_instance.trainingPhraseCleanerOptions,
				TrainingPhraseCleanerOptions.serializeBinaryToWriter
			);
		}
		if (_instance.reannotateEntitiesOptions) {
			_writer.writeEnum(8, _instance.reannotateEntitiesOptions);
		}
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get intentName() {
		return this._intentName;
	}
	set intentName(value) {
		this._intentName = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get substringWhiteList() {
		return this._substringWhiteList;
	}
	set substringWhiteList(value) {
		this._substringWhiteList = value;
	}
	get dryRun() {
		return this._dryRun;
	}
	set dryRun(value) {
		this._dryRun = value;
	}
	get trainingPhraseCleanerOptions() {
		return this._trainingPhraseCleanerOptions;
	}
	set trainingPhraseCleanerOptions(value) {
		this._trainingPhraseCleanerOptions = value;
	}
	get reannotateEntitiesOptions() {
		return this._reannotateEntitiesOptions;
	}
	set reannotateEntitiesOptions(value) {
		this._reannotateEntitiesOptions = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanIntentRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			intentName: this.intentName,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			dryRun: this.dryRun,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toObject()
				: undefined,
			reannotateEntitiesOptions: this.reannotateEntitiesOptions
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
			parent: this.parent,
			intentName: this.intentName,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			dryRun: this.dryRun,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
				: null,
			reannotateEntitiesOptions:
				ReannotateEntitiesOptions[
					this.reannotateEntitiesOptions === null || this.reannotateEntitiesOptions === undefined
						? 0
						: this.reannotateEntitiesOptions
				]
		};
	}
}
CleanIntentRequest.id = 'ondewo.nlu.CleanIntentRequest';
/**
 * Message implementation for ondewo.nlu.CleanIntentResponse
 */
export class CleanIntentResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanIntentResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.cleanedIntent = _value.cleanedIntent ? new ondewoNlu008.Intent(_value.cleanedIntent) : undefined;
		this.intentUpdate = _value.intentUpdate ? new IntentUpdate(_value.intentUpdate) : undefined;
		CleanIntentResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanIntentResponse();
		CleanIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.cleanedIntent = _instance.cleanedIntent || undefined;
		_instance.intentUpdate = _instance.intentUpdate || undefined;
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
					_instance.cleanedIntent = new ondewoNlu008.Intent();
					_reader.readMessage(_instance.cleanedIntent, ondewoNlu008.Intent.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.intentUpdate = new IntentUpdate();
					_reader.readMessage(_instance.intentUpdate, IntentUpdate.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		CleanIntentResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.cleanedIntent) {
			_writer.writeMessage(1, _instance.cleanedIntent, ondewoNlu008.Intent.serializeBinaryToWriter);
		}
		if (_instance.intentUpdate) {
			_writer.writeMessage(2, _instance.intentUpdate, IntentUpdate.serializeBinaryToWriter);
		}
	}
	get cleanedIntent() {
		return this._cleanedIntent;
	}
	set cleanedIntent(value) {
		this._cleanedIntent = value;
	}
	get intentUpdate() {
		return this._intentUpdate;
	}
	set intentUpdate(value) {
		this._intentUpdate = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanIntentResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			cleanedIntent: this.cleanedIntent ? this.cleanedIntent.toObject() : undefined,
			intentUpdate: this.intentUpdate ? this.intentUpdate.toObject() : undefined
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
			cleanedIntent: this.cleanedIntent ? this.cleanedIntent.toProtobufJSON(options) : null,
			intentUpdate: this.intentUpdate ? this.intentUpdate.toProtobufJSON(options) : null
		};
	}
}
CleanIntentResponse.id = 'ondewo.nlu.CleanIntentResponse';
/**
 * Message implementation for ondewo.nlu.TrainingPhraseCleanerOptions
 */
export class TrainingPhraseCleanerOptions {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrainingPhraseCleanerOptions to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.deleteRepeatedWhitespaces = _value.deleteRepeatedWhitespaces;
		this.deleteLeadingSpecialCharacters = _value.deleteLeadingSpecialCharacters;
		this.deleteTrailingSpecialCharacters = _value.deleteTrailingSpecialCharacters;
		TrainingPhraseCleanerOptions.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TrainingPhraseCleanerOptions();
		TrainingPhraseCleanerOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.deleteRepeatedWhitespaces = _instance.deleteRepeatedWhitespaces || false;
		_instance.deleteLeadingSpecialCharacters = _instance.deleteLeadingSpecialCharacters || false;
		_instance.deleteTrailingSpecialCharacters = _instance.deleteTrailingSpecialCharacters || false;
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
					_instance.deleteRepeatedWhitespaces = _reader.readBool();
					break;
				case 2:
					_instance.deleteLeadingSpecialCharacters = _reader.readBool();
					break;
				case 3:
					_instance.deleteTrailingSpecialCharacters = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		TrainingPhraseCleanerOptions.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.deleteRepeatedWhitespaces) {
			_writer.writeBool(1, _instance.deleteRepeatedWhitespaces);
		}
		if (_instance.deleteLeadingSpecialCharacters) {
			_writer.writeBool(2, _instance.deleteLeadingSpecialCharacters);
		}
		if (_instance.deleteTrailingSpecialCharacters) {
			_writer.writeBool(3, _instance.deleteTrailingSpecialCharacters);
		}
	}
	get deleteRepeatedWhitespaces() {
		return this._deleteRepeatedWhitespaces;
	}
	set deleteRepeatedWhitespaces(value) {
		this._deleteRepeatedWhitespaces = value;
	}
	get deleteLeadingSpecialCharacters() {
		return this._deleteLeadingSpecialCharacters;
	}
	set deleteLeadingSpecialCharacters(value) {
		this._deleteLeadingSpecialCharacters = value;
	}
	get deleteTrailingSpecialCharacters() {
		return this._deleteTrailingSpecialCharacters;
	}
	set deleteTrailingSpecialCharacters(value) {
		this._deleteTrailingSpecialCharacters = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TrainingPhraseCleanerOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
			deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
			deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
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
			deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
			deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
			deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
		};
	}
}
TrainingPhraseCleanerOptions.id = 'ondewo.nlu.TrainingPhraseCleanerOptions';
/**
 * Message implementation for ondewo.nlu.StringUpdate
 */
export class StringUpdate {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StringUpdate to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.new = _value.new;
		this.old = _value.old;
		StringUpdate.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StringUpdate();
		StringUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.new = _instance.new || '';
		_instance.old = _instance.old || '';
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
					_instance.new = _reader.readString();
					break;
				case 2:
					_instance.old = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		StringUpdate.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.new) {
			_writer.writeString(1, _instance.new);
		}
		if (_instance.old) {
			_writer.writeString(2, _instance.old);
		}
	}
	get new() {
		return this._new;
	}
	set new(value) {
		this._new = value;
	}
	get old() {
		return this._old;
	}
	set old(value) {
		this._old = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StringUpdate.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			new: this.new,
			old: this.old
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
			new: this.new,
			old: this.old
		};
	}
}
StringUpdate.id = 'ondewo.nlu.StringUpdate';
/**
 * Message implementation for ondewo.nlu.IntentUpdate
 */
export class IntentUpdate {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of IntentUpdate to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.intentDisplayName = _value.intentDisplayName;
		this.trainingPhraseUpdateList = (_value.trainingPhraseUpdateList || []).map(
			(m) => new IntentUpdate.TrainingPhraseUpdate(m)
		);
		this.deletedParameters = (_value.deletedParameters || []).slice();
		IntentUpdate.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new IntentUpdate();
		IntentUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.intentDisplayName = _instance.intentDisplayName || '';
		_instance.trainingPhraseUpdateList = _instance.trainingPhraseUpdateList || [];
		_instance.deletedParameters = _instance.deletedParameters || [];
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
					_instance.intentDisplayName = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new IntentUpdate.TrainingPhraseUpdate();
					_reader.readMessage(messageInitializer2, IntentUpdate.TrainingPhraseUpdate.deserializeBinaryFromReader);
					(_instance.trainingPhraseUpdateList = _instance.trainingPhraseUpdateList || []).push(messageInitializer2);
					break;
				case 3:
					(_instance.deletedParameters = _instance.deletedParameters || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		IntentUpdate.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.intentDisplayName) {
			_writer.writeString(1, _instance.intentDisplayName);
		}
		if (_instance.trainingPhraseUpdateList && _instance.trainingPhraseUpdateList.length) {
			_writer.writeRepeatedMessage(
				2,
				_instance.trainingPhraseUpdateList,
				IntentUpdate.TrainingPhraseUpdate.serializeBinaryToWriter
			);
		}
		if (_instance.deletedParameters && _instance.deletedParameters.length) {
			_writer.writeRepeatedString(3, _instance.deletedParameters);
		}
	}
	get intentDisplayName() {
		return this._intentDisplayName;
	}
	set intentDisplayName(value) {
		this._intentDisplayName = value;
	}
	get trainingPhraseUpdateList() {
		return this._trainingPhraseUpdateList;
	}
	set trainingPhraseUpdateList(value) {
		this._trainingPhraseUpdateList = value;
	}
	get deletedParameters() {
		return this._deletedParameters;
	}
	set deletedParameters(value) {
		this._deletedParameters = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		IntentUpdate.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			intentDisplayName: this.intentDisplayName,
			trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map((m) => m.toObject()),
			deletedParameters: (this.deletedParameters || []).slice()
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
			intentDisplayName: this.intentDisplayName,
			trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map((m) => m.toProtobufJSON(options)),
			deletedParameters: (this.deletedParameters || []).slice()
		};
	}
}
IntentUpdate.id = 'ondewo.nlu.IntentUpdate';
(function (IntentUpdate) {
	/**
	 * Message implementation for ondewo.nlu.IntentUpdate.TrainingPhraseUpdate
	 */
	class TrainingPhraseUpdate {
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of TrainingPhraseUpdate to deeply clone from
		 */
		constructor(_value) {
			_value = _value || {};
			this.trainingPhraseUpdate = _value.trainingPhraseUpdate
				? new StringUpdate(_value.trainingPhraseUpdate)
				: undefined;
			this.entityUpdates = (_value.entityUpdates || []).map((m) => new StringUpdate(m));
			this.entitiesReannotated = (_value.entitiesReannotated || []).slice();
			this.containsUpdateVariable = _value.containsUpdateVariable;
			TrainingPhraseUpdate.refineValues(this);
		}
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes) {
			const instance = new TrainingPhraseUpdate();
			TrainingPhraseUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance) {
			_instance.trainingPhraseUpdate = _instance.trainingPhraseUpdate || undefined;
			_instance.entityUpdates = _instance.entityUpdates || [];
			_instance.entitiesReannotated = _instance.entitiesReannotated || [];
			_instance.containsUpdateVariable = _instance.containsUpdateVariable || false;
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
						_instance.trainingPhraseUpdate = new StringUpdate();
						_reader.readMessage(_instance.trainingPhraseUpdate, StringUpdate.deserializeBinaryFromReader);
						break;
					case 2:
						const messageInitializer2 = new StringUpdate();
						_reader.readMessage(messageInitializer2, StringUpdate.deserializeBinaryFromReader);
						(_instance.entityUpdates = _instance.entityUpdates || []).push(messageInitializer2);
						break;
					case 3:
						(_instance.entitiesReannotated = _instance.entitiesReannotated || []).push(_reader.readString());
						break;
					case 4:
						_instance.containsUpdateVariable = _reader.readBool();
						break;
					default:
						_reader.skipField();
				}
			}
			TrainingPhraseUpdate.refineValues(_instance);
		}
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.trainingPhraseUpdate) {
				_writer.writeMessage(1, _instance.trainingPhraseUpdate, StringUpdate.serializeBinaryToWriter);
			}
			if (_instance.entityUpdates && _instance.entityUpdates.length) {
				_writer.writeRepeatedMessage(2, _instance.entityUpdates, StringUpdate.serializeBinaryToWriter);
			}
			if (_instance.entitiesReannotated && _instance.entitiesReannotated.length) {
				_writer.writeRepeatedString(3, _instance.entitiesReannotated);
			}
			if (_instance.containsUpdateVariable) {
				_writer.writeBool(4, _instance.containsUpdateVariable);
			}
		}
		get trainingPhraseUpdate() {
			return this._trainingPhraseUpdate;
		}
		set trainingPhraseUpdate(value) {
			this._trainingPhraseUpdate = value;
		}
		get entityUpdates() {
			return this._entityUpdates;
		}
		set entityUpdates(value) {
			this._entityUpdates = value;
		}
		get entitiesReannotated() {
			return this._entitiesReannotated;
		}
		set entitiesReannotated(value) {
			this._entitiesReannotated = value;
		}
		get containsUpdateVariable() {
			return this._containsUpdateVariable;
		}
		set containsUpdateVariable(value) {
			this._containsUpdateVariable = value;
		}
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary() {
			const writer = new BinaryWriter();
			TrainingPhraseUpdate.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject() {
			return {
				trainingPhraseUpdate: this.trainingPhraseUpdate ? this.trainingPhraseUpdate.toObject() : undefined,
				entityUpdates: (this.entityUpdates || []).map((m) => m.toObject()),
				entitiesReannotated: (this.entitiesReannotated || []).slice(),
				containsUpdateVariable: this.containsUpdateVariable
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
				trainingPhraseUpdate: this.trainingPhraseUpdate ? this.trainingPhraseUpdate.toProtobufJSON(options) : null,
				entityUpdates: (this.entityUpdates || []).map((m) => m.toProtobufJSON(options)),
				entitiesReannotated: (this.entitiesReannotated || []).slice(),
				containsUpdateVariable: this.containsUpdateVariable
			};
		}
	}
	TrainingPhraseUpdate.id = 'ondewo.nlu.IntentUpdate.TrainingPhraseUpdate';
	IntentUpdate.TrainingPhraseUpdate = TrainingPhraseUpdate;
})(IntentUpdate || (IntentUpdate = {}));
/**
 * Message implementation for ondewo.nlu.EntityTypeUpdate
 */
export class EntityTypeUpdate {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of EntityTypeUpdate to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.entityTypeName = _value.entityTypeName;
		this.valuesUpdateList = (_value.valuesUpdateList || []).map((m) => new EntityTypeUpdate.EntityUpdate(m));
		EntityTypeUpdate.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new EntityTypeUpdate();
		EntityTypeUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.entityTypeName = _instance.entityTypeName || '';
		_instance.valuesUpdateList = _instance.valuesUpdateList || [];
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
					_instance.entityTypeName = _reader.readString();
					break;
				case 2:
					const messageInitializer2 = new EntityTypeUpdate.EntityUpdate();
					_reader.readMessage(messageInitializer2, EntityTypeUpdate.EntityUpdate.deserializeBinaryFromReader);
					(_instance.valuesUpdateList = _instance.valuesUpdateList || []).push(messageInitializer2);
					break;
				default:
					_reader.skipField();
			}
		}
		EntityTypeUpdate.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.entityTypeName) {
			_writer.writeString(1, _instance.entityTypeName);
		}
		if (_instance.valuesUpdateList && _instance.valuesUpdateList.length) {
			_writer.writeRepeatedMessage(
				2,
				_instance.valuesUpdateList,
				EntityTypeUpdate.EntityUpdate.serializeBinaryToWriter
			);
		}
	}
	get entityTypeName() {
		return this._entityTypeName;
	}
	set entityTypeName(value) {
		this._entityTypeName = value;
	}
	get valuesUpdateList() {
		return this._valuesUpdateList;
	}
	set valuesUpdateList(value) {
		this._valuesUpdateList = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		EntityTypeUpdate.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			entityTypeName: this.entityTypeName,
			valuesUpdateList: (this.valuesUpdateList || []).map((m) => m.toObject())
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
			entityTypeName: this.entityTypeName,
			valuesUpdateList: (this.valuesUpdateList || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
EntityTypeUpdate.id = 'ondewo.nlu.EntityTypeUpdate';
(function (EntityTypeUpdate) {
	/**
	 * Message implementation for ondewo.nlu.EntityTypeUpdate.EntityUpdate
	 */
	class EntityUpdate {
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of EntityUpdate to deeply clone from
		 */
		constructor(_value) {
			_value = _value || {};
			this.entityValueUpdate = _value.entityValueUpdate ? new StringUpdate(_value.entityValueUpdate) : undefined;
			this.entitySynonymUpdates = (_value.entitySynonymUpdates || []).map((m) => new StringUpdate(m));
			EntityUpdate.refineValues(this);
		}
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes) {
			const instance = new EntityUpdate();
			EntityUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance) {
			_instance.entityValueUpdate = _instance.entityValueUpdate || undefined;
			_instance.entitySynonymUpdates = _instance.entitySynonymUpdates || [];
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
						_instance.entityValueUpdate = new StringUpdate();
						_reader.readMessage(_instance.entityValueUpdate, StringUpdate.deserializeBinaryFromReader);
						break;
					case 2:
						const messageInitializer2 = new StringUpdate();
						_reader.readMessage(messageInitializer2, StringUpdate.deserializeBinaryFromReader);
						(_instance.entitySynonymUpdates = _instance.entitySynonymUpdates || []).push(messageInitializer2);
						break;
					default:
						_reader.skipField();
				}
			}
			EntityUpdate.refineValues(_instance);
		}
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.entityValueUpdate) {
				_writer.writeMessage(1, _instance.entityValueUpdate, StringUpdate.serializeBinaryToWriter);
			}
			if (_instance.entitySynonymUpdates && _instance.entitySynonymUpdates.length) {
				_writer.writeRepeatedMessage(2, _instance.entitySynonymUpdates, StringUpdate.serializeBinaryToWriter);
			}
		}
		get entityValueUpdate() {
			return this._entityValueUpdate;
		}
		set entityValueUpdate(value) {
			this._entityValueUpdate = value;
		}
		get entitySynonymUpdates() {
			return this._entitySynonymUpdates;
		}
		set entitySynonymUpdates(value) {
			this._entitySynonymUpdates = value;
		}
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary() {
			const writer = new BinaryWriter();
			EntityUpdate.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject() {
			return {
				entityValueUpdate: this.entityValueUpdate ? this.entityValueUpdate.toObject() : undefined,
				entitySynonymUpdates: (this.entitySynonymUpdates || []).map((m) => m.toObject())
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
				entityValueUpdate: this.entityValueUpdate ? this.entityValueUpdate.toProtobufJSON(options) : null,
				entitySynonymUpdates: (this.entitySynonymUpdates || []).map((m) => m.toProtobufJSON(options))
			};
		}
	}
	EntityUpdate.id = 'ondewo.nlu.EntityTypeUpdate.EntityUpdate';
	EntityTypeUpdate.EntityUpdate = EntityUpdate;
})(EntityTypeUpdate || (EntityTypeUpdate = {}));
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesRequest
 */
export class CleanAllEntityTypesRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanAllEntityTypesRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.languageCode = _value.languageCode;
		this.specialCharacters = _value.specialCharacters;
		this.substringWhiteList = (_value.substringWhiteList || []).slice();
		this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
		this.forbiddenEntityTypePatterns = (_value.forbiddenEntityTypePatterns || []).slice();
		this.dryRun = _value.dryRun;
		this.numberOfWorkers = _value.numberOfWorkers;
		CleanAllEntityTypesRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanAllEntityTypesRequest();
		CleanAllEntityTypesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.substringWhiteList = _instance.substringWhiteList || [];
		_instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
		_instance.forbiddenEntityTypePatterns = _instance.forbiddenEntityTypePatterns || [];
		_instance.dryRun = _instance.dryRun || false;
		_instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.languageCode = _reader.readString();
					break;
				case 3:
					_instance.specialCharacters = _reader.readString();
					break;
				case 4:
					(_instance.substringWhiteList = _instance.substringWhiteList || []).push(_reader.readString());
					break;
				case 5:
					_instance.maxEntityCountUpdate = _reader.readInt32();
					break;
				case 6:
					(_instance.forbiddenEntityTypePatterns = _instance.forbiddenEntityTypePatterns || []).push(
						_reader.readString()
					);
					break;
				case 7:
					_instance.dryRun = _reader.readBool();
					break;
				case 8:
					_instance.numberOfWorkers = _reader.readInt32();
					break;
				default:
					_reader.skipField();
			}
		}
		CleanAllEntityTypesRequest.refineValues(_instance);
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
		if (_instance.specialCharacters) {
			_writer.writeString(3, _instance.specialCharacters);
		}
		if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
			_writer.writeRepeatedString(4, _instance.substringWhiteList);
		}
		if (_instance.maxEntityCountUpdate) {
			_writer.writeInt32(5, _instance.maxEntityCountUpdate);
		}
		if (_instance.forbiddenEntityTypePatterns && _instance.forbiddenEntityTypePatterns.length) {
			_writer.writeRepeatedString(6, _instance.forbiddenEntityTypePatterns);
		}
		if (_instance.dryRun) {
			_writer.writeBool(7, _instance.dryRun);
		}
		if (_instance.numberOfWorkers) {
			_writer.writeInt32(8, _instance.numberOfWorkers);
		}
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
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get substringWhiteList() {
		return this._substringWhiteList;
	}
	set substringWhiteList(value) {
		this._substringWhiteList = value;
	}
	get maxEntityCountUpdate() {
		return this._maxEntityCountUpdate;
	}
	set maxEntityCountUpdate(value) {
		this._maxEntityCountUpdate = value;
	}
	get forbiddenEntityTypePatterns() {
		return this._forbiddenEntityTypePatterns;
	}
	set forbiddenEntityTypePatterns(value) {
		this._forbiddenEntityTypePatterns = value;
	}
	get dryRun() {
		return this._dryRun;
	}
	set dryRun(value) {
		this._dryRun = value;
	}
	get numberOfWorkers() {
		return this._numberOfWorkers;
	}
	set numberOfWorkers(value) {
		this._numberOfWorkers = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanAllEntityTypesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			maxEntityCountUpdate: this.maxEntityCountUpdate,
			forbiddenEntityTypePatterns: (this.forbiddenEntityTypePatterns || []).slice(),
			dryRun: this.dryRun,
			numberOfWorkers: this.numberOfWorkers
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
			parent: this.parent,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			maxEntityCountUpdate: this.maxEntityCountUpdate,
			forbiddenEntityTypePatterns: (this.forbiddenEntityTypePatterns || []).slice(),
			dryRun: this.dryRun,
			numberOfWorkers: this.numberOfWorkers
		};
	}
}
CleanAllEntityTypesRequest.id = 'ondewo.nlu.CleanAllEntityTypesRequest';
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesResponse
 */
export class CleanAllEntityTypesResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanAllEntityTypesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.cleanedEntityTypes = (_value.cleanedEntityTypes || []).map((m) => new ondewoNlu009.EntityType(m));
		this.deletedEntityTypes = (_value.deletedEntityTypes || []).map((m) => new ondewoNlu009.EntityType(m));
		this.entityTypeUpdates = (_value.entityTypeUpdates || []).map((m) => new EntityTypeUpdate(m));
		this.entityTypeDeletions = (_value.entityTypeDeletions || []).map((m) => new EntityTypeUpdate(m));
		CleanAllEntityTypesResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanAllEntityTypesResponse();
		CleanAllEntityTypesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.cleanedEntityTypes = _instance.cleanedEntityTypes || [];
		_instance.deletedEntityTypes = _instance.deletedEntityTypes || [];
		_instance.entityTypeUpdates = _instance.entityTypeUpdates || [];
		_instance.entityTypeDeletions = _instance.entityTypeDeletions || [];
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
					const messageInitializer1 = new ondewoNlu009.EntityType();
					_reader.readMessage(messageInitializer1, ondewoNlu009.EntityType.deserializeBinaryFromReader);
					(_instance.cleanedEntityTypes = _instance.cleanedEntityTypes || []).push(messageInitializer1);
					break;
				case 2:
					const messageInitializer2 = new ondewoNlu009.EntityType();
					_reader.readMessage(messageInitializer2, ondewoNlu009.EntityType.deserializeBinaryFromReader);
					(_instance.deletedEntityTypes = _instance.deletedEntityTypes || []).push(messageInitializer2);
					break;
				case 3:
					const messageInitializer3 = new EntityTypeUpdate();
					_reader.readMessage(messageInitializer3, EntityTypeUpdate.deserializeBinaryFromReader);
					(_instance.entityTypeUpdates = _instance.entityTypeUpdates || []).push(messageInitializer3);
					break;
				case 4:
					const messageInitializer4 = new EntityTypeUpdate();
					_reader.readMessage(messageInitializer4, EntityTypeUpdate.deserializeBinaryFromReader);
					(_instance.entityTypeDeletions = _instance.entityTypeDeletions || []).push(messageInitializer4);
					break;
				default:
					_reader.skipField();
			}
		}
		CleanAllEntityTypesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.cleanedEntityTypes && _instance.cleanedEntityTypes.length) {
			_writer.writeRepeatedMessage(1, _instance.cleanedEntityTypes, ondewoNlu009.EntityType.serializeBinaryToWriter);
		}
		if (_instance.deletedEntityTypes && _instance.deletedEntityTypes.length) {
			_writer.writeRepeatedMessage(2, _instance.deletedEntityTypes, ondewoNlu009.EntityType.serializeBinaryToWriter);
		}
		if (_instance.entityTypeUpdates && _instance.entityTypeUpdates.length) {
			_writer.writeRepeatedMessage(3, _instance.entityTypeUpdates, EntityTypeUpdate.serializeBinaryToWriter);
		}
		if (_instance.entityTypeDeletions && _instance.entityTypeDeletions.length) {
			_writer.writeRepeatedMessage(4, _instance.entityTypeDeletions, EntityTypeUpdate.serializeBinaryToWriter);
		}
	}
	get cleanedEntityTypes() {
		return this._cleanedEntityTypes;
	}
	set cleanedEntityTypes(value) {
		this._cleanedEntityTypes = value;
	}
	get deletedEntityTypes() {
		return this._deletedEntityTypes;
	}
	set deletedEntityTypes(value) {
		this._deletedEntityTypes = value;
	}
	get entityTypeUpdates() {
		return this._entityTypeUpdates;
	}
	set entityTypeUpdates(value) {
		this._entityTypeUpdates = value;
	}
	get entityTypeDeletions() {
		return this._entityTypeDeletions;
	}
	set entityTypeDeletions(value) {
		this._entityTypeDeletions = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanAllEntityTypesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			cleanedEntityTypes: (this.cleanedEntityTypes || []).map((m) => m.toObject()),
			deletedEntityTypes: (this.deletedEntityTypes || []).map((m) => m.toObject()),
			entityTypeUpdates: (this.entityTypeUpdates || []).map((m) => m.toObject()),
			entityTypeDeletions: (this.entityTypeDeletions || []).map((m) => m.toObject())
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
			cleanedEntityTypes: (this.cleanedEntityTypes || []).map((m) => m.toProtobufJSON(options)),
			deletedEntityTypes: (this.deletedEntityTypes || []).map((m) => m.toProtobufJSON(options)),
			entityTypeUpdates: (this.entityTypeUpdates || []).map((m) => m.toProtobufJSON(options)),
			entityTypeDeletions: (this.entityTypeDeletions || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
CleanAllEntityTypesResponse.id = 'ondewo.nlu.CleanAllEntityTypesResponse';
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeRequest
 */
export class CleanEntityTypeRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanEntityTypeRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.entityTypeName = _value.entityTypeName;
		this.languageCode = _value.languageCode;
		this.specialCharacters = _value.specialCharacters;
		this.substringWhiteList = (_value.substringWhiteList || []).slice();
		this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
		this.dryRun = _value.dryRun;
		CleanEntityTypeRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanEntityTypeRequest();
		CleanEntityTypeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.entityTypeName = _instance.entityTypeName || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.substringWhiteList = _instance.substringWhiteList || [];
		_instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
		_instance.dryRun = _instance.dryRun || false;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.entityTypeName = _reader.readString();
					break;
				case 3:
					_instance.languageCode = _reader.readString();
					break;
				case 4:
					_instance.specialCharacters = _reader.readString();
					break;
				case 5:
					(_instance.substringWhiteList = _instance.substringWhiteList || []).push(_reader.readString());
					break;
				case 6:
					_instance.maxEntityCountUpdate = _reader.readInt32();
					break;
				case 7:
					_instance.dryRun = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		CleanEntityTypeRequest.refineValues(_instance);
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
		if (_instance.entityTypeName) {
			_writer.writeString(2, _instance.entityTypeName);
		}
		if (_instance.languageCode) {
			_writer.writeString(3, _instance.languageCode);
		}
		if (_instance.specialCharacters) {
			_writer.writeString(4, _instance.specialCharacters);
		}
		if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
			_writer.writeRepeatedString(5, _instance.substringWhiteList);
		}
		if (_instance.maxEntityCountUpdate) {
			_writer.writeInt32(6, _instance.maxEntityCountUpdate);
		}
		if (_instance.dryRun) {
			_writer.writeBool(7, _instance.dryRun);
		}
	}
	get parent() {
		return this._parent;
	}
	set parent(value) {
		this._parent = value;
	}
	get entityTypeName() {
		return this._entityTypeName;
	}
	set entityTypeName(value) {
		this._entityTypeName = value;
	}
	get languageCode() {
		return this._languageCode;
	}
	set languageCode(value) {
		this._languageCode = value;
	}
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get substringWhiteList() {
		return this._substringWhiteList;
	}
	set substringWhiteList(value) {
		this._substringWhiteList = value;
	}
	get maxEntityCountUpdate() {
		return this._maxEntityCountUpdate;
	}
	set maxEntityCountUpdate(value) {
		this._maxEntityCountUpdate = value;
	}
	get dryRun() {
		return this._dryRun;
	}
	set dryRun(value) {
		this._dryRun = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanEntityTypeRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			entityTypeName: this.entityTypeName,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			maxEntityCountUpdate: this.maxEntityCountUpdate,
			dryRun: this.dryRun
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
			parent: this.parent,
			entityTypeName: this.entityTypeName,
			languageCode: this.languageCode,
			specialCharacters: this.specialCharacters,
			substringWhiteList: (this.substringWhiteList || []).slice(),
			maxEntityCountUpdate: this.maxEntityCountUpdate,
			dryRun: this.dryRun
		};
	}
}
CleanEntityTypeRequest.id = 'ondewo.nlu.CleanEntityTypeRequest';
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeResponse
 */
export class CleanEntityTypeResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CleanEntityTypeResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.cleanedEntityType = _value.cleanedEntityType
			? new ondewoNlu009.EntityType(_value.cleanedEntityType)
			: undefined;
		this.entityTypeUpdate = _value.entityTypeUpdate ? new EntityTypeUpdate(_value.entityTypeUpdate) : undefined;
		CleanEntityTypeResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CleanEntityTypeResponse();
		CleanEntityTypeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.cleanedEntityType = _instance.cleanedEntityType || undefined;
		_instance.entityTypeUpdate = _instance.entityTypeUpdate || undefined;
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
					_instance.cleanedEntityType = new ondewoNlu009.EntityType();
					_reader.readMessage(_instance.cleanedEntityType, ondewoNlu009.EntityType.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.entityTypeUpdate = new EntityTypeUpdate();
					_reader.readMessage(_instance.entityTypeUpdate, EntityTypeUpdate.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		CleanEntityTypeResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.cleanedEntityType) {
			_writer.writeMessage(1, _instance.cleanedEntityType, ondewoNlu009.EntityType.serializeBinaryToWriter);
		}
		if (_instance.entityTypeUpdate) {
			_writer.writeMessage(2, _instance.entityTypeUpdate, EntityTypeUpdate.serializeBinaryToWriter);
		}
	}
	get cleanedEntityType() {
		return this._cleanedEntityType;
	}
	set cleanedEntityType(value) {
		this._cleanedEntityType = value;
	}
	get entityTypeUpdate() {
		return this._entityTypeUpdate;
	}
	set entityTypeUpdate(value) {
		this._entityTypeUpdate = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CleanEntityTypeResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			cleanedEntityType: this.cleanedEntityType ? this.cleanedEntityType.toObject() : undefined,
			entityTypeUpdate: this.entityTypeUpdate ? this.entityTypeUpdate.toObject() : undefined
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
			cleanedEntityType: this.cleanedEntityType ? this.cleanedEntityType.toProtobufJSON(options) : null,
			entityTypeUpdate: this.entityTypeUpdate ? this.entityTypeUpdate.toProtobufJSON(options) : null
		};
	}
}
CleanEntityTypeResponse.id = 'ondewo.nlu.CleanEntityTypeResponse';
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest
 */
export class AddTrainingPhrasesRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.languageCode = _value.languageCode;
		this.trainingPhraseList = (_value.trainingPhraseList || []).map(
			(m) => new AddTrainingPhrasesRequest.TrainingPhraseForIntent(m)
		);
		this.extractEntities = _value.extractEntities;
		this.specialCharacters = _value.specialCharacters;
		this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
			? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
			: undefined;
		this.numberOfWorkers = _value.numberOfWorkers;
		AddTrainingPhrasesRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AddTrainingPhrasesRequest();
		AddTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.trainingPhraseList = _instance.trainingPhraseList || [];
		_instance.extractEntities = _instance.extractEntities || false;
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.trainingPhraseCleanerOptions = _instance.trainingPhraseCleanerOptions || undefined;
		_instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.languageCode = _reader.readString();
					break;
				case 3:
					const messageInitializer3 = new AddTrainingPhrasesRequest.TrainingPhraseForIntent();
					_reader.readMessage(
						messageInitializer3,
						AddTrainingPhrasesRequest.TrainingPhraseForIntent.deserializeBinaryFromReader
					);
					(_instance.trainingPhraseList = _instance.trainingPhraseList || []).push(messageInitializer3);
					break;
				case 4:
					_instance.extractEntities = _reader.readBool();
					break;
				case 5:
					_instance.specialCharacters = _reader.readString();
					break;
				case 6:
					_instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
					_reader.readMessage(
						_instance.trainingPhraseCleanerOptions,
						TrainingPhraseCleanerOptions.deserializeBinaryFromReader
					);
					break;
				case 7:
					_instance.numberOfWorkers = _reader.readInt32();
					break;
				default:
					_reader.skipField();
			}
		}
		AddTrainingPhrasesRequest.refineValues(_instance);
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
		if (_instance.trainingPhraseList && _instance.trainingPhraseList.length) {
			_writer.writeRepeatedMessage(
				3,
				_instance.trainingPhraseList,
				AddTrainingPhrasesRequest.TrainingPhraseForIntent.serializeBinaryToWriter
			);
		}
		if (_instance.extractEntities) {
			_writer.writeBool(4, _instance.extractEntities);
		}
		if (_instance.specialCharacters) {
			_writer.writeString(5, _instance.specialCharacters);
		}
		if (_instance.trainingPhraseCleanerOptions) {
			_writer.writeMessage(
				6,
				_instance.trainingPhraseCleanerOptions,
				TrainingPhraseCleanerOptions.serializeBinaryToWriter
			);
		}
		if (_instance.numberOfWorkers) {
			_writer.writeInt32(7, _instance.numberOfWorkers);
		}
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
	get trainingPhraseList() {
		return this._trainingPhraseList;
	}
	set trainingPhraseList(value) {
		this._trainingPhraseList = value;
	}
	get extractEntities() {
		return this._extractEntities;
	}
	set extractEntities(value) {
		this._extractEntities = value;
	}
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get trainingPhraseCleanerOptions() {
		return this._trainingPhraseCleanerOptions;
	}
	set trainingPhraseCleanerOptions(value) {
		this._trainingPhraseCleanerOptions = value;
	}
	get numberOfWorkers() {
		return this._numberOfWorkers;
	}
	set numberOfWorkers(value) {
		this._numberOfWorkers = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AddTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			languageCode: this.languageCode,
			trainingPhraseList: (this.trainingPhraseList || []).map((m) => m.toObject()),
			extractEntities: this.extractEntities,
			specialCharacters: this.specialCharacters,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toObject()
				: undefined,
			numberOfWorkers: this.numberOfWorkers
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
			parent: this.parent,
			languageCode: this.languageCode,
			trainingPhraseList: (this.trainingPhraseList || []).map((m) => m.toProtobufJSON(options)),
			extractEntities: this.extractEntities,
			specialCharacters: this.specialCharacters,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
				: null,
			numberOfWorkers: this.numberOfWorkers
		};
	}
}
AddTrainingPhrasesRequest.id = 'ondewo.nlu.AddTrainingPhrasesRequest';
(function (AddTrainingPhrasesRequest) {
	/**
	 * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent
	 */
	class TrainingPhraseForIntent {
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of TrainingPhraseForIntent to deeply clone from
		 */
		constructor(_value) {
			_value = _value || {};
			this.trainingPhrase = _value.trainingPhrase;
			this.intentDisplayName = _value.intentDisplayName;
			this.entities = (_value.entities || []).map((m) => new ondewoNlu008.Intent.TrainingPhrase.Entity(m));
			TrainingPhraseForIntent.refineValues(this);
		}
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes) {
			const instance = new TrainingPhraseForIntent();
			TrainingPhraseForIntent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
			return instance;
		}
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance) {
			_instance.trainingPhrase = _instance.trainingPhrase || '';
			_instance.intentDisplayName = _instance.intentDisplayName || '';
			_instance.entities = _instance.entities || [];
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
						_instance.trainingPhrase = _reader.readString();
						break;
					case 2:
						_instance.intentDisplayName = _reader.readString();
						break;
					case 3:
						const messageInitializer3 = new ondewoNlu008.Intent.TrainingPhrase.Entity();
						_reader.readMessage(
							messageInitializer3,
							ondewoNlu008.Intent.TrainingPhrase.Entity.deserializeBinaryFromReader
						);
						(_instance.entities = _instance.entities || []).push(messageInitializer3);
						break;
					default:
						_reader.skipField();
				}
			}
			TrainingPhraseForIntent.refineValues(_instance);
		}
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance, _writer) {
			if (_instance.trainingPhrase) {
				_writer.writeString(1, _instance.trainingPhrase);
			}
			if (_instance.intentDisplayName) {
				_writer.writeString(2, _instance.intentDisplayName);
			}
			if (_instance.entities && _instance.entities.length) {
				_writer.writeRepeatedMessage(
					3,
					_instance.entities,
					ondewoNlu008.Intent.TrainingPhrase.Entity.serializeBinaryToWriter
				);
			}
		}
		get trainingPhrase() {
			return this._trainingPhrase;
		}
		set trainingPhrase(value) {
			this._trainingPhrase = value;
		}
		get intentDisplayName() {
			return this._intentDisplayName;
		}
		set intentDisplayName(value) {
			this._intentDisplayName = value;
		}
		get entities() {
			return this._entities;
		}
		set entities(value) {
			this._entities = value;
		}
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary() {
			const writer = new BinaryWriter();
			TrainingPhraseForIntent.serializeBinaryToWriter(this, writer);
			return writer.getResultBuffer();
		}
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject() {
			return {
				trainingPhrase: this.trainingPhrase,
				intentDisplayName: this.intentDisplayName,
				entities: (this.entities || []).map((m) => m.toObject())
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
				trainingPhrase: this.trainingPhrase,
				intentDisplayName: this.intentDisplayName,
				entities: (this.entities || []).map((m) => m.toProtobufJSON(options))
			};
		}
	}
	TrainingPhraseForIntent.id = 'ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent';
	AddTrainingPhrasesRequest.TrainingPhraseForIntent = TrainingPhraseForIntent;
})(AddTrainingPhrasesRequest || (AddTrainingPhrasesRequest = {}));
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesResponse
 */
export class AddTrainingPhrasesResponse {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddTrainingPhrasesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.errorMessages = (_value.errorMessages || []).slice();
		AddTrainingPhrasesResponse.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AddTrainingPhrasesResponse();
		AddTrainingPhrasesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.errorMessages = _instance.errorMessages || [];
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
					(_instance.errorMessages = _instance.errorMessages || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		AddTrainingPhrasesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.errorMessages && _instance.errorMessages.length) {
			_writer.writeRepeatedString(1, _instance.errorMessages);
		}
	}
	get errorMessages() {
		return this._errorMessages;
	}
	set errorMessages(value) {
		this._errorMessages = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AddTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			errorMessages: (this.errorMessages || []).slice()
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
			errorMessages: (this.errorMessages || []).slice()
		};
	}
}
AddTrainingPhrasesResponse.id = 'ondewo.nlu.AddTrainingPhrasesResponse';
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export class AddTrainingPhrasesFromCSVRequest {
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddTrainingPhrasesFromCSVRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.parent = _value.parent;
		this.languageCode = _value.languageCode;
		this.csvContents = _value.csvContents;
		this.extractEntities = _value.extractEntities;
		this.specialCharacters = _value.specialCharacters;
		this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
			? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
			: undefined;
		this.numberOfWorkers = _value.numberOfWorkers;
		AddTrainingPhrasesFromCSVRequest.refineValues(this);
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AddTrainingPhrasesFromCSVRequest();
		AddTrainingPhrasesFromCSVRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.parent = _instance.parent || '';
		_instance.languageCode = _instance.languageCode || '';
		_instance.csvContents = _instance.csvContents || new Uint8Array();
		_instance.extractEntities = _instance.extractEntities || false;
		_instance.specialCharacters = _instance.specialCharacters || '';
		_instance.trainingPhraseCleanerOptions = _instance.trainingPhraseCleanerOptions || undefined;
		_instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
					_instance.parent = _reader.readString();
					break;
				case 2:
					_instance.languageCode = _reader.readString();
					break;
				case 3:
					_instance.csvContents = _reader.readBytes();
					break;
				case 4:
					_instance.extractEntities = _reader.readBool();
					break;
				case 5:
					_instance.specialCharacters = _reader.readString();
					break;
				case 6:
					_instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
					_reader.readMessage(
						_instance.trainingPhraseCleanerOptions,
						TrainingPhraseCleanerOptions.deserializeBinaryFromReader
					);
					break;
				case 7:
					_instance.numberOfWorkers = _reader.readInt32();
					break;
				default:
					_reader.skipField();
			}
		}
		AddTrainingPhrasesFromCSVRequest.refineValues(_instance);
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
		if (_instance.csvContents && _instance.csvContents.length) {
			_writer.writeBytes(3, _instance.csvContents);
		}
		if (_instance.extractEntities) {
			_writer.writeBool(4, _instance.extractEntities);
		}
		if (_instance.specialCharacters) {
			_writer.writeString(5, _instance.specialCharacters);
		}
		if (_instance.trainingPhraseCleanerOptions) {
			_writer.writeMessage(
				6,
				_instance.trainingPhraseCleanerOptions,
				TrainingPhraseCleanerOptions.serializeBinaryToWriter
			);
		}
		if (_instance.numberOfWorkers) {
			_writer.writeInt32(7, _instance.numberOfWorkers);
		}
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
	get csvContents() {
		return this._csvContents;
	}
	set csvContents(value) {
		this._csvContents = value;
	}
	get extractEntities() {
		return this._extractEntities;
	}
	set extractEntities(value) {
		this._extractEntities = value;
	}
	get specialCharacters() {
		return this._specialCharacters;
	}
	set specialCharacters(value) {
		this._specialCharacters = value;
	}
	get trainingPhraseCleanerOptions() {
		return this._trainingPhraseCleanerOptions;
	}
	set trainingPhraseCleanerOptions(value) {
		this._trainingPhraseCleanerOptions = value;
	}
	get numberOfWorkers() {
		return this._numberOfWorkers;
	}
	set numberOfWorkers(value) {
		this._numberOfWorkers = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AddTrainingPhrasesFromCSVRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			parent: this.parent,
			languageCode: this.languageCode,
			csvContents: this.csvContents ? this.csvContents.subarray(0) : new Uint8Array(),
			extractEntities: this.extractEntities,
			specialCharacters: this.specialCharacters,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toObject()
				: undefined,
			numberOfWorkers: this.numberOfWorkers
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
			parent: this.parent,
			languageCode: this.languageCode,
			csvContents: this.csvContents ? uint8ArrayToBase64(this.csvContents) : '',
			extractEntities: this.extractEntities,
			specialCharacters: this.specialCharacters,
			trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
				? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
				: null,
			numberOfWorkers: this.numberOfWorkers
		};
	}
}
AddTrainingPhrasesFromCSVRequest.id = 'ondewo.nlu.AddTrainingPhrasesFromCSVRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3V0aWxpdHkucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUlMLGtCQUFrQixFQUNuQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFTekUsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEtBQUssWUFBWSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE1BQU0sQ0FBTixJQUFZLHlCQU1YO0FBTkQsV0FBWSx5QkFBeUI7SUFDbkMsaUdBQW9CLENBQUE7SUFDcEIsbUdBQXFCLENBQUE7SUFDckIsdUdBQXVCLENBQUE7SUFDdkIsbUhBQTZCLENBQUE7SUFDN0IsMklBQXlDLENBQUE7QUFDM0MsQ0FBQyxFQU5XLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFNcEM7QUFDRDs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBb0I7SUFnRS9COzs7T0FHRztJQUNILFlBQVksTUFBd0Q7UUFDbEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBckVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDNUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQzlDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxL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QWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLDRCQUE0QixFQUFFLElBQUksQ0FBQyw0QkFBNEI7Z0JBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsUUFBUSxFQUFFO2dCQUM5QyxDQUFDLENBQUMsU0FBUztZQUNiLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLDRCQUE0QixFQUFFLElBQUksQ0FBQyw0QkFBNEI7Z0JBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLElBQUk7WUFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBaFBNLG1DQUFFLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zLFxuICB1aW50OEFycmF5VG9CYXNlNjRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMiBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbW1vbi5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9vcGVyYXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA2IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA3IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwOCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDkgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5leHBvcnQgZW51bSBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHtcbiAgUkVBTk5PVEFURV9ORVZFUiA9IDAsXG4gIFJFQU5OT1RBVEVfQUxXQVlTID0gMSxcbiAgUkVBTk5PVEFURV9JRl9FTVBUWSA9IDIsXG4gIFJFQU5OT1RBVEVfQUZURVJfREVMRVRJT04gPSAzLFxuICBSRUFOTk9UQVRFX0lGX0VNUFRZX09SX0FGVEVSX0RFTEVUSU9OID0gNFxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlZhbGlkYXRlUmVnZXhSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuVmFsaWRhdGVSZWdleFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucmVnZXggPSBfaW5zdGFuY2UucmVnZXggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucmVnZXggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmVnZXgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnJlZ2V4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWdleD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFZhbGlkYXRlUmVnZXhSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZhbGlkYXRlUmVnZXhSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJlZ2V4ID0gX3ZhbHVlLnJlZ2V4O1xuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcmVnZXgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnZXg7XG4gIH1cbiAgc2V0IHJlZ2V4KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZWdleCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFZhbGlkYXRlUmVnZXhSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IHRoaXMucmVnZXhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBWYWxpZGF0ZVJlZ2V4UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVSZWdleFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHJlZ2V4Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFZhbGlkYXRlUmVnZXhSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICByZWdleD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVmFsaWRhdGVSZWdleFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlZhbGlkYXRlUmVnZXhSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZhbGlkYXRlUmVnZXhSZXNwb25zZSgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbGlkYXRlUmVnZXhSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVmFsaWRhdGVSZWdleFJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZhbGlkYXRlUmVnZXhSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gKF92YWx1ZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2VzO1xuICB9XG4gIHNldCBlcnJvck1lc3NhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVmFsaWRhdGVSZWdleFJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFZhbGlkYXRlUmVnZXhSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yTWVzc2FnZXM6ICh0aGlzLmVycm9yTWVzc2FnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFZhbGlkYXRlUmVnZXhSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVSZWdleFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlcnJvck1lc3NhZ2VzPzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVSZWdleFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlcnJvck1lc3NhZ2VzPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0KCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZSA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGUgPSBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuRW50aXR5KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuRW50aXR5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGUgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZT86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkVudGl0eTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZW50aXR5VHlwZSA9IF92YWx1ZS5lbnRpdHlUeXBlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkoX3ZhbHVlLmVudGl0eVR5cGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZSgpOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlKHZhbHVlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZTogdGhpcy5lbnRpdHlUeXBlID8gdGhpcy5lbnRpdHlUeXBlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZTogdGhpcy5lbnRpdHlUeXBlXG4gICAgICAgID8gdGhpcy5lbnRpdHlUeXBlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZW50aXR5VHlwZT86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkVudGl0eS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlUeXBlPzogb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuRW50aXR5LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5WYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgPSBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSAoX3ZhbHVlLmVycm9yTWVzc2FnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlcnJvck1lc3NhZ2VzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JNZXNzYWdlcztcbiAgfVxuICBzZXQgZXJyb3JNZXNzYWdlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkFsbEludGVudHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEludGVudHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DbGVhbkFsbEludGVudHNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCgpO1xuICAgIENsZWFuQWxsSW50ZW50c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPSBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfaW5zdGFuY2UuZHJ5UnVuIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9XG4gICAgICBfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB8fCAwO1xuICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuZHJ5UnVuID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICAgICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLm51bWJlck9mV29ya2VycyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkFsbEludGVudHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ICYmIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZHJ5UnVuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg1LCBfaW5zdGFuY2UuZHJ5UnVuKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDcsIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig4LCBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N1YnN0cmluZ1doaXRlTGlzdD86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9kcnlSdW4/OiBib29sZWFuO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgcHJpdmF0ZSBfcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucz86IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuQWxsSW50ZW50c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzID0gX3ZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0ID0gKF92YWx1ZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5kcnlSdW4gPSBfdmFsdWUuZHJ5UnVuO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICA/IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gX3ZhbHVlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSBfdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIENsZWFuQWxsSW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsQ2hhcmFjdGVycygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycztcbiAgfVxuICBzZXQgc3BlY2lhbENoYXJhY3RlcnModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN1YnN0cmluZ1doaXRlTGlzdCgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YnN0cmluZ1doaXRlTGlzdDtcbiAgfVxuICBzZXQgc3Vic3RyaW5nV2hpdGVMaXN0KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N1YnN0cmluZ1doaXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkcnlSdW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyeVJ1bjtcbiAgfVxuICBzZXQgZHJ5UnVuKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZHJ5UnVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoXG4gICAgdmFsdWU6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCByZWFubm90YXRlRW50aXRpZXNPcHRpb25zKCk6IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuICB9XG4gIHNldCByZWFubm90YXRlRW50aXRpZXNPcHRpb25zKHZhbHVlOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJPZldvcmtlcnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG4gIHNldCBudW1iZXJPZldvcmtlcnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX251bWJlck9mV29ya2VycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuQWxsSW50ZW50c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6ICh0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM6IHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyxcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGVhbkFsbEludGVudHNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zOlxuICAgICAgICBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zW1xuICAgICAgICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zXG4gICAgICAgIF0sXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkFsbEludGVudHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEludGVudHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzPzogc3RyaW5nO1xuICAgIHN1YnN0cmluZ1doaXRlTGlzdD86IHN0cmluZ1tdO1xuICAgIGRyeVJ1bj86IGJvb2xlYW47XG4gICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNPYmplY3Q7XG4gICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucz86IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gICAgbnVtYmVyT2ZXb3JrZXJzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsZWFuQWxsSW50ZW50c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gICAgZHJ5UnVuPzogYm9vbGVhbjtcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucz86IHN0cmluZztcbiAgICBudW1iZXJPZldvcmtlcnM/OiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNsZWFuQWxsSW50ZW50c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEludGVudHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkFsbEludGVudHNSZXNwb25zZSgpO1xuICAgIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgPSBfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgfHwgW107XG4gICAgX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgPSBfaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgb25kZXdvTmx1MDA4LkludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA4LkludGVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgPSBfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgSW50ZW50VXBkYXRlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBJbnRlbnRVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgPSBfaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jbGVhbmVkSW50ZW50cyAmJiBfaW5zdGFuY2UuY2xlYW5lZEludGVudHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDguSW50ZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgJiYgX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCBhcyBhbnksXG4gICAgICAgIEludGVudFVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbmVkSW50ZW50cz86IG9uZGV3b05sdTAwOC5JbnRlbnRbXTtcbiAgcHJpdmF0ZSBfaW50ZW50VXBkYXRlTGlzdD86IEludGVudFVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEludGVudHMgPSAoX3ZhbHVlLmNsZWFuZWRJbnRlbnRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDguSW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLmludGVudFVwZGF0ZUxpc3QgPSAoX3ZhbHVlLmludGVudFVwZGF0ZUxpc3QgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEludGVudFVwZGF0ZShtKVxuICAgICk7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjbGVhbmVkSW50ZW50cygpOiBvbmRld29ObHUwMDguSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVkSW50ZW50cztcbiAgfVxuICBzZXQgY2xlYW5lZEludGVudHModmFsdWU6IG9uZGV3b05sdTAwOC5JbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZWRJbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFVwZGF0ZUxpc3QoKTogSW50ZW50VXBkYXRlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRVcGRhdGVMaXN0O1xuICB9XG4gIHNldCBpbnRlbnRVcGRhdGVMaXN0KHZhbHVlOiBJbnRlbnRVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudFVwZGF0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkFsbEludGVudHNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDbGVhbkFsbEludGVudHNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnRzOiAodGhpcy5jbGVhbmVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGludGVudFVwZGF0ZUxpc3Q6ICh0aGlzLmludGVudFVwZGF0ZUxpc3QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGVhbkFsbEludGVudHNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnRzOiAodGhpcy5jbGVhbmVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGludGVudFVwZGF0ZUxpc3Q6ICh0aGlzLmludGVudFVwZGF0ZUxpc3QgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEludGVudHNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2xlYW5lZEludGVudHM/OiBvbmRld29ObHUwMDguSW50ZW50LkFzT2JqZWN0W107XG4gICAgaW50ZW50VXBkYXRlTGlzdD86IEludGVudFVwZGF0ZS5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjbGVhbmVkSW50ZW50cz86IG9uZGV3b05sdTAwOC5JbnRlbnQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgaW50ZW50VXBkYXRlTGlzdD86IEludGVudFVwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5JbnRlbnRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkludGVudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuSW50ZW50UmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuSW50ZW50UmVxdWVzdCgpO1xuICAgIENsZWFuSW50ZW50UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuSW50ZW50UmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pbnRlbnROYW1lID0gX2luc3RhbmNlLmludGVudE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPSBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfaW5zdGFuY2UuZHJ5UnVuIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9XG4gICAgICBfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIChfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmRyeVJ1biA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuSW50ZW50UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuaW50ZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ICYmIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNSwgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZHJ5UnVuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg2LCBfaW5zdGFuY2UuZHJ5UnVuKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDgsIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N1YnN0cmluZ1doaXRlTGlzdD86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9kcnlSdW4/OiBib29sZWFuO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgcHJpdmF0ZSBfcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucz86IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDbGVhbkludGVudFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5JbnRlbnRSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5pbnRlbnROYW1lID0gX3ZhbHVlLmludGVudE5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlcnMgPSBfdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgPSAoX3ZhbHVlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRyeVJ1biA9IF92YWx1ZS5kcnlSdW47XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgID8gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoX3ZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPSBfdmFsdWUucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgICBDbGVhbkludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnROYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudE5hbWU7XG4gIH1cbiAgc2V0IGludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucygpOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgfVxuICBzZXQgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyh2YWx1ZTogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkludGVudFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5JbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudE5hbWU6IHRoaXMuaW50ZW50TmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczogdGhpcy5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5JbnRlbnRSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudE5hbWU6IHRoaXMuaW50ZW50TmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zOlxuICAgICAgICBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zW1xuICAgICAgICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuSW50ZW50UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5JbnRlbnRSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgaW50ZW50TmFtZT86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gICAgZHJ5UnVuPzogYm9vbGVhbjtcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc09iamVjdDtcbiAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zPzogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBpbnRlbnROYW1lPzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICBkcnlSdW4/OiBib29sZWFuO1xuICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkludGVudFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkludGVudFJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DbGVhbkludGVudFJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5JbnRlbnRSZXNwb25zZSgpO1xuICAgIENsZWFuSW50ZW50UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGVhbkludGVudFJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmNsZWFuZWRJbnRlbnQgPSBfaW5zdGFuY2UuY2xlYW5lZEludGVudCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmludGVudFVwZGF0ZSA9IF9pbnN0YW5jZS5pbnRlbnRVcGRhdGUgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEludGVudCA9IG5ldyBvbmRld29ObHUwMDguSW50ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jbGVhbmVkSW50ZW50LFxuICAgICAgICAgICAgb25kZXdvTmx1MDA4LkludGVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudFVwZGF0ZSA9IG5ldyBJbnRlbnRVcGRhdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmludGVudFVwZGF0ZSxcbiAgICAgICAgICAgIEludGVudFVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5JbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuSW50ZW50UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2xlYW5lZEludGVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5jbGVhbmVkSW50ZW50IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA4LkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRVcGRhdGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuaW50ZW50VXBkYXRlIGFzIGFueSxcbiAgICAgICAgSW50ZW50VXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFuZWRJbnRlbnQ/OiBvbmRld29ObHUwMDguSW50ZW50O1xuICBwcml2YXRlIF9pbnRlbnRVcGRhdGU/OiBJbnRlbnRVcGRhdGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDbGVhbkludGVudFJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuSW50ZW50UmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEludGVudCA9IF92YWx1ZS5jbGVhbmVkSW50ZW50XG4gICAgICA/IG5ldyBvbmRld29ObHUwMDguSW50ZW50KF92YWx1ZS5jbGVhbmVkSW50ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbnRlbnRVcGRhdGUgPSBfdmFsdWUuaW50ZW50VXBkYXRlXG4gICAgICA/IG5ldyBJbnRlbnRVcGRhdGUoX3ZhbHVlLmludGVudFVwZGF0ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsZWFuSW50ZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjbGVhbmVkSW50ZW50KCk6IG9uZGV3b05sdTAwOC5JbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVkSW50ZW50O1xuICB9XG4gIHNldCBjbGVhbmVkSW50ZW50KHZhbHVlOiBvbmRld29ObHUwMDguSW50ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lZEludGVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRVcGRhdGUoKTogSW50ZW50VXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50VXBkYXRlO1xuICB9XG4gIHNldCBpbnRlbnRVcGRhdGUodmFsdWU6IEludGVudFVwZGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudFVwZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuSW50ZW50UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5JbnRlbnRSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnQ6IHRoaXMuY2xlYW5lZEludGVudFxuICAgICAgICA/IHRoaXMuY2xlYW5lZEludGVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZW50VXBkYXRlOiB0aGlzLmludGVudFVwZGF0ZSA/IHRoaXMuaW50ZW50VXBkYXRlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGVhbkludGVudFJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEludGVudDogdGhpcy5jbGVhbmVkSW50ZW50XG4gICAgICAgID8gdGhpcy5jbGVhbmVkSW50ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGludGVudFVwZGF0ZTogdGhpcy5pbnRlbnRVcGRhdGVcbiAgICAgICAgPyB0aGlzLmludGVudFVwZGF0ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuSW50ZW50UmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENsZWFuSW50ZW50UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNsZWFuZWRJbnRlbnQ/OiBvbmRld29ObHUwMDguSW50ZW50LkFzT2JqZWN0O1xuICAgIGludGVudFVwZGF0ZT86IEludGVudFVwZGF0ZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkludGVudFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjbGVhbmVkSW50ZW50Pzogb25kZXdvTmx1MDA4LkludGVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaW50ZW50VXBkYXRlPzogSW50ZW50VXBkYXRlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTtcbiAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgIF9pbnN0YW5jZS5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzID1cbiAgICAgIF9pbnN0YW5jZS5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPVxuICAgICAgX2luc3RhbmNlLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyA9XG4gICAgICBfaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgzLCBfaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzID0gX3ZhbHVlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXM7XG4gICAgdGhpcy5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPSBfdmFsdWUuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyA9XG4gICAgICBfdmFsdWUuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycztcbiAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcztcbiAgfVxuICBzZXQgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IGRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBkZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXM6IHRoaXMuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyxcbiAgICAgIGRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBkZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLmRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlczogdGhpcy5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzLFxuICAgICAgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVyc1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcz86IGJvb2xlYW47XG4gICAgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzPzogYm9vbGVhbjtcbiAgICBkZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBkZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbiAgICBkZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM/OiBib29sZWFuO1xuICAgIGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM/OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TdHJpbmdVcGRhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ1VwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU3RyaW5nVXBkYXRlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3RyaW5nVXBkYXRlKCk7XG4gICAgU3RyaW5nVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3RyaW5nVXBkYXRlKSB7XG4gICAgX2luc3RhbmNlLm5ldyA9IF9pbnN0YW5jZS5uZXcgfHwgJyc7XG4gICAgX2luc3RhbmNlLm9sZCA9IF9pbnN0YW5jZS5vbGQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTdHJpbmdVcGRhdGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5ldyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm9sZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3RyaW5nVXBkYXRlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU3RyaW5nVXBkYXRlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5ldykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmV3KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vbGQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLm9sZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmV3Pzogc3RyaW5nO1xuICBwcml2YXRlIF9vbGQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdHJpbmdVcGRhdGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3RyaW5nVXBkYXRlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5ldyA9IF92YWx1ZS5uZXc7XG4gICAgdGhpcy5vbGQgPSBfdmFsdWUub2xkO1xuICAgIFN0cmluZ1VwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5ldygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uZXc7XG4gIH1cbiAgc2V0IG5ldyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9sZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vbGQ7XG4gIH1cbiAgc2V0IG9sZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb2xkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN0cmluZ1VwZGF0ZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ldzogdGhpcy5uZXcsXG4gICAgICBvbGQ6IHRoaXMub2xkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RyaW5nVXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3OiB0aGlzLm5ldyxcbiAgICAgIG9sZDogdGhpcy5vbGRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmluZ1VwZGF0ZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3RyaW5nVXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuZXc/OiBzdHJpbmc7XG4gICAgb2xkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFN0cmluZ1VwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbmV3Pzogc3RyaW5nO1xuICAgIG9sZD86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuSW50ZW50VXBkYXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlbnRVcGRhdGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkludGVudFVwZGF0ZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEludGVudFVwZGF0ZSgpO1xuICAgIEludGVudFVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEludGVudFVwZGF0ZSkge1xuICAgIF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSA9IF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0ID1cbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzID0gX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSW50ZW50VXBkYXRlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0ID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBJbnRlbnRVcGRhdGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBJbnRlbnRVcGRhdGUsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCAmJlxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdC5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgYXMgYW55LFxuICAgICAgICBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMgJiYgX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50RGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlVXBkYXRlTGlzdD86IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVtdO1xuICBwcml2YXRlIF9kZWxldGVkUGFyYW1ldGVycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSW50ZW50VXBkYXRlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEludGVudFVwZGF0ZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnREaXNwbGF5TmFtZSA9IF92YWx1ZS5pbnRlbnREaXNwbGF5TmFtZTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IChfdmFsdWUudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUobSlcbiAgICApO1xuICAgIHRoaXMuZGVsZXRlZFBhcmFtZXRlcnMgPSAoX3ZhbHVlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIEludGVudFVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudERpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudERpc3BsYXlOYW1lO1xuICB9XG4gIHNldCBpbnRlbnREaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50RGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0KCk6XG4gICAgfCBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGVbXVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0O1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QoXG4gICAgdmFsdWU6IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVtdIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVkUGFyYW1ldGVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWRQYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBkZWxldGVkUGFyYW1ldGVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWxldGVkUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEludGVudFVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBJbnRlbnRVcGRhdGUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBkZWxldGVkUGFyYW1ldGVyczogKHRoaXMuZGVsZXRlZFBhcmFtZXRlcnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBJbnRlbnRVcGRhdGUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgZGVsZXRlZFBhcmFtZXRlcnM6ICh0aGlzLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbnRlbnRVcGRhdGUge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEludGVudFVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW50ZW50RGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0PzogSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlLkFzT2JqZWN0W107XG4gICAgZGVsZXRlZFBhcmFtZXRlcnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBJbnRlbnRVcGRhdGVcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudERpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdD86XG4gICAgICB8IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdXG4gICAgICB8IG51bGw7XG4gICAgZGVsZXRlZFBhcmFtZXRlcnM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFRyYWluaW5nUGhyYXNlVXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZSc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluaW5nUGhyYXNlVXBkYXRlKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VVcGRhdGUpIHtcbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSA9XG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSB8fCB1bmRlZmluZWQ7XG4gICAgICBfaW5zdGFuY2UuZW50aXR5VXBkYXRlcyA9IF9pbnN0YW5jZS5lbnRpdHlVcGRhdGVzIHx8IFtdO1xuICAgICAgX2luc3RhbmNlLmVudGl0aWVzUmVhbm5vdGF0ZWQgPSBfaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXTtcbiAgICAgIF9pbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlID1cbiAgICAgICAgX2luc3RhbmNlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VVcGRhdGUsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgPSBuZXcgU3RyaW5nVXBkYXRlKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUsXG4gICAgICAgICAgICAgIFN0cmluZ1VwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IFN0cmluZ1VwZGF0ZSgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgICAgU3RyaW5nVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIChfaW5zdGFuY2UuZW50aXR5VXBkYXRlcyA9IF9pbnN0YW5jZS5lbnRpdHlVcGRhdGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgKF9pbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkID1cbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZVVwZGF0ZSxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxLFxuICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSBhcyBhbnksXG4gICAgICAgICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmVudGl0eVVwZGF0ZXMgJiYgX2luc3RhbmNlLmVudGl0eVVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgMixcbiAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5VXBkYXRlcyBhcyBhbnksXG4gICAgICAgICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkICYmXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBfaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlVXBkYXRlPzogU3RyaW5nVXBkYXRlO1xuICAgIHByaXZhdGUgX2VudGl0eVVwZGF0ZXM/OiBTdHJpbmdVcGRhdGVbXTtcbiAgICBwcml2YXRlIF9lbnRpdGllc1JlYW5ub3RhdGVkPzogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfY29udGFpbnNVcGRhdGVWYXJpYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFpbmluZ1BocmFzZVVwZGF0ZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5pbmdQaHJhc2VVcGRhdGUuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICAgID8gbmV3IFN0cmluZ1VwZGF0ZShfdmFsdWUudHJhaW5pbmdQaHJhc2VVcGRhdGUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5lbnRpdHlVcGRhdGVzID0gKF92YWx1ZS5lbnRpdHlVcGRhdGVzIHx8IFtdKS5tYXAoXG4gICAgICAgIG0gPT4gbmV3IFN0cmluZ1VwZGF0ZShtKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZW50aXRpZXNSZWFubm90YXRlZCA9IChfdmFsdWUuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXSkuc2xpY2UoKTtcbiAgICAgIHRoaXMuY29udGFpbnNVcGRhdGVWYXJpYWJsZSA9IF92YWx1ZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlO1xuICAgICAgVHJhaW5pbmdQaHJhc2VVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGUoKTogU3RyaW5nVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZVVwZGF0ZTtcbiAgICB9XG4gICAgc2V0IHRyYWluaW5nUGhyYXNlVXBkYXRlKHZhbHVlOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdHlVcGRhdGVzKCk6IFN0cmluZ1VwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlVcGRhdGVzO1xuICAgIH1cbiAgICBzZXQgZW50aXR5VXBkYXRlcyh2YWx1ZTogU3RyaW5nVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVVwZGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0aWVzUmVhbm5vdGF0ZWQoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzUmVhbm5vdGF0ZWQ7XG4gICAgfVxuICAgIHNldCBlbnRpdGllc1JlYW5ub3RhdGVkKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXRpZXNSZWFubm90YXRlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY29udGFpbnNVcGRhdGVWYXJpYWJsZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250YWluc1VwZGF0ZVZhcmlhYmxlO1xuICAgIH1cbiAgICBzZXQgY29udGFpbnNVcGRhdGVWYXJpYWJsZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fY29udGFpbnNVcGRhdGVWYXJpYWJsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBUcmFpbmluZ1BocmFzZVVwZGF0ZS5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZTogdGhpcy50cmFpbmluZ1BocmFzZVVwZGF0ZVxuICAgICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZVVwZGF0ZS50b09iamVjdCgpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGVudGl0eVVwZGF0ZXM6ICh0aGlzLmVudGl0eVVwZGF0ZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICAgIGVudGl0aWVzUmVhbm5vdGF0ZWQ6ICh0aGlzLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIGNvbnRhaW5zVXBkYXRlVmFyaWFibGU6IHRoaXMuY29udGFpbnNVcGRhdGVWYXJpYWJsZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBUcmFpbmluZ1BocmFzZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZTogdGhpcy50cmFpbmluZ1BocmFzZVVwZGF0ZVxuICAgICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZVVwZGF0ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgZW50aXR5VXBkYXRlczogKHRoaXMuZW50aXR5VXBkYXRlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICksXG4gICAgICAgIGVudGl0aWVzUmVhbm5vdGF0ZWQ6ICh0aGlzLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIGNvbnRhaW5zVXBkYXRlVmFyaWFibGU6IHRoaXMuY29udGFpbnNVcGRhdGVWYXJpYWJsZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBUcmFpbmluZ1BocmFzZVVwZGF0ZSB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZT86IFN0cmluZ1VwZGF0ZS5Bc09iamVjdDtcbiAgICAgIGVudGl0eVVwZGF0ZXM/OiBTdHJpbmdVcGRhdGUuQXNPYmplY3RbXTtcbiAgICAgIGVudGl0aWVzUmVhbm5vdGF0ZWQ/OiBzdHJpbmdbXTtcbiAgICAgIGNvbnRhaW5zVXBkYXRlVmFyaWFibGU/OiBib29sZWFuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZT86IFN0cmluZ1VwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBlbnRpdHlVcGRhdGVzPzogU3RyaW5nVXBkYXRlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgICAgZW50aXRpZXNSZWFubm90YXRlZD86IHN0cmluZ1tdO1xuICAgICAgY29udGFpbnNVcGRhdGVWYXJpYWJsZT86IGJvb2xlYW47XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5FbnRpdHlUeXBlVXBkYXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlVXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5FbnRpdHlUeXBlVXBkYXRlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRW50aXR5VHlwZVVwZGF0ZSgpO1xuICAgIEVudGl0eVR5cGVVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFbnRpdHlUeXBlVXBkYXRlKSB7XG4gICAgX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0ID0gX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFbnRpdHlUeXBlVXBkYXRlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgPSBfaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRW50aXR5VHlwZVVwZGF0ZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0ICYmIF9pbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdmFsdWVzVXBkYXRlTGlzdD86IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFbnRpdHlUeXBlVXBkYXRlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVR5cGVVcGRhdGUuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZW50aXR5VHlwZU5hbWUgPSBfdmFsdWUuZW50aXR5VHlwZU5hbWU7XG4gICAgdGhpcy52YWx1ZXNVcGRhdGVMaXN0ID0gKF92YWx1ZS52YWx1ZXNVcGRhdGVMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZShtKVxuICAgICk7XG4gICAgRW50aXR5VHlwZVVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVOYW1lO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWVzVXBkYXRlTGlzdCgpOiBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzVXBkYXRlTGlzdDtcbiAgfVxuICBzZXQgdmFsdWVzVXBkYXRlTGlzdCh2YWx1ZTogRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZhbHVlc1VwZGF0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFbnRpdHlUeXBlVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEVudGl0eVR5cGVVcGRhdGUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIHZhbHVlc1VwZGF0ZUxpc3Q6ICh0aGlzLnZhbHVlc1VwZGF0ZUxpc3QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFbnRpdHlUeXBlVXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZU5hbWU6IHRoaXMuZW50aXR5VHlwZU5hbWUsXG4gICAgICB2YWx1ZXNVcGRhdGVMaXN0OiAodGhpcy52YWx1ZXNVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFbnRpdHlUeXBlVXBkYXRlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFbnRpdHlUeXBlVXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgICB2YWx1ZXNVcGRhdGVMaXN0PzogRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFbnRpdHlUeXBlVXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgICB2YWx1ZXNVcGRhdGVMaXN0PzogRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5FbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEVudGl0eVVwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5FbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZSc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudGl0eVVwZGF0ZSgpO1xuICAgICAgRW50aXR5VXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFbnRpdHlVcGRhdGUpIHtcbiAgICAgIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSA9IF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSB8fCB1bmRlZmluZWQ7XG4gICAgICBfaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgPSBfaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIF9pbnN0YW5jZTogRW50aXR5VXBkYXRlLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVZhbHVlVXBkYXRlID0gbmV3IFN0cmluZ1VwZGF0ZSgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVZhbHVlVXBkYXRlLFxuICAgICAgICAgICAgICBTdHJpbmdVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICAgIFN0cmluZ1VwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2luc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzID1cbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgRW50aXR5VXBkYXRlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IEVudGl0eVVwZGF0ZSxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxLFxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSBhcyBhbnksXG4gICAgICAgICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHlTeW5vbnltVXBkYXRlcyAmJlxuICAgICAgICBfaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgICAyLFxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlTeW5vbnltVXBkYXRlcyBhcyBhbnksXG4gICAgICAgICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZW50aXR5VmFsdWVVcGRhdGU/OiBTdHJpbmdVcGRhdGU7XG4gICAgcHJpdmF0ZSBfZW50aXR5U3lub255bVVwZGF0ZXM/OiBTdHJpbmdVcGRhdGVbXTtcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEVudGl0eVVwZGF0ZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RW50aXR5VXBkYXRlLkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy5lbnRpdHlWYWx1ZVVwZGF0ZSA9IF92YWx1ZS5lbnRpdHlWYWx1ZVVwZGF0ZVxuICAgICAgICA/IG5ldyBTdHJpbmdVcGRhdGUoX3ZhbHVlLmVudGl0eVZhbHVlVXBkYXRlKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZW50aXR5U3lub255bVVwZGF0ZXMgPSAoX3ZhbHVlLmVudGl0eVN5bm9ueW1VcGRhdGVzIHx8IFtdKS5tYXAoXG4gICAgICAgIG0gPT4gbmV3IFN0cmluZ1VwZGF0ZShtKVxuICAgICAgKTtcbiAgICAgIEVudGl0eVVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBlbnRpdHlWYWx1ZVVwZGF0ZSgpOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVZhbHVlVXBkYXRlO1xuICAgIH1cbiAgICBzZXQgZW50aXR5VmFsdWVVcGRhdGUodmFsdWU6IFN0cmluZ1VwZGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXR5VmFsdWVVcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0eVN5bm9ueW1VcGRhdGVzKCk6IFN0cmluZ1VwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlTeW5vbnltVXBkYXRlcztcbiAgICB9XG4gICAgc2V0IGVudGl0eVN5bm9ueW1VcGRhdGVzKHZhbHVlOiBTdHJpbmdVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXR5U3lub255bVVwZGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgRW50aXR5VXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IEVudGl0eVVwZGF0ZS5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbnRpdHlWYWx1ZVVwZGF0ZTogdGhpcy5lbnRpdHlWYWx1ZVVwZGF0ZVxuICAgICAgICAgID8gdGhpcy5lbnRpdHlWYWx1ZVVwZGF0ZS50b09iamVjdCgpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGVudGl0eVN5bm9ueW1VcGRhdGVzOiAodGhpcy5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBFbnRpdHlVcGRhdGUuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW50aXR5VmFsdWVVcGRhdGU6IHRoaXMuZW50aXR5VmFsdWVVcGRhdGVcbiAgICAgICAgICA/IHRoaXMuZW50aXR5VmFsdWVVcGRhdGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGVudGl0eVN5bm9ueW1VcGRhdGVzOiAodGhpcy5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgRW50aXR5VXBkYXRlIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5VXBkYXRlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBlbnRpdHlWYWx1ZVVwZGF0ZT86IFN0cmluZ1VwZGF0ZS5Bc09iamVjdDtcbiAgICAgIGVudGl0eVN5bm9ueW1VcGRhdGVzPzogU3RyaW5nVXBkYXRlLkFzT2JqZWN0W107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5VXBkYXRlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBlbnRpdHlWYWx1ZVVwZGF0ZT86IFN0cmluZ1VwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBlbnRpdHlTeW5vbnltVXBkYXRlcz86IFN0cmluZ1VwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCgpO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9IF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlID0gX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlIHx8IDA7XG4gICAgX2luc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyA9XG4gICAgICBfaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfaW5zdGFuY2UuZHJ5UnVuIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIChfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIChfaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UuZHJ5UnVuID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLm51bWJlck9mV29ya2VycyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg0LCBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDUsIF9pbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIF9pbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgJiZcbiAgICAgIF9pbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNiwgX2luc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZHJ5UnVuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg3LCBfaW5zdGFuY2UuZHJ5UnVuKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig4LCBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3N1YnN0cmluZ1doaXRlTGlzdD86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9tYXhFbnRpdHlDb3VudFVwZGF0ZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RyeVJ1bj86IGJvb2xlYW47XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlcnMgPSBfdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgPSAoX3ZhbHVlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1heEVudGl0eUNvdW50VXBkYXRlID0gX3ZhbHVlLm1heEVudGl0eUNvdW50VXBkYXRlO1xuICAgIHRoaXMuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zID0gKFxuICAgICAgX3ZhbHVlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXVxuICAgICkuc2xpY2UoKTtcbiAgICB0aGlzLmRyeVJ1biA9IF92YWx1ZS5kcnlSdW47XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSBfdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4RW50aXR5Q291bnRVcGRhdGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGU7XG4gIH1cbiAgc2V0IG1heEVudGl0eUNvdW50VXBkYXRlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM7XG4gIH1cbiAgc2V0IGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJPZldvcmtlcnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG4gIHNldCBudW1iZXJPZldvcmtlcnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX251bWJlck9mV29ya2VycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM6IChcbiAgICAgICAgdGhpcy5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgfHwgW11cbiAgICAgICkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgc3Vic3RyaW5nV2hpdGVMaXN0OiAodGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogdGhpcy5tYXhFbnRpdHlDb3VudFVwZGF0ZSxcbiAgICAgIGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJuczogKFxuICAgICAgICB0aGlzLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXVxuICAgICAgKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZT86IG51bWJlcjtcbiAgICBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICBkcnlSdW4/OiBib29sZWFuO1xuICAgIG51bWJlck9mV29ya2Vycz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZT86IG51bWJlcjtcbiAgICBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICBkcnlSdW4/OiBib29sZWFuO1xuICAgIG51bWJlck9mV29ya2Vycz86IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSgpO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMgPSBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgPSBfaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZURlbGV0aW9ucyA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgRW50aXR5VHlwZVVwZGF0ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBFbnRpdHlUeXBlVXBkYXRlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjQsXG4gICAgICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyAmJiBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyAmJiBfaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzICYmIF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGVVcGRhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZURlbGV0aW9ucyAmJiBfaW5zdGFuY2UuZW50aXR5VHlwZURlbGV0aW9ucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbmVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMDkuRW50aXR5VHlwZVtdO1xuICBwcml2YXRlIF9kZWxldGVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMDkuRW50aXR5VHlwZVtdO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlVXBkYXRlcz86IEVudGl0eVR5cGVVcGRhdGVbXTtcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZURlbGV0aW9ucz86IEVudGl0eVR5cGVVcGRhdGVbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEVudGl0eVR5cGVzID0gKF92YWx1ZS5jbGVhbmVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlKG0pXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZWRFbnRpdHlUeXBlcyA9IChfdmFsdWUuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZShtKVxuICAgICk7XG4gICAgdGhpcy5lbnRpdHlUeXBlVXBkYXRlcyA9IChfdmFsdWUuZW50aXR5VHlwZVVwZGF0ZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEVudGl0eVR5cGVVcGRhdGUobSlcbiAgICApO1xuICAgIHRoaXMuZW50aXR5VHlwZURlbGV0aW9ucyA9IChfdmFsdWUuZW50aXR5VHlwZURlbGV0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRW50aXR5VHlwZVVwZGF0ZShtKVxuICAgICk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEVudGl0eVR5cGVzKCk6IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVkRW50aXR5VHlwZXM7XG4gIH1cbiAgc2V0IGNsZWFuZWRFbnRpdHlUeXBlcyh2YWx1ZTogb25kZXdvTmx1MDA5LkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZWRFbnRpdHlUeXBlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVkRW50aXR5VHlwZXMoKTogb25kZXdvTmx1MDA5LkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWRFbnRpdHlUeXBlcztcbiAgfVxuICBzZXQgZGVsZXRlZEVudGl0eVR5cGVzKHZhbHVlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVsZXRlZEVudGl0eVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVVcGRhdGVzKCk6IEVudGl0eVR5cGVVcGRhdGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVVcGRhdGVzO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlVXBkYXRlcyh2YWx1ZTogRW50aXR5VHlwZVVwZGF0ZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZVVwZGF0ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZURlbGV0aW9ucygpOiBFbnRpdHlUeXBlVXBkYXRlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlRGVsZXRpb25zO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlRGVsZXRpb25zKHZhbHVlOiBFbnRpdHlUeXBlVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlRGVsZXRpb25zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRFbnRpdHlUeXBlczogKHRoaXMuY2xlYW5lZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBkZWxldGVkRW50aXR5VHlwZXM6ICh0aGlzLmRlbGV0ZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgZW50aXR5VHlwZVVwZGF0ZXM6ICh0aGlzLmVudGl0eVR5cGVVcGRhdGVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgZW50aXR5VHlwZURlbGV0aW9uczogKHRoaXMuZW50aXR5VHlwZURlbGV0aW9ucyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEVudGl0eVR5cGVzOiAodGhpcy5jbGVhbmVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBkZWxldGVkRW50aXR5VHlwZXM6ICh0aGlzLmRlbGV0ZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGVudGl0eVR5cGVVcGRhdGVzOiAodGhpcy5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGVudGl0eVR5cGVEZWxldGlvbnM6ICh0aGlzLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjbGVhbmVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5Bc09iamVjdFtdO1xuICAgIGRlbGV0ZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkFzT2JqZWN0W107XG4gICAgZW50aXR5VHlwZVVwZGF0ZXM/OiBFbnRpdHlUeXBlVXBkYXRlLkFzT2JqZWN0W107XG4gICAgZW50aXR5VHlwZURlbGV0aW9ucz86IEVudGl0eVR5cGVVcGRhdGUuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNsZWFuZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGRlbGV0ZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGVudGl0eVR5cGVVcGRhdGVzPzogRW50aXR5VHlwZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBlbnRpdHlUeXBlRGVsZXRpb25zPzogRW50aXR5VHlwZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuRW50aXR5VHlwZVJlcXVlc3QoKTtcbiAgICBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9IF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlID0gX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlIHx8IDA7XG4gICAgX2luc3RhbmNlLmRyeVJ1biA9IF9pbnN0YW5jZS5kcnlSdW4gfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UuZHJ5UnVuID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ICYmIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNSwgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig2LCBfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRyeVJ1bikge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNywgX2luc3RhbmNlLmRyeVJ1bik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gIHByaXZhdGUgX21heEVudGl0eUNvdW50VXBkYXRlPzogbnVtYmVyO1xuICBwcml2YXRlIF9kcnlSdW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5lbnRpdHlUeXBlTmFtZSA9IF92YWx1ZS5lbnRpdHlUeXBlTmFtZTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCA9IChfdmFsdWUuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUgPSBfdmFsdWUubWF4RW50aXR5Q291bnRVcGRhdGU7XG4gICAgdGhpcy5kcnlSdW4gPSBfdmFsdWUuZHJ5UnVuO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZU5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxDaGFyYWN0ZXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBzcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3Vic3RyaW5nV2hpdGVMaXN0KCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0O1xuICB9XG4gIHNldCBzdWJzdHJpbmdXaGl0ZUxpc3QodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heEVudGl0eUNvdW50VXBkYXRlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21heEVudGl0eUNvdW50VXBkYXRlO1xuICB9XG4gIHNldCBtYXhFbnRpdHlDb3VudFVwZGF0ZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgZW50aXR5VHlwZU5hbWU/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzPzogc3RyaW5nO1xuICAgIHN1YnN0cmluZ1doaXRlTGlzdD86IHN0cmluZ1tdO1xuICAgIG1heEVudGl0eUNvdW50VXBkYXRlPzogbnVtYmVyO1xuICAgIGRyeVJ1bj86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGVudGl0eVR5cGVOYW1lPzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZT86IG51bWJlcjtcbiAgICBkcnlSdW4/OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkVudGl0eVR5cGVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuRW50aXR5VHlwZVJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UoKTtcbiAgICBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlID0gX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSA9IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGUsXG4gICAgICAgICAgICBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGUgPSBuZXcgRW50aXR5VHlwZVVwZGF0ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSxcbiAgICAgICAgICAgIEVudGl0eVR5cGVVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGUgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGUgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFuZWRFbnRpdHlUeXBlPzogb25kZXdvTmx1MDA5LkVudGl0eVR5cGU7XG4gIHByaXZhdGUgX2VudGl0eVR5cGVVcGRhdGU/OiBFbnRpdHlUeXBlVXBkYXRlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEVudGl0eVR5cGUgPSBfdmFsdWUuY2xlYW5lZEVudGl0eVR5cGVcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlKF92YWx1ZS5jbGVhbmVkRW50aXR5VHlwZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW50aXR5VHlwZVVwZGF0ZSA9IF92YWx1ZS5lbnRpdHlUeXBlVXBkYXRlXG4gICAgICA/IG5ldyBFbnRpdHlUeXBlVXBkYXRlKF92YWx1ZS5lbnRpdHlUeXBlVXBkYXRlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjbGVhbmVkRW50aXR5VHlwZSgpOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuZWRFbnRpdHlUeXBlO1xuICB9XG4gIHNldCBjbGVhbmVkRW50aXR5VHlwZSh2YWx1ZTogb25kZXdvTmx1MDA5LkVudGl0eVR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVkRW50aXR5VHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlVXBkYXRlKCk6IEVudGl0eVR5cGVVcGRhdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlVXBkYXRlO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlVXBkYXRlKHZhbHVlOiBFbnRpdHlUeXBlVXBkYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZVVwZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEVudGl0eVR5cGU6IHRoaXMuY2xlYW5lZEVudGl0eVR5cGVcbiAgICAgICAgPyB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBlbnRpdHlUeXBlVXBkYXRlOiB0aGlzLmVudGl0eVR5cGVVcGRhdGVcbiAgICAgICAgPyB0aGlzLmVudGl0eVR5cGVVcGRhdGUudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEVudGl0eVR5cGU6IHRoaXMuY2xlYW5lZEVudGl0eVR5cGVcbiAgICAgICAgPyB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGVudGl0eVR5cGVVcGRhdGU6IHRoaXMuZW50aXR5VHlwZVVwZGF0ZVxuICAgICAgICA/IHRoaXMuZW50aXR5VHlwZVVwZGF0ZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkVudGl0eVR5cGVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgY2xlYW5lZEVudGl0eVR5cGU/OiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5Bc09iamVjdDtcbiAgICBlbnRpdHlUeXBlVXBkYXRlPzogRW50aXR5VHlwZVVwZGF0ZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkVudGl0eVR5cGVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2xlYW5lZEVudGl0eVR5cGU/OiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZW50aXR5VHlwZVVwZGF0ZT86IEVudGl0eVR5cGVVcGRhdGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCgpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdCA9IF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyA9IF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX2luc3RhbmNlLm51bWJlck9mV29ya2VycyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnRcbiAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdCB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0ICYmIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0IGFzIGFueSxcbiAgICAgICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFxuICAgICAgICAgIC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGFzIGFueSxcbiAgICAgICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig3LCBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VMaXN0PzogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFtdO1xuICBwcml2YXRlIF9leHRyYWN0RW50aXRpZXM/OiBib29sZWFuO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlTGlzdCA9IChfdmFsdWUudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLmV4dHJhY3RFbnRpdGllcyA9IF92YWx1ZS5leHRyYWN0RW50aXRpZXM7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgPyBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyT2ZXb3JrZXJzID0gX3ZhbHVlLm51bWJlck9mV29ya2VycztcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VMaXN0KCk6XG4gICAgfCBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50W11cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlTGlzdDtcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VMaXN0KFxuICAgIHZhbHVlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50W10gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4dHJhY3RFbnRpdGllcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdEVudGl0aWVzO1xuICB9XG4gIHNldCBleHRyYWN0RW50aXRpZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9leHRyYWN0RW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZXb3JrZXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mV29ya2VycztcbiAgfVxuICBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBleHRyYWN0RW50aXRpZXM6IHRoaXMuZXh0cmFjdEVudGl0aWVzLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB0cmFpbmluZ1BocmFzZUxpc3Q6ICh0aGlzLnRyYWluaW5nUGhyYXNlTGlzdCB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGV4dHJhY3RFbnRpdGllczogdGhpcy5leHRyYWN0RW50aXRpZXMsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHRyYWluaW5nUGhyYXNlTGlzdD86IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuQXNPYmplY3RbXTtcbiAgICBleHRyYWN0RW50aXRpZXM/OiBib29sZWFuO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzPzogc3RyaW5nO1xuICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzT2JqZWN0O1xuICAgIG51bWJlck9mV29ya2Vycz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHRyYWluaW5nUGhyYXNlTGlzdD86XG4gICAgICB8IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuQXNQcm90b2J1ZkpTT05bXVxuICAgICAgfCBudWxsO1xuICAgIGV4dHJhY3RFbnRpdGllcz86IGJvb2xlYW47XG4gICAgc3BlY2lhbENoYXJhY3RlcnM/OiBzdHJpbmc7XG4gICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG51bWJlck9mV29ya2Vycz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnRcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZUZvckludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50JztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUZvckludGVudCkge1xuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lID0gX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmVudGl0aWVzID0gX2luc3RhbmNlLmVudGl0aWVzIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICAgIG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5XG4gICAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIChfaW5zdGFuY2UuZW50aXRpZXMgPSBfaW5zdGFuY2UuZW50aXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUZvckludGVudCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZW50aXRpZXMgJiYgX2luc3RhbmNlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDMsXG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgICBvbmRld29ObHUwMDguSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ludGVudERpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VudGl0aWVzPzogb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXTtcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFpbmluZ1BocmFzZUZvckludGVudC5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMudHJhaW5pbmdQaHJhc2UgPSBfdmFsdWUudHJhaW5pbmdQaHJhc2U7XG4gICAgICB0aGlzLmludGVudERpc3BsYXlOYW1lID0gX3ZhbHVlLmludGVudERpc3BsYXlOYW1lO1xuICAgICAgdGhpcy5lbnRpdGllcyA9IChfdmFsdWUuZW50aXRpZXMgfHwgW10pLm1hcChcbiAgICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkobSlcbiAgICAgICk7XG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCB0cmFpbmluZ1BocmFzZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlO1xuICAgIH1cbiAgICBzZXQgdHJhaW5pbmdQaHJhc2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdHJhaW5pbmdQaHJhc2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGludGVudERpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZW50RGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHNldCBpbnRlbnREaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9pbnRlbnREaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW50aXRpZXMoKTogb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdGllcyhcbiAgICAgIHZhbHVlOiBvbmRld29ObHUwMDguSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eVtdIHwgdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICB0aGlzLl9lbnRpdGllcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBUcmFpbmluZ1BocmFzZUZvckludGVudC5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFpbmluZ1BocmFzZTogdGhpcy50cmFpbmluZ1BocmFzZSxcbiAgICAgICAgaW50ZW50RGlzcGxheU5hbWU6IHRoaXMuaW50ZW50RGlzcGxheU5hbWUsXG4gICAgICAgIGVudGl0aWVzOiAodGhpcy5lbnRpdGllcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBUcmFpbmluZ1BocmFzZUZvckludGVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFpbmluZ1BocmFzZTogdGhpcy50cmFpbmluZ1BocmFzZSxcbiAgICAgICAgaW50ZW50RGlzcGxheU5hbWU6IHRoaXMuaW50ZW50RGlzcGxheU5hbWUsXG4gICAgICAgIGVudGl0aWVzOiAodGhpcy5lbnRpdGllcyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSlcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFpbmluZ1BocmFzZUZvckludGVudFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgdHJhaW5pbmdQaHJhc2U/OiBzdHJpbmc7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAgIGVudGl0aWVzPzogb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkuQXNPYmplY3RbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUcmFpbmluZ1BocmFzZUZvckludGVudFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgdHJhaW5pbmdQaHJhc2U/OiBzdHJpbmc7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAgIGVudGl0aWVzPzpcbiAgICAgICAgfCBvbmRld29ObHUwMDguSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5Bc1Byb3RvYnVmSlNPTltdXG4gICAgICAgIHwgbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSgpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgJiYgX2luc3RhbmNlLmVycm9yTWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmVycm9yTWVzc2FnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSAoX3ZhbHVlLmVycm9yTWVzc2FnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlcnJvck1lc3NhZ2VzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JNZXNzYWdlcztcbiAgfVxuICBzZXQgZXJyb3JNZXNzYWdlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QoKTtcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNzdkNvbnRlbnRzID0gX2luc3RhbmNlLmNzdkNvbnRlbnRzIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyA9IF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX2luc3RhbmNlLm51bWJlck9mV29ya2VycyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNzdkNvbnRlbnRzID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jc3ZDb250ZW50cyAmJiBfaW5zdGFuY2UuY3N2Q29udGVudHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQnl0ZXMoMywgX2luc3RhbmNlLmNzdkNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDUsIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGFzIGFueSxcbiAgICAgICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig3LCBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3N2Q29udGVudHM/OiBVaW50OEFycmF5O1xuICBwcml2YXRlIF9leHRyYWN0RW50aXRpZXM/OiBib29sZWFuO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLmNzdkNvbnRlbnRzID0gX3ZhbHVlLmNzdkNvbnRlbnRzO1xuICAgIHRoaXMuZXh0cmFjdEVudGl0aWVzID0gX3ZhbHVlLmV4dHJhY3RFbnRpdGllcztcbiAgICB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzID0gX3ZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICA/IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSBfdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3N2Q29udGVudHMoKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdkNvbnRlbnRzO1xuICB9XG4gIHNldCBjc3ZDb250ZW50cyh2YWx1ZTogVWludDhBcnJheSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NzdkNvbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4dHJhY3RFbnRpdGllcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdEVudGl0aWVzO1xuICB9XG4gIHNldCBleHRyYWN0RW50aXRpZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9leHRyYWN0RW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZXb3JrZXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mV29ya2VycztcbiAgfVxuICBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgY3N2Q29udGVudHM6IHRoaXMuY3N2Q29udGVudHNcbiAgICAgICAgPyB0aGlzLmNzdkNvbnRlbnRzLnN1YmFycmF5KDApXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGV4dHJhY3RFbnRpdGllczogdGhpcy5leHRyYWN0RW50aXRpZXMsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbnVtYmVyT2ZXb3JrZXJzOiB0aGlzLm51bWJlck9mV29ya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBjc3ZDb250ZW50czogdGhpcy5jc3ZDb250ZW50cyA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLmNzdkNvbnRlbnRzKSA6ICcnLFxuICAgICAgZXh0cmFjdEVudGl0aWVzOiB0aGlzLmV4dHJhY3RFbnRpdGllcyxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBjc3ZDb250ZW50cz86IFVpbnQ4QXJyYXk7XG4gICAgZXh0cmFjdEVudGl0aWVzPzogYm9vbGVhbjtcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc09iamVjdDtcbiAgICBudW1iZXJPZldvcmtlcnM/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgY3N2Q29udGVudHM/OiBzdHJpbmc7XG4gICAgZXh0cmFjdEVudGl0aWVzPzogYm9vbGVhbjtcbiAgICBzcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbnVtYmVyT2ZXb3JrZXJzPzogbnVtYmVyO1xuICB9XG59XG4iXX0=
