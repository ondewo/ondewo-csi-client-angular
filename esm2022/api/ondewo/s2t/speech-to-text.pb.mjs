/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
export var Decoding;
(function (Decoding) {
	Decoding[(Decoding['DEFAULT'] = 0)] = 'DEFAULT';
	Decoding[(Decoding['GREEDY'] = 1)] = 'GREEDY';
	Decoding[(Decoding['BEAM_SEARCH_WITH_LM'] = 2)] = 'BEAM_SEARCH_WITH_LM';
	Decoding[(Decoding['BEAM_SEARCH'] = 3)] = 'BEAM_SEARCH';
})(Decoding || (Decoding = {}));
export var InferenceBackend;
(function (InferenceBackend) {
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_UNKNOWN'] = 0)] = 'INFERENCE_BACKEND_UNKNOWN';
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_PYTORCH'] = 1)] = 'INFERENCE_BACKEND_PYTORCH';
	InferenceBackend[(InferenceBackend['INFERENCE_BACKEND_FLAX'] = 2)] = 'INFERENCE_BACKEND_FLAX';
})(InferenceBackend || (InferenceBackend = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeRequestConfig
 */
export class TranscribeRequestConfig {
	static {
		this.id = 'ondewo.s2t.TranscribeRequestConfig';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscribeRequestConfig();
		TranscribeRequestConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.s2tPipelineId = _instance.s2tPipelineId || '';
		_instance.decoding = _instance.decoding || 0;
		_instance.language = _instance.language || '';
		_instance.task = _instance.task || '';
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
					_instance.s2tPipelineId = _reader.readString();
					break;
				case 2:
					_instance.decoding = _reader.readEnum();
					break;
				case 3:
					_instance.languageModelName = _reader.readString();
					break;
				case 4:
					_instance.postProcessing = new PostProcessingOptions();
					_reader.readMessage(_instance.postProcessing, PostProcessingOptions.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.utteranceDetection = new UtteranceDetectionOptions();
					_reader.readMessage(_instance.utteranceDetection, UtteranceDetectionOptions.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.pyannote = new Pyannote();
					_reader.readMessage(_instance.pyannote, Pyannote.deserializeBinaryFromReader);
					break;
				case 8:
					_instance.returnOptions = new TranscriptionReturnOptions();
					_reader.readMessage(_instance.returnOptions, TranscriptionReturnOptions.deserializeBinaryFromReader);
					break;
				case 9:
					_instance.language = _reader.readString();
					break;
				case 10:
					_instance.task = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		TranscribeRequestConfig.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.s2tPipelineId) {
			_writer.writeString(1, _instance.s2tPipelineId);
		}
		if (_instance.decoding) {
			_writer.writeEnum(2, _instance.decoding);
		}
		if (_instance.languageModelName || _instance.languageModelName === '') {
			_writer.writeString(3, _instance.languageModelName);
		}
		if (_instance.postProcessing) {
			_writer.writeMessage(4, _instance.postProcessing, PostProcessingOptions.serializeBinaryToWriter);
		}
		if (_instance.utteranceDetection) {
			_writer.writeMessage(5, _instance.utteranceDetection, UtteranceDetectionOptions.serializeBinaryToWriter);
		}
		if (_instance.pyannote) {
			_writer.writeMessage(6, _instance.pyannote, Pyannote.serializeBinaryToWriter);
		}
		if (_instance.returnOptions) {
			_writer.writeMessage(8, _instance.returnOptions, TranscriptionReturnOptions.serializeBinaryToWriter);
		}
		if (_instance.language) {
			_writer.writeString(9, _instance.language);
		}
		if (_instance.task) {
			_writer.writeString(10, _instance.task);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeRequestConfig to deeply clone from
	 */
	constructor(_value) {
		this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.none;
		this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.none;
		this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.none;
		this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.none;
		this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.none;
		_value = _value || {};
		this.s2tPipelineId = _value.s2tPipelineId;
		this.decoding = _value.decoding;
		this.languageModelName = _value.languageModelName;
		this.postProcessing = _value.postProcessing ? new PostProcessingOptions(_value.postProcessing) : undefined;
		this.utteranceDetection = _value.utteranceDetection
			? new UtteranceDetectionOptions(_value.utteranceDetection)
			: undefined;
		this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
		this.returnOptions = _value.returnOptions ? new TranscriptionReturnOptions(_value.returnOptions) : undefined;
		this.language = _value.language;
		this.task = _value.task;
		TranscribeRequestConfig.refineValues(this);
	}
	get s2tPipelineId() {
		return this._s2tPipelineId;
	}
	set s2tPipelineId(value) {
		this._s2tPipelineId = value;
	}
	get decoding() {
		return this._decoding;
	}
	set decoding(value) {
		this._decoding = value;
	}
	get languageModelName() {
		return this._languageModelName;
	}
	set languageModelName(value) {
		if (value !== undefined && value !== null) {
			this._oneofLanguageModelName = TranscribeRequestConfig.OneofLanguageModelNameCase.languageModelName;
		}
		this._languageModelName = value;
	}
	get postProcessing() {
		return this._postProcessing;
	}
	set postProcessing(value) {
		if (value !== undefined && value !== null) {
			this._oneofPostProcessing = TranscribeRequestConfig.OneofPostProcessingCase.postProcessing;
		}
		this._postProcessing = value;
	}
	get utteranceDetection() {
		return this._utteranceDetection;
	}
	set utteranceDetection(value) {
		if (value !== undefined && value !== null) {
			this._oneofUtteranceDetection = TranscribeRequestConfig.OneofUtteranceDetectionCase.utteranceDetection;
		}
		this._utteranceDetection = value;
	}
	get pyannote() {
		return this._pyannote;
	}
	set pyannote(value) {
		if (value !== undefined && value !== null) {
			this._voiceActivityDetection = TranscribeRequestConfig.VoiceActivityDetectionCase.pyannote;
		}
		this._pyannote = value;
	}
	get returnOptions() {
		return this._returnOptions;
	}
	set returnOptions(value) {
		if (value !== undefined && value !== null) {
			this._oneofReturnOptions = TranscribeRequestConfig.OneofReturnOptionsCase.returnOptions;
		}
		this._returnOptions = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get task() {
		return this._task;
	}
	set task(value) {
		this._task = value;
	}
	get oneofLanguageModelName() {
		return this._oneofLanguageModelName;
	}
	get oneofPostProcessing() {
		return this._oneofPostProcessing;
	}
	get oneofUtteranceDetection() {
		return this._oneofUtteranceDetection;
	}
	get voiceActivityDetection() {
		return this._voiceActivityDetection;
	}
	get oneofReturnOptions() {
		return this._oneofReturnOptions;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			s2tPipelineId: this.s2tPipelineId,
			decoding: this.decoding,
			languageModelName: this.languageModelName,
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : undefined,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toObject() : undefined,
			pyannote: this.pyannote ? this.pyannote.toObject() : undefined,
			returnOptions: this.returnOptions ? this.returnOptions.toObject() : undefined,
			language: this.language,
			task: this.task
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
			s2tPipelineId: this.s2tPipelineId,
			decoding: Decoding[this.decoding === null || this.decoding === undefined ? 0 : this.decoding],
			languageModelName:
				this.languageModelName === null || this.languageModelName === undefined ? null : this.languageModelName,
			postProcessing: this.postProcessing ? this.postProcessing.toProtobufJSON(options) : null,
			utteranceDetection: this.utteranceDetection ? this.utteranceDetection.toProtobufJSON(options) : null,
			pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null,
			returnOptions: this.returnOptions ? this.returnOptions.toProtobufJSON(options) : null,
			language: this.language,
			task: this.task
		};
	}
}
(function (TranscribeRequestConfig) {
	let OneofLanguageModelNameCase;
	(function (OneofLanguageModelNameCase) {
		OneofLanguageModelNameCase[(OneofLanguageModelNameCase['none'] = 0)] = 'none';
		OneofLanguageModelNameCase[(OneofLanguageModelNameCase['languageModelName'] = 1)] = 'languageModelName';
	})(
		(OneofLanguageModelNameCase =
			TranscribeRequestConfig.OneofLanguageModelNameCase || (TranscribeRequestConfig.OneofLanguageModelNameCase = {}))
	);
	let OneofPostProcessingCase;
	(function (OneofPostProcessingCase) {
		OneofPostProcessingCase[(OneofPostProcessingCase['none'] = 0)] = 'none';
		OneofPostProcessingCase[(OneofPostProcessingCase['postProcessing'] = 1)] = 'postProcessing';
	})(
		(OneofPostProcessingCase =
			TranscribeRequestConfig.OneofPostProcessingCase || (TranscribeRequestConfig.OneofPostProcessingCase = {}))
	);
	let OneofUtteranceDetectionCase;
	(function (OneofUtteranceDetectionCase) {
		OneofUtteranceDetectionCase[(OneofUtteranceDetectionCase['none'] = 0)] = 'none';
		OneofUtteranceDetectionCase[(OneofUtteranceDetectionCase['utteranceDetection'] = 1)] = 'utteranceDetection';
	})(
		(OneofUtteranceDetectionCase =
			TranscribeRequestConfig.OneofUtteranceDetectionCase || (TranscribeRequestConfig.OneofUtteranceDetectionCase = {}))
	);
	let VoiceActivityDetectionCase;
	(function (VoiceActivityDetectionCase) {
		VoiceActivityDetectionCase[(VoiceActivityDetectionCase['none'] = 0)] = 'none';
		VoiceActivityDetectionCase[(VoiceActivityDetectionCase['pyannote'] = 1)] = 'pyannote';
	})(
		(VoiceActivityDetectionCase =
			TranscribeRequestConfig.VoiceActivityDetectionCase || (TranscribeRequestConfig.VoiceActivityDetectionCase = {}))
	);
	let OneofReturnOptionsCase;
	(function (OneofReturnOptionsCase) {
		OneofReturnOptionsCase[(OneofReturnOptionsCase['none'] = 0)] = 'none';
		OneofReturnOptionsCase[(OneofReturnOptionsCase['returnOptions'] = 1)] = 'returnOptions';
	})(
		(OneofReturnOptionsCase =
			TranscribeRequestConfig.OneofReturnOptionsCase || (TranscribeRequestConfig.OneofReturnOptionsCase = {}))
	);
})(TranscribeRequestConfig || (TranscribeRequestConfig = {}));
/**
 * Message implementation for ondewo.s2t.TranscriptionReturnOptions
 */
export class TranscriptionReturnOptions {
	static {
		this.id = 'ondewo.s2t.TranscriptionReturnOptions';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscriptionReturnOptions();
		TranscriptionReturnOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.returnStartOfSpeech = _instance.returnStartOfSpeech || false;
		_instance.returnAudio = _instance.returnAudio || false;
		_instance.returnConfidenceScore = _instance.returnConfidenceScore || false;
		_instance.returnAlternativeTranscriptions = _instance.returnAlternativeTranscriptions || false;
		_instance.returnAlternativeTranscriptionsNr = _instance.returnAlternativeTranscriptionsNr || 0;
		_instance.returnAlternativeWords = _instance.returnAlternativeWords || false;
		_instance.returnAlternativeWordsNr = _instance.returnAlternativeWordsNr || 0;
		_instance.returnWordTiming = _instance.returnWordTiming || false;
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
					_instance.returnStartOfSpeech = _reader.readBool();
					break;
				case 2:
					_instance.returnAudio = _reader.readBool();
					break;
				case 3:
					_instance.returnConfidenceScore = _reader.readBool();
					break;
				case 4:
					_instance.returnAlternativeTranscriptions = _reader.readBool();
					break;
				case 5:
					_instance.returnAlternativeTranscriptionsNr = _reader.readInt32();
					break;
				case 6:
					_instance.returnAlternativeWords = _reader.readBool();
					break;
				case 7:
					_instance.returnAlternativeWordsNr = _reader.readInt32();
					break;
				case 8:
					_instance.returnWordTiming = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		TranscriptionReturnOptions.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.returnStartOfSpeech) {
			_writer.writeBool(1, _instance.returnStartOfSpeech);
		}
		if (_instance.returnAudio) {
			_writer.writeBool(2, _instance.returnAudio);
		}
		if (_instance.returnConfidenceScore) {
			_writer.writeBool(3, _instance.returnConfidenceScore);
		}
		if (_instance.returnAlternativeTranscriptions) {
			_writer.writeBool(4, _instance.returnAlternativeTranscriptions);
		}
		if (_instance.returnAlternativeTranscriptionsNr) {
			_writer.writeInt32(5, _instance.returnAlternativeTranscriptionsNr);
		}
		if (_instance.returnAlternativeWords) {
			_writer.writeBool(6, _instance.returnAlternativeWords);
		}
		if (_instance.returnAlternativeWordsNr) {
			_writer.writeInt32(7, _instance.returnAlternativeWordsNr);
		}
		if (_instance.returnWordTiming) {
			_writer.writeBool(8, _instance.returnWordTiming);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscriptionReturnOptions to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.returnStartOfSpeech = _value.returnStartOfSpeech;
		this.returnAudio = _value.returnAudio;
		this.returnConfidenceScore = _value.returnConfidenceScore;
		this.returnAlternativeTranscriptions = _value.returnAlternativeTranscriptions;
		this.returnAlternativeTranscriptionsNr = _value.returnAlternativeTranscriptionsNr;
		this.returnAlternativeWords = _value.returnAlternativeWords;
		this.returnAlternativeWordsNr = _value.returnAlternativeWordsNr;
		this.returnWordTiming = _value.returnWordTiming;
		TranscriptionReturnOptions.refineValues(this);
	}
	get returnStartOfSpeech() {
		return this._returnStartOfSpeech;
	}
	set returnStartOfSpeech(value) {
		this._returnStartOfSpeech = value;
	}
	get returnAudio() {
		return this._returnAudio;
	}
	set returnAudio(value) {
		this._returnAudio = value;
	}
	get returnConfidenceScore() {
		return this._returnConfidenceScore;
	}
	set returnConfidenceScore(value) {
		this._returnConfidenceScore = value;
	}
	get returnAlternativeTranscriptions() {
		return this._returnAlternativeTranscriptions;
	}
	set returnAlternativeTranscriptions(value) {
		this._returnAlternativeTranscriptions = value;
	}
	get returnAlternativeTranscriptionsNr() {
		return this._returnAlternativeTranscriptionsNr;
	}
	set returnAlternativeTranscriptionsNr(value) {
		this._returnAlternativeTranscriptionsNr = value;
	}
	get returnAlternativeWords() {
		return this._returnAlternativeWords;
	}
	set returnAlternativeWords(value) {
		this._returnAlternativeWords = value;
	}
	get returnAlternativeWordsNr() {
		return this._returnAlternativeWordsNr;
	}
	set returnAlternativeWordsNr(value) {
		this._returnAlternativeWordsNr = value;
	}
	get returnWordTiming() {
		return this._returnWordTiming;
	}
	set returnWordTiming(value) {
		this._returnWordTiming = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			returnStartOfSpeech: this.returnStartOfSpeech,
			returnAudio: this.returnAudio,
			returnConfidenceScore: this.returnConfidenceScore,
			returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
			returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
			returnAlternativeWords: this.returnAlternativeWords,
			returnAlternativeWordsNr: this.returnAlternativeWordsNr,
			returnWordTiming: this.returnWordTiming
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
			returnStartOfSpeech: this.returnStartOfSpeech,
			returnAudio: this.returnAudio,
			returnConfidenceScore: this.returnConfidenceScore,
			returnAlternativeTranscriptions: this.returnAlternativeTranscriptions,
			returnAlternativeTranscriptionsNr: this.returnAlternativeTranscriptionsNr,
			returnAlternativeWords: this.returnAlternativeWords,
			returnAlternativeWordsNr: this.returnAlternativeWordsNr,
			returnWordTiming: this.returnWordTiming
		};
	}
}
/**
 * Message implementation for ondewo.s2t.UtteranceDetectionOptions
 */
export class UtteranceDetectionOptions {
	static {
		this.id = 'ondewo.s2t.UtteranceDetectionOptions';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new UtteranceDetectionOptions();
		UtteranceDetectionOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
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
					_instance.transcribeNotFinal = _reader.readBool();
					break;
				case 2:
					_instance.nextChunkTimeout = _reader.readFloat();
					break;
				default:
					_reader.skipField();
			}
		}
		UtteranceDetectionOptions.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcribeNotFinal || _instance.transcribeNotFinal === false) {
			_writer.writeBool(1, _instance.transcribeNotFinal);
		}
		if (_instance.nextChunkTimeout) {
			_writer.writeFloat(2, _instance.nextChunkTimeout);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UtteranceDetectionOptions to deeply clone from
	 */
	constructor(_value) {
		this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.none;
		_value = _value || {};
		this.transcribeNotFinal = _value.transcribeNotFinal;
		this.nextChunkTimeout = _value.nextChunkTimeout;
		UtteranceDetectionOptions.refineValues(this);
	}
	get transcribeNotFinal() {
		return this._transcribeNotFinal;
	}
	set transcribeNotFinal(value) {
		if (value !== undefined && value !== null) {
			this._oneofTranscribeNotFinal = UtteranceDetectionOptions.OneofTranscribeNotFinalCase.transcribeNotFinal;
		}
		this._transcribeNotFinal = value;
	}
	get nextChunkTimeout() {
		return this._nextChunkTimeout;
	}
	set nextChunkTimeout(value) {
		this._nextChunkTimeout = value;
	}
	get oneofTranscribeNotFinal() {
		return this._oneofTranscribeNotFinal;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			nextChunkTimeout: this.nextChunkTimeout
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
			transcribeNotFinal: this.transcribeNotFinal,
			nextChunkTimeout: this.nextChunkTimeout
		};
	}
}
(function (UtteranceDetectionOptions) {
	let OneofTranscribeNotFinalCase;
	(function (OneofTranscribeNotFinalCase) {
		OneofTranscribeNotFinalCase[(OneofTranscribeNotFinalCase['none'] = 0)] = 'none';
		OneofTranscribeNotFinalCase[(OneofTranscribeNotFinalCase['transcribeNotFinal'] = 1)] = 'transcribeNotFinal';
	})(
		(OneofTranscribeNotFinalCase =
			UtteranceDetectionOptions.OneofTranscribeNotFinalCase ||
			(UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {}))
	);
})(UtteranceDetectionOptions || (UtteranceDetectionOptions = {}));
/**
 * Message implementation for ondewo.s2t.PostProcessingOptions
 */
export class PostProcessingOptions {
	static {
		this.id = 'ondewo.s2t.PostProcessingOptions';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new PostProcessingOptions();
		PostProcessingOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.spellingCorrection = _instance.spellingCorrection || false;
		_instance.normalize = _instance.normalize || false;
		_instance.config = _instance.config || undefined;
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
					_instance.spellingCorrection = _reader.readBool();
					break;
				case 2:
					_instance.normalize = _reader.readBool();
					break;
				case 3:
					_instance.config = new PostProcessing();
					_reader.readMessage(_instance.config, PostProcessing.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		PostProcessingOptions.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.spellingCorrection) {
			_writer.writeBool(1, _instance.spellingCorrection);
		}
		if (_instance.normalize) {
			_writer.writeBool(2, _instance.normalize);
		}
		if (_instance.config) {
			_writer.writeMessage(3, _instance.config, PostProcessing.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PostProcessingOptions to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.spellingCorrection = _value.spellingCorrection;
		this.normalize = _value.normalize;
		this.config = _value.config ? new PostProcessing(_value.config) : undefined;
		PostProcessingOptions.refineValues(this);
	}
	get spellingCorrection() {
		return this._spellingCorrection;
	}
	set spellingCorrection(value) {
		this._spellingCorrection = value;
	}
	get normalize() {
		return this._normalize;
	}
	set normalize(value) {
		this._normalize = value;
	}
	get config() {
		return this._config;
	}
	set config(value) {
		this._config = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessingOptions.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			spellingCorrection: this.spellingCorrection,
			normalize: this.normalize,
			config: this.config ? this.config.toObject() : undefined
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
			spellingCorrection: this.spellingCorrection,
			normalize: this.normalize,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Transcription
 */
export class Transcription {
	static {
		this.id = 'ondewo.s2t.Transcription';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Transcription();
		Transcription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.transcription = _instance.transcription || '';
		_instance.confidenceScore = _instance.confidenceScore || 0;
		_instance.words = _instance.words || [];
		_instance.alternatives = _instance.alternatives || [];
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
					_instance.transcription = _reader.readString();
					break;
				case 2:
					_instance.confidenceScore = _reader.readFloat();
					break;
				case 3:
					const messageInitializer3 = new WordDetail();
					_reader.readMessage(messageInitializer3, WordDetail.deserializeBinaryFromReader);
					(_instance.words = _instance.words || []).push(messageInitializer3);
					break;
				case 4:
					const messageInitializer4 = new TranscriptionAlternative();
					_reader.readMessage(messageInitializer4, TranscriptionAlternative.deserializeBinaryFromReader);
					(_instance.alternatives = _instance.alternatives || []).push(messageInitializer4);
					break;
				default:
					_reader.skipField();
			}
		}
		Transcription.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcription) {
			_writer.writeString(1, _instance.transcription);
		}
		if (_instance.confidenceScore) {
			_writer.writeFloat(2, _instance.confidenceScore);
		}
		if (_instance.words && _instance.words.length) {
			_writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
		}
		if (_instance.alternatives && _instance.alternatives.length) {
			_writer.writeRepeatedMessage(4, _instance.alternatives, TranscriptionAlternative.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Transcription to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcription = _value.transcription;
		this.confidenceScore = _value.confidenceScore;
		this.words = (_value.words || []).map((m) => new WordDetail(m));
		this.alternatives = (_value.alternatives || []).map((m) => new TranscriptionAlternative(m));
		Transcription.refineValues(this);
	}
	get transcription() {
		return this._transcription;
	}
	set transcription(value) {
		this._transcription = value;
	}
	get confidenceScore() {
		return this._confidenceScore;
	}
	set confidenceScore(value) {
		this._confidenceScore = value;
	}
	get words() {
		return this._words;
	}
	set words(value) {
		this._words = value;
	}
	get alternatives() {
		return this._alternatives;
	}
	set alternatives(value) {
		this._alternatives = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Transcription.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcription: this.transcription,
			confidenceScore: this.confidenceScore,
			words: (this.words || []).map((m) => m.toObject()),
			alternatives: (this.alternatives || []).map((m) => m.toObject())
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
			transcription: this.transcription,
			confidenceScore: this.confidenceScore,
			words: (this.words || []).map((m) => m.toProtobufJSON(options)),
			alternatives: (this.alternatives || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.s2t.TranscriptionAlternative
 */
export class TranscriptionAlternative {
	static {
		this.id = 'ondewo.s2t.TranscriptionAlternative';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscriptionAlternative();
		TranscriptionAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.transcript = _instance.transcript || '';
		_instance.confidence = _instance.confidence || 0;
		_instance.words = _instance.words || [];
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
					_instance.transcript = _reader.readString();
					break;
				case 2:
					_instance.confidence = _reader.readFloat();
					break;
				case 3:
					const messageInitializer3 = new WordDetail();
					_reader.readMessage(messageInitializer3, WordDetail.deserializeBinaryFromReader);
					(_instance.words = _instance.words || []).push(messageInitializer3);
					break;
				default:
					_reader.skipField();
			}
		}
		TranscriptionAlternative.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcript) {
			_writer.writeString(1, _instance.transcript);
		}
		if (_instance.confidence) {
			_writer.writeFloat(2, _instance.confidence);
		}
		if (_instance.words && _instance.words.length) {
			_writer.writeRepeatedMessage(3, _instance.words, WordDetail.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscriptionAlternative to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcript = _value.transcript;
		this.confidence = _value.confidence;
		this.words = (_value.words || []).map((m) => new WordDetail(m));
		TranscriptionAlternative.refineValues(this);
	}
	get transcript() {
		return this._transcript;
	}
	set transcript(value) {
		this._transcript = value;
	}
	get confidence() {
		return this._confidence;
	}
	set confidence(value) {
		this._confidence = value;
	}
	get words() {
		return this._words;
	}
	set words(value) {
		this._words = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscriptionAlternative.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcript: this.transcript,
			confidence: this.confidence,
			words: (this.words || []).map((m) => m.toObject())
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
			transcript: this.transcript,
			confidence: this.confidence,
			words: (this.words || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.s2t.WordDetail
 */
export class WordDetail {
	static {
		this.id = 'ondewo.s2t.WordDetail';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new WordDetail();
		WordDetail.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.startTime = _instance.startTime || 0;
		_instance.endTime = _instance.endTime || 0;
		_instance.word = _instance.word || '';
		_instance.confidence = _instance.confidence || 0;
		_instance.wordAlternatives = _instance.wordAlternatives || [];
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
					_instance.startTime = _reader.readFloat();
					break;
				case 2:
					_instance.endTime = _reader.readFloat();
					break;
				case 3:
					_instance.word = _reader.readString();
					break;
				case 4:
					_instance.confidence = _reader.readFloat();
					break;
				case 5:
					const messageInitializer5 = new WordAlternative();
					_reader.readMessage(messageInitializer5, WordAlternative.deserializeBinaryFromReader);
					(_instance.wordAlternatives = _instance.wordAlternatives || []).push(messageInitializer5);
					break;
				default:
					_reader.skipField();
			}
		}
		WordDetail.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.startTime) {
			_writer.writeFloat(1, _instance.startTime);
		}
		if (_instance.endTime) {
			_writer.writeFloat(2, _instance.endTime);
		}
		if (_instance.word) {
			_writer.writeString(3, _instance.word);
		}
		if (_instance.confidence) {
			_writer.writeFloat(4, _instance.confidence);
		}
		if (_instance.wordAlternatives && _instance.wordAlternatives.length) {
			_writer.writeRepeatedMessage(5, _instance.wordAlternatives, WordAlternative.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WordDetail to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.startTime = _value.startTime;
		this.endTime = _value.endTime;
		this.word = _value.word;
		this.confidence = _value.confidence;
		this.wordAlternatives = (_value.wordAlternatives || []).map((m) => new WordAlternative(m));
		WordDetail.refineValues(this);
	}
	get startTime() {
		return this._startTime;
	}
	set startTime(value) {
		this._startTime = value;
	}
	get endTime() {
		return this._endTime;
	}
	set endTime(value) {
		this._endTime = value;
	}
	get word() {
		return this._word;
	}
	set word(value) {
		this._word = value;
	}
	get confidence() {
		return this._confidence;
	}
	set confidence(value) {
		this._confidence = value;
	}
	get wordAlternatives() {
		return this._wordAlternatives;
	}
	set wordAlternatives(value) {
		this._wordAlternatives = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		WordDetail.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			startTime: this.startTime,
			endTime: this.endTime,
			word: this.word,
			confidence: this.confidence,
			wordAlternatives: (this.wordAlternatives || []).map((m) => m.toObject())
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
			startTime: this.startTime,
			endTime: this.endTime,
			word: this.word,
			confidence: this.confidence,
			wordAlternatives: (this.wordAlternatives || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.s2t.WordAlternative
 */
export class WordAlternative {
	static {
		this.id = 'ondewo.s2t.WordAlternative';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new WordAlternative();
		WordAlternative.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.word = _instance.word || '';
		_instance.confidence = _instance.confidence || 0;
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
					_instance.word = _reader.readString();
					break;
				case 2:
					_instance.confidence = _reader.readFloat();
					break;
				default:
					_reader.skipField();
			}
		}
		WordAlternative.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.word) {
			_writer.writeString(1, _instance.word);
		}
		if (_instance.confidence) {
			_writer.writeFloat(2, _instance.confidence);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WordAlternative to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.word = _value.word;
		this.confidence = _value.confidence;
		WordAlternative.refineValues(this);
	}
	get word() {
		return this._word;
	}
	set word(value) {
		this._word = value;
	}
	get confidence() {
		return this._confidence;
	}
	set confidence(value) {
		this._confidence = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		WordAlternative.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			word: this.word,
			confidence: this.confidence
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
			word: this.word,
			confidence: this.confidence
		};
	}
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamRequest
 */
export class TranscribeStreamRequest {
	static {
		this.id = 'ondewo.s2t.TranscribeStreamRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscribeStreamRequest();
		TranscribeStreamRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.audioChunk = _instance.audioChunk || new Uint8Array();
		_instance.endOfStream = _instance.endOfStream || false;
		_instance.config = _instance.config || undefined;
		_instance.muteAudio = _instance.muteAudio || false;
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
					_instance.audioChunk = _reader.readBytes();
					break;
				case 2:
					_instance.endOfStream = _reader.readBool();
					break;
				case 3:
					_instance.config = new TranscribeRequestConfig();
					_reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.muteAudio = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		TranscribeStreamRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioChunk && _instance.audioChunk.length) {
			_writer.writeBytes(1, _instance.audioChunk);
		}
		if (_instance.endOfStream) {
			_writer.writeBool(2, _instance.endOfStream);
		}
		if (_instance.config) {
			_writer.writeMessage(3, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
		}
		if (_instance.muteAudio) {
			_writer.writeBool(4, _instance.muteAudio);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeStreamRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.audioChunk = _value.audioChunk;
		this.endOfStream = _value.endOfStream;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
		this.muteAudio = _value.muteAudio;
		TranscribeStreamRequest.refineValues(this);
	}
	get audioChunk() {
		return this._audioChunk;
	}
	set audioChunk(value) {
		this._audioChunk = value;
	}
	get endOfStream() {
		return this._endOfStream;
	}
	set endOfStream(value) {
		this._endOfStream = value;
	}
	get config() {
		return this._config;
	}
	set config(value) {
		this._config = value;
	}
	get muteAudio() {
		return this._muteAudio;
	}
	set muteAudio(value) {
		this._muteAudio = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			audioChunk: this.audioChunk ? this.audioChunk.subarray(0) : new Uint8Array(),
			endOfStream: this.endOfStream,
			config: this.config ? this.config.toObject() : undefined,
			muteAudio: this.muteAudio
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
			audioChunk: this.audioChunk ? uint8ArrayToBase64(this.audioChunk) : '',
			endOfStream: this.endOfStream,
			config: this.config ? this.config.toProtobufJSON(options) : null,
			muteAudio: this.muteAudio
		};
	}
}
/**
 * Message implementation for ondewo.s2t.TranscribeStreamResponse
 */
export class TranscribeStreamResponse {
	static {
		this.id = 'ondewo.s2t.TranscribeStreamResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscribeStreamResponse();
		TranscribeStreamResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.transcriptions = _instance.transcriptions || [];
		_instance.time = _instance.time || 0;
		_instance.final = _instance.final || false;
		_instance.returnAudio = _instance.returnAudio || false;
		_instance.audio = _instance.audio || new Uint8Array();
		_instance.utteranceStart = _instance.utteranceStart || false;
		_instance.audioUuid = _instance.audioUuid || '';
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
					const messageInitializer1 = new Transcription();
					_reader.readMessage(messageInitializer1, Transcription.deserializeBinaryFromReader);
					(_instance.transcriptions = _instance.transcriptions || []).push(messageInitializer1);
					break;
				case 2:
					_instance.time = _reader.readFloat();
					break;
				case 3:
					_instance.final = _reader.readBool();
					break;
				case 4:
					_instance.returnAudio = _reader.readBool();
					break;
				case 5:
					_instance.audio = _reader.readBytes();
					break;
				case 6:
					_instance.utteranceStart = _reader.readBool();
					break;
				case 7:
					_instance.audioUuid = _reader.readString();
					break;
				case 8:
					_instance.config = new TranscribeRequestConfig();
					_reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		TranscribeStreamResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcriptions && _instance.transcriptions.length) {
			_writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
		}
		if (_instance.time) {
			_writer.writeFloat(2, _instance.time);
		}
		if (_instance.final) {
			_writer.writeBool(3, _instance.final);
		}
		if (_instance.returnAudio) {
			_writer.writeBool(4, _instance.returnAudio);
		}
		if (_instance.audio && _instance.audio.length) {
			_writer.writeBytes(5, _instance.audio);
		}
		if (_instance.utteranceStart) {
			_writer.writeBool(6, _instance.utteranceStart);
		}
		if (_instance.audioUuid) {
			_writer.writeString(7, _instance.audioUuid);
		}
		if (_instance.config) {
			_writer.writeMessage(8, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeStreamResponse to deeply clone from
	 */
	constructor(_value) {
		this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.none;
		_value = _value || {};
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
		this.time = _value.time;
		this.final = _value.final;
		this.returnAudio = _value.returnAudio;
		this.audio = _value.audio;
		this.utteranceStart = _value.utteranceStart;
		this.audioUuid = _value.audioUuid;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
		TranscribeStreamResponse.refineValues(this);
	}
	get transcriptions() {
		return this._transcriptions;
	}
	set transcriptions(value) {
		this._transcriptions = value;
	}
	get time() {
		return this._time;
	}
	set time(value) {
		this._time = value;
	}
	get final() {
		return this._final;
	}
	set final(value) {
		this._final = value;
	}
	get returnAudio() {
		return this._returnAudio;
	}
	set returnAudio(value) {
		this._returnAudio = value;
	}
	get audio() {
		return this._audio;
	}
	set audio(value) {
		this._audio = value;
	}
	get utteranceStart() {
		return this._utteranceStart;
	}
	set utteranceStart(value) {
		this._utteranceStart = value;
	}
	get audioUuid() {
		return this._audioUuid;
	}
	set audioUuid(value) {
		this._audioUuid = value;
	}
	get config() {
		return this._config;
	}
	set config(value) {
		if (value !== undefined && value !== null) {
			this._oneofConfig = TranscribeStreamResponse.OneofConfigCase.config;
		}
		this._config = value;
	}
	get oneofConfig() {
		return this._oneofConfig;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
			time: this.time,
			final: this.final,
			returnAudio: this.returnAudio,
			audio: this.audio ? this.audio.subarray(0) : new Uint8Array(),
			utteranceStart: this.utteranceStart,
			audioUuid: this.audioUuid,
			config: this.config ? this.config.toObject() : undefined
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
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
			time: this.time,
			final: this.final,
			returnAudio: this.returnAudio,
			audio: this.audio ? uint8ArrayToBase64(this.audio) : '',
			utteranceStart: this.utteranceStart,
			audioUuid: this.audioUuid,
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
}
(function (TranscribeStreamResponse) {
	let OneofConfigCase;
	(function (OneofConfigCase) {
		OneofConfigCase[(OneofConfigCase['none'] = 0)] = 'none';
		OneofConfigCase[(OneofConfigCase['config'] = 1)] = 'config';
	})((OneofConfigCase = TranscribeStreamResponse.OneofConfigCase || (TranscribeStreamResponse.OneofConfigCase = {})));
})(TranscribeStreamResponse || (TranscribeStreamResponse = {}));
/**
 * Message implementation for ondewo.s2t.TranscribeFileRequest
 */
export class TranscribeFileRequest {
	static {
		this.id = 'ondewo.s2t.TranscribeFileRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscribeFileRequest();
		TranscribeFileRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.audioFile = _instance.audioFile || new Uint8Array();
		_instance.config = _instance.config || undefined;
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
					_instance.audioFile = _reader.readBytes();
					break;
				case 2:
					_instance.config = new TranscribeRequestConfig();
					_reader.readMessage(_instance.config, TranscribeRequestConfig.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		TranscribeFileRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.audioFile && _instance.audioFile.length) {
			_writer.writeBytes(1, _instance.audioFile);
		}
		if (_instance.config) {
			_writer.writeMessage(2, _instance.config, TranscribeRequestConfig.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeFileRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.audioFile = _value.audioFile;
		this.config = _value.config ? new TranscribeRequestConfig(_value.config) : undefined;
		TranscribeFileRequest.refineValues(this);
	}
	get audioFile() {
		return this._audioFile;
	}
	set audioFile(value) {
		this._audioFile = value;
	}
	get config() {
		return this._config;
	}
	set config(value) {
		this._config = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeFileRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			audioFile: this.audioFile ? this.audioFile.subarray(0) : new Uint8Array(),
			config: this.config ? this.config.toObject() : undefined
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
			audioFile: this.audioFile ? uint8ArrayToBase64(this.audioFile) : '',
			config: this.config ? this.config.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.TranscribeFileResponse
 */
export class TranscribeFileResponse {
	static {
		this.id = 'ondewo.s2t.TranscribeFileResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TranscribeFileResponse();
		TranscribeFileResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.transcriptions = _instance.transcriptions || [];
		_instance.time = _instance.time || 0;
		_instance.audioUuid = _instance.audioUuid || '';
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
					const messageInitializer1 = new Transcription();
					_reader.readMessage(messageInitializer1, Transcription.deserializeBinaryFromReader);
					(_instance.transcriptions = _instance.transcriptions || []).push(messageInitializer1);
					break;
				case 2:
					_instance.time = _reader.readFloat();
					break;
				case 3:
					_instance.audioUuid = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		TranscribeFileResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcriptions && _instance.transcriptions.length) {
			_writer.writeRepeatedMessage(1, _instance.transcriptions, Transcription.serializeBinaryToWriter);
		}
		if (_instance.time) {
			_writer.writeFloat(2, _instance.time);
		}
		if (_instance.audioUuid) {
			_writer.writeString(3, _instance.audioUuid);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TranscribeFileResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcriptions = (_value.transcriptions || []).map((m) => new Transcription(m));
		this.time = _value.time;
		this.audioUuid = _value.audioUuid;
		TranscribeFileResponse.refineValues(this);
	}
	get transcriptions() {
		return this._transcriptions;
	}
	set transcriptions(value) {
		this._transcriptions = value;
	}
	get time() {
		return this._time;
	}
	set time(value) {
		this._time = value;
	}
	get audioUuid() {
		return this._audioUuid;
	}
	set audioUuid(value) {
		this._audioUuid = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TranscribeFileResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcriptions: (this.transcriptions || []).map((m) => m.toObject()),
			time: this.time,
			audioUuid: this.audioUuid
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
			transcriptions: (this.transcriptions || []).map((m) => m.toProtobufJSON(options)),
			time: this.time,
			audioUuid: this.audioUuid
		};
	}
}
/**
 * Message implementation for ondewo.s2t.S2tPipelineId
 */
export class S2tPipelineId {
	static {
		this.id = 'ondewo.s2t.S2tPipelineId';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new S2tPipelineId();
		S2tPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.id = _instance.id || '';
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
					_instance.id = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		S2tPipelineId.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) {
			_writer.writeString(1, _instance.id);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2tPipelineId to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		S2tPipelineId.refineValues(this);
	}
	get id() {
		return this._id;
	}
	set id(value) {
		this._id = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		S2tPipelineId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			id: this.id
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
			id: this.id
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesRequest
 */
export class ListS2tPipelinesRequest {
	static {
		this.id = 'ondewo.s2t.ListS2tPipelinesRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tPipelinesRequest();
		ListS2tPipelinesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
		_instance.domains = _instance.domains || [];
		_instance.registeredOnly = _instance.registeredOnly || false;
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
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				case 2:
					(_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
					break;
				case 3:
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				case 4:
					_instance.registeredOnly = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tPipelinesRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) {
			_writer.writeRepeatedString(1, _instance.languages);
		}
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
			_writer.writeRepeatedString(2, _instance.pipelineOwners);
		}
		if (_instance.domains && _instance.domains.length) {
			_writer.writeRepeatedString(3, _instance.domains);
		}
		if (_instance.registeredOnly) {
			_writer.writeBool(4, _instance.registeredOnly);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tPipelinesRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languages = (_value.languages || []).slice();
		this.pipelineOwners = (_value.pipelineOwners || []).slice();
		this.domains = (_value.domains || []).slice();
		this.registeredOnly = _value.registeredOnly;
		ListS2tPipelinesRequest.refineValues(this);
	}
	get languages() {
		return this._languages;
	}
	set languages(value) {
		this._languages = value;
	}
	get pipelineOwners() {
		return this._pipelineOwners;
	}
	set pipelineOwners(value) {
		this._pipelineOwners = value;
	}
	get domains() {
		return this._domains;
	}
	set domains(value) {
		this._domains = value;
	}
	get registeredOnly() {
		return this._registeredOnly;
	}
	set registeredOnly(value) {
		this._registeredOnly = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			domains: (this.domains || []).slice(),
			registeredOnly: this.registeredOnly
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
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice(),
			domains: (this.domains || []).slice(),
			registeredOnly: this.registeredOnly
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tPipelinesResponse
 */
export class ListS2tPipelinesResponse {
	static {
		this.id = 'ondewo.s2t.ListS2tPipelinesResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tPipelinesResponse();
		ListS2tPipelinesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.pipelineConfigs = _instance.pipelineConfigs || [];
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
					const messageInitializer1 = new Speech2TextConfig();
					_reader.readMessage(messageInitializer1, Speech2TextConfig.deserializeBinaryFromReader);
					(_instance.pipelineConfigs = _instance.pipelineConfigs || []).push(messageInitializer1);
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tPipelinesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelineConfigs && _instance.pipelineConfigs.length) {
			_writer.writeRepeatedMessage(1, _instance.pipelineConfigs, Speech2TextConfig.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tPipelinesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.pipelineConfigs = (_value.pipelineConfigs || []).map((m) => new Speech2TextConfig(m));
		ListS2tPipelinesResponse.refineValues(this);
	}
	get pipelineConfigs() {
		return this._pipelineConfigs;
	}
	set pipelineConfigs(value) {
		this._pipelineConfigs = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toObject())
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
			pipelineConfigs: (this.pipelineConfigs || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesRequest
 */
export class ListS2tLanguagesRequest {
	static {
		this.id = 'ondewo.s2t.ListS2tLanguagesRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguagesRequest();
		ListS2tLanguagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.domains = _instance.domains || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
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
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				case 2:
					(_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tLanguagesRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.domains && _instance.domains.length) {
			_writer.writeRepeatedString(1, _instance.domains);
		}
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
			_writer.writeRepeatedString(2, _instance.pipelineOwners);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tLanguagesRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.domains = (_value.domains || []).slice();
		this.pipelineOwners = (_value.pipelineOwners || []).slice();
		ListS2tLanguagesRequest.refineValues(this);
	}
	get domains() {
		return this._domains;
	}
	set domains(value) {
		this._domains = value;
	}
	get pipelineOwners() {
		return this._pipelineOwners;
	}
	set pipelineOwners(value) {
		this._pipelineOwners = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			domains: (this.domains || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
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
			domains: (this.domains || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguagesResponse
 */
export class ListS2tLanguagesResponse {
	static {
		this.id = 'ondewo.s2t.ListS2tLanguagesResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguagesResponse();
		ListS2tLanguagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
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
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tLanguagesResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) {
			_writer.writeRepeatedString(1, _instance.languages);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tLanguagesResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languages = (_value.languages || []).slice();
		ListS2tLanguagesResponse.refineValues(this);
	}
	get languages() {
		return this._languages;
	}
	set languages(value) {
		this._languages = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languages: (this.languages || []).slice()
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
			languages: (this.languages || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsRequest
 */
export class ListS2tDomainsRequest {
	static {
		this.id = 'ondewo.s2t.ListS2tDomainsRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tDomainsRequest();
		ListS2tDomainsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languages = _instance.languages || [];
		_instance.pipelineOwners = _instance.pipelineOwners || [];
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
					(_instance.languages = _instance.languages || []).push(_reader.readString());
					break;
				case 2:
					(_instance.pipelineOwners = _instance.pipelineOwners || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tDomainsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languages && _instance.languages.length) {
			_writer.writeRepeatedString(1, _instance.languages);
		}
		if (_instance.pipelineOwners && _instance.pipelineOwners.length) {
			_writer.writeRepeatedString(2, _instance.pipelineOwners);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tDomainsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languages = (_value.languages || []).slice();
		this.pipelineOwners = (_value.pipelineOwners || []).slice();
		ListS2tDomainsRequest.refineValues(this);
	}
	get languages() {
		return this._languages;
	}
	set languages(value) {
		this._languages = value;
	}
	get pipelineOwners() {
		return this._pipelineOwners;
	}
	set pipelineOwners(value) {
		this._pipelineOwners = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
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
			languages: (this.languages || []).slice(),
			pipelineOwners: (this.pipelineOwners || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tDomainsResponse
 */
export class ListS2tDomainsResponse {
	static {
		this.id = 'ondewo.s2t.ListS2tDomainsResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tDomainsResponse();
		ListS2tDomainsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.domains = _instance.domains || [];
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
					(_instance.domains = _instance.domains || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tDomainsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.domains && _instance.domains.length) {
			_writer.writeRepeatedString(1, _instance.domains);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tDomainsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.domains = (_value.domains || []).slice();
		ListS2tDomainsResponse.refineValues(this);
	}
	get domains() {
		return this._domains;
	}
	set domains(value) {
		this._domains = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			domains: (this.domains || []).slice()
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
			domains: (this.domains || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.S2TGetServiceInfoResponse
 */
export class S2TGetServiceInfoResponse {
	static {
		this.id = 'ondewo.s2t.S2TGetServiceInfoResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new S2TGetServiceInfoResponse();
		S2TGetServiceInfoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.version = _instance.version || '';
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
					_instance.version = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		S2TGetServiceInfoResponse.refineValues(_instance);
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
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2TGetServiceInfoResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.version = _value.version;
		S2TGetServiceInfoResponse.refineValues(this);
	}
	get version() {
		return this._version;
	}
	set version(value) {
		this._version = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		S2TGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			version: this.version
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
			version: this.version
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Speech2TextConfig
 */
export class Speech2TextConfig {
	static {
		this.id = 'ondewo.s2t.Speech2TextConfig';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Speech2TextConfig();
		Speech2TextConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.id = _instance.id || '';
		_instance.description = _instance.description || undefined;
		_instance.active = _instance.active || false;
		_instance.inference = _instance.inference || undefined;
		_instance.streamingServer = _instance.streamingServer || undefined;
		_instance.voiceActivityDetection = _instance.voiceActivityDetection || undefined;
		_instance.postProcessing = _instance.postProcessing || undefined;
		_instance.logging = _instance.logging || undefined;
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
					_instance.id = _reader.readString();
					break;
				case 2:
					_instance.description = new S2TDescription();
					_reader.readMessage(_instance.description, S2TDescription.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.active = _reader.readBool();
					break;
				case 4:
					_instance.inference = new S2TInference();
					_reader.readMessage(_instance.inference, S2TInference.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.streamingServer = new StreamingServer();
					_reader.readMessage(_instance.streamingServer, StreamingServer.deserializeBinaryFromReader);
					break;
				case 6:
					_instance.voiceActivityDetection = new VoiceActivityDetection();
					_reader.readMessage(_instance.voiceActivityDetection, VoiceActivityDetection.deserializeBinaryFromReader);
					break;
				case 7:
					_instance.postProcessing = new PostProcessing();
					_reader.readMessage(_instance.postProcessing, PostProcessing.deserializeBinaryFromReader);
					break;
				case 8:
					_instance.logging = new Logging();
					_reader.readMessage(_instance.logging, Logging.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		Speech2TextConfig.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.id) {
			_writer.writeString(1, _instance.id);
		}
		if (_instance.description) {
			_writer.writeMessage(2, _instance.description, S2TDescription.serializeBinaryToWriter);
		}
		if (_instance.active) {
			_writer.writeBool(3, _instance.active);
		}
		if (_instance.inference) {
			_writer.writeMessage(4, _instance.inference, S2TInference.serializeBinaryToWriter);
		}
		if (_instance.streamingServer) {
			_writer.writeMessage(5, _instance.streamingServer, StreamingServer.serializeBinaryToWriter);
		}
		if (_instance.voiceActivityDetection) {
			_writer.writeMessage(6, _instance.voiceActivityDetection, VoiceActivityDetection.serializeBinaryToWriter);
		}
		if (_instance.postProcessing) {
			_writer.writeMessage(7, _instance.postProcessing, PostProcessing.serializeBinaryToWriter);
		}
		if (_instance.logging) {
			_writer.writeMessage(8, _instance.logging, Logging.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Speech2TextConfig to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.id = _value.id;
		this.description = _value.description ? new S2TDescription(_value.description) : undefined;
		this.active = _value.active;
		this.inference = _value.inference ? new S2TInference(_value.inference) : undefined;
		this.streamingServer = _value.streamingServer ? new StreamingServer(_value.streamingServer) : undefined;
		this.voiceActivityDetection = _value.voiceActivityDetection
			? new VoiceActivityDetection(_value.voiceActivityDetection)
			: undefined;
		this.postProcessing = _value.postProcessing ? new PostProcessing(_value.postProcessing) : undefined;
		this.logging = _value.logging ? new Logging(_value.logging) : undefined;
		Speech2TextConfig.refineValues(this);
	}
	get id() {
		return this._id;
	}
	set id(value) {
		this._id = value;
	}
	get description() {
		return this._description;
	}
	set description(value) {
		this._description = value;
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get inference() {
		return this._inference;
	}
	set inference(value) {
		this._inference = value;
	}
	get streamingServer() {
		return this._streamingServer;
	}
	set streamingServer(value) {
		this._streamingServer = value;
	}
	get voiceActivityDetection() {
		return this._voiceActivityDetection;
	}
	set voiceActivityDetection(value) {
		this._voiceActivityDetection = value;
	}
	get postProcessing() {
		return this._postProcessing;
	}
	set postProcessing(value) {
		this._postProcessing = value;
	}
	get logging() {
		return this._logging;
	}
	set logging(value) {
		this._logging = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Speech2TextConfig.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			id: this.id,
			description: this.description ? this.description.toObject() : undefined,
			active: this.active,
			inference: this.inference ? this.inference.toObject() : undefined,
			streamingServer: this.streamingServer ? this.streamingServer.toObject() : undefined,
			voiceActivityDetection: this.voiceActivityDetection ? this.voiceActivityDetection.toObject() : undefined,
			postProcessing: this.postProcessing ? this.postProcessing.toObject() : undefined,
			logging: this.logging ? this.logging.toObject() : undefined
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
			id: this.id,
			description: this.description ? this.description.toProtobufJSON(options) : null,
			active: this.active,
			inference: this.inference ? this.inference.toProtobufJSON(options) : null,
			streamingServer: this.streamingServer ? this.streamingServer.toProtobufJSON(options) : null,
			voiceActivityDetection: this.voiceActivityDetection ? this.voiceActivityDetection.toProtobufJSON(options) : null,
			postProcessing: this.postProcessing ? this.postProcessing.toProtobufJSON(options) : null,
			logging: this.logging ? this.logging.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.S2TDescription
 */
export class S2TDescription {
	static {
		this.id = 'ondewo.s2t.S2TDescription';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new S2TDescription();
		S2TDescription.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.language = _instance.language || '';
		_instance.pipelineOwner = _instance.pipelineOwner || '';
		_instance.domain = _instance.domain || '';
		_instance.comments = _instance.comments || '';
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
					_instance.language = _reader.readString();
					break;
				case 2:
					_instance.pipelineOwner = _reader.readString();
					break;
				case 3:
					_instance.domain = _reader.readString();
					break;
				case 4:
					_instance.comments = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		S2TDescription.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) {
			_writer.writeString(1, _instance.language);
		}
		if (_instance.pipelineOwner) {
			_writer.writeString(2, _instance.pipelineOwner);
		}
		if (_instance.domain) {
			_writer.writeString(3, _instance.domain);
		}
		if (_instance.comments) {
			_writer.writeString(4, _instance.comments);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2TDescription to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.pipelineOwner = _value.pipelineOwner;
		this.domain = _value.domain;
		this.comments = _value.comments;
		S2TDescription.refineValues(this);
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get pipelineOwner() {
		return this._pipelineOwner;
	}
	set pipelineOwner(value) {
		this._pipelineOwner = value;
	}
	get domain() {
		return this._domain;
	}
	set domain(value) {
		this._domain = value;
	}
	get comments() {
		return this._comments;
	}
	set comments(value) {
		this._comments = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		S2TDescription.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			language: this.language,
			pipelineOwner: this.pipelineOwner,
			domain: this.domain,
			comments: this.comments
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
			language: this.language,
			pipelineOwner: this.pipelineOwner,
			domain: this.domain,
			comments: this.comments
		};
	}
}
/**
 * Message implementation for ondewo.s2t.S2TInference
 */
export class S2TInference {
	static {
		this.id = 'ondewo.s2t.S2TInference';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new S2TInference();
		S2TInference.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.acousticModels = _instance.acousticModels || undefined;
		_instance.languageModels = _instance.languageModels || undefined;
		_instance.inferenceBackend = _instance.inferenceBackend || 0;
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
					_instance.acousticModels = new AcousticModels();
					_reader.readMessage(_instance.acousticModels, AcousticModels.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.languageModels = new LanguageModels();
					_reader.readMessage(_instance.languageModels, LanguageModels.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.inferenceBackend = _reader.readEnum();
					break;
				default:
					_reader.skipField();
			}
		}
		S2TInference.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.acousticModels) {
			_writer.writeMessage(1, _instance.acousticModels, AcousticModels.serializeBinaryToWriter);
		}
		if (_instance.languageModels) {
			_writer.writeMessage(2, _instance.languageModels, LanguageModels.serializeBinaryToWriter);
		}
		if (_instance.inferenceBackend) {
			_writer.writeEnum(3, _instance.inferenceBackend);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2TInference to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.acousticModels = _value.acousticModels ? new AcousticModels(_value.acousticModels) : undefined;
		this.languageModels = _value.languageModels ? new LanguageModels(_value.languageModels) : undefined;
		this.inferenceBackend = _value.inferenceBackend;
		S2TInference.refineValues(this);
	}
	get acousticModels() {
		return this._acousticModels;
	}
	set acousticModels(value) {
		this._acousticModels = value;
	}
	get languageModels() {
		return this._languageModels;
	}
	set languageModels(value) {
		this._languageModels = value;
	}
	get inferenceBackend() {
		return this._inferenceBackend;
	}
	set inferenceBackend(value) {
		this._inferenceBackend = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		S2TInference.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			acousticModels: this.acousticModels ? this.acousticModels.toObject() : undefined,
			languageModels: this.languageModels ? this.languageModels.toObject() : undefined,
			inferenceBackend: this.inferenceBackend
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
			acousticModels: this.acousticModels ? this.acousticModels.toProtobufJSON(options) : null,
			languageModels: this.languageModels ? this.languageModels.toProtobufJSON(options) : null,
			inferenceBackend:
				InferenceBackend[
					this.inferenceBackend === null || this.inferenceBackend === undefined ? 0 : this.inferenceBackend
				]
		};
	}
}
/**
 * Message implementation for ondewo.s2t.AcousticModels
 */
export class AcousticModels {
	static {
		this.id = 'ondewo.s2t.AcousticModels';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AcousticModels();
		AcousticModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.type = _instance.type || '';
		_instance.wav2vec = _instance.wav2vec || undefined;
		_instance.wav2vecTriton = _instance.wav2vecTriton || undefined;
		_instance.whisper = _instance.whisper || undefined;
		_instance.whisperTriton = _instance.whisperTriton || undefined;
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
					_instance.type = _reader.readString();
					break;
				case 2:
					_instance.wav2vec = new Wav2Vec();
					_reader.readMessage(_instance.wav2vec, Wav2Vec.deserializeBinaryFromReader);
					break;
				case 3:
					_instance.wav2vecTriton = new Wav2VecTriton();
					_reader.readMessage(_instance.wav2vecTriton, Wav2VecTriton.deserializeBinaryFromReader);
					break;
				case 4:
					_instance.whisper = new Whisper();
					_reader.readMessage(_instance.whisper, Whisper.deserializeBinaryFromReader);
					break;
				case 5:
					_instance.whisperTriton = new WhisperTriton();
					_reader.readMessage(_instance.whisperTriton, WhisperTriton.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		AcousticModels.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) {
			_writer.writeString(1, _instance.type);
		}
		if (_instance.wav2vec) {
			_writer.writeMessage(2, _instance.wav2vec, Wav2Vec.serializeBinaryToWriter);
		}
		if (_instance.wav2vecTriton) {
			_writer.writeMessage(3, _instance.wav2vecTriton, Wav2VecTriton.serializeBinaryToWriter);
		}
		if (_instance.whisper) {
			_writer.writeMessage(4, _instance.whisper, Whisper.serializeBinaryToWriter);
		}
		if (_instance.whisperTriton) {
			_writer.writeMessage(5, _instance.whisperTriton, WhisperTriton.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AcousticModels to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.wav2vec = _value.wav2vec ? new Wav2Vec(_value.wav2vec) : undefined;
		this.wav2vecTriton = _value.wav2vecTriton ? new Wav2VecTriton(_value.wav2vecTriton) : undefined;
		this.whisper = _value.whisper ? new Whisper(_value.whisper) : undefined;
		this.whisperTriton = _value.whisperTriton ? new WhisperTriton(_value.whisperTriton) : undefined;
		AcousticModels.refineValues(this);
	}
	get type() {
		return this._type;
	}
	set type(value) {
		this._type = value;
	}
	get wav2vec() {
		return this._wav2vec;
	}
	set wav2vec(value) {
		this._wav2vec = value;
	}
	get wav2vecTriton() {
		return this._wav2vecTriton;
	}
	set wav2vecTriton(value) {
		this._wav2vecTriton = value;
	}
	get whisper() {
		return this._whisper;
	}
	set whisper(value) {
		this._whisper = value;
	}
	get whisperTriton() {
		return this._whisperTriton;
	}
	set whisperTriton(value) {
		this._whisperTriton = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AcousticModels.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			type: this.type,
			wav2vec: this.wav2vec ? this.wav2vec.toObject() : undefined,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toObject() : undefined,
			whisper: this.whisper ? this.whisper.toObject() : undefined,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toObject() : undefined
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
			type: this.type,
			wav2vec: this.wav2vec ? this.wav2vec.toProtobufJSON(options) : null,
			wav2vecTriton: this.wav2vecTriton ? this.wav2vecTriton.toProtobufJSON(options) : null,
			whisper: this.whisper ? this.whisper.toProtobufJSON(options) : null,
			whisperTriton: this.whisperTriton ? this.whisperTriton.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Whisper
 */
export class Whisper {
	static {
		this.id = 'ondewo.s2t.Whisper';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Whisper();
		Whisper.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.modelPath = _instance.modelPath || '';
		_instance.useGpu = _instance.useGpu || false;
		_instance.language = _instance.language || '';
		_instance.task = _instance.task || '';
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
					_instance.modelPath = _reader.readString();
					break;
				case 2:
					_instance.useGpu = _reader.readBool();
					break;
				case 3:
					_instance.language = _reader.readString();
					break;
				case 4:
					_instance.task = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		Whisper.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelPath) {
			_writer.writeString(1, _instance.modelPath);
		}
		if (_instance.useGpu) {
			_writer.writeBool(2, _instance.useGpu);
		}
		if (_instance.language) {
			_writer.writeString(3, _instance.language);
		}
		if (_instance.task) {
			_writer.writeString(4, _instance.task);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Whisper to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.modelPath = _value.modelPath;
		this.useGpu = _value.useGpu;
		this.language = _value.language;
		this.task = _value.task;
		Whisper.refineValues(this);
	}
	get modelPath() {
		return this._modelPath;
	}
	set modelPath(value) {
		this._modelPath = value;
	}
	get useGpu() {
		return this._useGpu;
	}
	set useGpu(value) {
		this._useGpu = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get task() {
		return this._task;
	}
	set task(value) {
		this._task = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Whisper.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu,
			language: this.language,
			task: this.task
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
			modelPath: this.modelPath,
			useGpu: this.useGpu,
			language: this.language,
			task: this.task
		};
	}
}
/**
 * Message implementation for ondewo.s2t.WhisperTriton
 */
export class WhisperTriton {
	static {
		this.id = 'ondewo.s2t.WhisperTriton';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new WhisperTriton();
		WhisperTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.processorPath = _instance.processorPath || '';
		_instance.tritonModelName = _instance.tritonModelName || '';
		_instance.tritonModelVersion = _instance.tritonModelVersion || '';
		_instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
		_instance.language = _instance.language || '';
		_instance.task = _instance.task || '';
		_instance.tritonServerHost = _instance.tritonServerHost || '';
		_instance.tritonServerPort = _instance.tritonServerPort || '0';
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
					_instance.processorPath = _reader.readString();
					break;
				case 2:
					_instance.tritonModelName = _reader.readString();
					break;
				case 3:
					_instance.tritonModelVersion = _reader.readString();
					break;
				case 4:
					_instance.checkStatusTimeout = _reader.readInt64String();
					break;
				case 5:
					_instance.language = _reader.readString();
					break;
				case 6:
					_instance.task = _reader.readString();
					break;
				case 7:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 8:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				default:
					_reader.skipField();
			}
		}
		WhisperTriton.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.processorPath) {
			_writer.writeString(1, _instance.processorPath);
		}
		if (_instance.tritonModelName) {
			_writer.writeString(2, _instance.tritonModelName);
		}
		if (_instance.tritonModelVersion) {
			_writer.writeString(3, _instance.tritonModelVersion);
		}
		if (_instance.checkStatusTimeout) {
			_writer.writeInt64String(4, _instance.checkStatusTimeout);
		}
		if (_instance.language) {
			_writer.writeString(5, _instance.language);
		}
		if (_instance.task) {
			_writer.writeString(6, _instance.task);
		}
		if (_instance.tritonServerHost) {
			_writer.writeString(7, _instance.tritonServerHost);
		}
		if (_instance.tritonServerPort) {
			_writer.writeInt64String(8, _instance.tritonServerPort);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of WhisperTriton to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.processorPath = _value.processorPath;
		this.tritonModelName = _value.tritonModelName;
		this.tritonModelVersion = _value.tritonModelVersion;
		this.checkStatusTimeout = _value.checkStatusTimeout;
		this.language = _value.language;
		this.task = _value.task;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		WhisperTriton.refineValues(this);
	}
	get processorPath() {
		return this._processorPath;
	}
	set processorPath(value) {
		this._processorPath = value;
	}
	get tritonModelName() {
		return this._tritonModelName;
	}
	set tritonModelName(value) {
		this._tritonModelName = value;
	}
	get tritonModelVersion() {
		return this._tritonModelVersion;
	}
	set tritonModelVersion(value) {
		this._tritonModelVersion = value;
	}
	get checkStatusTimeout() {
		return this._checkStatusTimeout;
	}
	set checkStatusTimeout(value) {
		this._checkStatusTimeout = value;
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get task() {
		return this._task;
	}
	set task(value) {
		this._task = value;
	}
	get tritonServerHost() {
		return this._tritonServerHost;
	}
	set tritonServerHost(value) {
		this._tritonServerHost = value;
	}
	get tritonServerPort() {
		return this._tritonServerPort;
	}
	set tritonServerPort(value) {
		this._tritonServerPort = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		WhisperTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			language: this.language,
			task: this.task,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
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
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			language: this.language,
			task: this.task,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Wav2Vec
 */
export class Wav2Vec {
	static {
		this.id = 'ondewo.s2t.Wav2Vec';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Wav2Vec();
		Wav2Vec.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.modelPath = _instance.modelPath || '';
		_instance.useGpu = _instance.useGpu || false;
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
					_instance.modelPath = _reader.readString();
					break;
				case 2:
					_instance.useGpu = _reader.readBool();
					break;
				default:
					_reader.skipField();
			}
		}
		Wav2Vec.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelPath) {
			_writer.writeString(1, _instance.modelPath);
		}
		if (_instance.useGpu) {
			_writer.writeBool(2, _instance.useGpu);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Wav2Vec to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.modelPath = _value.modelPath;
		this.useGpu = _value.useGpu;
		Wav2Vec.refineValues(this);
	}
	get modelPath() {
		return this._modelPath;
	}
	set modelPath(value) {
		this._modelPath = value;
	}
	get useGpu() {
		return this._useGpu;
	}
	set useGpu(value) {
		this._useGpu = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Wav2Vec.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			modelPath: this.modelPath,
			useGpu: this.useGpu
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
			modelPath: this.modelPath,
			useGpu: this.useGpu
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Wav2VecTriton
 */
export class Wav2VecTriton {
	static {
		this.id = 'ondewo.s2t.Wav2VecTriton';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Wav2VecTriton();
		Wav2VecTriton.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.processorPath = _instance.processorPath || '';
		_instance.tritonModelName = _instance.tritonModelName || '';
		_instance.tritonModelVersion = _instance.tritonModelVersion || '';
		_instance.checkStatusTimeout = _instance.checkStatusTimeout || '0';
		_instance.tritonServerHost = _instance.tritonServerHost || '';
		_instance.tritonServerPort = _instance.tritonServerPort || '0';
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
					_instance.processorPath = _reader.readString();
					break;
				case 2:
					_instance.tritonModelName = _reader.readString();
					break;
				case 3:
					_instance.tritonModelVersion = _reader.readString();
					break;
				case 4:
					_instance.checkStatusTimeout = _reader.readInt64String();
					break;
				case 5:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 6:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				default:
					_reader.skipField();
			}
		}
		Wav2VecTriton.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.processorPath) {
			_writer.writeString(1, _instance.processorPath);
		}
		if (_instance.tritonModelName) {
			_writer.writeString(2, _instance.tritonModelName);
		}
		if (_instance.tritonModelVersion) {
			_writer.writeString(3, _instance.tritonModelVersion);
		}
		if (_instance.checkStatusTimeout) {
			_writer.writeInt64String(4, _instance.checkStatusTimeout);
		}
		if (_instance.tritonServerHost) {
			_writer.writeString(5, _instance.tritonServerHost);
		}
		if (_instance.tritonServerPort) {
			_writer.writeInt64String(6, _instance.tritonServerPort);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Wav2VecTriton to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.processorPath = _value.processorPath;
		this.tritonModelName = _value.tritonModelName;
		this.tritonModelVersion = _value.tritonModelVersion;
		this.checkStatusTimeout = _value.checkStatusTimeout;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		Wav2VecTriton.refineValues(this);
	}
	get processorPath() {
		return this._processorPath;
	}
	set processorPath(value) {
		this._processorPath = value;
	}
	get tritonModelName() {
		return this._tritonModelName;
	}
	set tritonModelName(value) {
		this._tritonModelName = value;
	}
	get tritonModelVersion() {
		return this._tritonModelVersion;
	}
	set tritonModelVersion(value) {
		this._tritonModelVersion = value;
	}
	get checkStatusTimeout() {
		return this._checkStatusTimeout;
	}
	set checkStatusTimeout(value) {
		this._checkStatusTimeout = value;
	}
	get tritonServerHost() {
		return this._tritonServerHost;
	}
	set tritonServerHost(value) {
		this._tritonServerHost = value;
	}
	get tritonServerPort() {
		return this._tritonServerPort;
	}
	set tritonServerPort(value) {
		this._tritonServerPort = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Wav2VecTriton.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
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
			processorPath: this.processorPath,
			tritonModelName: this.tritonModelName,
			tritonModelVersion: this.tritonModelVersion,
			checkStatusTimeout: this.checkStatusTimeout,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
}
/**
 * Message implementation for ondewo.s2t.PtFiles
 */
export class PtFiles {
	static {
		this.id = 'ondewo.s2t.PtFiles';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new PtFiles();
		PtFiles.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.path = _instance.path || '';
		_instance.step = _instance.step || '';
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
					_instance.path = _reader.readString();
					break;
				case 2:
					_instance.step = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		PtFiles.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) {
			_writer.writeString(1, _instance.path);
		}
		if (_instance.step) {
			_writer.writeString(2, _instance.step);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PtFiles to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.path = _value.path;
		this.step = _value.step;
		PtFiles.refineValues(this);
	}
	get path() {
		return this._path;
	}
	set path(value) {
		this._path = value;
	}
	get step() {
		return this._step;
	}
	set step(value) {
		this._step = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		PtFiles.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			path: this.path,
			step: this.step
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
			path: this.path,
			step: this.step
		};
	}
}
/**
 * Message implementation for ondewo.s2t.CkptFile
 */
export class CkptFile {
	static {
		this.id = 'ondewo.s2t.CkptFile';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CkptFile();
		CkptFile.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.path = _instance.path || '';
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
					_instance.path = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		CkptFile.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) {
			_writer.writeString(1, _instance.path);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CkptFile to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.path = _value.path;
		CkptFile.refineValues(this);
	}
	get path() {
		return this._path;
	}
	set path(value) {
		this._path = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CkptFile.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			path: this.path
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
			path: this.path
		};
	}
}
/**
 * Message implementation for ondewo.s2t.LanguageModels
 */
export class LanguageModels {
	static {
		this.id = 'ondewo.s2t.LanguageModels';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new LanguageModels();
		LanguageModels.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.path = _instance.path || '';
		_instance.beamSize = _instance.beamSize || '0';
		_instance.defaultLm = _instance.defaultLm || '';
		_instance.beamSearchScorerAlpha = _instance.beamSearchScorerAlpha || 0;
		_instance.beamSearchScorerBeta = _instance.beamSearchScorerBeta || 0;
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
					_instance.path = _reader.readString();
					break;
				case 2:
					_instance.beamSize = _reader.readInt64String();
					break;
				case 3:
					_instance.defaultLm = _reader.readString();
					break;
				case 4:
					_instance.beamSearchScorerAlpha = _reader.readFloat();
					break;
				case 5:
					_instance.beamSearchScorerBeta = _reader.readFloat();
					break;
				default:
					_reader.skipField();
			}
		}
		LanguageModels.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.path) {
			_writer.writeString(1, _instance.path);
		}
		if (_instance.beamSize) {
			_writer.writeInt64String(2, _instance.beamSize);
		}
		if (_instance.defaultLm) {
			_writer.writeString(3, _instance.defaultLm);
		}
		if (_instance.beamSearchScorerAlpha) {
			_writer.writeFloat(4, _instance.beamSearchScorerAlpha);
		}
		if (_instance.beamSearchScorerBeta) {
			_writer.writeFloat(5, _instance.beamSearchScorerBeta);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of LanguageModels to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.path = _value.path;
		this.beamSize = _value.beamSize;
		this.defaultLm = _value.defaultLm;
		this.beamSearchScorerAlpha = _value.beamSearchScorerAlpha;
		this.beamSearchScorerBeta = _value.beamSearchScorerBeta;
		LanguageModels.refineValues(this);
	}
	get path() {
		return this._path;
	}
	set path(value) {
		this._path = value;
	}
	get beamSize() {
		return this._beamSize;
	}
	set beamSize(value) {
		this._beamSize = value;
	}
	get defaultLm() {
		return this._defaultLm;
	}
	set defaultLm(value) {
		this._defaultLm = value;
	}
	get beamSearchScorerAlpha() {
		return this._beamSearchScorerAlpha;
	}
	set beamSearchScorerAlpha(value) {
		this._beamSearchScorerAlpha = value;
	}
	get beamSearchScorerBeta() {
		return this._beamSearchScorerBeta;
	}
	set beamSearchScorerBeta(value) {
		this._beamSearchScorerBeta = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		LanguageModels.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			path: this.path,
			beamSize: this.beamSize,
			defaultLm: this.defaultLm,
			beamSearchScorerAlpha: this.beamSearchScorerAlpha,
			beamSearchScorerBeta: this.beamSearchScorerBeta
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
			path: this.path,
			beamSize: this.beamSize,
			defaultLm: this.defaultLm,
			beamSearchScorerAlpha: this.beamSearchScorerAlpha,
			beamSearchScorerBeta: this.beamSearchScorerBeta
		};
	}
}
/**
 * Message implementation for ondewo.s2t.StreamingServer
 */
export class StreamingServer {
	static {
		this.id = 'ondewo.s2t.StreamingServer';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StreamingServer();
		StreamingServer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.host = _instance.host || '';
		_instance.port = _instance.port || '0';
		_instance.outputStyle = _instance.outputStyle || '';
		_instance.streamingSpeechRecognition = _instance.streamingSpeechRecognition || undefined;
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
					_instance.host = _reader.readString();
					break;
				case 2:
					_instance.port = _reader.readInt64String();
					break;
				case 3:
					_instance.outputStyle = _reader.readString();
					break;
				case 4:
					_instance.streamingSpeechRecognition = new StreamingSpeechRecognition();
					_reader.readMessage(
						_instance.streamingSpeechRecognition,
						StreamingSpeechRecognition.deserializeBinaryFromReader
					);
					break;
				default:
					_reader.skipField();
			}
		}
		StreamingServer.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.host) {
			_writer.writeString(1, _instance.host);
		}
		if (_instance.port) {
			_writer.writeInt64String(2, _instance.port);
		}
		if (_instance.outputStyle) {
			_writer.writeString(3, _instance.outputStyle);
		}
		if (_instance.streamingSpeechRecognition) {
			_writer.writeMessage(4, _instance.streamingSpeechRecognition, StreamingSpeechRecognition.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingServer to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.host = _value.host;
		this.port = _value.port;
		this.outputStyle = _value.outputStyle;
		this.streamingSpeechRecognition = _value.streamingSpeechRecognition
			? new StreamingSpeechRecognition(_value.streamingSpeechRecognition)
			: undefined;
		StreamingServer.refineValues(this);
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
	get outputStyle() {
		return this._outputStyle;
	}
	set outputStyle(value) {
		this._outputStyle = value;
	}
	get streamingSpeechRecognition() {
		return this._streamingSpeechRecognition;
	}
	set streamingSpeechRecognition(value) {
		this._streamingSpeechRecognition = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingServer.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			host: this.host,
			port: this.port,
			outputStyle: this.outputStyle,
			streamingSpeechRecognition: this.streamingSpeechRecognition
				? this.streamingSpeechRecognition.toObject()
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
		options
	) {
		return {
			host: this.host,
			port: this.port,
			outputStyle: this.outputStyle,
			streamingSpeechRecognition: this.streamingSpeechRecognition
				? this.streamingSpeechRecognition.toProtobufJSON(options)
				: null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.StreamingSpeechRecognition
 */
export class StreamingSpeechRecognition {
	static {
		this.id = 'ondewo.s2t.StreamingSpeechRecognition';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new StreamingSpeechRecognition();
		StreamingSpeechRecognition.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.transcribeNotFinal = _instance.transcribeNotFinal || false;
		_instance.decodingMethod = _instance.decodingMethod || '';
		_instance.samplingRate = _instance.samplingRate || '0';
		_instance.minAudioChunkSize = _instance.minAudioChunkSize || '0';
		_instance.nextChunkTimeout = _instance.nextChunkTimeout || 0;
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
					_instance.transcribeNotFinal = _reader.readBool();
					break;
				case 2:
					_instance.decodingMethod = _reader.readString();
					break;
				case 3:
					_instance.samplingRate = _reader.readInt64String();
					break;
				case 4:
					_instance.minAudioChunkSize = _reader.readInt64String();
					break;
				case 5:
					_instance.nextChunkTimeout = _reader.readFloat();
					break;
				default:
					_reader.skipField();
			}
		}
		StreamingSpeechRecognition.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.transcribeNotFinal) {
			_writer.writeBool(1, _instance.transcribeNotFinal);
		}
		if (_instance.decodingMethod) {
			_writer.writeString(2, _instance.decodingMethod);
		}
		if (_instance.samplingRate) {
			_writer.writeInt64String(3, _instance.samplingRate);
		}
		if (_instance.minAudioChunkSize) {
			_writer.writeInt64String(4, _instance.minAudioChunkSize);
		}
		if (_instance.nextChunkTimeout) {
			_writer.writeFloat(5, _instance.nextChunkTimeout);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of StreamingSpeechRecognition to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.transcribeNotFinal = _value.transcribeNotFinal;
		this.decodingMethod = _value.decodingMethod;
		this.samplingRate = _value.samplingRate;
		this.minAudioChunkSize = _value.minAudioChunkSize;
		this.nextChunkTimeout = _value.nextChunkTimeout;
		StreamingSpeechRecognition.refineValues(this);
	}
	get transcribeNotFinal() {
		return this._transcribeNotFinal;
	}
	set transcribeNotFinal(value) {
		this._transcribeNotFinal = value;
	}
	get decodingMethod() {
		return this._decodingMethod;
	}
	set decodingMethod(value) {
		this._decodingMethod = value;
	}
	get samplingRate() {
		return this._samplingRate;
	}
	set samplingRate(value) {
		this._samplingRate = value;
	}
	get minAudioChunkSize() {
		return this._minAudioChunkSize;
	}
	set minAudioChunkSize(value) {
		this._minAudioChunkSize = value;
	}
	get nextChunkTimeout() {
		return this._nextChunkTimeout;
	}
	set nextChunkTimeout(value) {
		this._nextChunkTimeout = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			transcribeNotFinal: this.transcribeNotFinal,
			decodingMethod: this.decodingMethod,
			samplingRate: this.samplingRate,
			minAudioChunkSize: this.minAudioChunkSize,
			nextChunkTimeout: this.nextChunkTimeout
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
			transcribeNotFinal: this.transcribeNotFinal,
			decodingMethod: this.decodingMethod,
			samplingRate: this.samplingRate,
			minAudioChunkSize: this.minAudioChunkSize,
			nextChunkTimeout: this.nextChunkTimeout
		};
	}
}
/**
 * Message implementation for ondewo.s2t.VoiceActivityDetection
 */
export class VoiceActivityDetection {
	static {
		this.id = 'ondewo.s2t.VoiceActivityDetection';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new VoiceActivityDetection();
		VoiceActivityDetection.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.active = _instance.active || '';
		_instance.samplingRate = _instance.samplingRate || '0';
		_instance.pyannote = _instance.pyannote || undefined;
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
					_instance.active = _reader.readString();
					break;
				case 2:
					_instance.samplingRate = _reader.readInt64String();
					break;
				case 3:
					_instance.pyannote = new Pyannote();
					_reader.readMessage(_instance.pyannote, Pyannote.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		VoiceActivityDetection.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.active) {
			_writer.writeString(1, _instance.active);
		}
		if (_instance.samplingRate) {
			_writer.writeInt64String(2, _instance.samplingRate);
		}
		if (_instance.pyannote) {
			_writer.writeMessage(3, _instance.pyannote, Pyannote.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of VoiceActivityDetection to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.active = _value.active;
		this.samplingRate = _value.samplingRate;
		this.pyannote = _value.pyannote ? new Pyannote(_value.pyannote) : undefined;
		VoiceActivityDetection.refineValues(this);
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	get samplingRate() {
		return this._samplingRate;
	}
	set samplingRate(value) {
		this._samplingRate = value;
	}
	get pyannote() {
		return this._pyannote;
	}
	set pyannote(value) {
		this._pyannote = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		VoiceActivityDetection.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			active: this.active,
			samplingRate: this.samplingRate,
			pyannote: this.pyannote ? this.pyannote.toObject() : undefined
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
			active: this.active,
			samplingRate: this.samplingRate,
			pyannote: this.pyannote ? this.pyannote.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Pyannote
 */
export class Pyannote {
	static {
		this.id = 'ondewo.s2t.Pyannote';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Pyannote();
		Pyannote.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.modelName = _instance.modelName || '';
		_instance.minAudioSize = _instance.minAudioSize || '0';
		_instance.minDurationOff = _instance.minDurationOff || 0;
		_instance.minDurationOn = _instance.minDurationOn || 0;
		_instance.tritonServerHost = _instance.tritonServerHost || '';
		_instance.tritonServerPort = _instance.tritonServerPort || '0';
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
					_instance.modelName = _reader.readString();
					break;
				case 2:
					_instance.minAudioSize = _reader.readInt64String();
					break;
				case 3:
					_instance.minDurationOff = _reader.readFloat();
					break;
				case 4:
					_instance.minDurationOn = _reader.readFloat();
					break;
				case 5:
					_instance.tritonServerHost = _reader.readString();
					break;
				case 6:
					_instance.tritonServerPort = _reader.readInt64String();
					break;
				default:
					_reader.skipField();
			}
		}
		Pyannote.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.modelName) {
			_writer.writeString(1, _instance.modelName);
		}
		if (_instance.minAudioSize) {
			_writer.writeInt64String(2, _instance.minAudioSize);
		}
		if (_instance.minDurationOff) {
			_writer.writeFloat(3, _instance.minDurationOff);
		}
		if (_instance.minDurationOn) {
			_writer.writeFloat(4, _instance.minDurationOn);
		}
		if (_instance.tritonServerHost) {
			_writer.writeString(5, _instance.tritonServerHost);
		}
		if (_instance.tritonServerPort) {
			_writer.writeInt64String(6, _instance.tritonServerPort);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Pyannote to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.modelName = _value.modelName;
		this.minAudioSize = _value.minAudioSize;
		this.minDurationOff = _value.minDurationOff;
		this.minDurationOn = _value.minDurationOn;
		this.tritonServerHost = _value.tritonServerHost;
		this.tritonServerPort = _value.tritonServerPort;
		Pyannote.refineValues(this);
	}
	get modelName() {
		return this._modelName;
	}
	set modelName(value) {
		this._modelName = value;
	}
	get minAudioSize() {
		return this._minAudioSize;
	}
	set minAudioSize(value) {
		this._minAudioSize = value;
	}
	get minDurationOff() {
		return this._minDurationOff;
	}
	set minDurationOff(value) {
		this._minDurationOff = value;
	}
	get minDurationOn() {
		return this._minDurationOn;
	}
	set minDurationOn(value) {
		this._minDurationOn = value;
	}
	get tritonServerHost() {
		return this._tritonServerHost;
	}
	set tritonServerHost(value) {
		this._tritonServerHost = value;
	}
	get tritonServerPort() {
		return this._tritonServerPort;
	}
	set tritonServerPort(value) {
		this._tritonServerPort = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Pyannote.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			modelName: this.modelName,
			minAudioSize: this.minAudioSize,
			minDurationOff: this.minDurationOff,
			minDurationOn: this.minDurationOn,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
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
			modelName: this.modelName,
			minAudioSize: this.minAudioSize,
			minDurationOff: this.minDurationOff,
			minDurationOn: this.minDurationOn,
			tritonServerHost: this.tritonServerHost,
			tritonServerPort: this.tritonServerPort
		};
	}
}
/**
 * Message implementation for ondewo.s2t.PostProcessing
 */
export class PostProcessing {
	static {
		this.id = 'ondewo.s2t.PostProcessing';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new PostProcessing();
		PostProcessing.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.pipeline = _instance.pipeline || [];
		_instance.postProcessors = _instance.postProcessors || undefined;
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
					(_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
					break;
				case 2:
					_instance.postProcessors = new PostProcessors();
					_reader.readMessage(_instance.postProcessors, PostProcessors.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		PostProcessing.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipeline && _instance.pipeline.length) {
			_writer.writeRepeatedString(1, _instance.pipeline);
		}
		if (_instance.postProcessors) {
			_writer.writeMessage(2, _instance.postProcessors, PostProcessors.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PostProcessing to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.pipeline = (_value.pipeline || []).slice();
		this.postProcessors = _value.postProcessors ? new PostProcessors(_value.postProcessors) : undefined;
		PostProcessing.refineValues(this);
	}
	get pipeline() {
		return this._pipeline;
	}
	set pipeline(value) {
		this._pipeline = value;
	}
	get postProcessors() {
		return this._postProcessors;
	}
	set postProcessors(value) {
		this._postProcessors = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessing.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			pipeline: (this.pipeline || []).slice(),
			postProcessors: this.postProcessors ? this.postProcessors.toObject() : undefined
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
			pipeline: (this.pipeline || []).slice(),
			postProcessors: this.postProcessors ? this.postProcessors.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.PostProcessors
 */
export class PostProcessors {
	static {
		this.id = 'ondewo.s2t.PostProcessors';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new PostProcessors();
		PostProcessors.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.symSpell = _instance.symSpell || undefined;
		_instance.normalization = _instance.normalization || undefined;
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
					_instance.symSpell = new SymSpell();
					_reader.readMessage(_instance.symSpell, SymSpell.deserializeBinaryFromReader);
					break;
				case 2:
					_instance.normalization = new S2TNormalization();
					_reader.readMessage(_instance.normalization, S2TNormalization.deserializeBinaryFromReader);
					break;
				default:
					_reader.skipField();
			}
		}
		PostProcessors.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.symSpell) {
			_writer.writeMessage(1, _instance.symSpell, SymSpell.serializeBinaryToWriter);
		}
		if (_instance.normalization) {
			_writer.writeMessage(2, _instance.normalization, S2TNormalization.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of PostProcessors to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.symSpell = _value.symSpell ? new SymSpell(_value.symSpell) : undefined;
		this.normalization = _value.normalization ? new S2TNormalization(_value.normalization) : undefined;
		PostProcessors.refineValues(this);
	}
	get symSpell() {
		return this._symSpell;
	}
	set symSpell(value) {
		this._symSpell = value;
	}
	get normalization() {
		return this._normalization;
	}
	set normalization(value) {
		this._normalization = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		PostProcessors.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			symSpell: this.symSpell ? this.symSpell.toObject() : undefined,
			normalization: this.normalization ? this.normalization.toObject() : undefined
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
			symSpell: this.symSpell ? this.symSpell.toProtobufJSON(options) : null,
			normalization: this.normalization ? this.normalization.toProtobufJSON(options) : null
		};
	}
}
/**
 * Message implementation for ondewo.s2t.SymSpell
 */
export class SymSpell {
	static {
		this.id = 'ondewo.s2t.SymSpell';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new SymSpell();
		SymSpell.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.dictPath = _instance.dictPath || '';
		_instance.maxDictionaryEditDistance = _instance.maxDictionaryEditDistance || '0';
		_instance.prefixLength = _instance.prefixLength || '0';
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
					_instance.dictPath = _reader.readString();
					break;
				case 2:
					_instance.maxDictionaryEditDistance = _reader.readInt64String();
					break;
				case 3:
					_instance.prefixLength = _reader.readInt64String();
					break;
				default:
					_reader.skipField();
			}
		}
		SymSpell.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.dictPath) {
			_writer.writeString(1, _instance.dictPath);
		}
		if (_instance.maxDictionaryEditDistance) {
			_writer.writeInt64String(2, _instance.maxDictionaryEditDistance);
		}
		if (_instance.prefixLength) {
			_writer.writeInt64String(3, _instance.prefixLength);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of SymSpell to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.dictPath = _value.dictPath;
		this.maxDictionaryEditDistance = _value.maxDictionaryEditDistance;
		this.prefixLength = _value.prefixLength;
		SymSpell.refineValues(this);
	}
	get dictPath() {
		return this._dictPath;
	}
	set dictPath(value) {
		this._dictPath = value;
	}
	get maxDictionaryEditDistance() {
		return this._maxDictionaryEditDistance;
	}
	set maxDictionaryEditDistance(value) {
		this._maxDictionaryEditDistance = value;
	}
	get prefixLength() {
		return this._prefixLength;
	}
	set prefixLength(value) {
		this._prefixLength = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		SymSpell.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			dictPath: this.dictPath,
			maxDictionaryEditDistance: this.maxDictionaryEditDistance,
			prefixLength: this.prefixLength
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
			dictPath: this.dictPath,
			maxDictionaryEditDistance: this.maxDictionaryEditDistance,
			prefixLength: this.prefixLength
		};
	}
}
/**
 * Message implementation for ondewo.s2t.S2TNormalization
 */
export class S2TNormalization {
	static {
		this.id = 'ondewo.s2t.S2TNormalization';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new S2TNormalization();
		S2TNormalization.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.language = _instance.language || '';
		_instance.pipeline = _instance.pipeline || [];
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
					_instance.language = _reader.readString();
					break;
				case 2:
					(_instance.pipeline = _instance.pipeline || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		S2TNormalization.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.language) {
			_writer.writeString(1, _instance.language);
		}
		if (_instance.pipeline && _instance.pipeline.length) {
			_writer.writeRepeatedString(2, _instance.pipeline);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of S2TNormalization to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.language = _value.language;
		this.pipeline = (_value.pipeline || []).slice();
		S2TNormalization.refineValues(this);
	}
	get language() {
		return this._language;
	}
	set language(value) {
		this._language = value;
	}
	get pipeline() {
		return this._pipeline;
	}
	set pipeline(value) {
		this._pipeline = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		S2TNormalization.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			language: this.language,
			pipeline: (this.pipeline || []).slice()
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
			language: this.language,
			pipeline: (this.pipeline || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.Logging
 */
export class Logging {
	static {
		this.id = 'ondewo.s2t.Logging';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new Logging();
		Logging.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.type = _instance.type || '';
		_instance.path = _instance.path || '';
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
					_instance.type = _reader.readString();
					break;
				case 2:
					_instance.path = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		Logging.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.type) {
			_writer.writeString(1, _instance.type);
		}
		if (_instance.path) {
			_writer.writeString(2, _instance.path);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Logging to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.type = _value.type;
		this.path = _value.path;
		Logging.refineValues(this);
	}
	get type() {
		return this._type;
	}
	set type(value) {
		this._type = value;
	}
	get path() {
		return this._path;
	}
	set path(value) {
		this._path = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		Logging.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			type: this.type,
			path: this.path
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
			type: this.type,
			path: this.path
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsRequest
 */
export class ListS2tLanguageModelsRequest {
	static {
		this.id = 'ondewo.s2t.ListS2tLanguageModelsRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguageModelsRequest();
		ListS2tLanguageModelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.ids = _instance.ids || [];
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
					(_instance.ids = _instance.ids || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tLanguageModelsRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.ids && _instance.ids.length) {
			_writer.writeRepeatedString(1, _instance.ids);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tLanguageModelsRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.ids = (_value.ids || []).slice();
		ListS2tLanguageModelsRequest.refineValues(this);
	}
	get ids() {
		return this._ids;
	}
	set ids(value) {
		this._ids = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguageModelsRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			ids: (this.ids || []).slice()
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
			ids: (this.ids || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.LanguageModelPipelineId
 */
export class LanguageModelPipelineId {
	static {
		this.id = 'ondewo.s2t.LanguageModelPipelineId';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new LanguageModelPipelineId();
		LanguageModelPipelineId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.pipelineId = _instance.pipelineId || '';
		_instance.modelNames = _instance.modelNames || [];
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
					_instance.pipelineId = _reader.readString();
					break;
				case 2:
					(_instance.modelNames = _instance.modelNames || []).push(_reader.readString());
					break;
				default:
					_reader.skipField();
			}
		}
		LanguageModelPipelineId.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.pipelineId) {
			_writer.writeString(1, _instance.pipelineId);
		}
		if (_instance.modelNames && _instance.modelNames.length) {
			_writer.writeRepeatedString(2, _instance.modelNames);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of LanguageModelPipelineId to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.pipelineId = _value.pipelineId;
		this.modelNames = (_value.modelNames || []).slice();
		LanguageModelPipelineId.refineValues(this);
	}
	get pipelineId() {
		return this._pipelineId;
	}
	set pipelineId(value) {
		this._pipelineId = value;
	}
	get modelNames() {
		return this._modelNames;
	}
	set modelNames(value) {
		this._modelNames = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		LanguageModelPipelineId.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			pipelineId: this.pipelineId,
			modelNames: (this.modelNames || []).slice()
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
			pipelineId: this.pipelineId,
			modelNames: (this.modelNames || []).slice()
		};
	}
}
/**
 * Message implementation for ondewo.s2t.ListS2tLanguageModelsResponse
 */
export class ListS2tLanguageModelsResponse {
	static {
		this.id = 'ondewo.s2t.ListS2tLanguageModelsResponse';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new ListS2tLanguageModelsResponse();
		ListS2tLanguageModelsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.lmPipelineIds = _instance.lmPipelineIds || [];
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
					const messageInitializer1 = new LanguageModelPipelineId();
					_reader.readMessage(messageInitializer1, LanguageModelPipelineId.deserializeBinaryFromReader);
					(_instance.lmPipelineIds = _instance.lmPipelineIds || []).push(messageInitializer1);
					break;
				default:
					_reader.skipField();
			}
		}
		ListS2tLanguageModelsResponse.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.lmPipelineIds && _instance.lmPipelineIds.length) {
			_writer.writeRepeatedMessage(1, _instance.lmPipelineIds, LanguageModelPipelineId.serializeBinaryToWriter);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListS2tLanguageModelsResponse to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.lmPipelineIds = (_value.lmPipelineIds || []).map((m) => new LanguageModelPipelineId(m));
		ListS2tLanguageModelsResponse.refineValues(this);
	}
	get lmPipelineIds() {
		return this._lmPipelineIds;
	}
	set lmPipelineIds(value) {
		this._lmPipelineIds = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		ListS2tLanguageModelsResponse.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toObject())
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
			lmPipelineIds: (this.lmPipelineIds || []).map((m) => m.toProtobufJSON(options))
		};
	}
}
/**
 * Message implementation for ondewo.s2t.CreateUserLanguageModelRequest
 */
export class CreateUserLanguageModelRequest {
	static {
		this.id = 'ondewo.s2t.CreateUserLanguageModelRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new CreateUserLanguageModelRequest();
		CreateUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || '';
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
					_instance.languageModelName = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		CreateUserLanguageModelRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) {
			_writer.writeString(1, _instance.languageModelName);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateUserLanguageModelRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageModelName = _value.languageModelName;
		CreateUserLanguageModelRequest.refineValues(this);
	}
	get languageModelName() {
		return this._languageModelName;
	}
	set languageModelName(value) {
		this._languageModelName = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		CreateUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageModelName: this.languageModelName
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
			languageModelName: this.languageModelName
		};
	}
}
/**
 * Message implementation for ondewo.s2t.DeleteUserLanguageModelRequest
 */
export class DeleteUserLanguageModelRequest {
	static {
		this.id = 'ondewo.s2t.DeleteUserLanguageModelRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new DeleteUserLanguageModelRequest();
		DeleteUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || '';
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
					_instance.languageModelName = _reader.readString();
					break;
				default:
					_reader.skipField();
			}
		}
		DeleteUserLanguageModelRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) {
			_writer.writeString(1, _instance.languageModelName);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteUserLanguageModelRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageModelName = _value.languageModelName;
		DeleteUserLanguageModelRequest.refineValues(this);
	}
	get languageModelName() {
		return this._languageModelName;
	}
	set languageModelName(value) {
		this._languageModelName = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		DeleteUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageModelName: this.languageModelName
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
			languageModelName: this.languageModelName
		};
	}
}
/**
 * Message implementation for ondewo.s2t.AddDataToUserLanguageModelRequest
 */
export class AddDataToUserLanguageModelRequest {
	static {
		this.id = 'ondewo.s2t.AddDataToUserLanguageModelRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new AddDataToUserLanguageModelRequest();
		AddDataToUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || '';
		_instance.zippedData = _instance.zippedData || new Uint8Array();
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
					_instance.languageModelName = _reader.readString();
					break;
				case 2:
					_instance.zippedData = _reader.readBytes();
					break;
				default:
					_reader.skipField();
			}
		}
		AddDataToUserLanguageModelRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) {
			_writer.writeString(1, _instance.languageModelName);
		}
		if (_instance.zippedData && _instance.zippedData.length) {
			_writer.writeBytes(2, _instance.zippedData);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of AddDataToUserLanguageModelRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageModelName = _value.languageModelName;
		this.zippedData = _value.zippedData;
		AddDataToUserLanguageModelRequest.refineValues(this);
	}
	get languageModelName() {
		return this._languageModelName;
	}
	set languageModelName(value) {
		this._languageModelName = value;
	}
	get zippedData() {
		return this._zippedData;
	}
	set zippedData(value) {
		this._zippedData = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		AddDataToUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageModelName: this.languageModelName,
			zippedData: this.zippedData ? this.zippedData.subarray(0) : new Uint8Array()
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
			languageModelName: this.languageModelName,
			zippedData: this.zippedData ? uint8ArrayToBase64(this.zippedData) : ''
		};
	}
}
/**
 * Message implementation for ondewo.s2t.TrainUserLanguageModelRequest
 */
export class TrainUserLanguageModelRequest {
	static {
		this.id = 'ondewo.s2t.TrainUserLanguageModelRequest';
	}
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes) {
		const instance = new TrainUserLanguageModelRequest();
		TrainUserLanguageModelRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
		return instance;
	}
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance) {
		_instance.languageModelName = _instance.languageModelName || '';
		_instance.order = _instance.order || '0';
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
					_instance.languageModelName = _reader.readString();
					break;
				case 2:
					_instance.order = _reader.readInt64String();
					break;
				default:
					_reader.skipField();
			}
		}
		TrainUserLanguageModelRequest.refineValues(_instance);
	}
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance, _writer) {
		if (_instance.languageModelName) {
			_writer.writeString(1, _instance.languageModelName);
		}
		if (_instance.order) {
			_writer.writeInt64String(2, _instance.order);
		}
	}
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrainUserLanguageModelRequest to deeply clone from
	 */
	constructor(_value) {
		_value = _value || {};
		this.languageModelName = _value.languageModelName;
		this.order = _value.order;
		TrainUserLanguageModelRequest.refineValues(this);
	}
	get languageModelName() {
		return this._languageModelName;
	}
	set languageModelName(value) {
		this._languageModelName = value;
	}
	get order() {
		return this._order;
	}
	set order(value) {
		this._order = value;
	}
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary() {
		const writer = new BinaryWriter();
		TrainUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject() {
		return {
			languageModelName: this.languageModelName,
			order: this.order
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
			languageModelName: this.languageModelName,
			order: this.order
		};
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXRvLXRleHQucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3MydC9zcGVlY2gtdG8tdGV4dC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBSUwsa0JBQWtCLEVBQ25CLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxNQUFNLENBQU4sSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLDZDQUFXLENBQUE7SUFDWCwyQ0FBVSxDQUFBO0lBQ1YscUVBQXVCLENBQUE7SUFDdkIscURBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTFcsUUFBUSxLQUFSLFFBQVEsUUFLbkI7QUFDRCxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLGlHQUE2QixDQUFBO0lBQzdCLGlHQUE2QixDQUFBO0lBQzdCLDJGQUEwQixDQUFBO0FBQzVCLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCO0FBQ0Q7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO2FBQzNCLE9BQUUsR0FBRyxvQ0FBb0MsQUFBdkMsQ0FBd0M7SUFFakQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUMvQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDakQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0M7UUFDcEQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4RCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBRTdDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDOUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBa0MsRUFDbEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDL0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ25ELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsY0FBYyxFQUN4QixxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDbEQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO29CQUMvRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsa0JBQWtCLEVBQzVCLHlCQUF5QixDQUFDLDJCQUEyQixDQUN0RCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsUUFBUSxDQUFDLDJCQUEyQixDQUNyQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO29CQUMzRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsYUFBYSxFQUN2QiwwQkFBMEIsQ0FBQywyQkFBMkIsQ0FDdkQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLEVBQUU7b0JBQ0wsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxTQUFTLENBQUMsaUJBQWlCLElBQUksU0FBUyxDQUFDLGlCQUFpQixLQUFLLEVBQUUsRUFBRTtZQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGNBQXFCLEVBQy9CLHFCQUFxQixDQUFDLHVCQUF1QixDQUM5QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGtCQUF5QixFQUNuQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FDbEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsUUFBZSxFQUN6QixRQUFRLENBQUMsdUJBQXVCLENBQ2pDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGFBQW9CLEVBQzlCLDBCQUEwQixDQUFDLHVCQUF1QixDQUNuRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUF1QkQ7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQWYvRCw0QkFBdUIsR0FDN0IsdUJBQXVCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDO1FBQ2xELHlCQUFvQixHQUMxQix1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7UUFDL0MsNkJBQXdCLEdBQzlCLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQztRQUNuRCw0QkFBdUIsR0FDN0IsdUJBQXVCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDO1FBQ2xELHdCQUFtQixHQUN6Qix1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7UUFPcEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUkscUJBQXFCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUNsRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0I7WUFDakQsQ0FBQyxDQUFDLElBQUkseUJBQXlCLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQzFELENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWE7WUFDdkMsQ0FBQyxDQUFDLElBQUksMEJBQTBCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN0RCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4Qix1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFlO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyx1QkFBdUI7Z0JBQzFCLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBd0M7UUFDekQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLG9CQUFvQjtnQkFDdkIsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQTRDO1FBQ2pFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyx3QkFBd0I7Z0JBQzNCLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUEyQjtRQUN0QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsdUJBQXVCO2dCQUMxQix1QkFBdUIsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUE2QztRQUM3RCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CO2dCQUN0Qix1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsU0FBUztZQUNiLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO2dCQUNwQyxDQUFDLENBQUMsU0FBUztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzlELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxRQUFRLEVBQ04sUUFBUSxDQUNOLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2xCO1lBQ0gsaUJBQWlCLEVBQ2YsSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUztnQkFDckUsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsSUFBSTtZQUNSLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDakQsQ0FBQyxDQUFDLElBQUk7WUFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDdEUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsSUFBSTtZQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7O0FBRUgsV0FBYyx1QkFBdUI7SUE4Qm5DLElBQVksMEJBR1g7SUFIRCxXQUFZLDBCQUEwQjtRQUNwQywyRUFBUSxDQUFBO1FBQ1IscUdBQXFCLENBQUE7SUFDdkIsQ0FBQyxFQUhXLDBCQUEwQixHQUExQixrREFBMEIsS0FBMUIsa0RBQTBCLFFBR3JDO0lBQ0QsSUFBWSx1QkFHWDtJQUhELFdBQVksdUJBQXVCO1FBQ2pDLHFFQUFRLENBQUE7UUFDUix5RkFBa0IsQ0FBQTtJQUNwQixDQUFDLEVBSFcsdUJBQXVCLEdBQXZCLCtDQUF1QixLQUF2QiwrQ0FBdUIsUUFHbEM7SUFDRCxJQUFZLDJCQUdYO0lBSEQsV0FBWSwyQkFBMkI7UUFDckMsNkVBQVEsQ0FBQTtRQUNSLHlHQUFzQixDQUFBO0lBQ3hCLENBQUMsRUFIVywyQkFBMkIsR0FBM0IsbURBQTJCLEtBQTNCLG1EQUEyQixRQUd0QztJQUNELElBQVksMEJBR1g7SUFIRCxXQUFZLDBCQUEwQjtRQUNwQywyRUFBUSxDQUFBO1FBQ1IsbUZBQVksQ0FBQTtJQUNkLENBQUMsRUFIVywwQkFBMEIsR0FBMUIsa0RBQTBCLEtBQTFCLGtEQUEwQixRQUdyQztJQUNELElBQVksc0JBR1g7SUFIRCxXQUFZLHNCQUFzQjtRQUNoQyxtRUFBUSxDQUFBO1FBQ1IscUZBQWlCLENBQUE7SUFDbkIsQ0FBQyxFQUhXLHNCQUFzQixHQUF0Qiw4Q0FBc0IsS0FBdEIsOENBQXNCLFFBR2pDO0FBQ0gsQ0FBQyxFQWxEYSx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBa0RwQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDBCQUEwQjthQUM5QixPQUFFLEdBQUcsdUNBQXVDLENBQUM7SUFFcEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztRQUNsRCwwQkFBMEIsQ0FBQywyQkFBMkIsQ0FDcEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBcUM7UUFDdkQsU0FBUyxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxtQkFBbUIsSUFBSSxLQUFLLENBQUM7UUFDdkUsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztRQUN2RCxTQUFTLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixJQUFJLEtBQUssQ0FBQztRQUMzRSxTQUFTLENBQUMsK0JBQStCO1lBQ3ZDLFNBQVMsQ0FBQywrQkFBK0IsSUFBSSxLQUFLLENBQUM7UUFDckQsU0FBUyxDQUFDLGlDQUFpQztZQUN6QyxTQUFTLENBQUMsaUNBQWlDLElBQUksQ0FBQyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxzQkFBc0I7WUFDOUIsU0FBUyxDQUFDLHNCQUFzQixJQUFJLEtBQUssQ0FBQztRQUM1QyxTQUFTLENBQUMsd0JBQXdCO1lBQ2hDLFNBQVMsQ0FBQyx3QkFBd0IsSUFBSSxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXFDLEVBQ3JDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDbkQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQywrQkFBK0IsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQy9ELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxpQ0FBaUMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2xFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3pELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCwwQkFBMEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXFDLEVBQ3JDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLG1CQUFtQixFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLHFCQUFxQixFQUFFO1lBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxTQUFTLENBQUMsK0JBQStCLEVBQUU7WUFDN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTtZQUMvQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksU0FBUyxDQUFDLHNCQUFzQixFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxTQUFTLENBQUMsd0JBQXdCLEVBQUU7WUFDdEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFXRDs7O09BR0c7SUFDSCxZQUFZLE1BQThEO1FBQ3hFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDMUQsSUFBSSxDQUFDLCtCQUErQjtZQUNsQyxNQUFNLENBQUMsK0JBQStCLENBQUM7UUFDekMsSUFBSSxDQUFDLGlDQUFpQztZQUNwQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDM0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsMEJBQTBCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUkscUJBQXFCLENBQUMsS0FBYztRQUN0QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLCtCQUErQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSwrQkFBK0IsQ0FBQyxLQUFjO1FBQ2hELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQUksaUNBQWlDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLGlDQUFpQyxDQUFDLEtBQWE7UUFDakQsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksc0JBQXNCLENBQUMsS0FBYztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSx3QkFBd0IsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsMEJBQTBCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCwrQkFBK0IsRUFBRSxJQUFJLENBQUMsK0JBQStCO1lBQ3JFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxpQ0FBaUM7WUFDekUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUNuRCx3QkFBd0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3ZELGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLHFCQUFxQixFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDakQsK0JBQStCLEVBQUUsSUFBSSxDQUFDLCtCQUErQjtZQUNyRSxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsaUNBQWlDO1lBQ3pFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7WUFDbkQsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUN2RCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDOztBQWdDSDs7R0FFRztBQUNILE1BQU0sT0FBTyx5QkFBeUI7YUFDN0IsT0FBRSxHQUFHLHNDQUFzQyxBQUF6QyxDQUEwQztJQUVuRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pELHlCQUF5QixDQUFDLDJCQUEyQixDQUNuRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFvQztRQUN0RCxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBb0MsRUFDcEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNsRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQseUJBQXlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFvQyxFQUNwQyxPQUFxQjtRQUVyQixJQUNFLFNBQVMsQ0FBQyxrQkFBa0I7WUFDNUIsU0FBUyxDQUFDLGtCQUFrQixLQUFLLEtBQUssRUFDdEM7WUFDQSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLGdCQUFnQixFQUFFO1lBQzlCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQVFEOzs7T0FHRztJQUNILFlBQVksTUFBNkQ7UUFQakUsNkJBQXdCLEdBQzlCLHlCQUF5QixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQztRQU8zRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQseUJBQXlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxLQUFjO1FBQ25DLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyx3QkFBd0I7Z0JBQzNCLHlCQUF5QixDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztJQUNKLENBQUM7O0FBRUgsV0FBYyx5QkFBeUI7SUFnQnJDLElBQVksMkJBR1g7SUFIRCxXQUFZLDJCQUEyQjtRQUNyQyw2RUFBUSxDQUFBO1FBQ1IseUdBQXNCLENBQUE7SUFDeEIsQ0FBQyxFQUhXLDJCQUEyQixHQUEzQixxREFBMkIsS0FBM0IscURBQTJCLFFBR3RDO0FBQ0gsQ0FBQyxFQXBCYSx5QkFBeUIsS0FBekIseUJBQXlCLFFBb0J0QztBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHFCQUFxQjthQUN6QixPQUFFLEdBQUcsa0NBQWtDLENBQUM7SUFFL0M7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUM3QyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDL0MsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBZ0M7UUFDbEQsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUM7UUFDckUsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUNuRCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2xELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxNQUFNLEVBQ2hCLGNBQWMsQ0FBQywyQkFBMkIsQ0FDM0MsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxNQUFhLEVBQ3ZCLGNBQWMsQ0FBQyx1QkFBdUIsQ0FDdkMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQU1EOzs7T0FHRztJQUNILFlBQVksTUFBeUQ7UUFDbkUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWlDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ2pFLENBQUM7SUFDSixDQUFDOztBQXNCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO2FBQ2pCLE9BQUUsR0FBRywwQkFBMEIsQ0FBQztJQUV2Qzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNyQyxhQUFhLENBQUMsMkJBQTJCLENBQ3ZDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXdCO1FBQzFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDeEQsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUMzRCxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXdCLEVBQ3hCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLG1CQUFtQixFQUNuQixVQUFVLENBQUMsMkJBQTJCLENBQ3ZDLENBQUM7b0JBQ0YsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3BFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO29CQUMzRCxPQUFPLENBQUMsV0FBVyxDQUNqQixtQkFBbUIsRUFDbkIsd0JBQXdCLENBQUMsMkJBQTJCLENBQ3JELENBQUM7b0JBQ0YsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxRCxtQkFBbUIsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDN0MsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLEtBQVksRUFDdEIsVUFBVSxDQUFDLHVCQUF1QixDQUNuQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDM0QsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFlBQW1CLEVBQzdCLHdCQUF3QixDQUFDLHVCQUF1QixDQUNqRCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUFpRDtRQUMzRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQ3JDLENBQUM7UUFDRixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQStCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQTZDO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoRCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDOUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7QUF3Qkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO2FBQzVCLE9BQUUsR0FBRyxxQ0FBcUMsQ0FBQztJQUVsRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hELHdCQUF3QixDQUFDLDJCQUEyQixDQUNsRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFtQztRQUNyRCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLFVBQVUsQ0FBQywyQkFBMkIsQ0FDdkMsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDcEUsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDN0MsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLEtBQVksRUFDdEIsVUFBVSxDQUFDLHVCQUF1QixDQUNuQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBTUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE0RDtRQUN0RSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUErQjtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUQsQ0FBQztJQUNKLENBQUM7O0FBc0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVU7YUFDZCxPQUFFLEdBQUcsdUJBQXVCLENBQUM7SUFFcEM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXFCO1FBQ3ZDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFDL0MsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXFCLEVBQ3JCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLGVBQWUsQ0FBQywyQkFBMkIsQ0FDNUMsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRSxtQkFBbUIsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFxQixFQUFFLE9BQXFCO1FBQ3pFLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ25FLE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxnQkFBdUIsRUFDakMsZUFBZSxDQUFDLHVCQUF1QixDQUN4QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBUUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE4QztRQUN4RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDekQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBb0M7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3RELENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBMEJIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWU7YUFDbkIsT0FBRSxHQUFHLDRCQUE0QixDQUFDO0lBRXpDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLGVBQWUsQ0FBQywyQkFBMkIsQ0FDekMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBMEI7UUFDNUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUEwQixFQUMxQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTBCLEVBQzFCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBbUQ7UUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUM7SUFDSixDQUFDOztBQW9CSDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7YUFDM0IsT0FBRSxHQUFHLG9DQUFvQyxDQUFDO0lBRWpEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsdUJBQXVCLENBQUMsMkJBQTJCLENBQ2pELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtDO1FBQ3BELFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDdkQsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUNqRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7b0JBQ2pELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxNQUFNLEVBQ2hCLHVCQUF1QixDQUFDLDJCQUEyQixDQUNwRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE1BQWEsRUFDdkIsdUJBQXVCLENBQUMsdUJBQXVCLENBQ2hELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQUNyRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07WUFDekIsQ0FBQyxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFpQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQTBDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN4RCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O0FBd0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF3QjthQUM1QixPQUFFLEdBQUcscUNBQXFDLEFBQXhDLENBQXlDO0lBRWxEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDaEQsd0JBQXdCLENBQUMsMkJBQTJCLENBQ2xELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW1DO1FBQ3JELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDMUQsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNyQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDdkQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksVUFBVSxFQUFFLENBQUM7UUFDdEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQztRQUM3RCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFtQyxFQUNuQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLGFBQWEsQ0FBQywyQkFBMkIsQ0FDMUMsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzlELG1CQUFtQixDQUNwQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO29CQUNqRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsTUFBTSxFQUNoQix1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDcEQsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFtQyxFQUNuQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsT0FBTyxDQUFDLG9CQUFvQixDQUMxQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGNBQXFCLEVBQy9CLGFBQWEsQ0FBQyx1QkFBdUIsQ0FDdEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDekIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsTUFBYSxFQUN2Qix1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FDaEQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWNEOzs7T0FHRztJQUNILFlBQVksTUFBNEQ7UUFQaEUsaUJBQVksR0FDbEIsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQU85QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUEwQztRQUNuRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7WUFDN0QsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDbEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FDMUI7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkQsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDakUsQ0FBQztJQUNKLENBQUM7O0FBRUgsV0FBYyx3QkFBd0I7SUE0QnBDLElBQVksZUFHWDtJQUhELFdBQVksZUFBZTtRQUN6QixxREFBUSxDQUFBO1FBQ1IseURBQVUsQ0FBQTtJQUNaLENBQUMsRUFIVyxlQUFlLEdBQWYsd0NBQWUsS0FBZix3Q0FBZSxRQUcxQjtBQUNILENBQUMsRUFoQ2Esd0JBQXdCLEtBQXhCLHdCQUF3QixRQWdDckM7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxxQkFBcUI7YUFDekIsT0FBRSxHQUFHLGtDQUFrQyxDQUFDO0lBRS9DOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDN0MscUJBQXFCLENBQUMsMkJBQTJCLENBQy9DLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWdDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlELFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWdDLEVBQ2hDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO29CQUNqRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsTUFBTSxFQUNoQix1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDcEQsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsTUFBYSxFQUN2Qix1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FDaEQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBeUQ7UUFDbkUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07WUFDekIsQ0FBQyxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQTBDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO1lBQ3pFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25FLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7QUFvQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sc0JBQXNCO2FBQzFCLE9BQUUsR0FBRyxtQ0FBbUMsQ0FBQztJQUVoRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQzlDLHNCQUFzQixDQUFDLDJCQUEyQixDQUNoRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFpQztRQUNuRCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1FBQzFELFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDckMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLG1CQUFtQixFQUNuQixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM5RCxtQkFBbUIsQ0FDcEIsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDckMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWlDLEVBQ2pDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLENBQUMsb0JBQW9CLENBQzFCLENBQUMsRUFDRCxTQUFTLENBQUMsY0FBcUIsRUFDL0IsYUFBYSxDQUFDLHVCQUF1QixDQUN0QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFNRDs7O09BR0c7SUFDSCxZQUFZLE1BQTBEO1FBQ3BFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDbEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FDMUI7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O0FBc0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7YUFDakIsT0FBRSxHQUFHLDBCQUEwQixDQUFDO0lBRXZDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsQ0FBQywyQkFBMkIsQ0FDdkMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBd0I7UUFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXdCLEVBQ3hCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNoQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUFpRDtRQUMzRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDcEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7YUFDM0IsT0FBRSxHQUFHLG9DQUFvQyxDQUFDO0lBRWpEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsdUJBQXVCLENBQUMsMkJBQTJCLENBQ2pELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtDO1FBQ3BELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNwRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM5RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQUNyRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDNUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWU7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWU7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDekMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDbkQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN6QyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDcEMsQ0FBQztJQUNKLENBQUM7O0FBd0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF3QjthQUM1QixPQUFFLEdBQUcscUNBQXFDLENBQUM7SUFFbEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUNoRCx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FDbEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBbUM7UUFDckQsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLGlCQUFpQixDQUFDLDJCQUEyQixDQUM5QyxDQUFDO29CQUNGLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEUsbUJBQW1CLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxlQUFzQixFQUNoQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBNEQ7UUFDdEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUM7UUFDRix3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBc0M7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3BELENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBa0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF1QjthQUMzQixPQUFFLEdBQUcsb0NBQW9DLENBQUM7SUFFakQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUMvQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDakQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0M7UUFDcEQsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUFZLE1BQTJEO1FBQ3JFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVELHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFlO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFlO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNyQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDcEQsQ0FBQztJQUNKLENBQUM7O0FBb0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF3QjthQUM1QixPQUFFLEdBQUcscUNBQXFDLENBQUM7SUFFbEQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUNoRCx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FDbEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBbUM7UUFDckQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3BELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFtQyxFQUNuQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE0RDtRQUN0RSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBZTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxxQkFBcUI7YUFDekIsT0FBRSxHQUFHLGtDQUFrQyxDQUFDO0lBRS9DOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDN0MscUJBQXFCLENBQUMsMkJBQTJCLENBQy9DLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWdDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBZ0MsRUFDaEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3BELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzlELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQscUJBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBS0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUF5RDtRQUNuRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBZTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBZTtRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDekMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3pDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3BELENBQUM7SUFDSixDQUFDOztBQW9CSDs7R0FFRztBQUNILE1BQU0sT0FBTyxzQkFBc0I7YUFDMUIsT0FBRSxHQUFHLG1DQUFtQyxDQUFDO0lBRWhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDOUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQ2hELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWlDO1FBQ25ELFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWlDLEVBQ2pDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHNCQUFzQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBMEQ7UUFDcEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8seUJBQXlCO2FBQzdCLE9BQUUsR0FBRyxzQ0FBc0MsQ0FBQztJQUVuRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pELHlCQUF5QixDQUFDLDJCQUEyQixDQUNuRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFvQztRQUN0RCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFvQyxFQUNwQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQseUJBQXlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFvQyxFQUNwQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBNkQ7UUFDdkUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO2FBQ3JCLE9BQUUsR0FBRyw4QkFBOEIsQ0FBQztJQUUzQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE0QjtRQUM5QyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUM7UUFDM0QsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUM3QyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUM7UUFDbkUsU0FBUyxDQUFDLHNCQUFzQjtZQUM5QixTQUFTLENBQUMsc0JBQXNCLElBQUksU0FBUyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUM7UUFDakUsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBNEIsRUFDNUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUM3QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsV0FBVyxFQUNyQixjQUFjLENBQUMsMkJBQTJCLENBQzNDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFNBQVMsRUFDbkIsWUFBWSxDQUFDLDJCQUEyQixDQUN6QyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGVBQWUsRUFDekIsZUFBZSxDQUFDLDJCQUEyQixDQUM1QyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7b0JBQ2hFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxzQkFBc0IsRUFDaEMsc0JBQXNCLENBQUMsMkJBQTJCLENBQ25ELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsY0FBYyxFQUN4QixjQUFjLENBQUMsMkJBQTJCLENBQzNDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBNEIsRUFDNUIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFdBQWtCLEVBQzVCLGNBQWMsQ0FBQyx1QkFBdUIsQ0FDdkMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFNBQWdCLEVBQzFCLFlBQVksQ0FBQyx1QkFBdUIsQ0FDckMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsZUFBc0IsRUFDaEMsZUFBZSxDQUFDLHVCQUF1QixDQUN4QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRTtZQUNwQyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLHNCQUE2QixFQUN2QyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FDL0MsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsY0FBcUIsRUFDL0IsY0FBYyxDQUFDLHVCQUF1QixDQUN2QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxPQUFjLEVBQ3hCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQVdEOzs7T0FHRztJQUNILFlBQVksTUFBcUQ7UUFDL0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVc7WUFDbkMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO1lBQzNDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQzdDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQjtZQUN6RCxDQUFDLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDM0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBaUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUErQjtRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFrQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxzQkFBc0IsQ0FBQyxLQUF5QztRQUNsRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFpQztRQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDdkUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxDQUFDLENBQUMsU0FBUztZQUNiLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7Z0JBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO2dCQUN4QyxDQUFDLENBQUMsU0FBUztZQUNiLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxDQUFDLENBQUMsU0FBUztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzVELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN6RSxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJO1lBQ1Isc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtnQkFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsSUFBSTtZQUNSLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLElBQUk7WUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDcEUsQ0FBQztJQUNKLENBQUM7O0FBZ0NIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7YUFDbEIsT0FBRSxHQUFHLDJCQUEyQixDQUFDO0lBRXhDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQywyQkFBMkIsQ0FDeEMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBeUI7UUFDM0MsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDMUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUFrRDtRQUM1RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7O0FBd0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7YUFDaEIsT0FBRSxHQUFHLHlCQUF5QixDQUFDO0lBRXRDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QjtRQUN6QyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO1FBQ2pFLFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUM7UUFDakUsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsY0FBYyxFQUN4QixjQUFjLENBQUMsMkJBQTJCLENBQzNDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUNoRCxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsY0FBYyxFQUN4QixjQUFjLENBQUMsMkJBQTJCLENBQzNDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGNBQXFCLEVBQy9CLGNBQWMsQ0FBQyx1QkFBdUIsQ0FDdkMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsY0FBcUIsRUFDL0IsY0FBYyxDQUFDLHVCQUF1QixDQUN2QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFNRDs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBQzFELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWlDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsSUFBSTtZQUNSLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLElBQUk7WUFDUixnQkFBZ0IsRUFDZCxnQkFBZ0IsQ0FDZCxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTO2dCQUNuRSxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUMxQjtTQUNKLENBQUM7SUFDSixDQUFDOztBQXNCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO2FBQ2xCLE9BQUUsR0FBRywyQkFBMkIsQ0FBQztJQUV4Qzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUN0QyxjQUFjLENBQUMsMkJBQTJCLENBQ3hDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXlCO1FBQzNDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUNuRCxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7UUFDbkQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO29CQUM5QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsYUFBYSxFQUN2QixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsT0FBTyxFQUNqQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO29CQUM5QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsYUFBYSxFQUN2QixhQUFhLENBQUMsMkJBQTJCLENBQzFDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxPQUFjLEVBQ3hCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsYUFBb0IsRUFDOUIsYUFBYSxDQUFDLHVCQUF1QixDQUN0QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxPQUFjLEVBQ3hCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsYUFBb0IsRUFDOUIsYUFBYSxDQUFDLHVCQUF1QixDQUN0QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBUUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUFrRDtRQUM1RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWE7WUFDdkMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzNELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMvQixDQUFDLENBQUMsU0FBUztTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsSUFBSTtZQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7O0FBMEJIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87YUFDWCxPQUFFLEdBQUcsb0JBQW9CLENBQUM7SUFFakM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtCO1FBQ3BDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUM3QyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtCLEVBQ2xCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQWtCLEVBQUUsT0FBcUI7UUFDdEUsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFPRDs7O09BR0c7SUFDSCxZQUFZLE1BQTJDO1FBQ3JELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7QUF3Qkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sYUFBYTthQUNqQixPQUFFLEdBQUcsMEJBQTBCLENBQUM7SUFFdkM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLDJCQUEyQixDQUN2QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QjtRQUMxQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFDNUQsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7UUFDbEUsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxHQUFHLENBQUM7UUFDbkUsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQzlELFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksR0FBRyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDekQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2RCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksU0FBUyxDQUFDLGtCQUFrQixFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLGdCQUFnQixFQUFFO1lBQzlCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFXRDs7O09BR0c7SUFDSCxZQUFZLE1BQWlEO1FBQzNELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDOztBQWdDSDs7R0FFRztBQUNILE1BQU0sT0FBTyxPQUFPO2FBQ1gsT0FBRSxHQUFHLG9CQUFvQixDQUFDO0lBRWpDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQjtRQUNwQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtCLEVBQ2xCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFrQixFQUFFLE9BQXFCO1FBQ3RFLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBMkM7UUFDckQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7O0FBb0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7YUFDakIsT0FBRSxHQUFHLDBCQUEwQixDQUFDO0lBRXZDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsQ0FBQywyQkFBMkIsQ0FDdkMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBd0I7UUFDMUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4RCxTQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQzVELFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDO1FBQ2xFLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsa0JBQWtCLElBQUksR0FBRyxDQUFDO1FBQ25FLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQzlELFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksR0FBRyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF3QixFQUN4QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDekQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXdCLEVBQ3hCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDaEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQVNEOzs7T0FHRztJQUNILFlBQVksTUFBaUQ7UUFDM0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDOztBQTRCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxPQUFPO2FBQ1gsT0FBRSxHQUFHLG9CQUFvQixDQUFDO0lBRWpDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQjtRQUNwQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtCLEVBQ2xCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFrQixFQUFFLE9BQXFCO1FBQ3RFLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBMkM7UUFDckQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOztBQW9CSDs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFRO2FBQ1osT0FBRSxHQUFHLHFCQUFxQixDQUFDO0lBRWxDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFtQjtRQUNyQyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFtQixFQUNuQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFtQixFQUFFLE9BQXFCO1FBQ3ZFLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE0QztRQUN0RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7O0FBa0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7YUFDbEIsT0FBRSxHQUFHLDJCQUEyQixDQUFDO0lBRXhDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQywyQkFBMkIsQ0FDeEMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBeUI7UUFDM0MsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUM7UUFDdkUsU0FBUyxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDckQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLENBQUMscUJBQXFCLEVBQUU7WUFDbkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtZQUNsQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFRRDs7O09BR0c7SUFDSCxZQUFZLE1BQWtEO1FBQzVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN4RCxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxxQkFBcUIsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLHFCQUFxQixFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDakQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtTQUNoRCxDQUFDO0lBQ0osQ0FBQzs7QUEwQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZTthQUNuQixPQUFFLEdBQUcsNEJBQTRCLENBQUM7SUFFekM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDdkMsZUFBZSxDQUFDLDJCQUEyQixDQUN6QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUEwQjtRQUM1QyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7UUFDdkMsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxTQUFTLENBQUMsMEJBQTBCO1lBQ2xDLFNBQVMsQ0FBQywwQkFBMEIsSUFBSSxTQUFTLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQTBCLEVBQzFCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDN0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLDBCQUEwQixHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztvQkFDeEUsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLDBCQUEwQixFQUNwQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FDdkQsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsZUFBZSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBMEIsRUFDMUIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFNBQVMsQ0FBQywwQkFBMEIsRUFBRTtZQUN4QyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLDBCQUFpQyxFQUMzQywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FDbkQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQU9EOzs7T0FHRztJQUNILFlBQVksTUFBbUQ7UUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQywwQkFBMEI7WUFDakUsQ0FBQyxDQUFDLElBQUksMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1lBQ25FLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLDBCQUEwQjtRQUM1QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBSSwwQkFBMEIsQ0FDNUIsS0FBNkM7UUFFN0MsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QiwwQkFBMEIsRUFBRSxJQUFJLENBQUMsMEJBQTBCO2dCQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsRUFBRTtnQkFDNUMsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLDBCQUEwQixFQUFFLElBQUksQ0FBQywwQkFBMEI7Z0JBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDekQsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUF3Qkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMEJBQTBCO2FBQzlCLE9BQUUsR0FBRyx1Q0FBdUMsQ0FBQztJQUVwRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBQ2xELDBCQUEwQixDQUFDLDJCQUEyQixDQUNwRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFxQztRQUN2RCxTQUFTLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQztRQUNyRSxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1FBQzFELFNBQVMsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUM7UUFDdkQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLENBQUM7UUFDakUsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXFDLEVBQ3JDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDbEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4RCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsMEJBQTBCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFxQyxFQUNyQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBUUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE4RDtRQUN4RSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUM7SUFDSixDQUFDOztBQTBCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxzQkFBc0I7YUFDMUIsT0FBRSxHQUFHLG1DQUFtQyxDQUFDO0lBRWhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDOUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQ2hELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWlDO1FBQ25ELFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDMUMsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQztRQUN2RCxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFpQyxFQUNqQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDbkQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUNwQyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsUUFBUSxFQUNsQixRQUFRLENBQUMsMkJBQTJCLENBQ3JDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELHNCQUFzQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFFBQWUsRUFDekIsUUFBUSxDQUFDLHVCQUF1QixDQUNqQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBTUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUEwRDtRQUNwRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUEyQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdkUsQ0FBQztJQUNKLENBQUM7O0FBc0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVE7YUFDWixPQUFFLEdBQUcscUJBQXFCLENBQUM7SUFFbEM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW1CO1FBQ3JDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQztRQUN2RCxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7UUFDOUQsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxHQUFHLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQW1CLEVBQ25CLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDL0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQW1CLEVBQUUsT0FBcUI7UUFDdkUsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQVNEOzs7T0FHRztJQUNILFlBQVksTUFBNEM7UUFDdEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQztJQUNKLENBQUM7O0FBNEJIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7YUFDbEIsT0FBRSxHQUFHLDJCQUEyQixDQUFDO0lBRXhDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQywyQkFBMkIsQ0FDeEMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBeUI7UUFDM0MsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF5QixFQUN6QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGNBQWMsRUFDeEIsY0FBYyxDQUFDLDJCQUEyQixDQUMzQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF5QixFQUN6QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDNUIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxjQUFxQixFQUMvQixjQUFjLENBQUMsdUJBQXVCLENBQ3ZDLENBQUM7U0FDSDtJQUNILENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUFZLE1BQWtEO1FBQzVELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBZTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBaUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN2QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdkMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDOztBQW9CSDs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO2FBQ2xCLE9BQUUsR0FBRywyQkFBMkIsQ0FBQztJQUV4Qzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUN0QyxjQUFjLENBQUMsMkJBQTJCLENBQ3hDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXlCO1FBQzNDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUM7UUFDckQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBeUIsRUFDekIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLFFBQVEsQ0FBQywyQkFBMkIsQ0FDckMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztvQkFDakQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGFBQWEsRUFDdkIsZ0JBQWdCLENBQUMsMkJBQTJCLENBQzdDLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXlCLEVBQ3pCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFFBQWUsRUFDekIsUUFBUSxDQUFDLHVCQUF1QixDQUNqQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxhQUFvQixFQUM5QixnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FDekMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBa0Q7UUFDNUQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBMkI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBbUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtnQkFDL0IsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3RFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7QUFvQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUTthQUNaLE9BQUUsR0FBRyxxQkFBcUIsQ0FBQztJQUVsQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBbUI7UUFDckMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMseUJBQXlCO1lBQ2pDLFNBQVMsQ0FBQyx5QkFBeUIsSUFBSSxHQUFHLENBQUM7UUFDN0MsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBbUIsRUFDbkIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDaEUsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ25ELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQW1CLEVBQUUsT0FBcUI7UUFDdkUsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLHlCQUF5QixFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBTUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUE0QztRQUN0RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBSSx5QkFBeUIsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2Qix5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCO1lBQ3pELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLHlCQUF5QixFQUFFLElBQUksQ0FBQyx5QkFBeUI7WUFDekQsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFDSixDQUFDOztBQXNCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxnQkFBZ0I7YUFDcEIsT0FBRSxHQUFHLDZCQUE2QixDQUFDO0lBRTFDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQzFDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTJCO1FBQzdDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDOUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBMkIsRUFDM0IsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBMkIsRUFDM0IsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUFZLE1BQW9EO1FBQzlELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFlO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUN4QyxDQUFDO0lBQ0osQ0FBQzs7QUFvQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBTzthQUNYLE9BQUUsR0FBRyxvQkFBb0IsQ0FBQztJQUVqQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0I7UUFDcEMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQixFQUNsQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsU0FBa0IsRUFBRSxPQUFxQjtRQUN0RSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUFZLE1BQTJDO1FBQ3JELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7QUFvQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTRCO2FBQ2hDLE9BQUUsR0FBRyx5Q0FBeUMsQ0FBQztJQUV0RDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BELDRCQUE0QixDQUFDLDJCQUEyQixDQUN0RCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QztRQUN6RCxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QyxFQUN2QyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDakUsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDRCQUE0QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBdUMsRUFDdkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQ0UsTUFBZ0U7UUFFaEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQWU7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDRCQUE0QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUM5QixDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO2FBQzNCLE9BQUUsR0FBRyxvQ0FBb0MsQ0FBQztJQUVqRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQy9DLHVCQUF1QixDQUFDLDJCQUEyQixDQUNqRCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFrQztRQUNwRCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBS0Q7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQUNyRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBZTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDNUMsQ0FBQztJQUNKLENBQUM7O0FBb0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDZCQUE2QjthQUNqQyxPQUFFLEdBQUcsMENBQTBDLENBQUM7SUFFdkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUNyRCw2QkFBNkIsQ0FBQywyQkFBMkIsQ0FDdkQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBd0M7UUFDMUQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixNQUFNLG1CQUFtQixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztvQkFDMUQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsbUJBQW1CLEVBQ25CLHVCQUF1QixDQUFDLDJCQUEyQixDQUNwRCxDQUFDO29CQUNGLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUQsbUJBQW1CLENBQ3BCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDZCQUE2QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxhQUFvQixFQUM5Qix1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FDaEQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQ0UsTUFBaUU7UUFFakUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQ3BDLENBQUM7UUFDRiw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBNEM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDZCQUE2QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNoRCxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyw4QkFBOEI7YUFDbEMsT0FBRSxHQUFHLDJDQUEyQyxDQUFDO0lBRXhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDhCQUE4QixFQUFFLENBQUM7UUFDdEQsOEJBQThCLENBQUMsMkJBQTJCLENBQ3hELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXlDO1FBQzNELFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF5QyxFQUN6QyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ25ELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCw4QkFBOEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXlDLEVBQ3pDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQy9CLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQ0UsTUFBa0U7UUFFbEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNsRCw4QkFBOEIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsOEJBQThCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sOEJBQThCO2FBQ2xDLE9BQUUsR0FBRywyQ0FBMkMsQ0FBQztJQUV4RDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSw4QkFBOEIsRUFBRSxDQUFDO1FBQ3RELDhCQUE4QixDQUFDLDJCQUEyQixDQUN4RCxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF5QztRQUMzRCxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBeUMsRUFDekMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsOEJBQThCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUF5QyxFQUN6QyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFJRDs7O09BR0c7SUFDSCxZQUNFLE1BQWtFO1FBRWxFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbEQsOEJBQThCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDhCQUE4QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRSxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDMUMsQ0FBQztJQUNKLENBQUM7O0FBa0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlDQUFpQzthQUNyQyxPQUFFLEdBQUcsOENBQThDLENBQUM7SUFFM0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksaUNBQWlDLEVBQUUsQ0FBQztRQUN6RCxpQ0FBaUMsQ0FBQywyQkFBMkIsQ0FDM0QsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBNEM7UUFDOUQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7UUFDaEUsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksVUFBVSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQTRDLEVBQzVDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbkQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTRDLEVBQzVDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQy9CLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUNFLE1BQXFFO1FBRXJFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLGlDQUFpQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQ0FBaUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDdkUsQ0FBQztJQUNKLENBQUM7O0FBb0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLDZCQUE2QjthQUNqQyxPQUFFLEdBQUcsMENBQTBDLENBQUM7SUFFdkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUNyRCw2QkFBNkIsQ0FBQywyQkFBMkIsQ0FDdkQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBd0M7UUFDMUQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7UUFDaEUsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELDZCQUE2QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0MsRUFDeEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsaUJBQWlCLEVBQUU7WUFDL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBS0Q7OztPQUdHO0lBQ0gsWUFDRSxNQUFpRTtRQUVqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQiw2QkFBNkIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyw2QkFBNkIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zLFxuICB1aW50OEFycmF5VG9CYXNlNjRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5leHBvcnQgZW51bSBEZWNvZGluZyB7XG4gIERFRkFVTFQgPSAwLFxuICBHUkVFRFkgPSAxLFxuICBCRUFNX1NFQVJDSF9XSVRIX0xNID0gMixcbiAgQkVBTV9TRUFSQ0ggPSAzXG59XG5leHBvcnQgZW51bSBJbmZlcmVuY2VCYWNrZW5kIHtcbiAgSU5GRVJFTkNFX0JBQ0tFTkRfVU5LTk9XTiA9IDAsXG4gIElORkVSRU5DRV9CQUNLRU5EX1BZVE9SQ0ggPSAxLFxuICBJTkZFUkVOQ0VfQkFDS0VORF9GTEFYID0gMlxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZVJlcXVlc3RDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZygpO1xuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCA9IF9pbnN0YW5jZS5zMnRQaXBlbGluZUlkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kZWNvZGluZyA9IF9pbnN0YW5jZS5kZWNvZGluZyB8fCAwO1xuXG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50YXNrID0gX2luc3RhbmNlLnRhc2sgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuczJ0UGlwZWxpbmVJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmRlY29kaW5nID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcgPSBuZXcgUG9zdFByb2Nlc3NpbmdPcHRpb25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyxcbiAgICAgICAgICAgIFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnV0dGVyYW5jZURldGVjdGlvbiA9IG5ldyBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS51dHRlcmFuY2VEZXRlY3Rpb24sXG4gICAgICAgICAgICBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UucHlhbm5vdGUgPSBuZXcgUHlhbm5vdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlLFxuICAgICAgICAgICAgUHlhbm5vdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5PcHRpb25zID0gbmV3IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5PcHRpb25zLFxuICAgICAgICAgICAgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS50YXNrID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnMydFBpcGVsaW5lSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnMydFBpcGVsaW5lSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlY29kaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2UuZGVjb2RpbmcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lIHx8IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9PT0gJycpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyBhcyBhbnksXG4gICAgICAgIFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51dHRlcmFuY2VEZXRlY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UudXR0ZXJhbmNlRGV0ZWN0aW9uIGFzIGFueSxcbiAgICAgICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5weWFubm90ZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5weWFubm90ZSBhcyBhbnksXG4gICAgICAgIFB5YW5ub3RlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybk9wdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UucmV0dXJuT3B0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS5sYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGFzaykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMCwgX2luc3RhbmNlLnRhc2spO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3MydFBpcGVsaW5lSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVjb2Rpbmc6IERlY29kaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9wb3N0UHJvY2Vzc2luZz86IFBvc3RQcm9jZXNzaW5nT3B0aW9ucztcbiAgcHJpdmF0ZSBfdXR0ZXJhbmNlRGV0ZWN0aW9uPzogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucztcbiAgcHJpdmF0ZSBfcHlhbm5vdGU/OiBQeWFubm90ZTtcbiAgcHJpdmF0ZSBfcmV0dXJuT3B0aW9ucz86IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zO1xuICBwcml2YXRlIF9sYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF90YXNrOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfb25lb2ZMYW5ndWFnZU1vZGVsTmFtZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZMYW5ndWFnZU1vZGVsTmFtZUNhc2UgPVxuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mTGFuZ3VhZ2VNb2RlbE5hbWVDYXNlLm5vbmU7XG4gIHByaXZhdGUgX29uZW9mUG9zdFByb2Nlc3Npbmc6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mUG9zdFByb2Nlc3NpbmdDYXNlID1cbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlBvc3RQcm9jZXNzaW5nQ2FzZS5ub25lO1xuICBwcml2YXRlIF9vbmVvZlV0dGVyYW5jZURldGVjdGlvbjogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZVdHRlcmFuY2VEZXRlY3Rpb25DYXNlID1cbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlV0dGVyYW5jZURldGVjdGlvbkNhc2Uubm9uZTtcbiAgcHJpdmF0ZSBfdm9pY2VBY3Rpdml0eURldGVjdGlvbjogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuVm9pY2VBY3Rpdml0eURldGVjdGlvbkNhc2UgPVxuICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLlZvaWNlQWN0aXZpdHlEZXRlY3Rpb25DYXNlLm5vbmU7XG4gIHByaXZhdGUgX29uZW9mUmV0dXJuT3B0aW9uczogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZSZXR1cm5PcHRpb25zQ2FzZSA9XG4gICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZSZXR1cm5PcHRpb25zQ2FzZS5ub25lO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhbnNjcmliZVJlcXVlc3RDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuczJ0UGlwZWxpbmVJZCA9IF92YWx1ZS5zMnRQaXBlbGluZUlkO1xuICAgIHRoaXMuZGVjb2RpbmcgPSBfdmFsdWUuZGVjb2Rpbmc7XG4gICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9IF92YWx1ZS5sYW5ndWFnZU1vZGVsTmFtZTtcbiAgICB0aGlzLnBvc3RQcm9jZXNzaW5nID0gX3ZhbHVlLnBvc3RQcm9jZXNzaW5nXG4gICAgICA/IG5ldyBQb3N0UHJvY2Vzc2luZ09wdGlvbnMoX3ZhbHVlLnBvc3RQcm9jZXNzaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy51dHRlcmFuY2VEZXRlY3Rpb24gPSBfdmFsdWUudXR0ZXJhbmNlRGV0ZWN0aW9uXG4gICAgICA/IG5ldyBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zKF92YWx1ZS51dHRlcmFuY2VEZXRlY3Rpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnB5YW5ub3RlID0gX3ZhbHVlLnB5YW5ub3RlID8gbmV3IFB5YW5ub3RlKF92YWx1ZS5weWFubm90ZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXR1cm5PcHRpb25zID0gX3ZhbHVlLnJldHVybk9wdGlvbnNcbiAgICAgID8gbmV3IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zKF92YWx1ZS5yZXR1cm5PcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IF92YWx1ZS5sYW5ndWFnZTtcbiAgICB0aGlzLnRhc2sgPSBfdmFsdWUudGFzaztcbiAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHMydFBpcGVsaW5lSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fczJ0UGlwZWxpbmVJZDtcbiAgfVxuICBzZXQgczJ0UGlwZWxpbmVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczJ0UGlwZWxpbmVJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWNvZGluZygpOiBEZWNvZGluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY29kaW5nO1xuICB9XG4gIHNldCBkZWNvZGluZyh2YWx1ZTogRGVjb2RpbmcpIHtcbiAgICB0aGlzLl9kZWNvZGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZkxhbmd1YWdlTW9kZWxOYW1lID1cbiAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZMYW5ndWFnZU1vZGVsTmFtZUNhc2UubGFuZ3VhZ2VNb2RlbE5hbWU7XG4gICAgfVxuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzaW5nKCk6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RQcm9jZXNzaW5nO1xuICB9XG4gIHNldCBwb3N0UHJvY2Vzc2luZyh2YWx1ZTogUG9zdFByb2Nlc3NpbmdPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX29uZW9mUG9zdFByb2Nlc3NpbmcgPVxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5PbmVvZlBvc3RQcm9jZXNzaW5nQ2FzZS5wb3N0UHJvY2Vzc2luZztcbiAgICB9XG4gICAgdGhpcy5fcG9zdFByb2Nlc3NpbmcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXR0ZXJhbmNlRGV0ZWN0aW9uKCk6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91dHRlcmFuY2VEZXRlY3Rpb247XG4gIH1cbiAgc2V0IHV0dGVyYW5jZURldGVjdGlvbih2YWx1ZTogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZlV0dGVyYW5jZURldGVjdGlvbiA9XG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLk9uZW9mVXR0ZXJhbmNlRGV0ZWN0aW9uQ2FzZS51dHRlcmFuY2VEZXRlY3Rpb247XG4gICAgfVxuICAgIHRoaXMuX3V0dGVyYW5jZURldGVjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBweWFubm90ZSgpOiBQeWFubm90ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3B5YW5ub3RlO1xuICB9XG4gIHNldCBweWFubm90ZSh2YWx1ZTogUHlhbm5vdGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdm9pY2VBY3Rpdml0eURldGVjdGlvbiA9XG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLlZvaWNlQWN0aXZpdHlEZXRlY3Rpb25DYXNlLnB5YW5ub3RlO1xuICAgIH1cbiAgICB0aGlzLl9weWFubm90ZSA9IHZhbHVlO1xuICB9XG4gIGdldCByZXR1cm5PcHRpb25zKCk6IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0dXJuT3B0aW9ucztcbiAgfVxuICBzZXQgcmV0dXJuT3B0aW9ucyh2YWx1ZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb25lb2ZSZXR1cm5PcHRpb25zID1cbiAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuT25lb2ZSZXR1cm5PcHRpb25zQ2FzZS5yZXR1cm5PcHRpb25zO1xuICAgIH1cbiAgICB0aGlzLl9yZXR1cm5PcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YXNrO1xuICB9XG4gIHNldCB0YXNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uZW9mTGFuZ3VhZ2VNb2RlbE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mTGFuZ3VhZ2VNb2RlbE5hbWU7XG4gIH1cbiAgZ2V0IG9uZW9mUG9zdFByb2Nlc3NpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mUG9zdFByb2Nlc3Npbmc7XG4gIH1cbiAgZ2V0IG9uZW9mVXR0ZXJhbmNlRGV0ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9vbmVvZlV0dGVyYW5jZURldGVjdGlvbjtcbiAgfVxuICBnZXQgdm9pY2VBY3Rpdml0eURldGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9pY2VBY3Rpdml0eURldGVjdGlvbjtcbiAgfVxuICBnZXQgb25lb2ZSZXR1cm5PcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vbmVvZlJldHVybk9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzMnRQaXBlbGluZUlkOiB0aGlzLnMydFBpcGVsaW5lSWQsXG4gICAgICBkZWNvZGluZzogdGhpcy5kZWNvZGluZyxcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgcG9zdFByb2Nlc3Npbmc6IHRoaXMucG9zdFByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzaW5nLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB1dHRlcmFuY2VEZXRlY3Rpb246IHRoaXMudXR0ZXJhbmNlRGV0ZWN0aW9uXG4gICAgICAgID8gdGhpcy51dHRlcmFuY2VEZXRlY3Rpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHB5YW5ub3RlOiB0aGlzLnB5YW5ub3RlID8gdGhpcy5weWFubm90ZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmV0dXJuT3B0aW9uczogdGhpcy5yZXR1cm5PcHRpb25zXG4gICAgICAgID8gdGhpcy5yZXR1cm5PcHRpb25zLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHRhc2s6IHRoaXMudGFza1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgczJ0UGlwZWxpbmVJZDogdGhpcy5zMnRQaXBlbGluZUlkLFxuICAgICAgZGVjb2Rpbmc6XG4gICAgICAgIERlY29kaW5nW1xuICAgICAgICAgIHRoaXMuZGVjb2RpbmcgPT09IG51bGwgfHwgdGhpcy5kZWNvZGluZyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5kZWNvZGluZ1xuICAgICAgICBdLFxuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWUgPT09IG51bGwgfHwgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgcG9zdFByb2Nlc3Npbmc6IHRoaXMucG9zdFByb2Nlc3NpbmdcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzaW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHV0dGVyYW5jZURldGVjdGlvbjogdGhpcy51dHRlcmFuY2VEZXRlY3Rpb25cbiAgICAgICAgPyB0aGlzLnV0dGVyYW5jZURldGVjdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBweWFubm90ZTogdGhpcy5weWFubm90ZSA/IHRoaXMucHlhbm5vdGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcmV0dXJuT3B0aW9uczogdGhpcy5yZXR1cm5PcHRpb25zXG4gICAgICAgID8gdGhpcy5yZXR1cm5PcHRpb25zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgdGFzazogdGhpcy50YXNrXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZVJlcXVlc3RDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHMydFBpcGVsaW5lSWQ6IHN0cmluZztcbiAgICBkZWNvZGluZzogRGVjb2Rpbmc7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgICBwb3N0UHJvY2Vzc2luZz86IFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5Bc09iamVjdDtcbiAgICB1dHRlcmFuY2VEZXRlY3Rpb24/OiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLkFzT2JqZWN0O1xuICAgIHB5YW5ub3RlPzogUHlhbm5vdGUuQXNPYmplY3Q7XG4gICAgcmV0dXJuT3B0aW9ucz86IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLkFzT2JqZWN0O1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgdGFzazogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzMnRQaXBlbGluZUlkOiBzdHJpbmc7XG4gICAgZGVjb2Rpbmc6IHN0cmluZztcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBwb3N0UHJvY2Vzc2luZzogUG9zdFByb2Nlc3NpbmdPcHRpb25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB1dHRlcmFuY2VEZXRlY3Rpb246IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHB5YW5ub3RlOiBQeWFubm90ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmV0dXJuT3B0aW9uczogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgdGFzazogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mTGFuZ3VhZ2VNb2RlbE5hbWVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBsYW5ndWFnZU1vZGVsTmFtZSA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZlBvc3RQcm9jZXNzaW5nQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgcG9zdFByb2Nlc3NpbmcgPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gT25lb2ZVdHRlcmFuY2VEZXRlY3Rpb25DYXNlIHtcbiAgICBub25lID0gMCxcbiAgICB1dHRlcmFuY2VEZXRlY3Rpb24gPSAxXG4gIH1cbiAgZXhwb3J0IGVudW0gVm9pY2VBY3Rpdml0eURldGVjdGlvbkNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHB5YW5ub3RlID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIE9uZW9mUmV0dXJuT3B0aW9uc0Nhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHJldHVybk9wdGlvbnMgPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucygpO1xuICAgIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMpIHtcbiAgICBfaW5zdGFuY2UucmV0dXJuU3RhcnRPZlNwZWVjaCA9IF9pbnN0YW5jZS5yZXR1cm5TdGFydE9mU3BlZWNoIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5yZXR1cm5BdWRpbyA9IF9pbnN0YW5jZS5yZXR1cm5BdWRpbyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyA9XG4gICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID1cbiAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnIgfHwgMDtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyA9XG4gICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID1cbiAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIgfHwgMDtcbiAgICBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyA9IF9pbnN0YW5jZS5yZXR1cm5Xb3JkVGltaW5nIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVyblN0YXJ0T2ZTcGVlY2ggPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQXVkaW8gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlV29yZHNOciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuU3RhcnRPZlNwZWVjaCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLnJldHVyblN0YXJ0T2ZTcGVlY2gpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkF1ZGlvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UucmV0dXJuQXVkaW8pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMywgX2luc3RhbmNlLnJldHVybkNvbmZpZGVuY2VTY29yZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDUsIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJldHVybkFsdGVybmF0aXZlV29yZHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig3LCBfaW5zdGFuY2UucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXR1cm5Xb3JkVGltaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg4LCBfaW5zdGFuY2UucmV0dXJuV29yZFRpbWluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0dXJuU3RhcnRPZlNwZWVjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gIHByaXZhdGUgX3JldHVybkNvbmZpZGVuY2VTY29yZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiBudW1iZXI7XG4gIHByaXZhdGUgX3JldHVybkFsdGVybmF0aXZlV29yZHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX3JldHVybkFsdGVybmF0aXZlV29yZHNOcjogbnVtYmVyO1xuICBwcml2YXRlIF9yZXR1cm5Xb3JkVGltaW5nOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmV0dXJuU3RhcnRPZlNwZWVjaCA9IF92YWx1ZS5yZXR1cm5TdGFydE9mU3BlZWNoO1xuICAgIHRoaXMucmV0dXJuQXVkaW8gPSBfdmFsdWUucmV0dXJuQXVkaW87XG4gICAgdGhpcy5yZXR1cm5Db25maWRlbmNlU2NvcmUgPSBfdmFsdWUucmV0dXJuQ29uZmlkZW5jZVNjb3JlO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucyA9XG4gICAgICBfdmFsdWUucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9ucztcbiAgICB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOciA9XG4gICAgICBfdmFsdWUucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyA9IF92YWx1ZS5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzO1xuICAgIHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID0gX3ZhbHVlLnJldHVybkFsdGVybmF0aXZlV29yZHNOcjtcbiAgICB0aGlzLnJldHVybldvcmRUaW1pbmcgPSBfdmFsdWUucmV0dXJuV29yZFRpbWluZztcbiAgICBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9ucy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJldHVyblN0YXJ0T2ZTcGVlY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVyblN0YXJ0T2ZTcGVlY2g7XG4gIH1cbiAgc2V0IHJldHVyblN0YXJ0T2ZTcGVlY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5TdGFydE9mU3BlZWNoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkF1ZGlvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BdWRpbztcbiAgfVxuICBzZXQgcmV0dXJuQXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCByZXR1cm5Db25maWRlbmNlU2NvcmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkNvbmZpZGVuY2VTY29yZTtcbiAgfVxuICBzZXQgcmV0dXJuQ29uZmlkZW5jZVNjb3JlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV0dXJuQ29uZmlkZW5jZVNjb3JlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnM7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlV29yZHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybkFsdGVybmF0aXZlV29yZHM7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlV29yZHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkFsdGVybmF0aXZlV29yZHNOcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnI7XG4gIH1cbiAgc2V0IHJldHVybkFsdGVybmF0aXZlV29yZHNOcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybldvcmRUaW1pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybldvcmRUaW1pbmc7XG4gIH1cbiAgc2V0IHJldHVybldvcmRUaW1pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5Xb3JkVGltaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICByZXR1cm5TdGFydE9mU3BlZWNoOiB0aGlzLnJldHVyblN0YXJ0T2ZTcGVlY2gsXG4gICAgICByZXR1cm5BdWRpbzogdGhpcy5yZXR1cm5BdWRpbyxcbiAgICAgIHJldHVybkNvbmZpZGVuY2VTY29yZTogdGhpcy5yZXR1cm5Db25maWRlbmNlU2NvcmUsXG4gICAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zOiB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnMsXG4gICAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI6IHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3JkczogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3Jkc05yOiB0aGlzLnJldHVybkFsdGVybmF0aXZlV29yZHNOcixcbiAgICAgIHJldHVybldvcmRUaW1pbmc6IHRoaXMucmV0dXJuV29yZFRpbWluZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmV0dXJuU3RhcnRPZlNwZWVjaDogdGhpcy5yZXR1cm5TdGFydE9mU3BlZWNoLFxuICAgICAgcmV0dXJuQXVkaW86IHRoaXMucmV0dXJuQXVkaW8sXG4gICAgICByZXR1cm5Db25maWRlbmNlU2NvcmU6IHRoaXMucmV0dXJuQ29uZmlkZW5jZVNjb3JlLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zLFxuICAgICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiB0aGlzLnJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnNOcixcbiAgICAgIHJldHVybkFsdGVybmF0aXZlV29yZHM6IHRoaXMucmV0dXJuQWx0ZXJuYXRpdmVXb3JkcyxcbiAgICAgIHJldHVybkFsdGVybmF0aXZlV29yZHNOcjogdGhpcy5yZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnIsXG4gICAgICByZXR1cm5Xb3JkVGltaW5nOiB0aGlzLnJldHVybldvcmRUaW1pbmdcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpcHRpb25SZXR1cm5PcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaXB0aW9uUmV0dXJuT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcmV0dXJuU3RhcnRPZlNwZWVjaDogYm9vbGVhbjtcbiAgICByZXR1cm5BdWRpbzogYm9vbGVhbjtcbiAgICByZXR1cm5Db25maWRlbmNlU2NvcmU6IGJvb2xlYW47XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uczogYm9vbGVhbjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVRyYW5zY3JpcHRpb25zTnI6IG51bWJlcjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVdvcmRzOiBib29sZWFuO1xuICAgIHJldHVybkFsdGVybmF0aXZlV29yZHNOcjogbnVtYmVyO1xuICAgIHJldHVybldvcmRUaW1pbmc6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmlwdGlvblJldHVybk9wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVyblN0YXJ0T2ZTcGVlY2g6IGJvb2xlYW47XG4gICAgcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gICAgcmV0dXJuQ29uZmlkZW5jZVNjb3JlOiBib29sZWFuO1xuICAgIHJldHVybkFsdGVybmF0aXZlVHJhbnNjcmlwdGlvbnM6IGJvb2xlYW47XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVUcmFuc2NyaXB0aW9uc05yOiBudW1iZXI7XG4gICAgcmV0dXJuQWx0ZXJuYXRpdmVXb3JkczogYm9vbGVhbjtcbiAgICByZXR1cm5BbHRlcm5hdGl2ZVdvcmRzTnI6IG51bWJlcjtcbiAgICByZXR1cm5Xb3JkVGltaW5nOiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5VdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5VdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucygpO1xuICAgIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zKSB7XG4gICAgX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQgPSBfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChcbiAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgfHxcbiAgICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLm5leHRDaHVua1RpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zY3JpYmVOb3RGaW5hbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbmV4dENodW5rVGltZW91dDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX29uZW9mVHJhbnNjcmliZU5vdEZpbmFsOiBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLk9uZW9mVHJhbnNjcmliZU5vdEZpbmFsQ2FzZSA9XG4gICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5PbmVvZlRyYW5zY3JpYmVOb3RGaW5hbENhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50cmFuc2NyaWJlTm90RmluYWwgPSBfdmFsdWUudHJhbnNjcmliZU5vdEZpbmFsO1xuICAgIHRoaXMubmV4dENodW5rVGltZW91dCA9IF92YWx1ZS5uZXh0Q2h1bmtUaW1lb3V0O1xuICAgIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0cmFuc2NyaWJlTm90RmluYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zY3JpYmVOb3RGaW5hbDtcbiAgfVxuICBzZXQgdHJhbnNjcmliZU5vdEZpbmFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX29uZW9mVHJhbnNjcmliZU5vdEZpbmFsID1cbiAgICAgICAgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5PbmVvZlRyYW5zY3JpYmVOb3RGaW5hbENhc2UudHJhbnNjcmliZU5vdEZpbmFsO1xuICAgIH1cbiAgICB0aGlzLl90cmFuc2NyaWJlTm90RmluYWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dENodW5rVGltZW91dCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uZXh0Q2h1bmtUaW1lb3V0O1xuICB9XG4gIHNldCBuZXh0Q2h1bmtUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9uZXh0Q2h1bmtUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uZW9mVHJhbnNjcmliZU5vdEZpbmFsKCkge1xuICAgIHJldHVybiB0aGlzLl9vbmVvZlRyYW5zY3JpYmVOb3RGaW5hbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVdHRlcmFuY2VEZXRlY3Rpb25PcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaWJlTm90RmluYWw6IHRoaXMudHJhbnNjcmliZU5vdEZpbmFsLFxuICAgICAgbmV4dENodW5rVGltZW91dDogdGhpcy5uZXh0Q2h1bmtUaW1lb3V0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogdGhpcy50cmFuc2NyaWJlTm90RmluYWwsXG4gICAgICBuZXh0Q2h1bmtUaW1lb3V0OiB0aGlzLm5leHRDaHVua1RpbWVvdXRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFV0dGVyYW5jZURldGVjdGlvbk9wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogYm9vbGVhbjtcbiAgICBuZXh0Q2h1bmtUaW1lb3V0OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVXR0ZXJhbmNlRGV0ZWN0aW9uT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmliZU5vdEZpbmFsOiBib29sZWFuO1xuICAgIG5leHRDaHVua1RpbWVvdXQ6IG51bWJlcjtcbiAgfVxuICBleHBvcnQgZW51bSBPbmVvZlRyYW5zY3JpYmVOb3RGaW5hbENhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIHRyYW5zY3JpYmVOb3RGaW5hbCA9IDFcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUG9zdFByb2Nlc3NpbmdPcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0UHJvY2Vzc2luZ09wdGlvbnMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlBvc3RQcm9jZXNzaW5nT3B0aW9ucyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3RQcm9jZXNzaW5nT3B0aW9ucygpO1xuICAgIFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucykge1xuICAgIF9pbnN0YW5jZS5zcGVsbGluZ0NvcnJlY3Rpb24gPSBfaW5zdGFuY2Uuc3BlbGxpbmdDb3JyZWN0aW9uIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5ub3JtYWxpemUgPSBfaW5zdGFuY2Uubm9ybWFsaXplIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlbGxpbmdDb3JyZWN0aW9uID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm5vcm1hbGl6ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgUG9zdFByb2Nlc3NpbmcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIFBvc3RQcm9jZXNzaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0UHJvY2Vzc2luZ09wdGlvbnMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0UHJvY2Vzc2luZ09wdGlvbnMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3BlbGxpbmdDb3JyZWN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2Uuc3BlbGxpbmdDb3JyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ub3JtYWxpemUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5ub3JtYWxpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBQb3N0UHJvY2Vzc2luZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zcGVsbGluZ0NvcnJlY3Rpb246IGJvb2xlYW47XG4gIHByaXZhdGUgX25vcm1hbGl6ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY29uZmlnPzogUG9zdFByb2Nlc3Npbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQb3N0UHJvY2Vzc2luZ09wdGlvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UG9zdFByb2Nlc3NpbmdPcHRpb25zLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNwZWxsaW5nQ29ycmVjdGlvbiA9IF92YWx1ZS5zcGVsbGluZ0NvcnJlY3Rpb247XG4gICAgdGhpcy5ub3JtYWxpemUgPSBfdmFsdWUubm9ybWFsaXplO1xuICAgIHRoaXMuY29uZmlnID0gX3ZhbHVlLmNvbmZpZyA/IG5ldyBQb3N0UHJvY2Vzc2luZyhfdmFsdWUuY29uZmlnKSA6IHVuZGVmaW5lZDtcbiAgICBQb3N0UHJvY2Vzc2luZ09wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzcGVsbGluZ0NvcnJlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWxsaW5nQ29ycmVjdGlvbjtcbiAgfVxuICBzZXQgc3BlbGxpbmdDb3JyZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3BlbGxpbmdDb3JyZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vcm1hbGl6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplO1xuICB9XG4gIHNldCBub3JtYWxpemUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ub3JtYWxpemUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29uZmlnKCk6IFBvc3RQcm9jZXNzaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IFBvc3RQcm9jZXNzaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9zdFByb2Nlc3NpbmdPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBvc3RQcm9jZXNzaW5nT3B0aW9ucy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwZWxsaW5nQ29ycmVjdGlvbjogdGhpcy5zcGVsbGluZ0NvcnJlY3Rpb24sXG4gICAgICBub3JtYWxpemU6IHRoaXMubm9ybWFsaXplLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQb3N0UHJvY2Vzc2luZ09wdGlvbnMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzcGVsbGluZ0NvcnJlY3Rpb246IHRoaXMuc3BlbGxpbmdDb3JyZWN0aW9uLFxuICAgICAgbm9ybWFsaXplOiB0aGlzLm5vcm1hbGl6ZSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvc3RQcm9jZXNzaW5nT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUG9zdFByb2Nlc3NpbmdPcHRpb25zXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzcGVsbGluZ0NvcnJlY3Rpb246IGJvb2xlYW47XG4gICAgbm9ybWFsaXplOiBib29sZWFuO1xuICAgIGNvbmZpZz86IFBvc3RQcm9jZXNzaW5nLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBvc3RQcm9jZXNzaW5nT3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3BlbGxpbmdDb3JyZWN0aW9uOiBib29sZWFuO1xuICAgIG5vcm1hbGl6ZTogYm9vbGVhbjtcbiAgICBjb25maWc6IFBvc3RQcm9jZXNzaW5nLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhbnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmlwdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpcHRpb24oKTtcbiAgICBUcmFuc2NyaXB0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvbikge1xuICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uID0gX2luc3RhbmNlLnRyYW5zY3JpcHRpb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLmNvbmZpZGVuY2VTY29yZSA9IF9pbnN0YW5jZS5jb25maWRlbmNlU2NvcmUgfHwgMDtcbiAgICBfaW5zdGFuY2Uud29yZHMgPSBfaW5zdGFuY2Uud29yZHMgfHwgW107XG4gICAgX2luc3RhbmNlLmFsdGVybmF0aXZlcyA9IF9pbnN0YW5jZS5hbHRlcm5hdGl2ZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaXB0aW9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlkZW5jZVNjb3JlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgV29yZERldGFpbCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgV29yZERldGFpbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2Uud29yZHMgPSBfaW5zdGFuY2Uud29yZHMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5hbHRlcm5hdGl2ZXMgPSBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFuc2NyaXB0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWRlbmNlU2NvcmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UuY29uZmlkZW5jZVNjb3JlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkcyAmJiBfaW5zdGFuY2Uud29yZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uud29yZHMgYXMgYW55LFxuICAgICAgICBXb3JkRGV0YWlsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFsdGVybmF0aXZlcyAmJiBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmFsdGVybmF0aXZlcyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZGVuY2VTY29yZTogbnVtYmVyO1xuICBwcml2YXRlIF93b3Jkcz86IFdvcmREZXRhaWxbXTtcbiAgcHJpdmF0ZSBfYWx0ZXJuYXRpdmVzPzogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaXB0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYW5zY3JpcHRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHJhbnNjcmlwdGlvbiA9IF92YWx1ZS50cmFuc2NyaXB0aW9uO1xuICAgIHRoaXMuY29uZmlkZW5jZVNjb3JlID0gX3ZhbHVlLmNvbmZpZGVuY2VTY29yZTtcbiAgICB0aGlzLndvcmRzID0gKF92YWx1ZS53b3JkcyB8fCBbXSkubWFwKG0gPT4gbmV3IFdvcmREZXRhaWwobSkpO1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVzID0gKF92YWx1ZS5hbHRlcm5hdGl2ZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZShtKVxuICAgICk7XG4gICAgVHJhbnNjcmlwdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRyYW5zY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdGlvbjtcbiAgfVxuICBzZXQgdHJhbnNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWRlbmNlU2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlkZW5jZVNjb3JlO1xuICB9XG4gIHNldCBjb25maWRlbmNlU2NvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvbmZpZGVuY2VTY29yZSA9IHZhbHVlO1xuICB9XG4gIGdldCB3b3JkcygpOiBXb3JkRGV0YWlsW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkcztcbiAgfVxuICBzZXQgd29yZHModmFsdWU6IFdvcmREZXRhaWxbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFsdGVybmF0aXZlcygpOiBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FsdGVybmF0aXZlcztcbiAgfVxuICBzZXQgYWx0ZXJuYXRpdmVzKHZhbHVlOiBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FsdGVybmF0aXZlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYW5zY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmlwdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zY3JpcHRpb246IHRoaXMudHJhbnNjcmlwdGlvbixcbiAgICAgIGNvbmZpZGVuY2VTY29yZTogdGhpcy5jb25maWRlbmNlU2NvcmUsXG4gICAgICB3b3JkczogKHRoaXMud29yZHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBhbHRlcm5hdGl2ZXM6ICh0aGlzLmFsdGVybmF0aXZlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpcHRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0aW9uOiB0aGlzLnRyYW5zY3JpcHRpb24sXG4gICAgICBjb25maWRlbmNlU2NvcmU6IHRoaXMuY29uZmlkZW5jZVNjb3JlLFxuICAgICAgd29yZHM6ICh0aGlzLndvcmRzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIGFsdGVybmF0aXZlczogKHRoaXMuYWx0ZXJuYXRpdmVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaXB0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaXB0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0cmFuc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY29uZmlkZW5jZVNjb3JlOiBudW1iZXI7XG4gICAgd29yZHM/OiBXb3JkRGV0YWlsLkFzT2JqZWN0W107XG4gICAgYWx0ZXJuYXRpdmVzPzogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmlwdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2VTY29yZTogbnVtYmVyO1xuICAgIHdvcmRzOiBXb3JkRGV0YWlsLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGFsdGVybmF0aXZlczogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5UcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmVcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlKCk7XG4gICAgVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlKSB7XG4gICAgX2luc3RhbmNlLnRyYW5zY3JpcHQgPSBfaW5zdGFuY2UudHJhbnNjcmlwdCB8fCAnJztcbiAgICBfaW5zdGFuY2UuY29uZmlkZW5jZSA9IF9pbnN0YW5jZS5jb25maWRlbmNlIHx8IDA7XG4gICAgX2luc3RhbmNlLndvcmRzID0gX2luc3RhbmNlLndvcmRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlkZW5jZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IFdvcmREZXRhaWwoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIFdvcmREZXRhaWwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLndvcmRzID0gX2luc3RhbmNlLndvcmRzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpcHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRyYW5zY3JpcHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZGVuY2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UuY29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud29yZHMgJiYgX2luc3RhbmNlLndvcmRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLndvcmRzIGFzIGFueSxcbiAgICAgICAgV29yZERldGFpbC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaXB0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZGVuY2U6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29yZHM/OiBXb3JkRGV0YWlsW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmlwdGlvbkFsdGVybmF0aXZlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYW5zY3JpcHQgPSBfdmFsdWUudHJhbnNjcmlwdDtcbiAgICB0aGlzLmNvbmZpZGVuY2UgPSBfdmFsdWUuY29uZmlkZW5jZTtcbiAgICB0aGlzLndvcmRzID0gKF92YWx1ZS53b3JkcyB8fCBbXSkubWFwKG0gPT4gbmV3IFdvcmREZXRhaWwobSkpO1xuICAgIFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRyYW5zY3JpcHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdDtcbiAgfVxuICBzZXQgdHJhbnNjcmlwdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNjcmlwdCA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWRlbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZGVuY2U7XG4gIH1cbiAgc2V0IGNvbmZpZGVuY2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZHMoKTogV29yZERldGFpbFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZHM7XG4gIH1cbiAgc2V0IHdvcmRzKHZhbHVlOiBXb3JkRGV0YWlsW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93b3JkcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0OiB0aGlzLnRyYW5zY3JpcHQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2UsXG4gICAgICB3b3JkczogKHRoaXMud29yZHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0OiB0aGlzLnRyYW5zY3JpcHQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2UsXG4gICAgICB3b3JkczogKHRoaXMud29yZHMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmUge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpcHRpb25BbHRlcm5hdGl2ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHJhbnNjcmlwdDogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcbiAgICB3b3Jkcz86IFdvcmREZXRhaWwuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaXB0aW9uQWx0ZXJuYXRpdmVcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHRyYW5zY3JpcHQ6IHN0cmluZztcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG4gICAgd29yZHM6IFdvcmREZXRhaWwuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LldvcmREZXRhaWxcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmREZXRhaWwgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LldvcmREZXRhaWwnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXb3JkRGV0YWlsKCk7XG4gICAgV29yZERldGFpbC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFdvcmREZXRhaWwpIHtcbiAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lID0gX2luc3RhbmNlLnN0YXJ0VGltZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gX2luc3RhbmNlLmVuZFRpbWUgfHwgMDtcbiAgICBfaW5zdGFuY2Uud29yZCA9IF9pbnN0YW5jZS53b3JkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5jb25maWRlbmNlID0gX2luc3RhbmNlLmNvbmZpZGVuY2UgfHwgMDtcbiAgICBfaW5zdGFuY2Uud29yZEFsdGVybmF0aXZlcyA9IF9pbnN0YW5jZS53b3JkQWx0ZXJuYXRpdmVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogV29yZERldGFpbCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS53b3JkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlkZW5jZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI1ID0gbmV3IFdvcmRBbHRlcm5hdGl2ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI1LFxuICAgICAgICAgICAgV29yZEFsdGVybmF0aXZlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS53b3JkQWx0ZXJuYXRpdmVzID0gX2luc3RhbmNlLndvcmRBbHRlcm5hdGl2ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI1XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdvcmREZXRhaWwucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXb3JkRGV0YWlsLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnN0YXJ0VGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDEsIF9pbnN0YW5jZS5zdGFydFRpbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuZFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UuZW5kVGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud29yZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2Uud29yZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlkZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5jb25maWRlbmNlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkQWx0ZXJuYXRpdmVzICYmIF9pbnN0YW5jZS53b3JkQWx0ZXJuYXRpdmVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLndvcmRBbHRlcm5hdGl2ZXMgYXMgYW55LFxuICAgICAgICBXb3JkQWx0ZXJuYXRpdmUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfd29yZDogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWRlbmNlOiBudW1iZXI7XG4gIHByaXZhdGUgX3dvcmRBbHRlcm5hdGl2ZXM/OiBXb3JkQWx0ZXJuYXRpdmVbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdvcmREZXRhaWwgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V29yZERldGFpbC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdGFydFRpbWUgPSBfdmFsdWUuc3RhcnRUaW1lO1xuICAgIHRoaXMuZW5kVGltZSA9IF92YWx1ZS5lbmRUaW1lO1xuICAgIHRoaXMud29yZCA9IF92YWx1ZS53b3JkO1xuICAgIHRoaXMuY29uZmlkZW5jZSA9IF92YWx1ZS5jb25maWRlbmNlO1xuICAgIHRoaXMud29yZEFsdGVybmF0aXZlcyA9IChfdmFsdWUud29yZEFsdGVybmF0aXZlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgV29yZEFsdGVybmF0aXZlKG0pXG4gICAgKTtcbiAgICBXb3JkRGV0YWlsLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3RhcnRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTtcbiAgfVxuICBzZXQgc3RhcnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kVGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbmRUaW1lO1xuICB9XG4gIHNldCBlbmRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZDtcbiAgfVxuICBzZXQgd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd29yZCA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWRlbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZGVuY2U7XG4gIH1cbiAgc2V0IGNvbmZpZGVuY2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZEFsdGVybmF0aXZlcygpOiBXb3JkQWx0ZXJuYXRpdmVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmRBbHRlcm5hdGl2ZXM7XG4gIH1cbiAgc2V0IHdvcmRBbHRlcm5hdGl2ZXModmFsdWU6IFdvcmRBbHRlcm5hdGl2ZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd29yZEFsdGVybmF0aXZlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdvcmREZXRhaWwuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogV29yZERldGFpbC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLmVuZFRpbWUsXG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2UsXG4gICAgICB3b3JkQWx0ZXJuYXRpdmVzOiAodGhpcy53b3JkQWx0ZXJuYXRpdmVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV29yZERldGFpbC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLmVuZFRpbWUsXG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2UsXG4gICAgICB3b3JkQWx0ZXJuYXRpdmVzOiAodGhpcy53b3JkQWx0ZXJuYXRpdmVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXb3JkRGV0YWlsIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBXb3JkRGV0YWlsXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBlbmRUaW1lOiBudW1iZXI7XG4gICAgd29yZDogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcbiAgICB3b3JkQWx0ZXJuYXRpdmVzPzogV29yZEFsdGVybmF0aXZlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV29yZERldGFpbFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3RhcnRUaW1lOiBudW1iZXI7XG4gICAgZW5kVGltZTogbnVtYmVyO1xuICAgIHdvcmQ6IHN0cmluZztcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XG4gICAgd29yZEFsdGVybmF0aXZlczogV29yZEFsdGVybmF0aXZlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5Xb3JkQWx0ZXJuYXRpdmVcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmRBbHRlcm5hdGl2ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuV29yZEFsdGVybmF0aXZlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV29yZEFsdGVybmF0aXZlKCk7XG4gICAgV29yZEFsdGVybmF0aXZlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV29yZEFsdGVybmF0aXZlKSB7XG4gICAgX2luc3RhbmNlLndvcmQgPSBfaW5zdGFuY2Uud29yZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuY29uZmlkZW5jZSA9IF9pbnN0YW5jZS5jb25maWRlbmNlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXb3JkQWx0ZXJuYXRpdmUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLndvcmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWRlbmNlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdvcmRBbHRlcm5hdGl2ZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFdvcmRBbHRlcm5hdGl2ZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS53b3JkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWRlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLmNvbmZpZGVuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3dvcmQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29uZmlkZW5jZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgV29yZEFsdGVybmF0aXZlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFdvcmRBbHRlcm5hdGl2ZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy53b3JkID0gX3ZhbHVlLndvcmQ7XG4gICAgdGhpcy5jb25maWRlbmNlID0gX3ZhbHVlLmNvbmZpZGVuY2U7XG4gICAgV29yZEFsdGVybmF0aXZlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgd29yZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93b3JkO1xuICB9XG4gIHNldCB3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93b3JkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZGVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlkZW5jZTtcbiAgfVxuICBzZXQgY29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29uZmlkZW5jZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdvcmRBbHRlcm5hdGl2ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXb3JkQWx0ZXJuYXRpdmUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBXb3JkQWx0ZXJuYXRpdmUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2VcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFdvcmRBbHRlcm5hdGl2ZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV29yZEFsdGVybmF0aXZlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB3b3JkOiBzdHJpbmc7XG4gICAgY29uZmlkZW5jZTogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdvcmRBbHRlcm5hdGl2ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgd29yZDogc3RyaW5nO1xuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhbnNjcmliZVN0cmVhbVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5UcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0KCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5hdWRpb0NodW5rID0gX2luc3RhbmNlLmF1ZGlvQ2h1bmsgfHwgbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICBfaW5zdGFuY2UuZW5kT2ZTdHJlYW0gPSBfaW5zdGFuY2UuZW5kT2ZTdHJlYW0gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNvbmZpZyA9IF9pbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tdXRlQXVkaW8gPSBfaW5zdGFuY2UubXV0ZUF1ZGlvIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvQ2h1bmsgPSBfcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVuZE9mU3RyZWFtID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyA9IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5tdXRlQXVkaW8gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvQ2h1bmsgJiYgX2luc3RhbmNlLmF1ZGlvQ2h1bmsubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQnl0ZXMoMSwgX2luc3RhbmNlLmF1ZGlvQ2h1bmspO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuZE9mU3RyZWFtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UuZW5kT2ZTdHJlYW0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tdXRlQXVkaW8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5tdXRlQXVkaW8pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvQ2h1bms6IFVpbnQ4QXJyYXk7XG4gIHByaXZhdGUgX2VuZE9mU3RyZWFtOiBib29sZWFuO1xuICBwcml2YXRlIF9jb25maWc/OiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZztcbiAgcHJpdmF0ZSBfbXV0ZUF1ZGlvOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZVN0cmVhbVJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYXVkaW9DaHVuayA9IF92YWx1ZS5hdWRpb0NodW5rO1xuICAgIHRoaXMuZW5kT2ZTdHJlYW0gPSBfdmFsdWUuZW5kT2ZTdHJlYW07XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnXG4gICAgICA/IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdXRlQXVkaW8gPSBfdmFsdWUubXV0ZUF1ZGlvO1xuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYXVkaW9DaHVuaygpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9DaHVuaztcbiAgfVxuICBzZXQgYXVkaW9DaHVuayh2YWx1ZTogVWludDhBcnJheSkge1xuICAgIHRoaXMuX2F1ZGlvQ2h1bmsgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kT2ZTdHJlYW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZE9mU3RyZWFtO1xuICB9XG4gIHNldCBlbmRPZlN0cmVhbSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VuZE9mU3RyZWFtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCBtdXRlQXVkaW8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211dGVBdWRpbztcbiAgfVxuICBzZXQgbXV0ZUF1ZGlvKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXV0ZUF1ZGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmliZVN0cmVhbVJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhdWRpb0NodW5rOiB0aGlzLmF1ZGlvQ2h1bmtcbiAgICAgICAgPyB0aGlzLmF1ZGlvQ2h1bmsuc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgZW5kT2ZTdHJlYW06IHRoaXMuZW5kT2ZTdHJlYW0sXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG11dGVBdWRpbzogdGhpcy5tdXRlQXVkaW9cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvQ2h1bms6IHRoaXMuYXVkaW9DaHVuayA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLmF1ZGlvQ2h1bmspIDogJycsXG4gICAgICBlbmRPZlN0cmVhbTogdGhpcy5lbmRPZlN0cmVhbSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBtdXRlQXVkaW86IHRoaXMubXV0ZUF1ZGlvXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlU3RyZWFtUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZVN0cmVhbVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGF1ZGlvQ2h1bms6IFVpbnQ4QXJyYXk7XG4gICAgZW5kT2ZTdHJlYW06IGJvb2xlYW47XG4gICAgY29uZmlnPzogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gICAgbXV0ZUF1ZGlvOiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVTdHJlYW1SZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhdWRpb0NodW5rOiBzdHJpbmc7XG4gICAgZW5kT2ZTdHJlYW06IGJvb2xlYW47XG4gICAgY29uZmlnOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbXV0ZUF1ZGlvOiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5UcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlKCk7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zID0gX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS50aW1lID0gX2luc3RhbmNlLnRpbWUgfHwgMDtcbiAgICBfaW5zdGFuY2UuZmluYWwgPSBfaW5zdGFuY2UuZmluYWwgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnJldHVybkF1ZGlvID0gX2luc3RhbmNlLnJldHVybkF1ZGlvIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5hdWRpbyA9IF9pbnN0YW5jZS5hdWRpbyB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCA9IF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuYXVkaW9VdWlkID0gX2luc3RhbmNlLmF1ZGlvVXVpZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFRyYW5zY3JpcHRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFRyYW5zY3JpcHRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zID0gX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZmluYWwgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucmV0dXJuQXVkaW8gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW8gPSBfcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnV0dGVyYW5jZVN0YXJ0ID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmF1ZGlvVXVpZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyA9IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgVHJhbnNjcmliZVJlcXVlc3RDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyAmJiBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaXB0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2UudGltZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmluYWwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5maW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmV0dXJuQXVkaW8pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5yZXR1cm5BdWRpbyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW8gJiYgX2luc3RhbmNlLmF1ZGlvLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDUsIF9pbnN0YW5jZS5hdWRpbyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXR0ZXJhbmNlU3RhcnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS51dHRlcmFuY2VTdGFydCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9VdWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS5hdWRpb1V1aWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaXB0aW9ucz86IFRyYW5zY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfdGltZTogbnVtYmVyO1xuICBwcml2YXRlIF9maW5hbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmV0dXJuQXVkaW86IGJvb2xlYW47XG4gIHByaXZhdGUgX2F1ZGlvOiBVaW50OEFycmF5O1xuICBwcml2YXRlIF91dHRlcmFuY2VTdGFydDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYXVkaW9VdWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZz86IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnO1xuXG4gIHByaXZhdGUgX29uZW9mQ29uZmlnOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuT25lb2ZDb25maWdDYXNlID1cbiAgICBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuT25lb2ZDb25maWdDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYW5zY3JpcHRpb25zID0gKF92YWx1ZS50cmFuc2NyaXB0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgVHJhbnNjcmlwdGlvbihtKVxuICAgICk7XG4gICAgdGhpcy50aW1lID0gX3ZhbHVlLnRpbWU7XG4gICAgdGhpcy5maW5hbCA9IF92YWx1ZS5maW5hbDtcbiAgICB0aGlzLnJldHVybkF1ZGlvID0gX3ZhbHVlLnJldHVybkF1ZGlvO1xuICAgIHRoaXMuYXVkaW8gPSBfdmFsdWUuYXVkaW87XG4gICAgdGhpcy51dHRlcmFuY2VTdGFydCA9IF92YWx1ZS51dHRlcmFuY2VTdGFydDtcbiAgICB0aGlzLmF1ZGlvVXVpZCA9IF92YWx1ZS5hdWRpb1V1aWQ7XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnXG4gICAgICA/IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdGlvbnMoKTogVHJhbnNjcmlwdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdGlvbnM7XG4gIH1cbiAgc2V0IHRyYW5zY3JpcHRpb25zKHZhbHVlOiBUcmFuc2NyaXB0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCB0aW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cbiAgc2V0IHRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmluYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmFsO1xuICB9XG4gIHNldCBmaW5hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJldHVybkF1ZGlvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5BdWRpbztcbiAgfVxuICBzZXQgcmV0dXJuQXVkaW8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXR1cm5BdWRpbyA9IHZhbHVlO1xuICB9XG4gIGdldCBhdWRpbygpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW87XG4gIH1cbiAgc2V0IGF1ZGlvKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5fYXVkaW8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXR0ZXJhbmNlU3RhcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3V0dGVyYW5jZVN0YXJ0O1xuICB9XG4gIHNldCB1dHRlcmFuY2VTdGFydCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3V0dGVyYW5jZVN0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vbmVvZkNvbmZpZyA9IFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5PbmVvZkNvbmZpZ0Nhc2UuY29uZmlnO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb25lb2ZDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0aW9uczogKHRoaXMudHJhbnNjcmlwdGlvbnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBmaW5hbDogdGhpcy5maW5hbCxcbiAgICAgIHJldHVybkF1ZGlvOiB0aGlzLnJldHVybkF1ZGlvLFxuICAgICAgYXVkaW86IHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnN1YmFycmF5KDApIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIHV0dGVyYW5jZVN0YXJ0OiB0aGlzLnV0dGVyYW5jZVN0YXJ0LFxuICAgICAgYXVkaW9VdWlkOiB0aGlzLmF1ZGlvVXVpZCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVHJhbnNjcmliZVN0cmVhbVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbnM6ICh0aGlzLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgZmluYWw6IHRoaXMuZmluYWwsXG4gICAgICByZXR1cm5BdWRpbzogdGhpcy5yZXR1cm5BdWRpbyxcbiAgICAgIGF1ZGlvOiB0aGlzLmF1ZGlvID8gdWludDhBcnJheVRvQmFzZTY0KHRoaXMuYXVkaW8pIDogJycsXG4gICAgICB1dHRlcmFuY2VTdGFydDogdGhpcy51dHRlcmFuY2VTdGFydCxcbiAgICAgIGF1ZGlvVXVpZDogdGhpcy5hdWRpb1V1aWQsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlU3RyZWFtUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHJhbnNjcmlwdGlvbnM/OiBUcmFuc2NyaXB0aW9uLkFzT2JqZWN0W107XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZpbmFsOiBib29sZWFuO1xuICAgIHJldHVybkF1ZGlvOiBib29sZWFuO1xuICAgIGF1ZGlvOiBVaW50OEFycmF5O1xuICAgIHV0dGVyYW5jZVN0YXJ0OiBib29sZWFuO1xuICAgIGF1ZGlvVXVpZDogc3RyaW5nO1xuICAgIGNvbmZpZz86IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYW5zY3JpYmVTdHJlYW1SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmlwdGlvbnM6IFRyYW5zY3JpcHRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGZpbmFsOiBib29sZWFuO1xuICAgIHJldHVybkF1ZGlvOiBib29sZWFuO1xuICAgIGF1ZGlvOiBzdHJpbmc7XG4gICAgdXR0ZXJhbmNlU3RhcnQ6IGJvb2xlYW47XG4gICAgYXVkaW9VdWlkOiBzdHJpbmc7XG4gICAgY29uZmlnOiBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gT25lb2ZDb25maWdDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBjb25maWcgPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlRyYW5zY3JpYmVGaWxlUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZUZpbGVSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5UcmFuc2NyaWJlRmlsZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFuc2NyaWJlRmlsZVJlcXVlc3QoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuYXVkaW9GaWxlID0gX2luc3RhbmNlLmF1ZGlvRmlsZSB8fCBuZXcgVWludDhBcnJheSgpO1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRyYW5zY3JpYmVGaWxlUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9GaWxlID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgVHJhbnNjcmliZVJlcXVlc3RDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9GaWxlICYmIF9pbnN0YW5jZS5hdWRpb0ZpbGUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQnl0ZXMoMSwgX2luc3RhbmNlLmF1ZGlvRmlsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvRmlsZTogVWludDhBcnJheTtcbiAgcHJpdmF0ZSBfY29uZmlnPzogVHJhbnNjcmliZVJlcXVlc3RDb25maWc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlRmlsZVJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmF1ZGlvRmlsZSA9IF92YWx1ZS5hdWRpb0ZpbGU7XG4gICAgdGhpcy5jb25maWcgPSBfdmFsdWUuY29uZmlnXG4gICAgICA/IG5ldyBUcmFuc2NyaWJlUmVxdWVzdENvbmZpZyhfdmFsdWUuY29uZmlnKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVHJhbnNjcmliZUZpbGVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYXVkaW9GaWxlKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0ZpbGU7XG4gIH1cbiAgc2V0IGF1ZGlvRmlsZSh2YWx1ZTogVWludDhBcnJheSkge1xuICAgIHRoaXMuX2F1ZGlvRmlsZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWcoKTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWx1ZTogVHJhbnNjcmliZVJlcXVlc3RDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9GaWxlOiB0aGlzLmF1ZGlvRmlsZSA/IHRoaXMuYXVkaW9GaWxlLnN1YmFycmF5KDApIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVHJhbnNjcmliZUZpbGVSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9GaWxlOiB0aGlzLmF1ZGlvRmlsZSA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLmF1ZGlvRmlsZSkgOiAnJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYW5zY3JpYmVGaWxlUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZUZpbGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBhdWRpb0ZpbGU6IFVpbnQ4QXJyYXk7XG4gICAgY29uZmlnPzogVHJhbnNjcmliZVJlcXVlc3RDb25maWcuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZUZpbGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhdWRpb0ZpbGU6IHN0cmluZztcbiAgICBjb25maWc6IFRyYW5zY3JpYmVSZXF1ZXN0Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhbnNjcmliZUZpbGVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNjcmliZUZpbGVSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVHJhbnNjcmliZUZpbGVSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UoKTtcbiAgICBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhbnNjcmliZUZpbGVSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyA9IF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyB8fCBbXTtcbiAgICBfaW5zdGFuY2UudGltZSA9IF9pbnN0YW5jZS50aW1lIHx8IDA7XG4gICAgX2luc3RhbmNlLmF1ZGlvVXVpZCA9IF9pbnN0YW5jZS5hdWRpb1V1aWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgVHJhbnNjcmlwdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgVHJhbnNjcmlwdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMgPSBfaW5zdGFuY2UudHJhbnNjcmlwdGlvbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50aW1lID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpb1V1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpcHRpb25zICYmIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS50cmFuc2NyaXB0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYW5zY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDIsIF9pbnN0YW5jZS50aW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hdWRpb1V1aWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmF1ZGlvVXVpZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNjcmlwdGlvbnM/OiBUcmFuc2NyaXB0aW9uW107XG4gIHByaXZhdGUgX3RpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXVkaW9VdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHJhbnNjcmlwdGlvbnMgPSAoX3ZhbHVlLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBUcmFuc2NyaXB0aW9uKG0pXG4gICAgKTtcbiAgICB0aGlzLnRpbWUgPSBfdmFsdWUudGltZTtcbiAgICB0aGlzLmF1ZGlvVXVpZCA9IF92YWx1ZS5hdWRpb1V1aWQ7XG4gICAgVHJhbnNjcmliZUZpbGVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRyYW5zY3JpcHRpb25zKCk6IFRyYW5zY3JpcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zY3JpcHRpb25zO1xuICB9XG4gIHNldCB0cmFuc2NyaXB0aW9ucyh2YWx1ZTogVHJhbnNjcmlwdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhbnNjcmlwdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1ZGlvVXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb1V1aWQ7XG4gIH1cbiAgc2V0IGF1ZGlvVXVpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXVkaW9VdWlkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhbnNjcmliZUZpbGVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmlwdGlvbnM6ICh0aGlzLnRyYW5zY3JpcHRpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgYXVkaW9VdWlkOiB0aGlzLmF1ZGlvVXVpZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYW5zY3JpYmVGaWxlUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2NyaXB0aW9uczogKHRoaXMudHJhbnNjcmlwdGlvbnMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICBhdWRpb1V1aWQ6IHRoaXMuYXVkaW9VdWlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFuc2NyaWJlRmlsZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0cmFuc2NyaXB0aW9ucz86IFRyYW5zY3JpcHRpb24uQXNPYmplY3RbXTtcbiAgICB0aW1lOiBudW1iZXI7XG4gICAgYXVkaW9VdWlkOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVHJhbnNjcmliZUZpbGVSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHJhbnNjcmlwdGlvbnM6IFRyYW5zY3JpcHRpb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgdGltZTogbnVtYmVyO1xuICAgIGF1ZGlvVXVpZDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5TMnRQaXBlbGluZUlkXG4gKi9cbmV4cG9ydCBjbGFzcyBTMnRQaXBlbGluZUlkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TMnRQaXBlbGluZUlkJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUzJ0UGlwZWxpbmVJZCgpO1xuICAgIFMydFBpcGVsaW5lSWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTMnRQaXBlbGluZUlkKSB7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUzJ0UGlwZWxpbmVJZCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFMydFBpcGVsaW5lSWQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTMnRQaXBlbGluZUlkLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFMydFBpcGVsaW5lSWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UzJ0UGlwZWxpbmVJZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICBTMnRQaXBlbGluZUlkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFMydFBpcGVsaW5lSWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUzJ0UGlwZWxpbmVJZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUzJ0UGlwZWxpbmVJZC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTMnRQaXBlbGluZUlkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTMnRQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFMydFBpcGVsaW5lSWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlkOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxpc3RTMnRQaXBlbGluZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCgpO1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgfHwgW107XG4gICAgX2luc3RhbmNlLmRvbWFpbnMgPSBfaW5zdGFuY2UuZG9tYWlucyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucmVnaXN0ZXJlZE9ubHkgPSBfaW5zdGFuY2UucmVnaXN0ZXJlZE9ubHkgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzID0gX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucmVnaXN0ZXJlZE9ubHkgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzICYmIF9pbnN0YW5jZS5waXBlbGluZU93bmVycy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRvbWFpbnMgJiYgX2luc3RhbmNlLmRvbWFpbnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMywgX2luc3RhbmNlLmRvbWFpbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlZ2lzdGVyZWRPbmx5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg0LCBfaW5zdGFuY2UucmVnaXN0ZXJlZE9ubHkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlczogc3RyaW5nW107XG4gIHByaXZhdGUgX3BpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZG9tYWluczogc3RyaW5nW107XG4gIHByaXZhdGUgX3JlZ2lzdGVyZWRPbmx5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydFBpcGVsaW5lc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VzID0gKF92YWx1ZS5sYW5ndWFnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5kb21haW5zID0gKF92YWx1ZS5kb21haW5zIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJlZE9ubHkgPSBfdmFsdWUucmVnaXN0ZXJlZE9ubHk7XG4gICAgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmVPd25lcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZU93bmVycztcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZG9tYWlucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbnM7XG4gIH1cbiAgc2V0IGRvbWFpbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG9tYWlucyA9IHZhbHVlO1xuICB9XG4gIGdldCByZWdpc3RlcmVkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJlZE9ubHk7XG4gIH1cbiAgc2V0IHJlZ2lzdGVyZWRPbmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJlZE9ubHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHJlZ2lzdGVyZWRPbmx5OiB0aGlzLnJlZ2lzdGVyZWRPbmx5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFMydFBpcGVsaW5lc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKCksXG4gICAgICByZWdpc3RlcmVkT25seTogdGhpcy5yZWdpc3RlcmVkT25seVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydFBpcGVsaW5lc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRQaXBlbGluZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZXM6IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcbiAgICBkb21haW5zOiBzdHJpbmdbXTtcbiAgICByZWdpc3RlcmVkT25seTogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0UGlwZWxpbmVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVyczogc3RyaW5nW107XG4gICAgZG9tYWluczogc3RyaW5nW107XG4gICAgcmVnaXN0ZXJlZE9ubHk6IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxpc3RTMnRQaXBlbGluZXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UoKTtcbiAgICBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVDb25maWdzID0gX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRQaXBlbGluZXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFNwZWVjaDJUZXh0Q29uZmlnKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTcGVlY2gyVGV4dENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UucGlwZWxpbmVDb25maWdzID0gX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyAmJiBfaW5zdGFuY2UucGlwZWxpbmVDb25maWdzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnBpcGVsaW5lQ29uZmlncyBhcyBhbnksXG4gICAgICAgIFNwZWVjaDJUZXh0Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BpcGVsaW5lQ29uZmlncz86IFNwZWVjaDJUZXh0Q29uZmlnW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lQ29uZmlncyA9IChfdmFsdWUucGlwZWxpbmVDb25maWdzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBTcGVlY2gyVGV4dENvbmZpZyhtKVxuICAgICk7XG4gICAgTGlzdFMydFBpcGVsaW5lc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGlwZWxpbmVDb25maWdzKCk6IFNwZWVjaDJUZXh0Q29uZmlnW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZUNvbmZpZ3M7XG4gIH1cbiAgc2V0IHBpcGVsaW5lQ29uZmlncyh2YWx1ZTogU3BlZWNoMlRleHRDb25maWdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BpcGVsaW5lQ29uZmlncyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwaXBlbGluZUNvbmZpZ3M6ICh0aGlzLnBpcGVsaW5lQ29uZmlncyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTMnRQaXBlbGluZXNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBpcGVsaW5lQ29uZmlnczogKHRoaXMucGlwZWxpbmVDb25maWdzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRQaXBlbGluZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGlwZWxpbmVDb25maWdzPzogU3BlZWNoMlRleHRDb25maWcuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0UGlwZWxpbmVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBpcGVsaW5lQ29uZmlnczogU3BlZWNoMlRleHRDb25maWcuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydExhbmd1YWdlc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZG9tYWlucyAmJiBfaW5zdGFuY2UuZG9tYWlucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZG9tYWlucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgJiYgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5waXBlbGluZU93bmVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZG9tYWluczogc3RyaW5nW107XG4gIHByaXZhdGUgX3BpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnRMYW5ndWFnZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRvbWFpbnMgPSAoX3ZhbHVlLmRvbWFpbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5waXBlbGluZU93bmVycyA9IChfdmFsdWUucGlwZWxpbmVPd25lcnMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkb21haW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWlucztcbiAgfVxuICBzZXQgZG9tYWlucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kb21haW5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcnM7XG4gIH1cbiAgc2V0IHBpcGVsaW5lT3duZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3BpcGVsaW5lT3duZXJzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydExhbmd1YWdlc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFMydExhbmd1YWdlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW5zOiAodGhpcy5kb21haW5zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGRvbWFpbnM6IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0TGFuZ3VhZ2VzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZG9tYWluczogc3RyaW5nW107XG4gICAgcGlwZWxpbmVPd25lcnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5sYW5ndWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydExhbmd1YWdlc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UzJ0TGFuZ3VhZ2VzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxpc3RTMnREb21haW5zUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdFMydERvbWFpbnNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0RG9tYWluc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UzJ0RG9tYWluc1JlcXVlc3QoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VzID0gX2luc3RhbmNlLmxhbmd1YWdlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYW5ndWFnZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZU93bmVycyA9IF9pbnN0YW5jZS5waXBlbGluZU93bmVycyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTMnREb21haW5zUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnREb21haW5zUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZXMgJiYgX2luc3RhbmNlLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZU93bmVycyAmJiBfaW5zdGFuY2UucGlwZWxpbmVPd25lcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgX2luc3RhbmNlLnBpcGVsaW5lT3duZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydERvbWFpbnNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IChfdmFsdWUubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucGlwZWxpbmVPd25lcnMgPSAoX3ZhbHVlLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTMnREb21haW5zUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xhbmd1YWdlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaXBlbGluZU93bmVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lT3duZXJzO1xuICB9XG4gIHNldCBwaXBlbGluZU93bmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9waXBlbGluZU93bmVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnREb21haW5zUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0RG9tYWluc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZXM6ICh0aGlzLmxhbmd1YWdlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHBpcGVsaW5lT3duZXJzOiAodGhpcy5waXBlbGluZU93bmVycyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTMnREb21haW5zUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlczogKHRoaXMubGFuZ3VhZ2VzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcGlwZWxpbmVPd25lcnM6ICh0aGlzLnBpcGVsaW5lT3duZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0RG9tYWluc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnREb21haW5zUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgICBwaXBlbGluZU93bmVyczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydERvbWFpbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZXM6IHN0cmluZ1tdO1xuICAgIHBpcGVsaW5lT3duZXJzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGlzdFMydERvbWFpbnNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFMydERvbWFpbnNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGlzdFMydERvbWFpbnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnREb21haW5zUmVzcG9uc2UoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGlzdFMydERvbWFpbnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5kb21haW5zID0gX2luc3RhbmNlLmRvbWFpbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZG9tYWlucyA9IF9pbnN0YW5jZS5kb21haW5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFMydERvbWFpbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnREb21haW5zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZG9tYWlucyAmJiBfaW5zdGFuY2UuZG9tYWlucy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZG9tYWlucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZG9tYWluczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTMnREb21haW5zUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZG9tYWlucyA9IChfdmFsdWUuZG9tYWlucyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZG9tYWlucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbnM7XG4gIH1cbiAgc2V0IGRvbWFpbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZG9tYWlucyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTMnREb21haW5zUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydERvbWFpbnNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbnM6ICh0aGlzLmRvbWFpbnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0RG9tYWluc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluczogKHRoaXMuZG9tYWlucyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFMydERvbWFpbnNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydERvbWFpbnNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZG9tYWluczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydERvbWFpbnNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZG9tYWluczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlKCk7XG4gICAgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UudmVyc2lvbiA9IF9pbnN0YW5jZS52ZXJzaW9uIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUzJUR2V0U2VydmljZUluZm9SZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudmVyc2lvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UudmVyc2lvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudmVyc2lvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSBfdmFsdWUudmVyc2lvbjtcbiAgICBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG4gIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTMlRHZXRTZXJ2aWNlSW5mb1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUzJUR2V0U2VydmljZUluZm9SZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUzJUR2V0U2VydmljZUluZm9SZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFMyVEdldFNlcnZpY2VJbmZvUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHZlcnNpb246IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3BlZWNoMlRleHRDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaDJUZXh0Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TcGVlY2gyVGV4dENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNwZWVjaDJUZXh0Q29uZmlnKCk7XG4gICAgU3BlZWNoMlRleHRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pZCA9IF9pbnN0YW5jZS5pZCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfaW5zdGFuY2UuYWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgPSBfaW5zdGFuY2UuaW5mZXJlbmNlIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyID0gX2luc3RhbmNlLnN0cmVhbWluZ1NlcnZlciB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gPVxuICAgICAgX2luc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyA9IF9pbnN0YW5jZS5wb3N0UHJvY2Vzc2luZyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmxvZ2dpbmcgPSBfaW5zdGFuY2UubG9nZ2luZyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTcGVlY2gyVGV4dENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IG5ldyBTMlREZXNjcmlwdGlvbigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBTMlREZXNjcmlwdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmFjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgPSBuZXcgUzJUSW5mZXJlbmNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UsXG4gICAgICAgICAgICBTMlRJbmZlcmVuY2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIgPSBuZXcgU3RyZWFtaW5nU2VydmVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdHJlYW1pbmdTZXJ2ZXIsXG4gICAgICAgICAgICBTdHJlYW1pbmdTZXJ2ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID0gbmV3IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgICAgICAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NpbmcgPSBuZXcgUG9zdFByb2Nlc3NpbmcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nLFxuICAgICAgICAgICAgUG9zdFByb2Nlc3NpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5sb2dnaW5nID0gbmV3IExvZ2dpbmcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxvZ2dpbmcsXG4gICAgICAgICAgICBMb2dnaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTcGVlY2gyVGV4dENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNwZWVjaDJUZXh0Q29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gYXMgYW55LFxuICAgICAgICBTMlREZXNjcmlwdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmluZmVyZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2UgYXMgYW55LFxuICAgICAgICBTMlRJbmZlcmVuY2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RyZWFtaW5nU2VydmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLnN0cmVhbWluZ1NlcnZlciBhcyBhbnksXG4gICAgICAgIFN0cmVhbWluZ1NlcnZlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS52b2ljZUFjdGl2aXR5RGV0ZWN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gYXMgYW55LFxuICAgICAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLnBvc3RQcm9jZXNzaW5nIGFzIGFueSxcbiAgICAgICAgUG9zdFByb2Nlc3Npbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9nZ2luZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS5sb2dnaW5nIGFzIGFueSxcbiAgICAgICAgTG9nZ2luZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IFMyVERlc2NyaXB0aW9uO1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2luZmVyZW5jZT86IFMyVEluZmVyZW5jZTtcbiAgcHJpdmF0ZSBfc3RyZWFtaW5nU2VydmVyPzogU3RyZWFtaW5nU2VydmVyO1xuICBwcml2YXRlIF92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uPzogVm9pY2VBY3Rpdml0eURldGVjdGlvbjtcbiAgcHJpdmF0ZSBfcG9zdFByb2Nlc3Npbmc/OiBQb3N0UHJvY2Vzc2luZztcbiAgcHJpdmF0ZSBfbG9nZ2luZz86IExvZ2dpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTcGVlY2gyVGV4dENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTcGVlY2gyVGV4dENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZCA9IF92YWx1ZS5pZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gX3ZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICA/IG5ldyBTMlREZXNjcmlwdGlvbihfdmFsdWUuZGVzY3JpcHRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZSA9IF92YWx1ZS5hY3RpdmU7XG4gICAgdGhpcy5pbmZlcmVuY2UgPSBfdmFsdWUuaW5mZXJlbmNlXG4gICAgICA/IG5ldyBTMlRJbmZlcmVuY2UoX3ZhbHVlLmluZmVyZW5jZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RyZWFtaW5nU2VydmVyID0gX3ZhbHVlLnN0cmVhbWluZ1NlcnZlclxuICAgICAgPyBuZXcgU3RyZWFtaW5nU2VydmVyKF92YWx1ZS5zdHJlYW1pbmdTZXJ2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gPSBfdmFsdWUudm9pY2VBY3Rpdml0eURldGVjdGlvblxuICAgICAgPyBuZXcgVm9pY2VBY3Rpdml0eURldGVjdGlvbihfdmFsdWUudm9pY2VBY3Rpdml0eURldGVjdGlvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zdFByb2Nlc3NpbmcgPSBfdmFsdWUucG9zdFByb2Nlc3NpbmdcbiAgICAgID8gbmV3IFBvc3RQcm9jZXNzaW5nKF92YWx1ZS5wb3N0UHJvY2Vzc2luZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubG9nZ2luZyA9IF92YWx1ZS5sb2dnaW5nID8gbmV3IExvZ2dpbmcoX3ZhbHVlLmxvZ2dpbmcpIDogdW5kZWZpbmVkO1xuICAgIFNwZWVjaDJUZXh0Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBTMlREZXNjcmlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogUzJURGVzY3JpcHRpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluZmVyZW5jZSgpOiBTMlRJbmZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2U7XG4gIH1cbiAgc2V0IGluZmVyZW5jZSh2YWx1ZTogUzJUSW5mZXJlbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbWluZ1NlcnZlcigpOiBTdHJlYW1pbmdTZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmdTZXJ2ZXI7XG4gIH1cbiAgc2V0IHN0cmVhbWluZ1NlcnZlcih2YWx1ZTogU3RyZWFtaW5nU2VydmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nU2VydmVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oKTogVm9pY2VBY3Rpdml0eURldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvaWNlQWN0aXZpdHlEZXRlY3Rpb247XG4gIH1cbiAgc2V0IHZvaWNlQWN0aXZpdHlEZXRlY3Rpb24odmFsdWU6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92b2ljZUFjdGl2aXR5RGV0ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzaW5nKCk6IFBvc3RQcm9jZXNzaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdFByb2Nlc3Npbmc7XG4gIH1cbiAgc2V0IHBvc3RQcm9jZXNzaW5nKHZhbHVlOiBQb3N0UHJvY2Vzc2luZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvZ2dpbmcoKTogTG9nZ2luZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmc7XG4gIH1cbiAgc2V0IGxvZ2dpbmcodmFsdWU6IExvZ2dpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sb2dnaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3BlZWNoMlRleHRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3BlZWNoMlRleHRDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8gdGhpcy5kZXNjcmlwdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGluZmVyZW5jZTogdGhpcy5pbmZlcmVuY2UgPyB0aGlzLmluZmVyZW5jZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RyZWFtaW5nU2VydmVyOiB0aGlzLnN0cmVhbWluZ1NlcnZlclxuICAgICAgICA/IHRoaXMuc3RyZWFtaW5nU2VydmVyLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uOiB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cbiAgICAgICAgPyB0aGlzLnZvaWNlQWN0aXZpdHlEZXRlY3Rpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvc3RQcm9jZXNzaW5nOiB0aGlzLnBvc3RQcm9jZXNzaW5nXG4gICAgICAgID8gdGhpcy5wb3N0UHJvY2Vzc2luZy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbG9nZ2luZzogdGhpcy5sb2dnaW5nID8gdGhpcy5sb2dnaW5nLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTcGVlY2gyVGV4dENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgPyB0aGlzLmRlc2NyaXB0aW9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBpbmZlcmVuY2U6IHRoaXMuaW5mZXJlbmNlID8gdGhpcy5pbmZlcmVuY2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc3RyZWFtaW5nU2VydmVyOiB0aGlzLnN0cmVhbWluZ1NlcnZlclxuICAgICAgICA/IHRoaXMuc3RyZWFtaW5nU2VydmVyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHZvaWNlQWN0aXZpdHlEZXRlY3Rpb246IHRoaXMudm9pY2VBY3Rpdml0eURldGVjdGlvblxuICAgICAgICA/IHRoaXMudm9pY2VBY3Rpdml0eURldGVjdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwb3N0UHJvY2Vzc2luZzogdGhpcy5wb3N0UHJvY2Vzc2luZ1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NpbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbG9nZ2luZzogdGhpcy5sb2dnaW5nID8gdGhpcy5sb2dnaW5nLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3BlZWNoMlRleHRDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNwZWVjaDJUZXh0Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogUzJURGVzY3JpcHRpb24uQXNPYmplY3Q7XG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIGluZmVyZW5jZT86IFMyVEluZmVyZW5jZS5Bc09iamVjdDtcbiAgICBzdHJlYW1pbmdTZXJ2ZXI/OiBTdHJlYW1pbmdTZXJ2ZXIuQXNPYmplY3Q7XG4gICAgdm9pY2VBY3Rpdml0eURldGVjdGlvbj86IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uQXNPYmplY3Q7XG4gICAgcG9zdFByb2Nlc3Npbmc/OiBQb3N0UHJvY2Vzc2luZy5Bc09iamVjdDtcbiAgICBsb2dnaW5nPzogTG9nZ2luZy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTcGVlY2gyVGV4dENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogUzJURGVzY3JpcHRpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBpbmZlcmVuY2U6IFMyVEluZmVyZW5jZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RyZWFtaW5nU2VydmVyOiBTdHJlYW1pbmdTZXJ2ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHZvaWNlQWN0aXZpdHlEZXRlY3Rpb246IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBvc3RQcm9jZXNzaW5nOiBQb3N0UHJvY2Vzc2luZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbG9nZ2luZzogTG9nZ2luZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlMyVERlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTMlREZXNjcmlwdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuUzJURGVzY3JpcHRpb24nO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTMlREZXNjcmlwdGlvbigpO1xuICAgIFMyVERlc2NyaXB0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUzJURGVzY3JpcHRpb24pIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfaW5zdGFuY2UubGFuZ3VhZ2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBpcGVsaW5lT3duZXIgPSBfaW5zdGFuY2UucGlwZWxpbmVPd25lciB8fCAnJztcbiAgICBfaW5zdGFuY2UuZG9tYWluID0gX2luc3RhbmNlLmRvbWFpbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuY29tbWVudHMgPSBfaW5zdGFuY2UuY29tbWVudHMgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTMlREZXNjcmlwdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5waXBlbGluZU93bmVyID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZG9tYWluID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY29tbWVudHMgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFMyVERlc2NyaXB0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUzJURGVzY3JpcHRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZU93bmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5waXBlbGluZU93bmVyKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kb21haW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmRvbWFpbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29tbWVudHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmNvbW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF9waXBlbGluZU93bmVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RvbWFpbjogc3RyaW5nO1xuICBwcml2YXRlIF9jb21tZW50czogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUzJURGVzY3JpcHRpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UzJURGVzY3JpcHRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBfdmFsdWUubGFuZ3VhZ2U7XG4gICAgdGhpcy5waXBlbGluZU93bmVyID0gX3ZhbHVlLnBpcGVsaW5lT3duZXI7XG4gICAgdGhpcy5kb21haW4gPSBfdmFsdWUuZG9tYWluO1xuICAgIHRoaXMuY29tbWVudHMgPSBfdmFsdWUuY29tbWVudHM7XG4gICAgUzJURGVzY3JpcHRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lT3duZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVPd25lcjtcbiAgfVxuICBzZXQgcGlwZWxpbmVPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVPd25lciA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG4gIHNldCBkb21haW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIGdldCBjb21tZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50cztcbiAgfVxuICBzZXQgY29tbWVudHModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbW1lbnRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUzJURGVzY3JpcHRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUzJURGVzY3JpcHRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lT3duZXI6IHRoaXMucGlwZWxpbmVPd25lcixcbiAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICBjb21tZW50czogdGhpcy5jb21tZW50c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFMyVERlc2NyaXB0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICBwaXBlbGluZU93bmVyOiB0aGlzLnBpcGVsaW5lT3duZXIsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgY29tbWVudHM6IHRoaXMuY29tbWVudHNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFMyVERlc2NyaXB0aW9uIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTMlREZXNjcmlwdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwaXBlbGluZU93bmVyOiBzdHJpbmc7XG4gICAgZG9tYWluOiBzdHJpbmc7XG4gICAgY29tbWVudHM6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTMlREZXNjcmlwdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwaXBlbGluZU93bmVyOiBzdHJpbmc7XG4gICAgZG9tYWluOiBzdHJpbmc7XG4gICAgY29tbWVudHM6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUzJUSW5mZXJlbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTMlRJbmZlcmVuY2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlMyVEluZmVyZW5jZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFMyVEluZmVyZW5jZSgpO1xuICAgIFMyVEluZmVyZW5jZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFMyVEluZmVyZW5jZSkge1xuICAgIF9pbnN0YW5jZS5hY291c3RpY01vZGVscyA9IF9pbnN0YW5jZS5hY291c3RpY01vZGVscyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzID0gX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaW5mZXJlbmNlQmFja2VuZCA9IF9pbnN0YW5jZS5pbmZlcmVuY2VCYWNrZW5kIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTMlRJbmZlcmVuY2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmFjb3VzdGljTW9kZWxzID0gbmV3IEFjb3VzdGljTW9kZWxzKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hY291c3RpY01vZGVscyxcbiAgICAgICAgICAgIEFjb3VzdGljTW9kZWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbHMgPSBuZXcgTGFuZ3VhZ2VNb2RlbHMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxzLFxuICAgICAgICAgICAgTGFuZ3VhZ2VNb2RlbHMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbmZlcmVuY2VCYWNrZW5kID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUzJUSW5mZXJlbmNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUzJUSW5mZXJlbmNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmFjb3VzdGljTW9kZWxzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmFjb3VzdGljTW9kZWxzIGFzIGFueSxcbiAgICAgICAgQWNvdXN0aWNNb2RlbHMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbHMgYXMgYW55LFxuICAgICAgICBMYW5ndWFnZU1vZGVscy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbmZlcmVuY2VCYWNrZW5kKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2UuaW5mZXJlbmNlQmFja2VuZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWNvdXN0aWNNb2RlbHM/OiBBY291c3RpY01vZGVscztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VNb2RlbHM/OiBMYW5ndWFnZU1vZGVscztcbiAgcHJpdmF0ZSBfaW5mZXJlbmNlQmFja2VuZDogSW5mZXJlbmNlQmFja2VuZDtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFMyVEluZmVyZW5jZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTMlRJbmZlcmVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWNvdXN0aWNNb2RlbHMgPSBfdmFsdWUuYWNvdXN0aWNNb2RlbHNcbiAgICAgID8gbmV3IEFjb3VzdGljTW9kZWxzKF92YWx1ZS5hY291c3RpY01vZGVscylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFuZ3VhZ2VNb2RlbHMgPSBfdmFsdWUubGFuZ3VhZ2VNb2RlbHNcbiAgICAgID8gbmV3IExhbmd1YWdlTW9kZWxzKF92YWx1ZS5sYW5ndWFnZU1vZGVscylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5mZXJlbmNlQmFja2VuZCA9IF92YWx1ZS5pbmZlcmVuY2VCYWNrZW5kO1xuICAgIFMyVEluZmVyZW5jZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFjb3VzdGljTW9kZWxzKCk6IEFjb3VzdGljTW9kZWxzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWNvdXN0aWNNb2RlbHM7XG4gIH1cbiAgc2V0IGFjb3VzdGljTW9kZWxzKHZhbHVlOiBBY291c3RpY01vZGVscyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Fjb3VzdGljTW9kZWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlTW9kZWxzKCk6IExhbmd1YWdlTW9kZWxzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VNb2RlbHM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlTW9kZWxzKHZhbHVlOiBMYW5ndWFnZU1vZGVscyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGluZmVyZW5jZUJhY2tlbmQoKTogSW5mZXJlbmNlQmFja2VuZCB7XG4gICAgcmV0dXJuIHRoaXMuX2luZmVyZW5jZUJhY2tlbmQ7XG4gIH1cbiAgc2V0IGluZmVyZW5jZUJhY2tlbmQodmFsdWU6IEluZmVyZW5jZUJhY2tlbmQpIHtcbiAgICB0aGlzLl9pbmZlcmVuY2VCYWNrZW5kID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUzJUSW5mZXJlbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFMyVEluZmVyZW5jZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjb3VzdGljTW9kZWxzOiB0aGlzLmFjb3VzdGljTW9kZWxzXG4gICAgICAgID8gdGhpcy5hY291c3RpY01vZGVscy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbGFuZ3VhZ2VNb2RlbHM6IHRoaXMubGFuZ3VhZ2VNb2RlbHNcbiAgICAgICAgPyB0aGlzLmxhbmd1YWdlTW9kZWxzLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBpbmZlcmVuY2VCYWNrZW5kOiB0aGlzLmluZmVyZW5jZUJhY2tlbmRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTMlRJbmZlcmVuY2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhY291c3RpY01vZGVsczogdGhpcy5hY291c3RpY01vZGVsc1xuICAgICAgICA/IHRoaXMuYWNvdXN0aWNNb2RlbHMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbGFuZ3VhZ2VNb2RlbHM6IHRoaXMubGFuZ3VhZ2VNb2RlbHNcbiAgICAgICAgPyB0aGlzLmxhbmd1YWdlTW9kZWxzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGluZmVyZW5jZUJhY2tlbmQ6XG4gICAgICAgIEluZmVyZW5jZUJhY2tlbmRbXG4gICAgICAgICAgdGhpcy5pbmZlcmVuY2VCYWNrZW5kID09PSBudWxsIHx8IHRoaXMuaW5mZXJlbmNlQmFja2VuZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5pbmZlcmVuY2VCYWNrZW5kXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFMyVEluZmVyZW5jZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUzJUSW5mZXJlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBhY291c3RpY01vZGVscz86IEFjb3VzdGljTW9kZWxzLkFzT2JqZWN0O1xuICAgIGxhbmd1YWdlTW9kZWxzPzogTGFuZ3VhZ2VNb2RlbHMuQXNPYmplY3Q7XG4gICAgaW5mZXJlbmNlQmFja2VuZDogSW5mZXJlbmNlQmFja2VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTMlRJbmZlcmVuY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGFjb3VzdGljTW9kZWxzOiBBY291c3RpY01vZGVscy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGFuZ3VhZ2VNb2RlbHM6IExhbmd1YWdlTW9kZWxzLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpbmZlcmVuY2VCYWNrZW5kOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LkFjb3VzdGljTW9kZWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBBY291c3RpY01vZGVscyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuQWNvdXN0aWNNb2RlbHMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBY291c3RpY01vZGVscygpO1xuICAgIEFjb3VzdGljTW9kZWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWNvdXN0aWNNb2RlbHMpIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS53YXYydmVjID0gX2luc3RhbmNlLndhdjJ2ZWMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53YXYydmVjVHJpdG9uID0gX2luc3RhbmNlLndhdjJ2ZWNUcml0b24gfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53aGlzcGVyID0gX2luc3RhbmNlLndoaXNwZXIgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53aGlzcGVyVHJpdG9uID0gX2luc3RhbmNlLndoaXNwZXJUcml0b24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWNvdXN0aWNNb2RlbHMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnR5cGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS53YXYydmVjID0gbmV3IFdhdjJWZWMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndhdjJ2ZWMsXG4gICAgICAgICAgICBXYXYyVmVjLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uud2F2MnZlY1RyaXRvbiA9IG5ldyBXYXYyVmVjVHJpdG9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS53YXYydmVjVHJpdG9uLFxuICAgICAgICAgICAgV2F2MlZlY1RyaXRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLndoaXNwZXIgPSBuZXcgV2hpc3BlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uud2hpc3BlcixcbiAgICAgICAgICAgIFdoaXNwZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS53aGlzcGVyVHJpdG9uID0gbmV3IFdoaXNwZXJUcml0b24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndoaXNwZXJUcml0b24sXG4gICAgICAgICAgICBXaGlzcGVyVHJpdG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBY291c3RpY01vZGVscy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFjb3VzdGljTW9kZWxzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndhdjJ2ZWMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2Uud2F2MnZlYyBhcyBhbnksXG4gICAgICAgIFdhdjJWZWMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud2F2MnZlY1RyaXRvbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS53YXYydmVjVHJpdG9uIGFzIGFueSxcbiAgICAgICAgV2F2MlZlY1RyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53aGlzcGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLndoaXNwZXIgYXMgYW55LFxuICAgICAgICBXaGlzcGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndoaXNwZXJUcml0b24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2Uud2hpc3BlclRyaXRvbiBhcyBhbnksXG4gICAgICAgIFdoaXNwZXJUcml0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF93YXYydmVjPzogV2F2MlZlYztcbiAgcHJpdmF0ZSBfd2F2MnZlY1RyaXRvbj86IFdhdjJWZWNUcml0b247XG4gIHByaXZhdGUgX3doaXNwZXI/OiBXaGlzcGVyO1xuICBwcml2YXRlIF93aGlzcGVyVHJpdG9uPzogV2hpc3BlclRyaXRvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFjb3VzdGljTW9kZWxzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFjb3VzdGljTW9kZWxzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnR5cGUgPSBfdmFsdWUudHlwZTtcbiAgICB0aGlzLndhdjJ2ZWMgPSBfdmFsdWUud2F2MnZlYyA/IG5ldyBXYXYyVmVjKF92YWx1ZS53YXYydmVjKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndhdjJ2ZWNUcml0b24gPSBfdmFsdWUud2F2MnZlY1RyaXRvblxuICAgICAgPyBuZXcgV2F2MlZlY1RyaXRvbihfdmFsdWUud2F2MnZlY1RyaXRvbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud2hpc3BlciA9IF92YWx1ZS53aGlzcGVyID8gbmV3IFdoaXNwZXIoX3ZhbHVlLndoaXNwZXIpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud2hpc3BlclRyaXRvbiA9IF92YWx1ZS53aGlzcGVyVHJpdG9uXG4gICAgICA/IG5ldyBXaGlzcGVyVHJpdG9uKF92YWx1ZS53aGlzcGVyVHJpdG9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQWNvdXN0aWNNb2RlbHMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2F2MnZlYygpOiBXYXYyVmVjIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2F2MnZlYztcbiAgfVxuICBzZXQgd2F2MnZlYyh2YWx1ZTogV2F2MlZlYyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dhdjJ2ZWMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2F2MnZlY1RyaXRvbigpOiBXYXYyVmVjVHJpdG9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2F2MnZlY1RyaXRvbjtcbiAgfVxuICBzZXQgd2F2MnZlY1RyaXRvbih2YWx1ZTogV2F2MlZlY1RyaXRvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dhdjJ2ZWNUcml0b24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2hpc3BlcigpOiBXaGlzcGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2hpc3BlcjtcbiAgfVxuICBzZXQgd2hpc3Blcih2YWx1ZTogV2hpc3BlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3doaXNwZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2hpc3BlclRyaXRvbigpOiBXaGlzcGVyVHJpdG9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2hpc3BlclRyaXRvbjtcbiAgfVxuICBzZXQgd2hpc3BlclRyaXRvbih2YWx1ZTogV2hpc3BlclRyaXRvbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3doaXNwZXJUcml0b24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBY291c3RpY01vZGVscy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBY291c3RpY01vZGVscy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHdhdjJ2ZWM6IHRoaXMud2F2MnZlYyA/IHRoaXMud2F2MnZlYy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgd2F2MnZlY1RyaXRvbjogdGhpcy53YXYydmVjVHJpdG9uXG4gICAgICAgID8gdGhpcy53YXYydmVjVHJpdG9uLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB3aGlzcGVyOiB0aGlzLndoaXNwZXIgPyB0aGlzLndoaXNwZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdoaXNwZXJUcml0b246IHRoaXMud2hpc3BlclRyaXRvblxuICAgICAgICA/IHRoaXMud2hpc3BlclRyaXRvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWNvdXN0aWNNb2RlbHMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICB3YXYydmVjOiB0aGlzLndhdjJ2ZWMgPyB0aGlzLndhdjJ2ZWMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgd2F2MnZlY1RyaXRvbjogdGhpcy53YXYydmVjVHJpdG9uXG4gICAgICAgID8gdGhpcy53YXYydmVjVHJpdG9uLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHdoaXNwZXI6IHRoaXMud2hpc3BlciA/IHRoaXMud2hpc3Blci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB3aGlzcGVyVHJpdG9uOiB0aGlzLndoaXNwZXJUcml0b25cbiAgICAgICAgPyB0aGlzLndoaXNwZXJUcml0b24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBY291c3RpY01vZGVscyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWNvdXN0aWNNb2RlbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB3YXYydmVjPzogV2F2MlZlYy5Bc09iamVjdDtcbiAgICB3YXYydmVjVHJpdG9uPzogV2F2MlZlY1RyaXRvbi5Bc09iamVjdDtcbiAgICB3aGlzcGVyPzogV2hpc3Blci5Bc09iamVjdDtcbiAgICB3aGlzcGVyVHJpdG9uPzogV2hpc3BlclRyaXRvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBY291c3RpY01vZGVsc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHdhdjJ2ZWM6IFdhdjJWZWMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHdhdjJ2ZWNUcml0b246IFdhdjJWZWNUcml0b24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHdoaXNwZXI6IFdoaXNwZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHdoaXNwZXJUcml0b246IFdoaXNwZXJUcml0b24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5XaGlzcGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBXaGlzcGVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5XaGlzcGVyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV2hpc3BlcigpO1xuICAgIFdoaXNwZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXaGlzcGVyKSB7XG4gICAgX2luc3RhbmNlLm1vZGVsUGF0aCA9IF9pbnN0YW5jZS5tb2RlbFBhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLnVzZUdwdSA9IF9pbnN0YW5jZS51c2VHcHUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50YXNrID0gX2luc3RhbmNlLnRhc2sgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXaGlzcGVyLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RlbFBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VHcHUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2UgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50YXNrID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBXaGlzcGVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogV2hpc3BlciwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RlbFBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm1vZGVsUGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXNlR3B1KSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgyLCBfaW5zdGFuY2UudXNlR3B1KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRhc2spIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnRhc2spO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21vZGVsUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VHcHU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Rhc2s6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdoaXNwZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2hpc3Blci5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5tb2RlbFBhdGggPSBfdmFsdWUubW9kZWxQYXRoO1xuICAgIHRoaXMudXNlR3B1ID0gX3ZhbHVlLnVzZUdwdTtcbiAgICB0aGlzLmxhbmd1YWdlID0gX3ZhbHVlLmxhbmd1YWdlO1xuICAgIHRoaXMudGFzayA9IF92YWx1ZS50YXNrO1xuICAgIFdoaXNwZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBtb2RlbFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxQYXRoO1xuICB9XG4gIHNldCBtb2RlbFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGVsUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VHcHUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUdwdTtcbiAgfVxuICBzZXQgdXNlR3B1KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdXNlR3B1ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YXNrO1xuICB9XG4gIHNldCB0YXNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2hpc3Blci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXaGlzcGVyLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWxQYXRoOiB0aGlzLm1vZGVsUGF0aCxcbiAgICAgIHVzZUdwdTogdGhpcy51c2VHcHUsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHRhc2s6IHRoaXMudGFza1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdoaXNwZXIuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdSxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgdGFzazogdGhpcy50YXNrXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXaGlzcGVyIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBXaGlzcGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBtb2RlbFBhdGg6IHN0cmluZztcbiAgICB1c2VHcHU6IGJvb2xlYW47XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICB0YXNrOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV2hpc3BlclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbW9kZWxQYXRoOiBzdHJpbmc7XG4gICAgdXNlR3B1OiBib29sZWFuO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgdGFzazogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5XaGlzcGVyVHJpdG9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXaGlzcGVyVHJpdG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5XaGlzcGVyVHJpdG9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV2hpc3BlclRyaXRvbigpO1xuICAgIFdoaXNwZXJUcml0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXaGlzcGVyVHJpdG9uKSB7XG4gICAgX2luc3RhbmNlLnByb2Nlc3NvclBhdGggPSBfaW5zdGFuY2UucHJvY2Vzc29yUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50YXNrID0gX2luc3RhbmNlLnRhc2sgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QgPSBfaW5zdGFuY2UudHJpdG9uU2VydmVySG9zdCB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJpdG9uU2VydmVyUG9ydCA9IF9pbnN0YW5jZS50cml0b25TZXJ2ZXJQb3J0IHx8ICcwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFdoaXNwZXJUcml0b24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnByb2Nlc3NvclBhdGggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5jaGVja1N0YXR1c1RpbWVvdXQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudGFzayA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJQb3J0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdoaXNwZXJUcml0b24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBXaGlzcGVyVHJpdG9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnByb2Nlc3NvclBhdGgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNCwgX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50YXNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS50YXNrKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25TZXJ2ZXJIb3N0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJIb3N0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25TZXJ2ZXJQb3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoOCwgX2luc3RhbmNlLnRyaXRvblNlcnZlclBvcnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Byb2Nlc3NvclBhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9jaGVja1N0YXR1c1RpbWVvdXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFzazogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25TZXJ2ZXJIb3N0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvblNlcnZlclBvcnQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdoaXNwZXJUcml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2hpc3BlclRyaXRvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wcm9jZXNzb3JQYXRoID0gX3ZhbHVlLnByb2Nlc3NvclBhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSBfdmFsdWUudHJpdG9uTW9kZWxOYW1lO1xuICAgIHRoaXMudHJpdG9uTW9kZWxWZXJzaW9uID0gX3ZhbHVlLnRyaXRvbk1vZGVsVmVyc2lvbjtcbiAgICB0aGlzLmNoZWNrU3RhdHVzVGltZW91dCA9IF92YWx1ZS5jaGVja1N0YXR1c1RpbWVvdXQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IF92YWx1ZS5sYW5ndWFnZTtcbiAgICB0aGlzLnRhc2sgPSBfdmFsdWUudGFzaztcbiAgICB0aGlzLnRyaXRvblNlcnZlckhvc3QgPSBfdmFsdWUudHJpdG9uU2VydmVySG9zdDtcbiAgICB0aGlzLnRyaXRvblNlcnZlclBvcnQgPSBfdmFsdWUudHJpdG9uU2VydmVyUG9ydDtcbiAgICBXaGlzcGVyVHJpdG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcHJvY2Vzc29yUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JQYXRoO1xuICB9XG4gIHNldCBwcm9jZXNzb3JQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbE5hbWU7XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvbk1vZGVsVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25Nb2RlbFZlcnNpb247XG4gIH1cbiAgc2V0IHRyaXRvbk1vZGVsVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uTW9kZWxWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNoZWNrU3RhdHVzVGltZW91dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jaGVja1N0YXR1c1RpbWVvdXQ7XG4gIH1cbiAgc2V0IGNoZWNrU3RhdHVzVGltZW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tTdGF0dXNUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YXNrO1xuICB9XG4gIHNldCB0YXNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvblNlcnZlckhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uU2VydmVySG9zdDtcbiAgfVxuICBzZXQgdHJpdG9uU2VydmVySG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uU2VydmVySG9zdCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25TZXJ2ZXJQb3J0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvblNlcnZlclBvcnQ7XG4gIH1cbiAgc2V0IHRyaXRvblNlcnZlclBvcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvblNlcnZlclBvcnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXaGlzcGVyVHJpdG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdoaXNwZXJUcml0b24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9jZXNzb3JQYXRoOiB0aGlzLnByb2Nlc3NvclBhdGgsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lLFxuICAgICAgdHJpdG9uTW9kZWxWZXJzaW9uOiB0aGlzLnRyaXRvbk1vZGVsVmVyc2lvbixcbiAgICAgIGNoZWNrU3RhdHVzVGltZW91dDogdGhpcy5jaGVja1N0YXR1c1RpbWVvdXQsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHRhc2s6IHRoaXMudGFzayxcbiAgICAgIHRyaXRvblNlcnZlckhvc3Q6IHRoaXMudHJpdG9uU2VydmVySG9zdCxcbiAgICAgIHRyaXRvblNlcnZlclBvcnQ6IHRoaXMudHJpdG9uU2VydmVyUG9ydFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdoaXNwZXJUcml0b24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9jZXNzb3JQYXRoOiB0aGlzLnByb2Nlc3NvclBhdGgsXG4gICAgICB0cml0b25Nb2RlbE5hbWU6IHRoaXMudHJpdG9uTW9kZWxOYW1lLFxuICAgICAgdHJpdG9uTW9kZWxWZXJzaW9uOiB0aGlzLnRyaXRvbk1vZGVsVmVyc2lvbixcbiAgICAgIGNoZWNrU3RhdHVzVGltZW91dDogdGhpcy5jaGVja1N0YXR1c1RpbWVvdXQsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHRhc2s6IHRoaXMudGFzayxcbiAgICAgIHRyaXRvblNlcnZlckhvc3Q6IHRoaXMudHJpdG9uU2VydmVySG9zdCxcbiAgICAgIHRyaXRvblNlcnZlclBvcnQ6IHRoaXMudHJpdG9uU2VydmVyUG9ydFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2hpc3BlclRyaXRvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2hpc3BlclRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgdGFzazogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlckhvc3Q6IHN0cmluZztcbiAgICB0cml0b25TZXJ2ZXJQb3J0OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV2hpc3BlclRyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG4gICAgdGFzazogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlckhvc3Q6IHN0cmluZztcbiAgICB0cml0b25TZXJ2ZXJQb3J0OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LldhdjJWZWNcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdjJWZWMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LldhdjJWZWMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXYXYyVmVjKCk7XG4gICAgV2F2MlZlYy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFdhdjJWZWMpIHtcbiAgICBfaW5zdGFuY2UubW9kZWxQYXRoID0gX2luc3RhbmNlLm1vZGVsUGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlR3B1ID0gX2luc3RhbmNlLnVzZUdwdSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFdhdjJWZWMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGVsUGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZUdwdSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdhdjJWZWMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBXYXYyVmVjLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLm1vZGVsUGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubW9kZWxQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VHcHUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS51c2VHcHUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21vZGVsUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VHcHU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBXYXYyVmVjIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFdhdjJWZWMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubW9kZWxQYXRoID0gX3ZhbHVlLm1vZGVsUGF0aDtcbiAgICB0aGlzLnVzZUdwdSA9IF92YWx1ZS51c2VHcHU7XG4gICAgV2F2MlZlYy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG1vZGVsUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFBhdGg7XG4gIH1cbiAgc2V0IG1vZGVsUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWxQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZUdwdSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlR3B1O1xuICB9XG4gIHNldCB1c2VHcHUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl91c2VHcHUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBXYXYyVmVjLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdhdjJWZWMuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdhdjJWZWMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbFBhdGg6IHRoaXMubW9kZWxQYXRoLFxuICAgICAgdXNlR3B1OiB0aGlzLnVzZUdwdVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2F2MlZlYyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2F2MlZlY1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbW9kZWxQYXRoOiBzdHJpbmc7XG4gICAgdXNlR3B1OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFdhdjJWZWNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG1vZGVsUGF0aDogc3RyaW5nO1xuICAgIHVzZUdwdTogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuV2F2MlZlY1RyaXRvblxuICovXG5leHBvcnQgY2xhc3MgV2F2MlZlY1RyaXRvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuV2F2MlZlY1RyaXRvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdhdjJWZWNUcml0b24oKTtcbiAgICBXYXYyVmVjVHJpdG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV2F2MlZlY1RyaXRvbikge1xuICAgIF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoID0gX2luc3RhbmNlLnByb2Nlc3NvclBhdGggfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSA9IF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvbk1vZGVsVmVyc2lvbiA9IF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCA9IF9pbnN0YW5jZS5jaGVja1N0YXR1c1RpbWVvdXQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJIb3N0ID0gX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyaXRvblNlcnZlclBvcnQgPSBfaW5zdGFuY2UudHJpdG9uU2VydmVyUG9ydCB8fCAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXYXYyVmVjVHJpdG9uLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY2hlY2tTdGF0dXNUaW1lb3V0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJIb3N0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJpdG9uU2VydmVyUG9ydCA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBXYXYyVmVjVHJpdG9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogV2F2MlZlY1RyaXRvbixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wcm9jZXNzb3JQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cml0b25Nb2RlbE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnRyaXRvbk1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJpdG9uTW9kZWxWZXJzaW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50cml0b25Nb2RlbFZlcnNpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNoZWNrU3RhdHVzVGltZW91dCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5jaGVja1N0YXR1c1RpbWVvdXQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblNlcnZlclBvcnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg2LCBfaW5zdGFuY2UudHJpdG9uU2VydmVyUG9ydCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25Nb2RlbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uTW9kZWxWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICBwcml2YXRlIF90cml0b25TZXJ2ZXJIb3N0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyaXRvblNlcnZlclBvcnQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFdhdjJWZWNUcml0b24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2F2MlZlY1RyaXRvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wcm9jZXNzb3JQYXRoID0gX3ZhbHVlLnByb2Nlc3NvclBhdGg7XG4gICAgdGhpcy50cml0b25Nb2RlbE5hbWUgPSBfdmFsdWUudHJpdG9uTW9kZWxOYW1lO1xuICAgIHRoaXMudHJpdG9uTW9kZWxWZXJzaW9uID0gX3ZhbHVlLnRyaXRvbk1vZGVsVmVyc2lvbjtcbiAgICB0aGlzLmNoZWNrU3RhdHVzVGltZW91dCA9IF92YWx1ZS5jaGVja1N0YXR1c1RpbWVvdXQ7XG4gICAgdGhpcy50cml0b25TZXJ2ZXJIb3N0ID0gX3ZhbHVlLnRyaXRvblNlcnZlckhvc3Q7XG4gICAgdGhpcy50cml0b25TZXJ2ZXJQb3J0ID0gX3ZhbHVlLnRyaXRvblNlcnZlclBvcnQ7XG4gICAgV2F2MlZlY1RyaXRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHByb2Nlc3NvclBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc29yUGF0aDtcbiAgfVxuICBzZXQgcHJvY2Vzc29yUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29yUGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uTW9kZWxOYW1lO1xuICB9XG4gIHNldCB0cml0b25Nb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25Nb2RlbFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uTW9kZWxWZXJzaW9uO1xuICB9XG4gIHNldCB0cml0b25Nb2RlbFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvbk1vZGVsVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBjaGVja1N0YXR1c1RpbWVvdXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tTdGF0dXNUaW1lb3V0O1xuICB9XG4gIHNldCBjaGVja1N0YXR1c1RpbWVvdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrU3RhdHVzVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25TZXJ2ZXJIb3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvblNlcnZlckhvc3Q7XG4gIH1cbiAgc2V0IHRyaXRvblNlcnZlckhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvblNlcnZlckhvc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJpdG9uU2VydmVyUG9ydCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cml0b25TZXJ2ZXJQb3J0O1xuICB9XG4gIHNldCB0cml0b25TZXJ2ZXJQb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cml0b25TZXJ2ZXJQb3J0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV2F2MlZlY1RyaXRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBXYXYyVmVjVHJpdG9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvY2Vzc29yUGF0aDogdGhpcy5wcm9jZXNzb3JQYXRoLFxuICAgICAgdHJpdG9uTW9kZWxOYW1lOiB0aGlzLnRyaXRvbk1vZGVsTmFtZSxcbiAgICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogdGhpcy50cml0b25Nb2RlbFZlcnNpb24sXG4gICAgICBjaGVja1N0YXR1c1RpbWVvdXQ6IHRoaXMuY2hlY2tTdGF0dXNUaW1lb3V0LFxuICAgICAgdHJpdG9uU2VydmVySG9zdDogdGhpcy50cml0b25TZXJ2ZXJIb3N0LFxuICAgICAgdHJpdG9uU2VydmVyUG9ydDogdGhpcy50cml0b25TZXJ2ZXJQb3J0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogV2F2MlZlY1RyaXRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2Nlc3NvclBhdGg6IHRoaXMucHJvY2Vzc29yUGF0aCxcbiAgICAgIHRyaXRvbk1vZGVsTmFtZTogdGhpcy50cml0b25Nb2RlbE5hbWUsXG4gICAgICB0cml0b25Nb2RlbFZlcnNpb246IHRoaXMudHJpdG9uTW9kZWxWZXJzaW9uLFxuICAgICAgY2hlY2tTdGF0dXNUaW1lb3V0OiB0aGlzLmNoZWNrU3RhdHVzVGltZW91dCxcbiAgICAgIHRyaXRvblNlcnZlckhvc3Q6IHRoaXMudHJpdG9uU2VydmVySG9zdCxcbiAgICAgIHRyaXRvblNlcnZlclBvcnQ6IHRoaXMudHJpdG9uU2VydmVyUG9ydFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2F2MlZlY1RyaXRvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgV2F2MlZlY1RyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlckhvc3Q6IHN0cmluZztcbiAgICB0cml0b25TZXJ2ZXJQb3J0OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV2F2MlZlY1RyaXRvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcHJvY2Vzc29yUGF0aDogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHRyaXRvbk1vZGVsVmVyc2lvbjogc3RyaW5nO1xuICAgIGNoZWNrU3RhdHVzVGltZW91dDogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlckhvc3Q6IHN0cmluZztcbiAgICB0cml0b25TZXJ2ZXJQb3J0OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlB0RmlsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFB0RmlsZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlB0RmlsZXMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQdEZpbGVzKCk7XG4gICAgUHRGaWxlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFB0RmlsZXMpIHtcbiAgICBfaW5zdGFuY2UucGF0aCA9IF9pbnN0YW5jZS5wYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdGVwID0gX2luc3RhbmNlLnN0ZXAgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBQdEZpbGVzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RlcCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUHRGaWxlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFB0RmlsZXMsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UucGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RlcCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc3RlcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuICBwcml2YXRlIF9zdGVwOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQdEZpbGVzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFB0RmlsZXMuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGF0aCA9IF92YWx1ZS5wYXRoO1xuICAgIHRoaXMuc3RlcCA9IF92YWx1ZS5zdGVwO1xuICAgIFB0RmlsZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cbiAgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RlcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICB9XG4gIHNldCBzdGVwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUHRGaWxlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQdEZpbGVzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUHRGaWxlcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUHRGaWxlcyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUHRGaWxlc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHN0ZXA6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQdEZpbGVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgc3RlcDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5Da3B0RmlsZVxuICovXG5leHBvcnQgY2xhc3MgQ2twdEZpbGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkNrcHRGaWxlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2twdEZpbGUoKTtcbiAgICBDa3B0RmlsZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENrcHRGaWxlKSB7XG4gICAgX2luc3RhbmNlLnBhdGggPSBfaW5zdGFuY2UucGF0aCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENrcHRGaWxlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDa3B0RmlsZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IENrcHRGaWxlLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENrcHRGaWxlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENrcHRGaWxlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICBDa3B0RmlsZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuICBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENrcHRGaWxlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENrcHRGaWxlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2twdEZpbGUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiB0aGlzLnBhdGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENrcHRGaWxlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDa3B0RmlsZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENrcHRGaWxlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXRoOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0Lkxhbmd1YWdlTW9kZWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZU1vZGVscyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuTGFuZ3VhZ2VNb2RlbHMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMYW5ndWFnZU1vZGVscygpO1xuICAgIExhbmd1YWdlTW9kZWxzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogTGFuZ3VhZ2VNb2RlbHMpIHtcbiAgICBfaW5zdGFuY2UucGF0aCA9IF9pbnN0YW5jZS5wYXRoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5iZWFtU2l6ZSA9IF9pbnN0YW5jZS5iZWFtU2l6ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLmRlZmF1bHRMbSA9IF9pbnN0YW5jZS5kZWZhdWx0TG0gfHwgJyc7XG4gICAgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF9pbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEgfHwgMDtcbiAgICBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgPSBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExhbmd1YWdlTW9kZWxzLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuYmVhbVNpemUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmRlZmF1bHRMbSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYmVhbVNlYXJjaFNjb3JlckJldGEgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGFuZ3VhZ2VNb2RlbHMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMYW5ndWFnZU1vZGVscyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXRoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5iZWFtU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5iZWFtU2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVmYXVsdExtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5kZWZhdWx0TG0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJBbHBoYSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGEpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNSwgX2luc3RhbmNlLmJlYW1TZWFyY2hTY29yZXJCZXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JlYW1TaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RlZmF1bHRMbTogc3RyaW5nO1xuICBwcml2YXRlIF9iZWFtU2VhcmNoU2NvcmVyQWxwaGE6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYmVhbVNlYXJjaFNjb3JlckJldGE6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExhbmd1YWdlTW9kZWxzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExhbmd1YWdlTW9kZWxzLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSBfdmFsdWUucGF0aDtcbiAgICB0aGlzLmJlYW1TaXplID0gX3ZhbHVlLmJlYW1TaXplO1xuICAgIHRoaXMuZGVmYXVsdExtID0gX3ZhbHVlLmRlZmF1bHRMbTtcbiAgICB0aGlzLmJlYW1TZWFyY2hTY29yZXJBbHBoYSA9IF92YWx1ZS5iZWFtU2VhcmNoU2NvcmVyQWxwaGE7XG4gICAgdGhpcy5iZWFtU2VhcmNoU2NvcmVyQmV0YSA9IF92YWx1ZS5iZWFtU2VhcmNoU2NvcmVyQmV0YTtcbiAgICBMYW5ndWFnZU1vZGVscy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuICBzZXQgcGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG4gIGdldCBiZWFtU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iZWFtU2l6ZTtcbiAgfVxuICBzZXQgYmVhbVNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JlYW1TaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlZmF1bHRMbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TG07XG4gIH1cbiAgc2V0IGRlZmF1bHRMbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdExtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlYW1TZWFyY2hTY29yZXJBbHBoYSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9iZWFtU2VhcmNoU2NvcmVyQWxwaGE7XG4gIH1cbiAgc2V0IGJlYW1TZWFyY2hTY29yZXJBbHBoYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmVhbVNlYXJjaFNjb3JlckFscGhhID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlYW1TZWFyY2hTY29yZXJCZXRhKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JlYW1TZWFyY2hTY29yZXJCZXRhO1xuICB9XG4gIHNldCBiZWFtU2VhcmNoU2NvcmVyQmV0YSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmVhbVNlYXJjaFNjb3JlckJldGEgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMYW5ndWFnZU1vZGVscy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMYW5ndWFnZU1vZGVscy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGJlYW1TaXplOiB0aGlzLmJlYW1TaXplLFxuICAgICAgZGVmYXVsdExtOiB0aGlzLmRlZmF1bHRMbSxcbiAgICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogdGhpcy5iZWFtU2VhcmNoU2NvcmVyQWxwaGEsXG4gICAgICBiZWFtU2VhcmNoU2NvcmVyQmV0YTogdGhpcy5iZWFtU2VhcmNoU2NvcmVyQmV0YVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExhbmd1YWdlTW9kZWxzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgYmVhbVNpemU6IHRoaXMuYmVhbVNpemUsXG4gICAgICBkZWZhdWx0TG06IHRoaXMuZGVmYXVsdExtLFxuICAgICAgYmVhbVNlYXJjaFNjb3JlckFscGhhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJBbHBoYSxcbiAgICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiB0aGlzLmJlYW1TZWFyY2hTY29yZXJCZXRhXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMYW5ndWFnZU1vZGVscyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBiZWFtU2l6ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRMbTogc3RyaW5nO1xuICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogbnVtYmVyO1xuICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbHNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBiZWFtU2l6ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRMbTogc3RyaW5nO1xuICAgIGJlYW1TZWFyY2hTY29yZXJBbHBoYTogbnVtYmVyO1xuICAgIGJlYW1TZWFyY2hTY29yZXJCZXRhOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlN0cmVhbWluZ1NlcnZlclxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nU2VydmVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TdHJlYW1pbmdTZXJ2ZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdHJlYW1pbmdTZXJ2ZXIoKTtcbiAgICBTdHJlYW1pbmdTZXJ2ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJlYW1pbmdTZXJ2ZXIpIHtcbiAgICBfaW5zdGFuY2UuaG9zdCA9IF9pbnN0YW5jZS5ob3N0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wb3J0ID0gX2luc3RhbmNlLnBvcnQgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5vdXRwdXRTdHlsZSA9IF9pbnN0YW5jZS5vdXRwdXRTdHlsZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPVxuICAgICAgX2luc3RhbmNlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NlcnZlcixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaG9zdCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnBvcnQgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLm91dHB1dFN0eWxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gPSBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLFxuICAgICAgICAgICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN0cmVhbWluZ1NlcnZlci5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NlcnZlcixcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5ob3N0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5ob3N0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3J0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLnBvcnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm91dHB1dFN0eWxlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5vdXRwdXRTdHlsZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2Uuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24gYXMgYW55LFxuICAgICAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ob3N0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BvcnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0cHV0U3R5bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24/OiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN0cmVhbWluZ1NlcnZlciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdTZXJ2ZXIuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaG9zdCA9IF92YWx1ZS5ob3N0O1xuICAgIHRoaXMucG9ydCA9IF92YWx1ZS5wb3J0O1xuICAgIHRoaXMub3V0cHV0U3R5bGUgPSBfdmFsdWUub3V0cHV0U3R5bGU7XG4gICAgdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiA9IF92YWx1ZS5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgPyBuZXcgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24oX3ZhbHVlLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgU3RyZWFtaW5nU2VydmVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvcnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuICBzZXQgcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIGdldCBvdXRwdXRTdHlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRTdHlsZTtcbiAgfVxuICBzZXQgb3V0cHV0U3R5bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX291dHB1dFN0eWxlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKCk6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb247XG4gIH1cbiAgc2V0IHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKFxuICAgIHZhbHVlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ1NlcnZlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdHJlYW1pbmdTZXJ2ZXIuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICBvdXRwdXRTdHlsZTogdGhpcy5vdXRwdXRTdHlsZSxcbiAgICAgIHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uOiB0aGlzLnN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uXG4gICAgICAgID8gdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RyZWFtaW5nU2VydmVyLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgb3V0cHV0U3R5bGU6IHRoaXMub3V0cHV0U3R5bGUsXG4gICAgICBzdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbjogdGhpcy5zdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgICA/IHRoaXMuc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdHJlYW1pbmdTZXJ2ZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ1NlcnZlclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBvcnQ6IHN0cmluZztcbiAgICBvdXRwdXRTdHlsZTogc3RyaW5nO1xuICAgIHN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uPzogU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3RyZWFtaW5nU2VydmVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBob3N0OiBzdHJpbmc7XG4gICAgcG9ydDogc3RyaW5nO1xuICAgIG91dHB1dFN0eWxlOiBzdHJpbmc7XG4gICAgc3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb246IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbikge1xuICAgIF9pbnN0YW5jZS50cmFuc2NyaWJlTm90RmluYWwgPSBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5kZWNvZGluZ01ldGhvZCA9IF9pbnN0YW5jZS5kZWNvZGluZ01ldGhvZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplID0gX2luc3RhbmNlLm1pbkF1ZGlvQ2h1bmtTaXplIHx8ICcwJztcbiAgICBfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCA9IF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0IHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhbnNjcmliZU5vdEZpbmFsID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmRlY29kaW5nTWV0aG9kID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRyYW5zY3JpYmVOb3RGaW5hbCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLnRyYW5zY3JpYmVOb3RGaW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVjb2RpbmdNZXRob2QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmRlY29kaW5nTWV0aG9kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygzLCBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDQsIF9pbnN0YW5jZS5taW5BdWRpb0NodW5rU2l6ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubmV4dENodW5rVGltZW91dCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDUsIF9pbnN0YW5jZS5uZXh0Q2h1bmtUaW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2NyaWJlTm90RmluYWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlY29kaW5nTWV0aG9kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICBwcml2YXRlIF9taW5BdWRpb0NodW5rU2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9uZXh0Q2h1bmtUaW1lb3V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50cmFuc2NyaWJlTm90RmluYWwgPSBfdmFsdWUudHJhbnNjcmliZU5vdEZpbmFsO1xuICAgIHRoaXMuZGVjb2RpbmdNZXRob2QgPSBfdmFsdWUuZGVjb2RpbmdNZXRob2Q7XG4gICAgdGhpcy5zYW1wbGluZ1JhdGUgPSBfdmFsdWUuc2FtcGxpbmdSYXRlO1xuICAgIHRoaXMubWluQXVkaW9DaHVua1NpemUgPSBfdmFsdWUubWluQXVkaW9DaHVua1NpemU7XG4gICAgdGhpcy5uZXh0Q2h1bmtUaW1lb3V0ID0gX3ZhbHVlLm5leHRDaHVua1RpbWVvdXQ7XG4gICAgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0cmFuc2NyaWJlTm90RmluYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zY3JpYmVOb3RGaW5hbDtcbiAgfVxuICBzZXQgdHJhbnNjcmliZU5vdEZpbmFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdHJhbnNjcmliZU5vdEZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlY29kaW5nTWV0aG9kKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY29kaW5nTWV0aG9kO1xuICB9XG4gIHNldCBkZWNvZGluZ01ldGhvZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVjb2RpbmdNZXRob2QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxpbmdSYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsaW5nUmF0ZTtcbiAgfVxuICBzZXQgc2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluQXVkaW9DaHVua1NpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWluQXVkaW9DaHVua1NpemU7XG4gIH1cbiAgc2V0IG1pbkF1ZGlvQ2h1bmtTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9taW5BdWRpb0NodW5rU2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0Q2h1bmtUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRDaHVua1RpbWVvdXQ7XG4gIH1cbiAgc2V0IG5leHRDaHVua1RpbWVvdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25leHRDaHVua1RpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbi5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogdGhpcy50cmFuc2NyaWJlTm90RmluYWwsXG4gICAgICBkZWNvZGluZ01ldGhvZDogdGhpcy5kZWNvZGluZ01ldGhvZCxcbiAgICAgIHNhbXBsaW5nUmF0ZTogdGhpcy5zYW1wbGluZ1JhdGUsXG4gICAgICBtaW5BdWRpb0NodW5rU2l6ZTogdGhpcy5taW5BdWRpb0NodW5rU2l6ZSxcbiAgICAgIG5leHRDaHVua1RpbWVvdXQ6IHRoaXMubmV4dENodW5rVGltZW91dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNjcmliZU5vdEZpbmFsOiB0aGlzLnRyYW5zY3JpYmVOb3RGaW5hbCxcbiAgICAgIGRlY29kaW5nTWV0aG9kOiB0aGlzLmRlY29kaW5nTWV0aG9kLFxuICAgICAgc2FtcGxpbmdSYXRlOiB0aGlzLnNhbXBsaW5nUmF0ZSxcbiAgICAgIG1pbkF1ZGlvQ2h1bmtTaXplOiB0aGlzLm1pbkF1ZGlvQ2h1bmtTaXplLFxuICAgICAgbmV4dENodW5rVGltZW91dDogdGhpcy5uZXh0Q2h1bmtUaW1lb3V0XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdHJlYW1pbmdTcGVlY2hSZWNvZ25pdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3RyZWFtaW5nU3BlZWNoUmVjb2duaXRpb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRyYW5zY3JpYmVOb3RGaW5hbDogYm9vbGVhbjtcbiAgICBkZWNvZGluZ01ldGhvZDogc3RyaW5nO1xuICAgIHNhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICAgIG1pbkF1ZGlvQ2h1bmtTaXplOiBzdHJpbmc7XG4gICAgbmV4dENodW5rVGltZW91dDogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ1NwZWVjaFJlY29nbml0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0cmFuc2NyaWJlTm90RmluYWw6IGJvb2xlYW47XG4gICAgZGVjb2RpbmdNZXRob2Q6IHN0cmluZztcbiAgICBzYW1wbGluZ1JhdGU6IHN0cmluZztcbiAgICBtaW5BdWRpb0NodW5rU2l6ZTogc3RyaW5nO1xuICAgIG5leHRDaHVua1RpbWVvdXQ6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVm9pY2VBY3Rpdml0eURldGVjdGlvblxuICovXG5leHBvcnQgY2xhc3MgVm9pY2VBY3Rpdml0eURldGVjdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuVm9pY2VBY3Rpdml0eURldGVjdGlvbic7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24oKTtcbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVm9pY2VBY3Rpdml0eURldGVjdGlvbikge1xuICAgIF9pbnN0YW5jZS5hY3RpdmUgPSBfaW5zdGFuY2UuYWN0aXZlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUgPSBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlIHx8ICcwJztcbiAgICBfaW5zdGFuY2UucHlhbm5vdGUgPSBfaW5zdGFuY2UucHlhbm5vdGUgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVm9pY2VBY3Rpdml0eURldGVjdGlvbixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2FtcGxpbmdSYXRlID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5weWFubm90ZSA9IG5ldyBQeWFubm90ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucHlhbm5vdGUsXG4gICAgICAgICAgICBQeWFubm90ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVm9pY2VBY3Rpdml0eURldGVjdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5hY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNhbXBsaW5nUmF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5zYW1wbGluZ1JhdGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnB5YW5ub3RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnB5YW5ub3RlIGFzIGFueSxcbiAgICAgICAgUHlhbm5vdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NhbXBsaW5nUmF0ZTogc3RyaW5nO1xuICBwcml2YXRlIF9weWFubm90ZT86IFB5YW5ub3RlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVm9pY2VBY3Rpdml0eURldGVjdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFjdGl2ZSA9IF92YWx1ZS5hY3RpdmU7XG4gICAgdGhpcy5zYW1wbGluZ1JhdGUgPSBfdmFsdWUuc2FtcGxpbmdSYXRlO1xuICAgIHRoaXMucHlhbm5vdGUgPSBfdmFsdWUucHlhbm5vdGUgPyBuZXcgUHlhbm5vdGUoX3ZhbHVlLnB5YW5ub3RlKSA6IHVuZGVmaW5lZDtcbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2FtcGxpbmdSYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsaW5nUmF0ZTtcbiAgfVxuICBzZXQgc2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHlhbm5vdGUoKTogUHlhbm5vdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9weWFubm90ZTtcbiAgfVxuICBzZXQgcHlhbm5vdGUodmFsdWU6IFB5YW5ub3RlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHlhbm5vdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFZvaWNlQWN0aXZpdHlEZXRlY3Rpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgc2FtcGxpbmdSYXRlOiB0aGlzLnNhbXBsaW5nUmF0ZSxcbiAgICAgIHB5YW5ub3RlOiB0aGlzLnB5YW5ub3RlID8gdGhpcy5weWFubm90ZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVm9pY2VBY3Rpdml0eURldGVjdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBzYW1wbGluZ1JhdGU6IHRoaXMuc2FtcGxpbmdSYXRlLFxuICAgICAgcHlhbm5vdGU6IHRoaXMucHlhbm5vdGUgPyB0aGlzLnB5YW5ub3RlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVm9pY2VBY3Rpdml0eURldGVjdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVm9pY2VBY3Rpdml0eURldGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgc2FtcGxpbmdSYXRlOiBzdHJpbmc7XG4gICAgcHlhbm5vdGU/OiBQeWFubm90ZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWb2ljZUFjdGl2aXR5RGV0ZWN0aW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhY3RpdmU6IHN0cmluZztcbiAgICBzYW1wbGluZ1JhdGU6IHN0cmluZztcbiAgICBweWFubm90ZTogUHlhbm5vdGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5QeWFubm90ZVxuICovXG5leHBvcnQgY2xhc3MgUHlhbm5vdGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LlB5YW5ub3RlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUHlhbm5vdGUoKTtcbiAgICBQeWFubm90ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFB5YW5ub3RlKSB7XG4gICAgX2luc3RhbmNlLm1vZGVsTmFtZSA9IF9pbnN0YW5jZS5tb2RlbE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1pbkF1ZGlvU2l6ZSA9IF9pbnN0YW5jZS5taW5BdWRpb1NpemUgfHwgJzAnO1xuICAgIF9pbnN0YW5jZS5taW5EdXJhdGlvbk9mZiA9IF9pbnN0YW5jZS5taW5EdXJhdGlvbk9mZiB8fCAwO1xuICAgIF9pbnN0YW5jZS5taW5EdXJhdGlvbk9uID0gX2luc3RhbmNlLm1pbkR1cmF0aW9uT24gfHwgMDtcbiAgICBfaW5zdGFuY2UudHJpdG9uU2VydmVySG9zdCA9IF9pbnN0YW5jZS50cml0b25TZXJ2ZXJIb3N0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJQb3J0ID0gX2luc3RhbmNlLnRyaXRvblNlcnZlclBvcnQgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUHlhbm5vdGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGVsTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkF1ZGlvU2l6ZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubWluRHVyYXRpb25PZmYgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkR1cmF0aW9uT24gPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS50cml0b25TZXJ2ZXJQb3J0ID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFB5YW5ub3RlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogUHlhbm5vdGUsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UubW9kZWxOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5tb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbkF1ZGlvU2l6ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5taW5BdWRpb1NpemUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbkR1cmF0aW9uT2ZmKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMywgX2luc3RhbmNlLm1pbkR1cmF0aW9uT2ZmKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5EdXJhdGlvbk9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLm1pbkR1cmF0aW9uT24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnRyaXRvblNlcnZlckhvc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyaXRvblNlcnZlclBvcnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZyg2LCBfaW5zdGFuY2UudHJpdG9uU2VydmVyUG9ydCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbW9kZWxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX21pbkF1ZGlvU2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9taW5EdXJhdGlvbk9mZjogbnVtYmVyO1xuICBwcml2YXRlIF9taW5EdXJhdGlvbk9uOiBudW1iZXI7XG4gIHByaXZhdGUgX3RyaXRvblNlcnZlckhvc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJpdG9uU2VydmVyUG9ydDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUHlhbm5vdGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UHlhbm5vdGUuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubW9kZWxOYW1lID0gX3ZhbHVlLm1vZGVsTmFtZTtcbiAgICB0aGlzLm1pbkF1ZGlvU2l6ZSA9IF92YWx1ZS5taW5BdWRpb1NpemU7XG4gICAgdGhpcy5taW5EdXJhdGlvbk9mZiA9IF92YWx1ZS5taW5EdXJhdGlvbk9mZjtcbiAgICB0aGlzLm1pbkR1cmF0aW9uT24gPSBfdmFsdWUubWluRHVyYXRpb25PbjtcbiAgICB0aGlzLnRyaXRvblNlcnZlckhvc3QgPSBfdmFsdWUudHJpdG9uU2VydmVySG9zdDtcbiAgICB0aGlzLnRyaXRvblNlcnZlclBvcnQgPSBfdmFsdWUudHJpdG9uU2VydmVyUG9ydDtcbiAgICBQeWFubm90ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbE5hbWU7XG4gIH1cbiAgc2V0IG1vZGVsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkF1ZGlvU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9taW5BdWRpb1NpemU7XG4gIH1cbiAgc2V0IG1pbkF1ZGlvU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWluQXVkaW9TaXplID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkR1cmF0aW9uT2ZmKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkR1cmF0aW9uT2ZmO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9mZih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluRHVyYXRpb25PZmYgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluRHVyYXRpb25PbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5EdXJhdGlvbk9uO1xuICB9XG4gIHNldCBtaW5EdXJhdGlvbk9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5EdXJhdGlvbk9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyaXRvblNlcnZlckhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpdG9uU2VydmVySG9zdDtcbiAgfVxuICBzZXQgdHJpdG9uU2VydmVySG9zdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpdG9uU2VydmVySG9zdCA9IHZhbHVlO1xuICB9XG4gIGdldCB0cml0b25TZXJ2ZXJQb3J0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaXRvblNlcnZlclBvcnQ7XG4gIH1cbiAgc2V0IHRyaXRvblNlcnZlclBvcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaXRvblNlcnZlclBvcnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQeWFubm90ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQeWFubm90ZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsTmFtZTogdGhpcy5tb2RlbE5hbWUsXG4gICAgICBtaW5BdWRpb1NpemU6IHRoaXMubWluQXVkaW9TaXplLFxuICAgICAgbWluRHVyYXRpb25PZmY6IHRoaXMubWluRHVyYXRpb25PZmYsXG4gICAgICBtaW5EdXJhdGlvbk9uOiB0aGlzLm1pbkR1cmF0aW9uT24sXG4gICAgICB0cml0b25TZXJ2ZXJIb3N0OiB0aGlzLnRyaXRvblNlcnZlckhvc3QsXG4gICAgICB0cml0b25TZXJ2ZXJQb3J0OiB0aGlzLnRyaXRvblNlcnZlclBvcnRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQeWFubm90ZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsTmFtZTogdGhpcy5tb2RlbE5hbWUsXG4gICAgICBtaW5BdWRpb1NpemU6IHRoaXMubWluQXVkaW9TaXplLFxuICAgICAgbWluRHVyYXRpb25PZmY6IHRoaXMubWluRHVyYXRpb25PZmYsXG4gICAgICBtaW5EdXJhdGlvbk9uOiB0aGlzLm1pbkR1cmF0aW9uT24sXG4gICAgICB0cml0b25TZXJ2ZXJIb3N0OiB0aGlzLnRyaXRvblNlcnZlckhvc3QsXG4gICAgICB0cml0b25TZXJ2ZXJQb3J0OiB0aGlzLnRyaXRvblNlcnZlclBvcnRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFB5YW5ub3RlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQeWFubm90ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgbWluQXVkaW9TaXplOiBzdHJpbmc7XG4gICAgbWluRHVyYXRpb25PZmY6IG51bWJlcjtcbiAgICBtaW5EdXJhdGlvbk9uOiBudW1iZXI7XG4gICAgdHJpdG9uU2VydmVySG9zdDogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlclBvcnQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQeWFubm90ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgbWluQXVkaW9TaXplOiBzdHJpbmc7XG4gICAgbWluRHVyYXRpb25PZmY6IG51bWJlcjtcbiAgICBtaW5EdXJhdGlvbk9uOiBudW1iZXI7XG4gICAgdHJpdG9uU2VydmVySG9zdDogc3RyaW5nO1xuICAgIHRyaXRvblNlcnZlclBvcnQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuUG9zdFByb2Nlc3NpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RQcm9jZXNzaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5Qb3N0UHJvY2Vzc2luZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBvc3RQcm9jZXNzaW5nKCk7XG4gICAgUG9zdFByb2Nlc3NpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBQb3N0UHJvY2Vzc2luZykge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXTtcbiAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMgPSBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdFByb2Nlc3NpbmcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycyA9IG5ldyBQb3N0UHJvY2Vzc29ycygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucG9zdFByb2Nlc3NvcnMsXG4gICAgICAgICAgICBQb3N0UHJvY2Vzc29ycy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdFByb2Nlc3NpbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0UHJvY2Vzc2luZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZSAmJiBfaW5zdGFuY2UucGlwZWxpbmUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnBpcGVsaW5lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5wb3N0UHJvY2Vzc29ycyBhcyBhbnksXG4gICAgICAgIFBvc3RQcm9jZXNzb3JzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BpcGVsaW5lOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcG9zdFByb2Nlc3NvcnM/OiBQb3N0UHJvY2Vzc29ycztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvc3RQcm9jZXNzaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBvc3RQcm9jZXNzaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lID0gKF92YWx1ZS5waXBlbGluZSB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnBvc3RQcm9jZXNzb3JzID0gX3ZhbHVlLnBvc3RQcm9jZXNzb3JzXG4gICAgICA/IG5ldyBQb3N0UHJvY2Vzc29ycyhfdmFsdWUucG9zdFByb2Nlc3NvcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBQb3N0UHJvY2Vzc2luZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBpcGVsaW5lKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmU7XG4gIH1cbiAgc2V0IHBpcGVsaW5lKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3BpcGVsaW5lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc3RQcm9jZXNzb3JzKCk6IFBvc3RQcm9jZXNzb3JzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdFByb2Nlc3NvcnM7XG4gIH1cbiAgc2V0IHBvc3RQcm9jZXNzb3JzKHZhbHVlOiBQb3N0UHJvY2Vzc29ycyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Bvc3RQcm9jZXNzb3JzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUG9zdFByb2Nlc3Npbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUG9zdFByb2Nlc3NpbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwaXBlbGluZTogKHRoaXMucGlwZWxpbmUgfHwgW10pLnNsaWNlKCksXG4gICAgICBwb3N0UHJvY2Vzc29yczogdGhpcy5wb3N0UHJvY2Vzc29yc1xuICAgICAgICA/IHRoaXMucG9zdFByb2Nlc3NvcnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3RQcm9jZXNzaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmU6ICh0aGlzLnBpcGVsaW5lIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcG9zdFByb2Nlc3NvcnM6IHRoaXMucG9zdFByb2Nlc3NvcnNcbiAgICAgICAgPyB0aGlzLnBvc3RQcm9jZXNzb3JzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUG9zdFByb2Nlc3Npbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBvc3RQcm9jZXNzaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwaXBlbGluZTogc3RyaW5nW107XG4gICAgcG9zdFByb2Nlc3NvcnM/OiBQb3N0UHJvY2Vzc29ycy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGlwZWxpbmU6IHN0cmluZ1tdO1xuICAgIHBvc3RQcm9jZXNzb3JzOiBQb3N0UHJvY2Vzc29ycy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LlBvc3RQcm9jZXNzb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0UHJvY2Vzc29ycyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5zMnQuUG9zdFByb2Nlc3NvcnMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQb3N0UHJvY2Vzc29ycygpO1xuICAgIFBvc3RQcm9jZXNzb3JzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUG9zdFByb2Nlc3NvcnMpIHtcbiAgICBfaW5zdGFuY2Uuc3ltU3BlbGwgPSBfaW5zdGFuY2Uuc3ltU3BlbGwgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uID0gX2luc3RhbmNlLm5vcm1hbGl6YXRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUG9zdFByb2Nlc3NvcnMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnN5bVNwZWxsID0gbmV3IFN5bVNwZWxsKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zeW1TcGVsbCxcbiAgICAgICAgICAgIFN5bVNwZWxsLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiA9IG5ldyBTMlROb3JtYWxpemF0aW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5ub3JtYWxpemF0aW9uLFxuICAgICAgICAgICAgUzJUTm9ybWFsaXphdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUG9zdFByb2Nlc3NvcnMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBQb3N0UHJvY2Vzc29ycyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zeW1TcGVsbCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5zeW1TcGVsbCBhcyBhbnksXG4gICAgICAgIFN5bVNwZWxsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm5vcm1hbGl6YXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2Uubm9ybWFsaXphdGlvbiBhcyBhbnksXG4gICAgICAgIFMyVE5vcm1hbGl6YXRpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3ltU3BlbGw/OiBTeW1TcGVsbDtcbiAgcHJpdmF0ZSBfbm9ybWFsaXphdGlvbj86IFMyVE5vcm1hbGl6YXRpb247XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQb3N0UHJvY2Vzc29ycyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQb3N0UHJvY2Vzc29ycy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW1TcGVsbCA9IF92YWx1ZS5zeW1TcGVsbCA/IG5ldyBTeW1TcGVsbChfdmFsdWUuc3ltU3BlbGwpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubm9ybWFsaXphdGlvbiA9IF92YWx1ZS5ub3JtYWxpemF0aW9uXG4gICAgICA/IG5ldyBTMlROb3JtYWxpemF0aW9uKF92YWx1ZS5ub3JtYWxpemF0aW9uKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUG9zdFByb2Nlc3NvcnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW1TcGVsbCgpOiBTeW1TcGVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bVNwZWxsO1xuICB9XG4gIHNldCBzeW1TcGVsbCh2YWx1ZTogU3ltU3BlbGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zeW1TcGVsbCA9IHZhbHVlO1xuICB9XG4gIGdldCBub3JtYWxpemF0aW9uKCk6IFMyVE5vcm1hbGl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemF0aW9uO1xuICB9XG4gIHNldCBub3JtYWxpemF0aW9uKHZhbHVlOiBTMlROb3JtYWxpemF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm9ybWFsaXphdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBvc3RQcm9jZXNzb3JzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBvc3RQcm9jZXNzb3JzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltU3BlbGw6IHRoaXMuc3ltU3BlbGwgPyB0aGlzLnN5bVNwZWxsLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBub3JtYWxpemF0aW9uOiB0aGlzLm5vcm1hbGl6YXRpb25cbiAgICAgICAgPyB0aGlzLm5vcm1hbGl6YXRpb24udG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFBvc3RQcm9jZXNzb3JzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltU3BlbGw6IHRoaXMuc3ltU3BlbGwgPyB0aGlzLnN5bVNwZWxsLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG5vcm1hbGl6YXRpb246IHRoaXMubm9ybWFsaXphdGlvblxuICAgICAgICA/IHRoaXMubm9ybWFsaXphdGlvbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvc3RQcm9jZXNzb3JzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc29yc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3ltU3BlbGw/OiBTeW1TcGVsbC5Bc09iamVjdDtcbiAgICBub3JtYWxpemF0aW9uPzogUzJUTm9ybWFsaXphdGlvbi5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBQb3N0UHJvY2Vzc29yc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3ltU3BlbGw6IFN5bVNwZWxsLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBub3JtYWxpemF0aW9uOiBTMlROb3JtYWxpemF0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuU3ltU3BlbGxcbiAqL1xuZXhwb3J0IGNsYXNzIFN5bVNwZWxsIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TeW1TcGVsbCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bVNwZWxsKCk7XG4gICAgU3ltU3BlbGwuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTeW1TcGVsbCkge1xuICAgIF9pbnN0YW5jZS5kaWN0UGF0aCA9IF9pbnN0YW5jZS5kaWN0UGF0aCB8fCAnJztcbiAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9XG4gICAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnByZWZpeExlbmd0aCA9IF9pbnN0YW5jZS5wcmVmaXhMZW5ndGggfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3ltU3BlbGwsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmRpY3RQYXRoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucHJlZml4TGVuZ3RoID0gX3JlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN5bVNwZWxsLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogU3ltU3BlbGwsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuZGljdFBhdGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmRpY3RQYXRoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnByZWZpeExlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDMsIF9pbnN0YW5jZS5wcmVmaXhMZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RpY3RQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgX21heERpY3Rpb25hcnlFZGl0RGlzdGFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJlZml4TGVuZ3RoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTeW1TcGVsbCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTeW1TcGVsbC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5kaWN0UGF0aCA9IF92YWx1ZS5kaWN0UGF0aDtcbiAgICB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UgPSBfdmFsdWUubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTtcbiAgICB0aGlzLnByZWZpeExlbmd0aCA9IF92YWx1ZS5wcmVmaXhMZW5ndGg7XG4gICAgU3ltU3BlbGwucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkaWN0UGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaWN0UGF0aDtcbiAgfVxuICBzZXQgZGljdFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RpY3RQYXRoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTtcbiAgfVxuICBzZXQgbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwcmVmaXhMZW5ndGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4TGVuZ3RoO1xuICB9XG4gIHNldCBwcmVmaXhMZW5ndGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeExlbmd0aCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN5bVNwZWxsLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN5bVNwZWxsLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGljdFBhdGg6IHRoaXMuZGljdFBhdGgsXG4gICAgICBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlOiB0aGlzLm1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2UsXG4gICAgICBwcmVmaXhMZW5ndGg6IHRoaXMucHJlZml4TGVuZ3RoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3ltU3BlbGwuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkaWN0UGF0aDogdGhpcy5kaWN0UGF0aCxcbiAgICAgIG1heERpY3Rpb25hcnlFZGl0RGlzdGFuY2U6IHRoaXMubWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZSxcbiAgICAgIHByZWZpeExlbmd0aDogdGhpcy5wcmVmaXhMZW5ndGhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN5bVNwZWxsIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTeW1TcGVsbFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZGljdFBhdGg6IHN0cmluZztcbiAgICBtYXhEaWN0aW9uYXJ5RWRpdERpc3RhbmNlOiBzdHJpbmc7XG4gICAgcHJlZml4TGVuZ3RoOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3ltU3BlbGxcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGRpY3RQYXRoOiBzdHJpbmc7XG4gICAgbWF4RGljdGlvbmFyeUVkaXREaXN0YW5jZTogc3RyaW5nO1xuICAgIHByZWZpeExlbmd0aDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5TMlROb3JtYWxpemF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTMlROb3JtYWxpemF0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5TMlROb3JtYWxpemF0aW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUzJUTm9ybWFsaXphdGlvbigpO1xuICAgIFMyVE5vcm1hbGl6YXRpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTMlROb3JtYWxpemF0aW9uKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX2luc3RhbmNlLmxhbmd1YWdlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5waXBlbGluZSA9IF9pbnN0YW5jZS5waXBlbGluZSB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFMyVE5vcm1hbGl6YXRpb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLnBpcGVsaW5lID0gX2luc3RhbmNlLnBpcGVsaW5lIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUzJUTm9ybWFsaXphdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFMyVE5vcm1hbGl6YXRpb24sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5waXBlbGluZSAmJiBfaW5zdGFuY2UucGlwZWxpbmUubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgX2luc3RhbmNlLnBpcGVsaW5lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF9waXBlbGluZTogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTMlROb3JtYWxpemF0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFMyVE5vcm1hbGl6YXRpb24uQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBfdmFsdWUubGFuZ3VhZ2U7XG4gICAgdGhpcy5waXBlbGluZSA9IChfdmFsdWUucGlwZWxpbmUgfHwgW10pLnNsaWNlKCk7XG4gICAgUzJUTm9ybWFsaXphdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGlwZWxpbmUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZTtcbiAgfVxuICBzZXQgcGlwZWxpbmUodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcGlwZWxpbmUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTMlROb3JtYWxpemF0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFMyVE5vcm1hbGl6YXRpb24uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFMyVE5vcm1hbGl6YXRpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHBpcGVsaW5lOiAodGhpcy5waXBlbGluZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUzJUTm9ybWFsaXphdGlvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUzJUTm9ybWFsaXphdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwaXBlbGluZTogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUzJUTm9ybWFsaXphdGlvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwaXBlbGluZTogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28uczJ0LkxvZ2dpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2dpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkxvZ2dpbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2dnaW5nKCk7XG4gICAgTG9nZ2luZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExvZ2dpbmcpIHtcbiAgICBfaW5zdGFuY2UudHlwZSA9IF9pbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXRoID0gX2luc3RhbmNlLnBhdGggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMb2dnaW5nLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGF0aCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9nZ2luZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IExvZ2dpbmcsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UudHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGF0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMb2dnaW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvZ2dpbmcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgIHRoaXMucGF0aCA9IF92YWx1ZS5wYXRoO1xuICAgIExvZ2dpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG4gIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9nZ2luZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMb2dnaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTG9nZ2luZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9nZ2luZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTG9nZ2luZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMb2dnaW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCgpO1xuICAgIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmlkcyA9IF9pbnN0YW5jZS5pZHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuaWRzID0gX2luc3RhbmNlLmlkcyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZHMgJiYgX2luc3RhbmNlLmlkcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuaWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pZHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pZHMgPSAoX3ZhbHVlLmlkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5faWRzO1xuICB9XG4gIHNldCBpZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiAodGhpcy5pZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiAodGhpcy5pZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZU1vZGVsc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaWRzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRcbiAqL1xuZXhwb3J0IGNsYXNzIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MYW5ndWFnZU1vZGVsUGlwZWxpbmVJZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKCk7XG4gICAgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZCkge1xuICAgIF9pbnN0YW5jZS5waXBlbGluZUlkID0gX2luc3RhbmNlLnBpcGVsaW5lSWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGVsTmFtZXMgPSBfaW5zdGFuY2UubW9kZWxOYW1lcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5waXBlbGluZUlkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoX2luc3RhbmNlLm1vZGVsTmFtZXMgPSBfaW5zdGFuY2UubW9kZWxOYW1lcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGlwZWxpbmVJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGlwZWxpbmVJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kZWxOYW1lcyAmJiBfaW5zdGFuY2UubW9kZWxOYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2UubW9kZWxOYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGlwZWxpbmVJZDogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlbE5hbWVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBpcGVsaW5lSWQgPSBfdmFsdWUucGlwZWxpbmVJZDtcbiAgICB0aGlzLm1vZGVsTmFtZXMgPSAoX3ZhbHVlLm1vZGVsTmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwaXBlbGluZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lSWQ7XG4gIH1cbiAgc2V0IHBpcGVsaW5lSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BpcGVsaW5lSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZWxOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsTmFtZXM7XG4gIH1cbiAgc2V0IG1vZGVsTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbW9kZWxOYW1lcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVJZDogdGhpcy5waXBlbGluZUlkLFxuICAgICAgbW9kZWxOYW1lczogKHRoaXMubW9kZWxOYW1lcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGlwZWxpbmVJZDogdGhpcy5waXBlbGluZUlkLFxuICAgICAgbW9kZWxOYW1lczogKHRoaXMubW9kZWxOYW1lcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwaXBlbGluZUlkOiBzdHJpbmc7XG4gICAgbW9kZWxOYW1lczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBpcGVsaW5lSWQ6IHN0cmluZztcbiAgICBtb2RlbE5hbWVzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5MaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5sbVBpcGVsaW5lSWRzID0gX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubG1QaXBlbGluZUlkcyA9IF9pbnN0YW5jZS5sbVBpcGVsaW5lSWRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMgJiYgX2luc3RhbmNlLmxtUGlwZWxpbmVJZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UubG1QaXBlbGluZUlkcyBhcyBhbnksXG4gICAgICAgIExhbmd1YWdlTW9kZWxQaXBlbGluZUlkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xtUGlwZWxpbmVJZHM/OiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxtUGlwZWxpbmVJZHMgPSAoX3ZhbHVlLmxtUGlwZWxpbmVJZHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkKG0pXG4gICAgKTtcbiAgICBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxtUGlwZWxpbmVJZHMoKTogTGFuZ3VhZ2VNb2RlbFBpcGVsaW5lSWRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xtUGlwZWxpbmVJZHM7XG4gIH1cbiAgc2V0IGxtUGlwZWxpbmVJZHModmFsdWU6IExhbmd1YWdlTW9kZWxQaXBlbGluZUlkW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sbVBpcGVsaW5lSWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsbVBpcGVsaW5lSWRzOiAodGhpcy5sbVBpcGVsaW5lSWRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsbVBpcGVsaW5lSWRzOiAodGhpcy5sbVBpcGVsaW5lSWRzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UzJ0TGFuZ3VhZ2VNb2RlbHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFMydExhbmd1YWdlTW9kZWxzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxtUGlwZWxpbmVJZHM/OiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTMnRMYW5ndWFnZU1vZGVsc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsbVBpcGVsaW5lSWRzOiBMYW5ndWFnZU1vZGVsUGlwZWxpbmVJZC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkNyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWxOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9IF92YWx1ZS5sYW5ndWFnZU1vZGVsTmFtZTtcbiAgICBDcmVhdGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkRlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlTW9kZWxOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSA9IF92YWx1ZS5sYW5ndWFnZU1vZGVsTmFtZTtcbiAgICBEZWxldGVVc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRGVsZXRlVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZVVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28uczJ0LkFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCgpO1xuICAgIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuemlwcGVkRGF0YSA9IF9pbnN0YW5jZS56aXBwZWREYXRhIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuemlwcGVkRGF0YSA9IF9yZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS56aXBwZWREYXRhICYmIF9pbnN0YW5jZS56aXBwZWREYXRhLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDIsIF9pbnN0YW5jZS56aXBwZWREYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF96aXBwZWREYXRhOiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VNb2RlbE5hbWUgPSBfdmFsdWUubGFuZ3VhZ2VNb2RlbE5hbWU7XG4gICAgdGhpcy56aXBwZWREYXRhID0gX3ZhbHVlLnppcHBlZERhdGE7XG4gICAgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VNb2RlbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VNb2RlbE5hbWU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB6aXBwZWREYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLl96aXBwZWREYXRhO1xuICB9XG4gIHNldCB6aXBwZWREYXRhKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5femlwcGVkRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZU1vZGVsTmFtZTogdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSxcbiAgICAgIHppcHBlZERhdGE6IHRoaXMuemlwcGVkRGF0YVxuICAgICAgICA/IHRoaXMuemlwcGVkRGF0YS5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGREYXRhVG9Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZU1vZGVsTmFtZTogdGhpcy5sYW5ndWFnZU1vZGVsTmFtZSxcbiAgICAgIHppcHBlZERhdGE6IHRoaXMuemlwcGVkRGF0YSA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLnppcHBlZERhdGEpIDogJydcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZERhdGFUb1VzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHppcHBlZERhdGE6IFVpbnQ4QXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQWRkRGF0YVRvVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHppcHBlZERhdGE6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5zMnQuVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnMydC5UcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0KCk7XG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSA9IF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uub3JkZXIgPSBfaW5zdGFuY2Uub3JkZXIgfHwgJzAnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uub3JkZXIgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZU1vZGVsTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VNb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoMiwgX2luc3RhbmNlLm9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lID0gX3ZhbHVlLmxhbmd1YWdlTW9kZWxOYW1lO1xuICAgIHRoaXMub3JkZXIgPSBfdmFsdWUub3JkZXI7XG4gICAgVHJhaW5Vc2VyTGFuZ3VhZ2VNb2RlbFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZU1vZGVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZU1vZGVsTmFtZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VNb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlTW9kZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgb3JkZXI6IHRoaXMub3JkZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlTW9kZWxOYW1lOiB0aGlzLmxhbmd1YWdlTW9kZWxOYW1lLFxuICAgICAgb3JkZXI6IHRoaXMub3JkZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFpblVzZXJMYW5ndWFnZU1vZGVsUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VNb2RlbE5hbWU6IHN0cmluZztcbiAgICBvcmRlcjogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluVXNlckxhbmd1YWdlTW9kZWxSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZU1vZGVsTmFtZTogc3RyaW5nO1xuICAgIG9yZGVyOiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==
