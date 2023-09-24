import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf012 from '@ngx-grpc/well-known-types';
export declare enum IntentView {
	INTENT_VIEW_UNSPECIFIED = 0,
	INTENT_VIEW_FULL = 1,
	INTENT_VIEW_PARTIAL = 2,
	INTENT_VIEW_SHALLOW = 3,
	INTENT_VIEW_MINIMUM = 4
}
export declare enum IntentCategory {
	ALL_INTENTS = 0,
	DEFAULT_INTENTS = 1,
	USER_DEFINED_INTENTS = 2,
	DATE_EXPIRED_INTENTS = 3,
	DATE_ACTIVE_INTENTS = 4,
	DATE_UPCOMING_INTENTS = 5
}
/**
 * Message implementation for ondewo.nlu.Intent
 */
export declare class Intent implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): Intent;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: Intent): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: Intent, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: Intent, _writer: BinaryWriter): void;
	private _name;
	private _displayName;
	private _webhookState;
	private _priority;
	private _isFallback;
	private _mlDisabled;
	private _inputContextNames;
	private _events;
	private _trainingPhrases?;
	private _action;
	private _outputContexts?;
	private _resetContexts;
	private _parameters?;
	private _messages?;
	private _defaultResponsePlatforms;
	private _rootFollowupIntentName;
	private _parentFollowupIntentName;
	private _followupIntentInfo?;
	private _nextPageToken;
	private _domainName;
	private _isStartOfDeviation;
	private _isEndOfDeviation;
	private _trainingPhraseCount;
	private _status;
	private _startDate?;
	private _endDate?;
	private _tags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of Intent to deeply clone from
	 */
	constructor(_value?: RecursivePartial<Intent.AsObject>);
	get name(): string;
	set name(value: string);
	get displayName(): string;
	set displayName(value: string);
	get webhookState(): Intent.WebhookState;
	set webhookState(value: Intent.WebhookState);
	get priority(): number;
	set priority(value: number);
	get isFallback(): boolean;
	set isFallback(value: boolean);
	get mlDisabled(): boolean;
	set mlDisabled(value: boolean);
	get inputContextNames(): string[];
	set inputContextNames(value: string[]);
	get events(): string[];
	set events(value: string[]);
	get trainingPhrases(): Intent.TrainingPhrase[] | undefined;
	set trainingPhrases(value: Intent.TrainingPhrase[] | undefined);
	get action(): string;
	set action(value: string);
	get outputContexts(): ondewoNlu009.Context[] | undefined;
	set outputContexts(value: ondewoNlu009.Context[] | undefined);
	get resetContexts(): boolean;
	set resetContexts(value: boolean);
	get parameters(): Intent.Parameter[] | undefined;
	set parameters(value: Intent.Parameter[] | undefined);
	get messages(): Intent.Message[] | undefined;
	set messages(value: Intent.Message[] | undefined);
	get defaultResponsePlatforms(): Intent.Message.Platform[];
	set defaultResponsePlatforms(value: Intent.Message.Platform[]);
	get rootFollowupIntentName(): string;
	set rootFollowupIntentName(value: string);
	get parentFollowupIntentName(): string;
	set parentFollowupIntentName(value: string);
	get followupIntentInfo(): Intent.FollowupIntentInfo[] | undefined;
	set followupIntentInfo(value: Intent.FollowupIntentInfo[] | undefined);
	get nextPageToken(): string;
	set nextPageToken(value: string);
	get domainName(): string;
	set domainName(value: string);
	get isStartOfDeviation(): boolean;
	set isStartOfDeviation(value: boolean);
	get isEndOfDeviation(): boolean;
	set isEndOfDeviation(value: boolean);
	get trainingPhraseCount(): number;
	set trainingPhraseCount(value: number);
	get status(): Intent.IntentStatus;
	set status(value: Intent.IntentStatus);
	get startDate(): googleProtobuf007.Timestamp | undefined;
	set startDate(value: googleProtobuf007.Timestamp | undefined);
	get endDate(): googleProtobuf007.Timestamp | undefined;
	set endDate(value: googleProtobuf007.Timestamp | undefined);
	get tags(): string[];
	set tags(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): Intent.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): Intent.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): Intent.AsProtobufJSON;
}
export declare module Intent {
	/**
	 * Standard JavaScript object representation for Intent
	 */
	interface AsObject {
		name: string;
		displayName: string;
		webhookState: Intent.WebhookState;
		priority: number;
		isFallback: boolean;
		mlDisabled: boolean;
		inputContextNames: string[];
		events: string[];
		trainingPhrases?: Intent.TrainingPhrase.AsObject[];
		action: string;
		outputContexts?: ondewoNlu009.Context.AsObject[];
		resetContexts: boolean;
		parameters?: Intent.Parameter.AsObject[];
		messages?: Intent.Message.AsObject[];
		defaultResponsePlatforms: Intent.Message.Platform[];
		rootFollowupIntentName: string;
		parentFollowupIntentName: string;
		followupIntentInfo?: Intent.FollowupIntentInfo.AsObject[];
		nextPageToken: string;
		domainName: string;
		isStartOfDeviation: boolean;
		isEndOfDeviation: boolean;
		trainingPhraseCount: number;
		status: Intent.IntentStatus;
		startDate?: googleProtobuf007.Timestamp.AsObject;
		endDate?: googleProtobuf007.Timestamp.AsObject;
		tags: string[];
	}
	/**
	 * Protobuf JSON representation for Intent
	 */
	interface AsProtobufJSON {
		name: string;
		displayName: string;
		webhookState: string;
		priority: number;
		isFallback: boolean;
		mlDisabled: boolean;
		inputContextNames: string[];
		events: string[];
		trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
		action: string;
		outputContexts: ondewoNlu009.Context.AsProtobufJSON[] | null;
		resetContexts: boolean;
		parameters: Intent.Parameter.AsProtobufJSON[] | null;
		messages: Intent.Message.AsProtobufJSON[] | null;
		defaultResponsePlatforms: string[];
		rootFollowupIntentName: string;
		parentFollowupIntentName: string;
		followupIntentInfo: Intent.FollowupIntentInfo.AsProtobufJSON[] | null;
		nextPageToken: string;
		domainName: string;
		isStartOfDeviation: boolean;
		isEndOfDeviation: boolean;
		trainingPhraseCount: number;
		status: string;
		startDate: googleProtobuf007.Timestamp.AsProtobufJSON | null;
		endDate: googleProtobuf007.Timestamp.AsProtobufJSON | null;
		tags: string[];
	}
	enum IntentStatus {
		ACTIVE = 0,
		INACTIVE = 1
	}
	enum WebhookState {
		WEBHOOK_STATE_UNSPECIFIED = 0,
		WEBHOOK_STATE_ENABLED = 1,
		WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2
	}
	/**
	 * Message implementation for ondewo.nlu.Intent.TrainingPhrase
	 */
	class TrainingPhrase implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): TrainingPhrase;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: TrainingPhrase): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: TrainingPhrase, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: TrainingPhrase, _writer: BinaryWriter): void;
		private _name;
		private _type;
		private _text;
		private _entities?;
		private _timesAddedCount;
		private _languageCode;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of TrainingPhrase to deeply clone from
		 */
		constructor(_value?: RecursivePartial<TrainingPhrase.AsObject>);
		get name(): string;
		set name(value: string);
		get type(): Intent.TrainingPhrase.Type;
		set type(value: Intent.TrainingPhrase.Type);
		get text(): string;
		set text(value: string);
		get entities(): Intent.TrainingPhrase.Entity[] | undefined;
		set entities(value: Intent.TrainingPhrase.Entity[] | undefined);
		get timesAddedCount(): number;
		set timesAddedCount(value: number);
		get languageCode(): string;
		set languageCode(value: string);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): TrainingPhrase.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): TrainingPhrase.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhrase.AsProtobufJSON;
	}
	module TrainingPhrase {
		/**
		 * Standard JavaScript object representation for TrainingPhrase
		 */
		interface AsObject {
			name: string;
			type: Intent.TrainingPhrase.Type;
			text: string;
			entities?: Intent.TrainingPhrase.Entity.AsObject[];
			timesAddedCount: number;
			languageCode: string;
		}
		/**
		 * Protobuf JSON representation for TrainingPhrase
		 */
		interface AsProtobufJSON {
			name: string;
			type: string;
			text: string;
			entities: Intent.TrainingPhrase.Entity.AsProtobufJSON[] | null;
			timesAddedCount: number;
			languageCode: string;
		}
		enum Type {
			TYPE_UNSPECIFIED = 0,
			EXAMPLE = 1,
			TEMPLATE = 2
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.TrainingPhrase.Entity
		 */
		class Entity implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Entity;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Entity): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Entity, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter): void;
			private _entityTypeName;
			private _entityTypeDisplayName;
			private _entityValueName;
			private _entityValueDisplayName;
			private _start;
			private _end;
			private _parameterName;
			private _parameterDisplayName;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Entity to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Entity.AsObject>);
			get entityTypeName(): string;
			set entityTypeName(value: string);
			get entityTypeDisplayName(): string;
			set entityTypeDisplayName(value: string);
			get entityValueName(): string;
			set entityValueName(value: string);
			get entityValueDisplayName(): string;
			set entityValueDisplayName(value: string);
			get start(): number;
			set start(value: number);
			get end(): number;
			set end(value: number);
			get parameterName(): string;
			set parameterName(value: string);
			get parameterDisplayName(): string;
			set parameterDisplayName(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Entity.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Entity.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Entity.AsProtobufJSON;
		}
		module Entity {
			/**
			 * Standard JavaScript object representation for Entity
			 */
			interface AsObject {
				entityTypeName: string;
				entityTypeDisplayName: string;
				entityValueName: string;
				entityValueDisplayName: string;
				start: number;
				end: number;
				parameterName: string;
				parameterDisplayName: string;
			}
			/**
			 * Protobuf JSON representation for Entity
			 */
			interface AsProtobufJSON {
				entityTypeName: string;
				entityTypeDisplayName: string;
				entityValueName: string;
				entityValueDisplayName: string;
				start: number;
				end: number;
				parameterName: string;
				parameterDisplayName: string;
			}
		}
	}
	/**
	 * Message implementation for ondewo.nlu.Intent.Parameter
	 */
	class Parameter implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): Parameter;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: Parameter): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: Parameter, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: Parameter, _writer: BinaryWriter): void;
		private _name;
		private _displayName;
		private _value;
		private _defaultValue;
		private _entityTypeName;
		private _entityTypeDisplayName;
		private _mandatory;
		private _prompts?;
		private _isList;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of Parameter to deeply clone from
		 */
		constructor(_value?: RecursivePartial<Parameter.AsObject>);
		get name(): string;
		set name(value: string);
		get displayName(): string;
		set displayName(value: string);
		get value(): string;
		set value(value: string);
		get defaultValue(): string;
		set defaultValue(value: string);
		get entityTypeName(): string;
		set entityTypeName(value: string);
		get entityTypeDisplayName(): string;
		set entityTypeDisplayName(value: string);
		get mandatory(): boolean;
		set mandatory(value: boolean);
		get prompts(): Intent.Parameter.Prompt[] | undefined;
		set prompts(value: Intent.Parameter.Prompt[] | undefined);
		get isList(): boolean;
		set isList(value: boolean);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): Parameter.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): Parameter.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): Parameter.AsProtobufJSON;
	}
	module Parameter {
		/**
		 * Standard JavaScript object representation for Parameter
		 */
		interface AsObject {
			name: string;
			displayName: string;
			value: string;
			defaultValue: string;
			entityTypeName: string;
			entityTypeDisplayName: string;
			mandatory: boolean;
			prompts?: Intent.Parameter.Prompt.AsObject[];
			isList: boolean;
		}
		/**
		 * Protobuf JSON representation for Parameter
		 */
		interface AsProtobufJSON {
			name: string;
			displayName: string;
			value: string;
			defaultValue: string;
			entityTypeName: string;
			entityTypeDisplayName: string;
			mandatory: boolean;
			prompts: Intent.Parameter.Prompt.AsProtobufJSON[] | null;
			isList: boolean;
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Parameter.Prompt
		 */
		class Prompt implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Prompt;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Prompt): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Prompt, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Prompt, _writer: BinaryWriter): void;
			private _name;
			private _text;
			private _languageCode;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Prompt to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Prompt.AsObject>);
			get name(): string;
			set name(value: string);
			get text(): string;
			set text(value: string);
			get languageCode(): string;
			set languageCode(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Prompt.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Prompt.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Prompt.AsProtobufJSON;
		}
		module Prompt {
			/**
			 * Standard JavaScript object representation for Prompt
			 */
			interface AsObject {
				name: string;
				text: string;
				languageCode: string;
			}
			/**
			 * Protobuf JSON representation for Prompt
			 */
			interface AsProtobufJSON {
				name: string;
				text: string;
				languageCode: string;
			}
		}
	}
	/**
	 * Message implementation for ondewo.nlu.Intent.Message
	 */
	class Message implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): Message;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: Message): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: Message, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: Message, _writer: BinaryWriter): void;
		private _name;
		private _languageCode;
		private _text?;
		private _image?;
		private _quickReplies?;
		private _card?;
		private _payload?;
		private _simpleResponses?;
		private _basicCard?;
		private _suggestions?;
		private _linkOutSuggestion?;
		private _listSelect?;
		private _carouselSelect?;
		private _htmlText?;
		private _video?;
		private _audio?;
		private _platform;
		private _isPrompt;
		private _message;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of Message to deeply clone from
		 */
		constructor(_value?: RecursivePartial<Message.AsObject>);
		get name(): string;
		set name(value: string);
		get languageCode(): string;
		set languageCode(value: string);
		get text(): Intent.Message.Text | undefined;
		set text(value: Intent.Message.Text | undefined);
		get image(): Intent.Message.Image | undefined;
		set image(value: Intent.Message.Image | undefined);
		get quickReplies(): Intent.Message.QuickReplies | undefined;
		set quickReplies(value: Intent.Message.QuickReplies | undefined);
		get card(): Intent.Message.Card | undefined;
		set card(value: Intent.Message.Card | undefined);
		get payload(): googleProtobuf012.Struct | undefined;
		set payload(value: googleProtobuf012.Struct | undefined);
		get simpleResponses(): Intent.Message.SimpleResponses | undefined;
		set simpleResponses(value: Intent.Message.SimpleResponses | undefined);
		get basicCard(): Intent.Message.BasicCard | undefined;
		set basicCard(value: Intent.Message.BasicCard | undefined);
		get suggestions(): Intent.Message.Suggestions | undefined;
		set suggestions(value: Intent.Message.Suggestions | undefined);
		get linkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
		set linkOutSuggestion(value: Intent.Message.LinkOutSuggestion | undefined);
		get listSelect(): Intent.Message.ListSelect | undefined;
		set listSelect(value: Intent.Message.ListSelect | undefined);
		get carouselSelect(): Intent.Message.CarouselSelect | undefined;
		set carouselSelect(value: Intent.Message.CarouselSelect | undefined);
		get htmlText(): Intent.Message.HTMLText | undefined;
		set htmlText(value: Intent.Message.HTMLText | undefined);
		get video(): Intent.Message.Video | undefined;
		set video(value: Intent.Message.Video | undefined);
		get audio(): Intent.Message.Audio | undefined;
		set audio(value: Intent.Message.Audio | undefined);
		get platform(): Intent.Message.Platform;
		set platform(value: Intent.Message.Platform);
		get isPrompt(): boolean;
		set isPrompt(value: boolean);
		get message(): Message.MessageCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): Message.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): Message.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): Message.AsProtobufJSON;
	}
	module Message {
		/**
		 * Standard JavaScript object representation for Message
		 */
		interface AsObject {
			name: string;
			languageCode: string;
			text?: Intent.Message.Text.AsObject;
			image?: Intent.Message.Image.AsObject;
			quickReplies?: Intent.Message.QuickReplies.AsObject;
			card?: Intent.Message.Card.AsObject;
			payload?: googleProtobuf012.Struct.AsObject;
			simpleResponses?: Intent.Message.SimpleResponses.AsObject;
			basicCard?: Intent.Message.BasicCard.AsObject;
			suggestions?: Intent.Message.Suggestions.AsObject;
			linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject;
			listSelect?: Intent.Message.ListSelect.AsObject;
			carouselSelect?: Intent.Message.CarouselSelect.AsObject;
			htmlText?: Intent.Message.HTMLText.AsObject;
			video?: Intent.Message.Video.AsObject;
			audio?: Intent.Message.Audio.AsObject;
			platform: Intent.Message.Platform;
			isPrompt: boolean;
		}
		/**
		 * Protobuf JSON representation for Message
		 */
		interface AsProtobufJSON {
			name: string;
			languageCode: string;
			text: Intent.Message.Text.AsProtobufJSON | null;
			image: Intent.Message.Image.AsProtobufJSON | null;
			quickReplies: Intent.Message.QuickReplies.AsProtobufJSON | null;
			card: Intent.Message.Card.AsProtobufJSON | null;
			payload: googleProtobuf012.Struct.AsProtobufJSON | null;
			simpleResponses: Intent.Message.SimpleResponses.AsProtobufJSON | null;
			basicCard: Intent.Message.BasicCard.AsProtobufJSON | null;
			suggestions: Intent.Message.Suggestions.AsProtobufJSON | null;
			linkOutSuggestion: Intent.Message.LinkOutSuggestion.AsProtobufJSON | null;
			listSelect: Intent.Message.ListSelect.AsProtobufJSON | null;
			carouselSelect: Intent.Message.CarouselSelect.AsProtobufJSON | null;
			htmlText: Intent.Message.HTMLText.AsProtobufJSON | null;
			video: Intent.Message.Video.AsProtobufJSON | null;
			audio: Intent.Message.Audio.AsProtobufJSON | null;
			platform: string;
			isPrompt: boolean;
		}
		enum MessageCase {
			none = 0,
			text = 1,
			image = 2,
			quickReplies = 3,
			card = 4,
			payload = 5,
			simpleResponses = 6,
			basicCard = 7,
			suggestions = 8,
			linkOutSuggestion = 9,
			listSelect = 10,
			carouselSelect = 11,
			htmlText = 12,
			video = 13,
			audio = 14
		}
		enum Platform {
			PLATFORM_UNSPECIFIED = 0,
			FACEBOOK = 1,
			SLACK = 2,
			TELEGRAM = 3,
			KIK = 4,
			SKYPE = 5,
			LINE = 6,
			VIBER = 7,
			ACTIONS_ON_GOOGLE = 8,
			PLACEHOLDER_1 = 9,
			PLACEHOLDER_2 = 10,
			PLACEHOLDER_3 = 11,
			PLACEHOLDER_4 = 12,
			PLACEHOLDER_5 = 13,
			PLACEHOLDER_6 = 14,
			PLACEHOLDER_7 = 15,
			PLACEHOLDER_8 = 16,
			PLACEHOLDER_9 = 17,
			PLACEHOLDER_10 = 18,
			PLACEHOLDER_11 = 19,
			PLACEHOLDER_12 = 20,
			PLACEHOLDER_13 = 21,
			PLACEHOLDER_14 = 22,
			PLACEHOLDER_15 = 23,
			PLACEHOLDER_16 = 24,
			PLACEHOLDER_17 = 25,
			PLACEHOLDER_18 = 26,
			PLACEHOLDER_19 = 27,
			PLACEHOLDER_20 = 28
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Text
		 */
		class Text implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Text;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Text): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Text, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Text, _writer: BinaryWriter): void;
			private _text;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Text to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Text.AsObject>);
			get text(): string[];
			set text(value: string[]);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Text.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Text.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Text.AsProtobufJSON;
		}
		module Text {
			/**
			 * Standard JavaScript object representation for Text
			 */
			interface AsObject {
				text: string[];
			}
			/**
			 * Protobuf JSON representation for Text
			 */
			interface AsProtobufJSON {
				text: string[];
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Image
		 */
		class Image implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Image;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Image): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Image, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Image, _writer: BinaryWriter): void;
			private _imageUri;
			private _accessibilityText;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Image to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Image.AsObject>);
			get imageUri(): string;
			set imageUri(value: string);
			get accessibilityText(): string;
			set accessibilityText(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Image.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Image.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Image.AsProtobufJSON;
		}
		module Image {
			/**
			 * Standard JavaScript object representation for Image
			 */
			interface AsObject {
				imageUri: string;
				accessibilityText: string;
			}
			/**
			 * Protobuf JSON representation for Image
			 */
			interface AsProtobufJSON {
				imageUri: string;
				accessibilityText: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.QuickReplies
		 */
		class QuickReplies implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): QuickReplies;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: QuickReplies): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: QuickReplies, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: QuickReplies, _writer: BinaryWriter): void;
			private _title;
			private _quickReplies;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of QuickReplies to deeply clone from
			 */
			constructor(_value?: RecursivePartial<QuickReplies.AsObject>);
			get title(): string;
			set title(value: string);
			get quickReplies(): string[];
			set quickReplies(value: string[]);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): QuickReplies.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): QuickReplies.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): QuickReplies.AsProtobufJSON;
		}
		module QuickReplies {
			/**
			 * Standard JavaScript object representation for QuickReplies
			 */
			interface AsObject {
				title: string;
				quickReplies: string[];
			}
			/**
			 * Protobuf JSON representation for QuickReplies
			 */
			interface AsProtobufJSON {
				title: string;
				quickReplies: string[];
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Card
		 */
		class Card implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Card;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Card): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Card, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Card, _writer: BinaryWriter): void;
			private _title;
			private _subtitle;
			private _imageUri;
			private _buttons?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Card to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Card.AsObject>);
			get title(): string;
			set title(value: string);
			get subtitle(): string;
			set subtitle(value: string);
			get imageUri(): string;
			set imageUri(value: string);
			get buttons(): Intent.Message.Card.Button[] | undefined;
			set buttons(value: Intent.Message.Card.Button[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Card.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Card.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Card.AsProtobufJSON;
		}
		module Card {
			/**
			 * Standard JavaScript object representation for Card
			 */
			interface AsObject {
				title: string;
				subtitle: string;
				imageUri: string;
				buttons?: Intent.Message.Card.Button.AsObject[];
			}
			/**
			 * Protobuf JSON representation for Card
			 */
			interface AsProtobufJSON {
				title: string;
				subtitle: string;
				imageUri: string;
				buttons: Intent.Message.Card.Button.AsProtobufJSON[] | null;
			}
			/**
			 * Message implementation for ondewo.nlu.Intent.Message.Card.Button
			 */
			class Button implements GrpcMessage {
				static id: string;
				/**
				 * Deserialize binary data to message
				 * @param instance message instance
				 */
				static deserializeBinary(bytes: ByteSource): Button;
				/**
				 * Check all the properties and set default protobuf values if necessary
				 * @param _instance message instance
				 */
				static refineValues(_instance: Button): void;
				/**
				 * Deserializes / reads binary message into message instance using provided binary reader
				 * @param _instance message instance
				 * @param _reader binary reader instance
				 */
				static deserializeBinaryFromReader(_instance: Button, _reader: BinaryReader): void;
				/**
				 * Serializes a message to binary format using provided binary reader
				 * @param _instance message instance
				 * @param _writer binary writer instance
				 */
				static serializeBinaryToWriter(_instance: Button, _writer: BinaryWriter): void;
				private _text;
				private _postback;
				/**
				 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
				 * @param _value initial values object or instance of Button to deeply clone from
				 */
				constructor(_value?: RecursivePartial<Button.AsObject>);
				get text(): string;
				set text(value: string);
				get postback(): string;
				set postback(value: string);
				/**
				 * Serialize message to binary data
				 * @param instance message instance
				 */
				serializeBinary(): any;
				/**
				 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
				 */
				toObject(): Button.AsObject;
				/**
				 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
				 */
				toJSON(): Button.AsObject;
				/**
				 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
				 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
				 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
				 */
				toProtobufJSON(options?: ToProtobufJSONOptions): Button.AsProtobufJSON;
			}
			module Button {
				/**
				 * Standard JavaScript object representation for Button
				 */
				interface AsObject {
					text: string;
					postback: string;
				}
				/**
				 * Protobuf JSON representation for Button
				 */
				interface AsProtobufJSON {
					text: string;
					postback: string;
				}
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.SimpleResponse
		 */
		class SimpleResponse implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): SimpleResponse;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: SimpleResponse): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: SimpleResponse, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: SimpleResponse, _writer: BinaryWriter): void;
			private _textToSpeech;
			private _ssml;
			private _displayText;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of SimpleResponse to deeply clone from
			 */
			constructor(_value?: RecursivePartial<SimpleResponse.AsObject>);
			get textToSpeech(): string;
			set textToSpeech(value: string);
			get ssml(): string;
			set ssml(value: string);
			get displayText(): string;
			set displayText(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): SimpleResponse.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): SimpleResponse.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): SimpleResponse.AsProtobufJSON;
		}
		module SimpleResponse {
			/**
			 * Standard JavaScript object representation for SimpleResponse
			 */
			interface AsObject {
				textToSpeech: string;
				ssml: string;
				displayText: string;
			}
			/**
			 * Protobuf JSON representation for SimpleResponse
			 */
			interface AsProtobufJSON {
				textToSpeech: string;
				ssml: string;
				displayText: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.SimpleResponses
		 */
		class SimpleResponses implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): SimpleResponses;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: SimpleResponses): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: SimpleResponses, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: SimpleResponses, _writer: BinaryWriter): void;
			private _simpleResponses?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of SimpleResponses to deeply clone from
			 */
			constructor(_value?: RecursivePartial<SimpleResponses.AsObject>);
			get simpleResponses(): Intent.Message.SimpleResponse[] | undefined;
			set simpleResponses(value: Intent.Message.SimpleResponse[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): SimpleResponses.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): SimpleResponses.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): SimpleResponses.AsProtobufJSON;
		}
		module SimpleResponses {
			/**
			 * Standard JavaScript object representation for SimpleResponses
			 */
			interface AsObject {
				simpleResponses?: Intent.Message.SimpleResponse.AsObject[];
			}
			/**
			 * Protobuf JSON representation for SimpleResponses
			 */
			interface AsProtobufJSON {
				simpleResponses: Intent.Message.SimpleResponse.AsProtobufJSON[] | null;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.BasicCard
		 */
		class BasicCard implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): BasicCard;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: BasicCard): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: BasicCard, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: BasicCard, _writer: BinaryWriter): void;
			private _title;
			private _subtitle;
			private _formattedText;
			private _image?;
			private _buttons?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of BasicCard to deeply clone from
			 */
			constructor(_value?: RecursivePartial<BasicCard.AsObject>);
			get title(): string;
			set title(value: string);
			get subtitle(): string;
			set subtitle(value: string);
			get formattedText(): string;
			set formattedText(value: string);
			get image(): Intent.Message.Image | undefined;
			set image(value: Intent.Message.Image | undefined);
			get buttons(): Intent.Message.BasicCard.Button[] | undefined;
			set buttons(value: Intent.Message.BasicCard.Button[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): BasicCard.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): BasicCard.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): BasicCard.AsProtobufJSON;
		}
		module BasicCard {
			/**
			 * Standard JavaScript object representation for BasicCard
			 */
			interface AsObject {
				title: string;
				subtitle: string;
				formattedText: string;
				image?: Intent.Message.Image.AsObject;
				buttons?: Intent.Message.BasicCard.Button.AsObject[];
			}
			/**
			 * Protobuf JSON representation for BasicCard
			 */
			interface AsProtobufJSON {
				title: string;
				subtitle: string;
				formattedText: string;
				image: Intent.Message.Image.AsProtobufJSON | null;
				buttons: Intent.Message.BasicCard.Button.AsProtobufJSON[] | null;
			}
			/**
			 * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button
			 */
			class Button implements GrpcMessage {
				static id: string;
				/**
				 * Deserialize binary data to message
				 * @param instance message instance
				 */
				static deserializeBinary(bytes: ByteSource): Button;
				/**
				 * Check all the properties and set default protobuf values if necessary
				 * @param _instance message instance
				 */
				static refineValues(_instance: Button): void;
				/**
				 * Deserializes / reads binary message into message instance using provided binary reader
				 * @param _instance message instance
				 * @param _reader binary reader instance
				 */
				static deserializeBinaryFromReader(_instance: Button, _reader: BinaryReader): void;
				/**
				 * Serializes a message to binary format using provided binary reader
				 * @param _instance message instance
				 * @param _writer binary writer instance
				 */
				static serializeBinaryToWriter(_instance: Button, _writer: BinaryWriter): void;
				private _title;
				private _openUriAction?;
				/**
				 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
				 * @param _value initial values object or instance of Button to deeply clone from
				 */
				constructor(_value?: RecursivePartial<Button.AsObject>);
				get title(): string;
				set title(value: string);
				get openUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
				set openUriAction(value: Intent.Message.BasicCard.Button.OpenUriAction | undefined);
				/**
				 * Serialize message to binary data
				 * @param instance message instance
				 */
				serializeBinary(): any;
				/**
				 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
				 */
				toObject(): Button.AsObject;
				/**
				 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
				 */
				toJSON(): Button.AsObject;
				/**
				 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
				 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
				 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
				 */
				toProtobufJSON(options?: ToProtobufJSONOptions): Button.AsProtobufJSON;
			}
			module Button {
				/**
				 * Standard JavaScript object representation for Button
				 */
				interface AsObject {
					title: string;
					openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject;
				}
				/**
				 * Protobuf JSON representation for Button
				 */
				interface AsProtobufJSON {
					title: string;
					openUriAction: Intent.Message.BasicCard.Button.OpenUriAction.AsProtobufJSON | null;
				}
				/**
				 * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction
				 */
				class OpenUriAction implements GrpcMessage {
					static id: string;
					/**
					 * Deserialize binary data to message
					 * @param instance message instance
					 */
					static deserializeBinary(bytes: ByteSource): OpenUriAction;
					/**
					 * Check all the properties and set default protobuf values if necessary
					 * @param _instance message instance
					 */
					static refineValues(_instance: OpenUriAction): void;
					/**
					 * Deserializes / reads binary message into message instance using provided binary reader
					 * @param _instance message instance
					 * @param _reader binary reader instance
					 */
					static deserializeBinaryFromReader(_instance: OpenUriAction, _reader: BinaryReader): void;
					/**
					 * Serializes a message to binary format using provided binary reader
					 * @param _instance message instance
					 * @param _writer binary writer instance
					 */
					static serializeBinaryToWriter(_instance: OpenUriAction, _writer: BinaryWriter): void;
					private _uri;
					/**
					 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
					 * @param _value initial values object or instance of OpenUriAction to deeply clone from
					 */
					constructor(_value?: RecursivePartial<OpenUriAction.AsObject>);
					get uri(): string;
					set uri(value: string);
					/**
					 * Serialize message to binary data
					 * @param instance message instance
					 */
					serializeBinary(): any;
					/**
					 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
					 */
					toObject(): OpenUriAction.AsObject;
					/**
					 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
					 */
					toJSON(): OpenUriAction.AsObject;
					/**
					 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
					 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
					 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
					 */
					toProtobufJSON(options?: ToProtobufJSONOptions): OpenUriAction.AsProtobufJSON;
				}
				module OpenUriAction {
					/**
					 * Standard JavaScript object representation for OpenUriAction
					 */
					interface AsObject {
						uri: string;
					}
					/**
					 * Protobuf JSON representation for OpenUriAction
					 */
					interface AsProtobufJSON {
						uri: string;
					}
				}
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Suggestion
		 */
		class Suggestion implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Suggestion;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Suggestion): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Suggestion, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Suggestion, _writer: BinaryWriter): void;
			private _title;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Suggestion to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Suggestion.AsObject>);
			get title(): string;
			set title(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Suggestion.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Suggestion.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Suggestion.AsProtobufJSON;
		}
		module Suggestion {
			/**
			 * Standard JavaScript object representation for Suggestion
			 */
			interface AsObject {
				title: string;
			}
			/**
			 * Protobuf JSON representation for Suggestion
			 */
			interface AsProtobufJSON {
				title: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Suggestions
		 */
		class Suggestions implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Suggestions;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Suggestions): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Suggestions, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Suggestions, _writer: BinaryWriter): void;
			private _suggestions?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Suggestions to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Suggestions.AsObject>);
			get suggestions(): Intent.Message.Suggestion[] | undefined;
			set suggestions(value: Intent.Message.Suggestion[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Suggestions.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Suggestions.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Suggestions.AsProtobufJSON;
		}
		module Suggestions {
			/**
			 * Standard JavaScript object representation for Suggestions
			 */
			interface AsObject {
				suggestions?: Intent.Message.Suggestion.AsObject[];
			}
			/**
			 * Protobuf JSON representation for Suggestions
			 */
			interface AsProtobufJSON {
				suggestions: Intent.Message.Suggestion.AsProtobufJSON[] | null;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.LinkOutSuggestion
		 */
		class LinkOutSuggestion implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): LinkOutSuggestion;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: LinkOutSuggestion): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: LinkOutSuggestion, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: LinkOutSuggestion, _writer: BinaryWriter): void;
			private _destinationName;
			private _uri;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of LinkOutSuggestion to deeply clone from
			 */
			constructor(_value?: RecursivePartial<LinkOutSuggestion.AsObject>);
			get destinationName(): string;
			set destinationName(value: string);
			get uri(): string;
			set uri(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): LinkOutSuggestion.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): LinkOutSuggestion.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): LinkOutSuggestion.AsProtobufJSON;
		}
		module LinkOutSuggestion {
			/**
			 * Standard JavaScript object representation for LinkOutSuggestion
			 */
			interface AsObject {
				destinationName: string;
				uri: string;
			}
			/**
			 * Protobuf JSON representation for LinkOutSuggestion
			 */
			interface AsProtobufJSON {
				destinationName: string;
				uri: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.ListSelect
		 */
		class ListSelect implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): ListSelect;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: ListSelect): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: ListSelect, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: ListSelect, _writer: BinaryWriter): void;
			private _title;
			private _items?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of ListSelect to deeply clone from
			 */
			constructor(_value?: RecursivePartial<ListSelect.AsObject>);
			get title(): string;
			set title(value: string);
			get items(): Intent.Message.ListSelect.Item[] | undefined;
			set items(value: Intent.Message.ListSelect.Item[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): ListSelect.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): ListSelect.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): ListSelect.AsProtobufJSON;
		}
		module ListSelect {
			/**
			 * Standard JavaScript object representation for ListSelect
			 */
			interface AsObject {
				title: string;
				items?: Intent.Message.ListSelect.Item.AsObject[];
			}
			/**
			 * Protobuf JSON representation for ListSelect
			 */
			interface AsProtobufJSON {
				title: string;
				items: Intent.Message.ListSelect.Item.AsProtobufJSON[] | null;
			}
			/**
			 * Message implementation for ondewo.nlu.Intent.Message.ListSelect.Item
			 */
			class Item implements GrpcMessage {
				static id: string;
				/**
				 * Deserialize binary data to message
				 * @param instance message instance
				 */
				static deserializeBinary(bytes: ByteSource): Item;
				/**
				 * Check all the properties and set default protobuf values if necessary
				 * @param _instance message instance
				 */
				static refineValues(_instance: Item): void;
				/**
				 * Deserializes / reads binary message into message instance using provided binary reader
				 * @param _instance message instance
				 * @param _reader binary reader instance
				 */
				static deserializeBinaryFromReader(_instance: Item, _reader: BinaryReader): void;
				/**
				 * Serializes a message to binary format using provided binary reader
				 * @param _instance message instance
				 * @param _writer binary writer instance
				 */
				static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter): void;
				private _info?;
				private _title;
				private _description;
				private _image?;
				/**
				 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
				 * @param _value initial values object or instance of Item to deeply clone from
				 */
				constructor(_value?: RecursivePartial<Item.AsObject>);
				get info(): Intent.Message.SelectItemInfo | undefined;
				set info(value: Intent.Message.SelectItemInfo | undefined);
				get title(): string;
				set title(value: string);
				get description(): string;
				set description(value: string);
				get image(): Intent.Message.Image | undefined;
				set image(value: Intent.Message.Image | undefined);
				/**
				 * Serialize message to binary data
				 * @param instance message instance
				 */
				serializeBinary(): any;
				/**
				 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
				 */
				toObject(): Item.AsObject;
				/**
				 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
				 */
				toJSON(): Item.AsObject;
				/**
				 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
				 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
				 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
				 */
				toProtobufJSON(options?: ToProtobufJSONOptions): Item.AsProtobufJSON;
			}
			module Item {
				/**
				 * Standard JavaScript object representation for Item
				 */
				interface AsObject {
					info?: Intent.Message.SelectItemInfo.AsObject;
					title: string;
					description: string;
					image?: Intent.Message.Image.AsObject;
				}
				/**
				 * Protobuf JSON representation for Item
				 */
				interface AsProtobufJSON {
					info: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
					title: string;
					description: string;
					image: Intent.Message.Image.AsProtobufJSON | null;
				}
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect
		 */
		class CarouselSelect implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): CarouselSelect;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: CarouselSelect): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: CarouselSelect, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: CarouselSelect, _writer: BinaryWriter): void;
			private _items?;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of CarouselSelect to deeply clone from
			 */
			constructor(_value?: RecursivePartial<CarouselSelect.AsObject>);
			get items(): Intent.Message.CarouselSelect.Item[] | undefined;
			set items(value: Intent.Message.CarouselSelect.Item[] | undefined);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): CarouselSelect.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): CarouselSelect.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): CarouselSelect.AsProtobufJSON;
		}
		module CarouselSelect {
			/**
			 * Standard JavaScript object representation for CarouselSelect
			 */
			interface AsObject {
				items?: Intent.Message.CarouselSelect.Item.AsObject[];
			}
			/**
			 * Protobuf JSON representation for CarouselSelect
			 */
			interface AsProtobufJSON {
				items: Intent.Message.CarouselSelect.Item.AsProtobufJSON[] | null;
			}
			/**
			 * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect.Item
			 */
			class Item implements GrpcMessage {
				static id: string;
				/**
				 * Deserialize binary data to message
				 * @param instance message instance
				 */
				static deserializeBinary(bytes: ByteSource): Item;
				/**
				 * Check all the properties and set default protobuf values if necessary
				 * @param _instance message instance
				 */
				static refineValues(_instance: Item): void;
				/**
				 * Deserializes / reads binary message into message instance using provided binary reader
				 * @param _instance message instance
				 * @param _reader binary reader instance
				 */
				static deserializeBinaryFromReader(_instance: Item, _reader: BinaryReader): void;
				/**
				 * Serializes a message to binary format using provided binary reader
				 * @param _instance message instance
				 * @param _writer binary writer instance
				 */
				static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter): void;
				private _info?;
				private _title;
				private _description;
				private _image?;
				/**
				 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
				 * @param _value initial values object or instance of Item to deeply clone from
				 */
				constructor(_value?: RecursivePartial<Item.AsObject>);
				get info(): Intent.Message.SelectItemInfo | undefined;
				set info(value: Intent.Message.SelectItemInfo | undefined);
				get title(): string;
				set title(value: string);
				get description(): string;
				set description(value: string);
				get image(): Intent.Message.Image | undefined;
				set image(value: Intent.Message.Image | undefined);
				/**
				 * Serialize message to binary data
				 * @param instance message instance
				 */
				serializeBinary(): any;
				/**
				 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
				 */
				toObject(): Item.AsObject;
				/**
				 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
				 */
				toJSON(): Item.AsObject;
				/**
				 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
				 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
				 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
				 */
				toProtobufJSON(options?: ToProtobufJSONOptions): Item.AsProtobufJSON;
			}
			module Item {
				/**
				 * Standard JavaScript object representation for Item
				 */
				interface AsObject {
					info?: Intent.Message.SelectItemInfo.AsObject;
					title: string;
					description: string;
					image?: Intent.Message.Image.AsObject;
				}
				/**
				 * Protobuf JSON representation for Item
				 */
				interface AsProtobufJSON {
					info: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
					title: string;
					description: string;
					image: Intent.Message.Image.AsProtobufJSON | null;
				}
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.HTMLText
		 */
		class HTMLText implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): HTMLText;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: HTMLText): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: HTMLText, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: HTMLText, _writer: BinaryWriter): void;
			private _text;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of HTMLText to deeply clone from
			 */
			constructor(_value?: RecursivePartial<HTMLText.AsObject>);
			get text(): string[];
			set text(value: string[]);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): HTMLText.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): HTMLText.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): HTMLText.AsProtobufJSON;
		}
		module HTMLText {
			/**
			 * Standard JavaScript object representation for HTMLText
			 */
			interface AsObject {
				text: string[];
			}
			/**
			 * Protobuf JSON representation for HTMLText
			 */
			interface AsProtobufJSON {
				text: string[];
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Video
		 */
		class Video implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Video;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Video): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Video, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Video, _writer: BinaryWriter): void;
			private _uri;
			private _accessibilityText;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Video to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Video.AsObject>);
			get uri(): string;
			set uri(value: string);
			get accessibilityText(): string;
			set accessibilityText(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Video.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Video.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Video.AsProtobufJSON;
		}
		module Video {
			/**
			 * Standard JavaScript object representation for Video
			 */
			interface AsObject {
				uri: string;
				accessibilityText: string;
			}
			/**
			 * Protobuf JSON representation for Video
			 */
			interface AsProtobufJSON {
				uri: string;
				accessibilityText: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.Audio
		 */
		class Audio implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): Audio;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: Audio): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: Audio, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: Audio, _writer: BinaryWriter): void;
			private _uri;
			private _accessibilityText;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of Audio to deeply clone from
			 */
			constructor(_value?: RecursivePartial<Audio.AsObject>);
			get uri(): string;
			set uri(value: string);
			get accessibilityText(): string;
			set accessibilityText(value: string);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): Audio.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): Audio.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): Audio.AsProtobufJSON;
		}
		module Audio {
			/**
			 * Standard JavaScript object representation for Audio
			 */
			interface AsObject {
				uri: string;
				accessibilityText: string;
			}
			/**
			 * Protobuf JSON representation for Audio
			 */
			interface AsProtobufJSON {
				uri: string;
				accessibilityText: string;
			}
		}
		/**
		 * Message implementation for ondewo.nlu.Intent.Message.SelectItemInfo
		 */
		class SelectItemInfo implements GrpcMessage {
			static id: string;
			/**
			 * Deserialize binary data to message
			 * @param instance message instance
			 */
			static deserializeBinary(bytes: ByteSource): SelectItemInfo;
			/**
			 * Check all the properties and set default protobuf values if necessary
			 * @param _instance message instance
			 */
			static refineValues(_instance: SelectItemInfo): void;
			/**
			 * Deserializes / reads binary message into message instance using provided binary reader
			 * @param _instance message instance
			 * @param _reader binary reader instance
			 */
			static deserializeBinaryFromReader(_instance: SelectItemInfo, _reader: BinaryReader): void;
			/**
			 * Serializes a message to binary format using provided binary reader
			 * @param _instance message instance
			 * @param _writer binary writer instance
			 */
			static serializeBinaryToWriter(_instance: SelectItemInfo, _writer: BinaryWriter): void;
			private _key;
			private _synonyms;
			/**
			 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
			 * @param _value initial values object or instance of SelectItemInfo to deeply clone from
			 */
			constructor(_value?: RecursivePartial<SelectItemInfo.AsObject>);
			get key(): string;
			set key(value: string);
			get synonyms(): string[];
			set synonyms(value: string[]);
			/**
			 * Serialize message to binary data
			 * @param instance message instance
			 */
			serializeBinary(): any;
			/**
			 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
			 */
			toObject(): SelectItemInfo.AsObject;
			/**
			 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
			 */
			toJSON(): SelectItemInfo.AsObject;
			/**
			 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
			 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
			 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
			 */
			toProtobufJSON(options?: ToProtobufJSONOptions): SelectItemInfo.AsProtobufJSON;
		}
		module SelectItemInfo {
			/**
			 * Standard JavaScript object representation for SelectItemInfo
			 */
			interface AsObject {
				key: string;
				synonyms: string[];
			}
			/**
			 * Protobuf JSON representation for SelectItemInfo
			 */
			interface AsProtobufJSON {
				key: string;
				synonyms: string[];
			}
		}
	}
	/**
	 * Message implementation for ondewo.nlu.Intent.FollowupIntentInfo
	 */
	class FollowupIntentInfo implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): FollowupIntentInfo;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: FollowupIntentInfo): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: FollowupIntentInfo, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: FollowupIntentInfo, _writer: BinaryWriter): void;
		private _followupIntentName;
		private _parentFollowupIntentName;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of FollowupIntentInfo to deeply clone from
		 */
		constructor(_value?: RecursivePartial<FollowupIntentInfo.AsObject>);
		get followupIntentName(): string;
		set followupIntentName(value: string);
		get parentFollowupIntentName(): string;
		set parentFollowupIntentName(value: string);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): FollowupIntentInfo.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): FollowupIntentInfo.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): FollowupIntentInfo.AsProtobufJSON;
	}
	module FollowupIntentInfo {
		/**
		 * Standard JavaScript object representation for FollowupIntentInfo
		 */
		interface AsObject {
			followupIntentName: string;
			parentFollowupIntentName: string;
		}
		/**
		 * Protobuf JSON representation for FollowupIntentInfo
		 */
		interface AsProtobufJSON {
			followupIntentName: string;
			parentFollowupIntentName: string;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.ListIntentsRequest
 */
export declare class ListIntentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListIntentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListIntentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListIntentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListIntentsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _languageCode;
	private _intentView;
	private _pageToken;
	private _filterByCategory;
	private _sortByField?;
	private _filterByTags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIntentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListIntentsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get intentView(): IntentView;
	set intentView(value: IntentView);
	get pageToken(): string;
	set pageToken(value: string);
	get filterByCategory(): IntentCategory;
	set filterByCategory(value: IntentCategory);
	get sortByField(): IntentSorting | undefined;
	set sortByField(value: IntentSorting | undefined);
	get filterByTags(): string[];
	set filterByTags(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListIntentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListIntentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListIntentsRequest.AsProtobufJSON;
}
export declare module ListIntentsRequest {
	/**
	 * Standard JavaScript object representation for ListIntentsRequest
	 */
	interface AsObject {
		parent: string;
		languageCode: string;
		intentView: IntentView;
		pageToken: string;
		filterByCategory: IntentCategory;
		sortByField?: IntentSorting.AsObject;
		filterByTags: string[];
	}
	/**
	 * Protobuf JSON representation for ListIntentsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		languageCode: string;
		intentView: string;
		pageToken: string;
		filterByCategory: string;
		sortByField: IntentSorting.AsProtobufJSON | null;
		filterByTags: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.ListIntentsResponse
 */
export declare class ListIntentsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListIntentsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListIntentsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListIntentsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListIntentsResponse, _writer: BinaryWriter): void;
	private _intents?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListIntentsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListIntentsResponse.AsObject>);
	get intents(): Intent[] | undefined;
	set intents(value: Intent[] | undefined);
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
	toObject(): ListIntentsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListIntentsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListIntentsResponse.AsProtobufJSON;
}
export declare module ListIntentsResponse {
	/**
	 * Standard JavaScript object representation for ListIntentsResponse
	 */
	interface AsObject {
		intents?: Intent.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListIntentsResponse
	 */
	interface AsProtobufJSON {
		intents: Intent.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetIntentRequest
 */
export declare class GetIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetIntentRequest, _writer: BinaryWriter): void;
	private _name;
	private _languageCode;
	private _intentView;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetIntentRequest.AsObject>);
	get name(): string;
	set name(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get intentView(): IntentView;
	set intentView(value: IntentView);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetIntentRequest.AsProtobufJSON;
}
export declare module GetIntentRequest {
	/**
	 * Standard JavaScript object representation for GetIntentRequest
	 */
	interface AsObject {
		name: string;
		languageCode: string;
		intentView: IntentView;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for GetIntentRequest
	 */
	interface AsProtobufJSON {
		name: string;
		languageCode: string;
		intentView: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.CreateIntentRequest
 */
export declare class CreateIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): CreateIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: CreateIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: CreateIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: CreateIntentRequest, _writer: BinaryWriter): void;
	private _parent;
	private _intent?;
	private _languageCode;
	private _intentView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of CreateIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<CreateIntentRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get intent(): Intent | undefined;
	set intent(value: Intent | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	get intentView(): IntentView;
	set intentView(value: IntentView);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): CreateIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): CreateIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): CreateIntentRequest.AsProtobufJSON;
}
export declare module CreateIntentRequest {
	/**
	 * Standard JavaScript object representation for CreateIntentRequest
	 */
	interface AsObject {
		parent: string;
		intent?: Intent.AsObject;
		languageCode: string;
		intentView: IntentView;
	}
	/**
	 * Protobuf JSON representation for CreateIntentRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		intent: Intent.AsProtobufJSON | null;
		languageCode: string;
		intentView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.UpdateIntentRequest
 */
export declare class UpdateIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): UpdateIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: UpdateIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: UpdateIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: UpdateIntentRequest, _writer: BinaryWriter): void;
	private _intent?;
	private _languageCode;
	private _updateMask?;
	private _intentView;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of UpdateIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<UpdateIntentRequest.AsObject>);
	get intent(): Intent | undefined;
	set intent(value: Intent | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	get updateMask(): googleProtobuf004.FieldMask | undefined;
	set updateMask(value: googleProtobuf004.FieldMask | undefined);
	get intentView(): IntentView;
	set intentView(value: IntentView);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): UpdateIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): UpdateIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): UpdateIntentRequest.AsProtobufJSON;
}
export declare module UpdateIntentRequest {
	/**
	 * Standard JavaScript object representation for UpdateIntentRequest
	 */
	interface AsObject {
		intent?: Intent.AsObject;
		languageCode: string;
		updateMask?: googleProtobuf004.FieldMask.AsObject;
		intentView: IntentView;
	}
	/**
	 * Protobuf JSON representation for UpdateIntentRequest
	 */
	interface AsProtobufJSON {
		intent: Intent.AsProtobufJSON | null;
		languageCode: string;
		updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
		intentView: string;
	}
}
/**
 * Message implementation for ondewo.nlu.DeleteIntentRequest
 */
export declare class DeleteIntentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): DeleteIntentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: DeleteIntentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: DeleteIntentRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: DeleteIntentRequest, _writer: BinaryWriter): void;
	private _name;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of DeleteIntentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<DeleteIntentRequest.AsObject>);
	get name(): string;
	set name(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): DeleteIntentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): DeleteIntentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): DeleteIntentRequest.AsProtobufJSON;
}
export declare module DeleteIntentRequest {
	/**
	 * Standard JavaScript object representation for DeleteIntentRequest
	 */
	interface AsObject {
		name: string;
	}
	/**
	 * Protobuf JSON representation for DeleteIntentRequest
	 */
	interface AsProtobufJSON {
		name: string;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsRequest
 */
export declare class BatchUpdateIntentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchUpdateIntentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchUpdateIntentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchUpdateIntentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchUpdateIntentsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _intentBatchUri;
	private _intentBatchInline?;
	private _languageCode;
	private _updateMask?;
	private _intentView;
	private _intentBatch;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchUpdateIntentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchUpdateIntentsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get intentBatchUri(): string;
	set intentBatchUri(value: string);
	get intentBatchInline(): IntentBatch | undefined;
	set intentBatchInline(value: IntentBatch | undefined);
	get languageCode(): string;
	set languageCode(value: string);
	get updateMask(): googleProtobuf004.FieldMask | undefined;
	set updateMask(value: googleProtobuf004.FieldMask | undefined);
	get intentView(): IntentView;
	set intentView(value: IntentView);
	get intentBatch(): BatchUpdateIntentsRequest.IntentBatchCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchUpdateIntentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchUpdateIntentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateIntentsRequest.AsProtobufJSON;
}
export declare module BatchUpdateIntentsRequest {
	/**
	 * Standard JavaScript object representation for BatchUpdateIntentsRequest
	 */
	interface AsObject {
		parent: string;
		intentBatchUri: string;
		intentBatchInline?: IntentBatch.AsObject;
		languageCode: string;
		updateMask?: googleProtobuf004.FieldMask.AsObject;
		intentView: IntentView;
	}
	/**
	 * Protobuf JSON representation for BatchUpdateIntentsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		intentBatchUri: string | null;
		intentBatchInline: IntentBatch.AsProtobufJSON | null;
		languageCode: string;
		updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
		intentView: string;
	}
	enum IntentBatchCase {
		none = 0,
		intentBatchUri = 1,
		intentBatchInline = 2
	}
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsResponse
 */
export declare class BatchUpdateIntentsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchUpdateIntentsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchUpdateIntentsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchUpdateIntentsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchUpdateIntentsResponse, _writer: BinaryWriter): void;
	private _intents?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchUpdateIntentsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchUpdateIntentsResponse.AsObject>);
	get intents(): Intent[] | undefined;
	set intents(value: Intent[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchUpdateIntentsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchUpdateIntentsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateIntentsResponse.AsProtobufJSON;
}
export declare module BatchUpdateIntentsResponse {
	/**
	 * Standard JavaScript object representation for BatchUpdateIntentsResponse
	 */
	interface AsObject {
		intents?: Intent.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchUpdateIntentsResponse
	 */
	interface AsProtobufJSON {
		intents: Intent.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteIntentsRequest
 */
export declare class BatchDeleteIntentsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteIntentsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteIntentsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteIntentsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteIntentsRequest, _writer: BinaryWriter): void;
	private _parent;
	private _intents?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteIntentsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteIntentsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get intents(): Intent[] | undefined;
	set intents(value: Intent[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteIntentsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteIntentsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteIntentsRequest.AsProtobufJSON;
}
export declare module BatchDeleteIntentsRequest {
	/**
	 * Standard JavaScript object representation for BatchDeleteIntentsRequest
	 */
	interface AsObject {
		parent: string;
		intents?: Intent.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchDeleteIntentsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		intents: Intent.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.IntentBatch
 */
export declare class IntentBatch implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): IntentBatch;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: IntentBatch): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: IntentBatch, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: IntentBatch, _writer: BinaryWriter): void;
	private _intents?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of IntentBatch to deeply clone from
	 */
	constructor(_value?: RecursivePartial<IntentBatch.AsObject>);
	get intents(): Intent[] | undefined;
	set intents(value: Intent[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): IntentBatch.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): IntentBatch.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): IntentBatch.AsProtobufJSON;
}
export declare module IntentBatch {
	/**
	 * Standard JavaScript object representation for IntentBatch
	 */
	interface AsObject {
		intents?: Intent.AsObject[];
	}
	/**
	 * Protobuf JSON representation for IntentBatch
	 */
	interface AsProtobufJSON {
		intents: Intent.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.IntentSorting
 */
export declare class IntentSorting implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): IntentSorting;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: IntentSorting): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: IntentSorting, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: IntentSorting, _writer: BinaryWriter): void;
	private _sortingField;
	private _sortingMode;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of IntentSorting to deeply clone from
	 */
	constructor(_value?: RecursivePartial<IntentSorting.AsObject>);
	get sortingField(): IntentSorting.IntentSortingField;
	set sortingField(value: IntentSorting.IntentSortingField);
	get sortingMode(): ondewoNlu010.SortingMode;
	set sortingMode(value: ondewoNlu010.SortingMode);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): IntentSorting.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): IntentSorting.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): IntentSorting.AsProtobufJSON;
}
export declare module IntentSorting {
	/**
	 * Standard JavaScript object representation for IntentSorting
	 */
	interface AsObject {
		sortingField: IntentSorting.IntentSortingField;
		sortingMode: ondewoNlu010.SortingMode;
	}
	/**
	 * Protobuf JSON representation for IntentSorting
	 */
	interface AsProtobufJSON {
		sortingField: string;
		sortingMode: string;
	}
	enum IntentSortingField {
		NO_INTENT_SORTING = 0,
		SORT_INTENT_BY_NAME = 1,
		SORT_INTENT_BY_CREATION_DATE = 2,
		SORT_INTENT_BY_LAST_UPDATED = 3,
		SORT_INTENT_BY_USERSAYS_COUNT = 4,
		SORT_INTENT_BY_START_DATE = 5,
		SORT_INTENT_BY_END_DATE = 6
	}
}
/**
 * Message implementation for ondewo.nlu.IntentTagRequest
 */
export declare class IntentTagRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): IntentTagRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: IntentTagRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: IntentTagRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: IntentTagRequest, _writer: BinaryWriter): void;
	private _intentName;
	private _tags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of IntentTagRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<IntentTagRequest.AsObject>);
	get intentName(): string;
	set intentName(value: string);
	get tags(): string[];
	set tags(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): IntentTagRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): IntentTagRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): IntentTagRequest.AsProtobufJSON;
}
export declare module IntentTagRequest {
	/**
	 * Standard JavaScript object representation for IntentTagRequest
	 */
	interface AsObject {
		intentName: string;
		tags: string[];
	}
	/**
	 * Protobuf JSON representation for IntentTagRequest
	 */
	interface AsProtobufJSON {
		intentName: string;
		tags: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.GetIntentTagsRequest
 */
export declare class GetIntentTagsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetIntentTagsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetIntentTagsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetIntentTagsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetIntentTagsRequest, _writer: BinaryWriter): void;
	private _intentName;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetIntentTagsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetIntentTagsRequest.AsObject>);
	get intentName(): string;
	set intentName(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetIntentTagsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetIntentTagsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetIntentTagsRequest.AsProtobufJSON;
}
export declare module GetIntentTagsRequest {
	/**
	 * Standard JavaScript object representation for GetIntentTagsRequest
	 */
	interface AsObject {
		intentName: string;
	}
	/**
	 * Protobuf JSON representation for GetIntentTagsRequest
	 */
	interface AsProtobufJSON {
		intentName: string;
	}
}
/**
 * Message implementation for ondewo.nlu.GetIntentTagsResponse
 */
export declare class GetIntentTagsResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetIntentTagsResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetIntentTagsResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetIntentTagsResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetIntentTagsResponse, _writer: BinaryWriter): void;
	private _intentTags;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetIntentTagsResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetIntentTagsResponse.AsObject>);
	get intentTags(): string[];
	set intentTags(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetIntentTagsResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetIntentTagsResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetIntentTagsResponse.AsProtobufJSON;
}
export declare module GetIntentTagsResponse {
	/**
	 * Standard JavaScript object representation for GetIntentTagsResponse
	 */
	interface AsObject {
		intentTags: string[];
	}
	/**
	 * Protobuf JSON representation for GetIntentTagsResponse
	 */
	interface AsProtobufJSON {
		intentTags: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.GetAllIntentTagsRequest
 */
export declare class GetAllIntentTagsRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): GetAllIntentTagsRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: GetAllIntentTagsRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: GetAllIntentTagsRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: GetAllIntentTagsRequest, _writer: BinaryWriter): void;
	private _parent;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of GetAllIntentTagsRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<GetAllIntentTagsRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): GetAllIntentTagsRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): GetAllIntentTagsRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): GetAllIntentTagsRequest.AsProtobufJSON;
}
export declare module GetAllIntentTagsRequest {
	/**
	 * Standard JavaScript object representation for GetAllIntentTagsRequest
	 */
	interface AsObject {
		parent: string;
	}
	/**
	 * Protobuf JSON representation for GetAllIntentTagsRequest
	 */
	interface AsProtobufJSON {
		parent: string;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateTrainingPhrasesRequest
 */
export declare class BatchUpdateTrainingPhrasesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchUpdateTrainingPhrasesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchUpdateTrainingPhrasesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchUpdateTrainingPhrasesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchUpdateTrainingPhrasesRequest, _writer: BinaryWriter): void;
	private _trainingPhrases?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchUpdateTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchUpdateTrainingPhrasesRequest.AsObject>);
	get trainingPhrases(): Intent.TrainingPhrase[] | undefined;
	set trainingPhrases(value: Intent.TrainingPhrase[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchUpdateTrainingPhrasesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchUpdateTrainingPhrasesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module BatchUpdateTrainingPhrasesRequest {
	/**
	 * Standard JavaScript object representation for BatchUpdateTrainingPhrasesRequest
	 */
	interface AsObject {
		trainingPhrases?: Intent.TrainingPhrase.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchUpdateTrainingPhrasesRequest
	 */
	interface AsProtobufJSON {
		trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.TrainingPhraseStatus
 */
export declare class TrainingPhraseStatus implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): TrainingPhraseStatus;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: TrainingPhraseStatus): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: TrainingPhraseStatus, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: TrainingPhraseStatus, _writer: BinaryWriter): void;
	private _trainingPhrase?;
	private _errorMessage;
	private _phraseOrStatus;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of TrainingPhraseStatus to deeply clone from
	 */
	constructor(_value?: RecursivePartial<TrainingPhraseStatus.AsObject>);
	get trainingPhrase(): Intent.TrainingPhrase | undefined;
	set trainingPhrase(value: Intent.TrainingPhrase | undefined);
	get errorMessage(): string;
	set errorMessage(value: string);
	get phraseOrStatus(): TrainingPhraseStatus.PhraseOrStatusCase;
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): TrainingPhraseStatus.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): TrainingPhraseStatus.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhraseStatus.AsProtobufJSON;
}
export declare module TrainingPhraseStatus {
	/**
	 * Standard JavaScript object representation for TrainingPhraseStatus
	 */
	interface AsObject {
		trainingPhrase?: Intent.TrainingPhrase.AsObject;
		errorMessage: string;
	}
	/**
	 * Protobuf JSON representation for TrainingPhraseStatus
	 */
	interface AsProtobufJSON {
		trainingPhrase: Intent.TrainingPhrase.AsProtobufJSON | null;
		errorMessage: string | null;
	}
	enum PhraseOrStatusCase {
		none = 0,
		trainingPhrase = 1,
		errorMessage = 2
	}
}
/**
 * Message implementation for ondewo.nlu.BatchTrainingPhrasesStatusResponse
 */
export declare class BatchTrainingPhrasesStatusResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchTrainingPhrasesStatusResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchTrainingPhrasesStatusResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchTrainingPhrasesStatusResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchTrainingPhrasesStatusResponse, _writer: BinaryWriter): void;
	private _trainingPhraseStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchTrainingPhrasesStatusResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchTrainingPhrasesStatusResponse.AsObject>);
	get trainingPhraseStatuses(): TrainingPhraseStatus[] | undefined;
	set trainingPhraseStatuses(value: TrainingPhraseStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchTrainingPhrasesStatusResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchTrainingPhrasesStatusResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchTrainingPhrasesStatusResponse.AsProtobufJSON;
}
export declare module BatchTrainingPhrasesStatusResponse {
	/**
	 * Standard JavaScript object representation for BatchTrainingPhrasesStatusResponse
	 */
	interface AsObject {
		trainingPhraseStatuses?: TrainingPhraseStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchTrainingPhrasesStatusResponse
	 */
	interface AsProtobufJSON {
		trainingPhraseStatuses: TrainingPhraseStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest
 */
export declare class BatchCreateTrainingPhrasesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchCreateTrainingPhrasesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchCreateTrainingPhrasesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchCreateTrainingPhrasesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchCreateTrainingPhrasesRequest, _writer: BinaryWriter): void;
	private _trainingPhraseRequests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchCreateTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchCreateTrainingPhrasesRequest.AsObject>);
	get trainingPhraseRequests(): BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest[] | undefined;
	set trainingPhraseRequests(value: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchCreateTrainingPhrasesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchCreateTrainingPhrasesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchCreateTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module BatchCreateTrainingPhrasesRequest {
	/**
	 * Standard JavaScript object representation for BatchCreateTrainingPhrasesRequest
	 */
	interface AsObject {
		trainingPhraseRequests?: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchCreateTrainingPhrasesRequest
	 */
	interface AsProtobufJSON {
		trainingPhraseRequests: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest.AsProtobufJSON[] | null;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
	 */
	class CreateTrainingPhraseRequest implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): CreateTrainingPhraseRequest;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: CreateTrainingPhraseRequest): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: CreateTrainingPhraseRequest, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: CreateTrainingPhraseRequest, _writer: BinaryWriter): void;
		private _intentName;
		private _trainingPhrase?;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of CreateTrainingPhraseRequest to deeply clone from
		 */
		constructor(_value?: RecursivePartial<CreateTrainingPhraseRequest.AsObject>);
		get intentName(): string;
		set intentName(value: string);
		get trainingPhrase(): Intent.TrainingPhrase | undefined;
		set trainingPhrase(value: Intent.TrainingPhrase | undefined);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): CreateTrainingPhraseRequest.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): CreateTrainingPhraseRequest.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): CreateTrainingPhraseRequest.AsProtobufJSON;
	}
	module CreateTrainingPhraseRequest {
		/**
		 * Standard JavaScript object representation for CreateTrainingPhraseRequest
		 */
		interface AsObject {
			intentName: string;
			trainingPhrase?: Intent.TrainingPhrase.AsObject;
		}
		/**
		 * Protobuf JSON representation for CreateTrainingPhraseRequest
		 */
		interface AsProtobufJSON {
			intentName: string;
			trainingPhrase: Intent.TrainingPhrase.AsProtobufJSON | null;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.BatchGetTrainingPhrasesRequest
 */
export declare class BatchGetTrainingPhrasesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchGetTrainingPhrasesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchGetTrainingPhrasesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchGetTrainingPhrasesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchGetTrainingPhrasesRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchGetTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchGetTrainingPhrasesRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchGetTrainingPhrasesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchGetTrainingPhrasesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchGetTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module BatchGetTrainingPhrasesRequest {
	/**
	 * Standard JavaScript object representation for BatchGetTrainingPhrasesRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchGetTrainingPhrasesRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesRequest
 */
export declare class BatchDeleteTrainingPhrasesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteTrainingPhrasesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteTrainingPhrasesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteTrainingPhrasesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteTrainingPhrasesRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteTrainingPhrasesRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteTrainingPhrasesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteTrainingPhrasesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module BatchDeleteTrainingPhrasesRequest {
	/**
	 * Standard JavaScript object representation for BatchDeleteTrainingPhrasesRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchDeleteTrainingPhrasesRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse
 */
export declare class BatchDeleteTrainingPhrasesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteTrainingPhrasesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteTrainingPhrasesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteTrainingPhrasesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteTrainingPhrasesResponse, _writer: BinaryWriter): void;
	private _deleteStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteTrainingPhrasesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteTrainingPhrasesResponse.AsObject>);
	get deleteStatuses(): BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus[] | undefined;
	set deleteStatuses(value: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteTrainingPhrasesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteTrainingPhrasesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteTrainingPhrasesResponse.AsProtobufJSON;
}
export declare module BatchDeleteTrainingPhrasesResponse {
	/**
	 * Standard JavaScript object representation for BatchDeleteTrainingPhrasesResponse
	 */
	interface AsObject {
		deleteStatuses?: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchDeleteTrainingPhrasesResponse
	 */
	interface AsProtobufJSON {
		deleteStatuses: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
	 */
	class DeleteTrainingPhraseStatus implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): DeleteTrainingPhraseStatus;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: DeleteTrainingPhraseStatus): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: DeleteTrainingPhraseStatus, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: DeleteTrainingPhraseStatus, _writer: BinaryWriter): void;
		private _successfullyDeleted?;
		private _errorMessage;
		private _deleteStatus;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of DeleteTrainingPhraseStatus to deeply clone from
		 */
		constructor(_value?: RecursivePartial<DeleteTrainingPhraseStatus.AsObject>);
		get successfullyDeleted(): googleProtobuf003.Empty | undefined;
		set successfullyDeleted(value: googleProtobuf003.Empty | undefined);
		get errorMessage(): string;
		set errorMessage(value: string);
		get deleteStatus(): DeleteTrainingPhraseStatus.DeleteStatusCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): DeleteTrainingPhraseStatus.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): DeleteTrainingPhraseStatus.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): DeleteTrainingPhraseStatus.AsProtobufJSON;
	}
	module DeleteTrainingPhraseStatus {
		/**
		 * Standard JavaScript object representation for DeleteTrainingPhraseStatus
		 */
		interface AsObject {
			successfullyDeleted?: googleProtobuf003.Empty.AsObject;
			errorMessage: string;
		}
		/**
		 * Protobuf JSON representation for DeleteTrainingPhraseStatus
		 */
		interface AsProtobufJSON {
			successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
			errorMessage: string | null;
		}
		enum DeleteStatusCase {
			none = 0,
			successfullyDeleted = 1,
			errorMessage = 2
		}
	}
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesRequest
 */
export declare class ListTrainingPhrasesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTrainingPhrasesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTrainingPhrasesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListTrainingPhrasesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListTrainingPhrasesRequest, _writer: BinaryWriter): void;
	private _intentName;
	private _languageCode;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTrainingPhrasesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTrainingPhrasesRequest.AsObject>);
	get intentName(): string;
	set intentName(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListTrainingPhrasesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTrainingPhrasesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTrainingPhrasesRequest.AsProtobufJSON;
}
export declare module ListTrainingPhrasesRequest {
	/**
	 * Standard JavaScript object representation for ListTrainingPhrasesRequest
	 */
	interface AsObject {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListTrainingPhrasesRequest
	 */
	interface AsProtobufJSON {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesResponse
 */
export declare class ListTrainingPhrasesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTrainingPhrasesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTrainingPhrasesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListTrainingPhrasesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListTrainingPhrasesResponse, _writer: BinaryWriter): void;
	private _trainingPhrases?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTrainingPhrasesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTrainingPhrasesResponse.AsObject>);
	get trainingPhrases(): Intent.TrainingPhrase[] | undefined;
	set trainingPhrases(value: Intent.TrainingPhrase[] | undefined);
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
	toObject(): ListTrainingPhrasesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTrainingPhrasesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTrainingPhrasesResponse.AsProtobufJSON;
}
export declare module ListTrainingPhrasesResponse {
	/**
	 * Standard JavaScript object representation for ListTrainingPhrasesResponse
	 */
	interface AsObject {
		trainingPhrases?: Intent.TrainingPhrase.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListTrainingPhrasesResponse
	 */
	interface AsProtobufJSON {
		trainingPhrases: Intent.TrainingPhrase.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse
 */
export declare class BatchResponseMessagesStatusResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchResponseMessagesStatusResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchResponseMessagesStatusResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchResponseMessagesStatusResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchResponseMessagesStatusResponse, _writer: BinaryWriter): void;
	private _responseMessageStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchResponseMessagesStatusResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchResponseMessagesStatusResponse.AsObject>);
	get responseMessageStatuses(): BatchResponseMessagesStatusResponse.ResponseMessageStatus[] | undefined;
	set responseMessageStatuses(value: BatchResponseMessagesStatusResponse.ResponseMessageStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchResponseMessagesStatusResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchResponseMessagesStatusResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchResponseMessagesStatusResponse.AsProtobufJSON;
}
export declare module BatchResponseMessagesStatusResponse {
	/**
	 * Standard JavaScript object representation for BatchResponseMessagesStatusResponse
	 */
	interface AsObject {
		responseMessageStatuses?: BatchResponseMessagesStatusResponse.ResponseMessageStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchResponseMessagesStatusResponse
	 */
	interface AsProtobufJSON {
		responseMessageStatuses: BatchResponseMessagesStatusResponse.ResponseMessageStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus
	 */
	class ResponseMessageStatus implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): ResponseMessageStatus;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: ResponseMessageStatus): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: ResponseMessageStatus, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: ResponseMessageStatus, _writer: BinaryWriter): void;
		private _responseMessage?;
		private _errorMessage;
		private _phraseOrStatus;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ResponseMessageStatus to deeply clone from
		 */
		constructor(_value?: RecursivePartial<ResponseMessageStatus.AsObject>);
		get responseMessage(): Intent.Message | undefined;
		set responseMessage(value: Intent.Message | undefined);
		get errorMessage(): string;
		set errorMessage(value: string);
		get phraseOrStatus(): ResponseMessageStatus.PhraseOrStatusCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): ResponseMessageStatus.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): ResponseMessageStatus.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): ResponseMessageStatus.AsProtobufJSON;
	}
	module ResponseMessageStatus {
		/**
		 * Standard JavaScript object representation for ResponseMessageStatus
		 */
		interface AsObject {
			responseMessage?: Intent.Message.AsObject;
			errorMessage: string;
		}
		/**
		 * Protobuf JSON representation for ResponseMessageStatus
		 */
		interface AsProtobufJSON {
			responseMessage: Intent.Message.AsProtobufJSON | null;
			errorMessage: string | null;
		}
		enum PhraseOrStatusCase {
			none = 0,
			responseMessage = 1,
			errorMessage = 2
		}
	}
}
/**
 * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest
 */
export declare class BatchCreateResponseMessagesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchCreateResponseMessagesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchCreateResponseMessagesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchCreateResponseMessagesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchCreateResponseMessagesRequest, _writer: BinaryWriter): void;
	private _responseMessageRequests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchCreateResponseMessagesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchCreateResponseMessagesRequest.AsObject>);
	get responseMessageRequests(): BatchCreateResponseMessagesRequest.CreateResponseMessageRequest[] | undefined;
	set responseMessageRequests(value: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchCreateResponseMessagesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchCreateResponseMessagesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchCreateResponseMessagesRequest.AsProtobufJSON;
}
export declare module BatchCreateResponseMessagesRequest {
	/**
	 * Standard JavaScript object representation for BatchCreateResponseMessagesRequest
	 */
	interface AsObject {
		responseMessageRequests?: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchCreateResponseMessagesRequest
	 */
	interface AsProtobufJSON {
		responseMessageRequests: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest.AsProtobufJSON[] | null;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
	 */
	class CreateResponseMessageRequest implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): CreateResponseMessageRequest;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: CreateResponseMessageRequest): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: CreateResponseMessageRequest, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: CreateResponseMessageRequest, _writer: BinaryWriter): void;
		private _intentName;
		private _responseMessage?;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of CreateResponseMessageRequest to deeply clone from
		 */
		constructor(_value?: RecursivePartial<CreateResponseMessageRequest.AsObject>);
		get intentName(): string;
		set intentName(value: string);
		get responseMessage(): Intent.Message | undefined;
		set responseMessage(value: Intent.Message | undefined);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): CreateResponseMessageRequest.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): CreateResponseMessageRequest.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): CreateResponseMessageRequest.AsProtobufJSON;
	}
	module CreateResponseMessageRequest {
		/**
		 * Standard JavaScript object representation for CreateResponseMessageRequest
		 */
		interface AsObject {
			intentName: string;
			responseMessage?: Intent.Message.AsObject;
		}
		/**
		 * Protobuf JSON representation for CreateResponseMessageRequest
		 */
		interface AsProtobufJSON {
			intentName: string;
			responseMessage: Intent.Message.AsProtobufJSON | null;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateResponseMessagesRequest
 */
export declare class BatchUpdateResponseMessagesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchUpdateResponseMessagesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchUpdateResponseMessagesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchUpdateResponseMessagesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchUpdateResponseMessagesRequest, _writer: BinaryWriter): void;
	private _responseMessages?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchUpdateResponseMessagesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchUpdateResponseMessagesRequest.AsObject>);
	get responseMessages(): Intent.Message[] | undefined;
	set responseMessages(value: Intent.Message[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchUpdateResponseMessagesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchUpdateResponseMessagesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateResponseMessagesRequest.AsProtobufJSON;
}
export declare module BatchUpdateResponseMessagesRequest {
	/**
	 * Standard JavaScript object representation for BatchUpdateResponseMessagesRequest
	 */
	interface AsObject {
		responseMessages?: Intent.Message.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchUpdateResponseMessagesRequest
	 */
	interface AsProtobufJSON {
		responseMessages: Intent.Message.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchGetResponseMessagesRequest
 */
export declare class BatchGetResponseMessagesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchGetResponseMessagesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchGetResponseMessagesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchGetResponseMessagesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchGetResponseMessagesRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchGetResponseMessagesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchGetResponseMessagesRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchGetResponseMessagesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchGetResponseMessagesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchGetResponseMessagesRequest.AsProtobufJSON;
}
export declare module BatchGetResponseMessagesRequest {
	/**
	 * Standard JavaScript object representation for BatchGetResponseMessagesRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchGetResponseMessagesRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesRequest
 */
export declare class BatchDeleteResponseMessagesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteResponseMessagesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteResponseMessagesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteResponseMessagesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteResponseMessagesRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteResponseMessagesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteResponseMessagesRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteResponseMessagesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteResponseMessagesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteResponseMessagesRequest.AsProtobufJSON;
}
export declare module BatchDeleteResponseMessagesRequest {
	/**
	 * Standard JavaScript object representation for BatchDeleteResponseMessagesRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchDeleteResponseMessagesRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse
 */
export declare class BatchDeleteResponseMessagesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteResponseMessagesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteResponseMessagesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteResponseMessagesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteResponseMessagesResponse, _writer: BinaryWriter): void;
	private _deleteStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteResponseMessagesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteResponseMessagesResponse.AsObject>);
	get deleteStatuses(): BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus[] | undefined;
	set deleteStatuses(value: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteResponseMessagesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteResponseMessagesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteResponseMessagesResponse.AsProtobufJSON;
}
export declare module BatchDeleteResponseMessagesResponse {
	/**
	 * Standard JavaScript object representation for BatchDeleteResponseMessagesResponse
	 */
	interface AsObject {
		deleteStatuses?: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchDeleteResponseMessagesResponse
	 */
	interface AsProtobufJSON {
		deleteStatuses: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
	 */
	class DeleteResponseMessageStatus implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): DeleteResponseMessageStatus;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: DeleteResponseMessageStatus): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: DeleteResponseMessageStatus, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: DeleteResponseMessageStatus, _writer: BinaryWriter): void;
		private _successfullyDeleted?;
		private _errorMessage;
		private _deleteStatus;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of DeleteResponseMessageStatus to deeply clone from
		 */
		constructor(_value?: RecursivePartial<DeleteResponseMessageStatus.AsObject>);
		get successfullyDeleted(): googleProtobuf003.Empty | undefined;
		set successfullyDeleted(value: googleProtobuf003.Empty | undefined);
		get errorMessage(): string;
		set errorMessage(value: string);
		get deleteStatus(): DeleteResponseMessageStatus.DeleteStatusCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): DeleteResponseMessageStatus.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): DeleteResponseMessageStatus.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): DeleteResponseMessageStatus.AsProtobufJSON;
	}
	module DeleteResponseMessageStatus {
		/**
		 * Standard JavaScript object representation for DeleteResponseMessageStatus
		 */
		interface AsObject {
			successfullyDeleted?: googleProtobuf003.Empty.AsObject;
			errorMessage: string;
		}
		/**
		 * Protobuf JSON representation for DeleteResponseMessageStatus
		 */
		interface AsProtobufJSON {
			successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
			errorMessage: string | null;
		}
		enum DeleteStatusCase {
			none = 0,
			successfullyDeleted = 1,
			errorMessage = 2
		}
	}
}
/**
 * Message implementation for ondewo.nlu.ListResponseMessagesRequest
 */
export declare class ListResponseMessagesRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListResponseMessagesRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListResponseMessagesRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListResponseMessagesRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListResponseMessagesRequest, _writer: BinaryWriter): void;
	private _intentName;
	private _languageCode;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListResponseMessagesRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListResponseMessagesRequest.AsObject>);
	get intentName(): string;
	set intentName(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListResponseMessagesRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListResponseMessagesRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListResponseMessagesRequest.AsProtobufJSON;
}
export declare module ListResponseMessagesRequest {
	/**
	 * Standard JavaScript object representation for ListResponseMessagesRequest
	 */
	interface AsObject {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListResponseMessagesRequest
	 */
	interface AsProtobufJSON {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListResponseMessagesResponse
 */
export declare class ListResponseMessagesResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListResponseMessagesResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListResponseMessagesResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListResponseMessagesResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListResponseMessagesResponse, _writer: BinaryWriter): void;
	private _responseMessages?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListResponseMessagesResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListResponseMessagesResponse.AsObject>);
	get responseMessages(): Intent.Message[] | undefined;
	set responseMessages(value: Intent.Message[] | undefined);
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
	toObject(): ListResponseMessagesResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListResponseMessagesResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListResponseMessagesResponse.AsProtobufJSON;
}
export declare module ListResponseMessagesResponse {
	/**
	 * Standard JavaScript object representation for ListResponseMessagesResponse
	 */
	interface AsObject {
		responseMessages?: Intent.Message.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListResponseMessagesResponse
	 */
	interface AsProtobufJSON {
		responseMessages: Intent.Message.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchParametersStatusResponse
 */
export declare class BatchParametersStatusResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchParametersStatusResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchParametersStatusResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchParametersStatusResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchParametersStatusResponse, _writer: BinaryWriter): void;
	private _parameterStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchParametersStatusResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchParametersStatusResponse.AsObject>);
	get parameterStatuses(): BatchParametersStatusResponse.ParameterStatus[] | undefined;
	set parameterStatuses(value: BatchParametersStatusResponse.ParameterStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchParametersStatusResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchParametersStatusResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchParametersStatusResponse.AsProtobufJSON;
}
export declare module BatchParametersStatusResponse {
	/**
	 * Standard JavaScript object representation for BatchParametersStatusResponse
	 */
	interface AsObject {
		parameterStatuses?: BatchParametersStatusResponse.ParameterStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchParametersStatusResponse
	 */
	interface AsProtobufJSON {
		parameterStatuses: BatchParametersStatusResponse.ParameterStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchParametersStatusResponse.ParameterStatus
	 */
	class ParameterStatus implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): ParameterStatus;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: ParameterStatus): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: ParameterStatus, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: ParameterStatus, _writer: BinaryWriter): void;
		private _parameter?;
		private _errorMessage;
		private _phraseOrStatus;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of ParameterStatus to deeply clone from
		 */
		constructor(_value?: RecursivePartial<ParameterStatus.AsObject>);
		get parameter(): Intent.Parameter | undefined;
		set parameter(value: Intent.Parameter | undefined);
		get errorMessage(): string;
		set errorMessage(value: string);
		get phraseOrStatus(): ParameterStatus.PhraseOrStatusCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): ParameterStatus.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): ParameterStatus.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): ParameterStatus.AsProtobufJSON;
	}
	module ParameterStatus {
		/**
		 * Standard JavaScript object representation for ParameterStatus
		 */
		interface AsObject {
			parameter?: Intent.Parameter.AsObject;
			errorMessage: string;
		}
		/**
		 * Protobuf JSON representation for ParameterStatus
		 */
		interface AsProtobufJSON {
			parameter: Intent.Parameter.AsProtobufJSON | null;
			errorMessage: string | null;
		}
		enum PhraseOrStatusCase {
			none = 0,
			parameter = 1,
			errorMessage = 2
		}
	}
}
/**
 * Message implementation for ondewo.nlu.BatchCreateParametersRequest
 */
export declare class BatchCreateParametersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchCreateParametersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchCreateParametersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchCreateParametersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchCreateParametersRequest, _writer: BinaryWriter): void;
	private _parameterRequests?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchCreateParametersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchCreateParametersRequest.AsObject>);
	get parameterRequests(): BatchCreateParametersRequest.CreateParameterRequest[] | undefined;
	set parameterRequests(value: BatchCreateParametersRequest.CreateParameterRequest[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchCreateParametersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchCreateParametersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchCreateParametersRequest.AsProtobufJSON;
}
export declare module BatchCreateParametersRequest {
	/**
	 * Standard JavaScript object representation for BatchCreateParametersRequest
	 */
	interface AsObject {
		parameterRequests?: BatchCreateParametersRequest.CreateParameterRequest.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchCreateParametersRequest
	 */
	interface AsProtobufJSON {
		parameterRequests: BatchCreateParametersRequest.CreateParameterRequest.AsProtobufJSON[] | null;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest
	 */
	class CreateParameterRequest implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): CreateParameterRequest;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: CreateParameterRequest): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: CreateParameterRequest, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: CreateParameterRequest, _writer: BinaryWriter): void;
		private _intentName;
		private _parameter?;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of CreateParameterRequest to deeply clone from
		 */
		constructor(_value?: RecursivePartial<CreateParameterRequest.AsObject>);
		get intentName(): string;
		set intentName(value: string);
		get parameter(): Intent.Parameter | undefined;
		set parameter(value: Intent.Parameter | undefined);
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): CreateParameterRequest.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): CreateParameterRequest.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): CreateParameterRequest.AsProtobufJSON;
	}
	module CreateParameterRequest {
		/**
		 * Standard JavaScript object representation for CreateParameterRequest
		 */
		interface AsObject {
			intentName: string;
			parameter?: Intent.Parameter.AsObject;
		}
		/**
		 * Protobuf JSON representation for CreateParameterRequest
		 */
		interface AsProtobufJSON {
			intentName: string;
			parameter: Intent.Parameter.AsProtobufJSON | null;
		}
	}
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateParametersRequest
 */
export declare class BatchUpdateParametersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchUpdateParametersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchUpdateParametersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchUpdateParametersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchUpdateParametersRequest, _writer: BinaryWriter): void;
	private _parameters?;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchUpdateParametersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchUpdateParametersRequest.AsObject>);
	get parameters(): Intent.Parameter[] | undefined;
	set parameters(value: Intent.Parameter[] | undefined);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchUpdateParametersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchUpdateParametersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateParametersRequest.AsProtobufJSON;
}
export declare module BatchUpdateParametersRequest {
	/**
	 * Standard JavaScript object representation for BatchUpdateParametersRequest
	 */
	interface AsObject {
		parameters?: Intent.Parameter.AsObject[];
	}
	/**
	 * Protobuf JSON representation for BatchUpdateParametersRequest
	 */
	interface AsProtobufJSON {
		parameters: Intent.Parameter.AsProtobufJSON[] | null;
	}
}
/**
 * Message implementation for ondewo.nlu.BatchGetParametersRequest
 */
export declare class BatchGetParametersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchGetParametersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchGetParametersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchGetParametersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchGetParametersRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchGetParametersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchGetParametersRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchGetParametersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchGetParametersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchGetParametersRequest.AsProtobufJSON;
}
export declare module BatchGetParametersRequest {
	/**
	 * Standard JavaScript object representation for BatchGetParametersRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchGetParametersRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersRequest
 */
export declare class BatchDeleteParametersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteParametersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteParametersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteParametersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteParametersRequest, _writer: BinaryWriter): void;
	private _names;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteParametersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteParametersRequest.AsObject>);
	get names(): string[];
	set names(value: string[]);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteParametersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteParametersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteParametersRequest.AsProtobufJSON;
}
export declare module BatchDeleteParametersRequest {
	/**
	 * Standard JavaScript object representation for BatchDeleteParametersRequest
	 */
	interface AsObject {
		names: string[];
	}
	/**
	 * Protobuf JSON representation for BatchDeleteParametersRequest
	 */
	interface AsProtobufJSON {
		names: string[];
	}
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersResponse
 */
export declare class BatchDeleteParametersResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): BatchDeleteParametersResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: BatchDeleteParametersResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: BatchDeleteParametersResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: BatchDeleteParametersResponse, _writer: BinaryWriter): void;
	private _deleteStatuses?;
	private _hasErrors;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of BatchDeleteParametersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<BatchDeleteParametersResponse.AsObject>);
	get deleteStatuses(): BatchDeleteParametersResponse.DeleteParameterStatus[] | undefined;
	set deleteStatuses(value: BatchDeleteParametersResponse.DeleteParameterStatus[] | undefined);
	get hasErrors(): boolean;
	set hasErrors(value: boolean);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): BatchDeleteParametersResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): BatchDeleteParametersResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteParametersResponse.AsProtobufJSON;
}
export declare module BatchDeleteParametersResponse {
	/**
	 * Standard JavaScript object representation for BatchDeleteParametersResponse
	 */
	interface AsObject {
		deleteStatuses?: BatchDeleteParametersResponse.DeleteParameterStatus.AsObject[];
		hasErrors: boolean;
	}
	/**
	 * Protobuf JSON representation for BatchDeleteParametersResponse
	 */
	interface AsProtobufJSON {
		deleteStatuses: BatchDeleteParametersResponse.DeleteParameterStatus.AsProtobufJSON[] | null;
		hasErrors: boolean;
	}
	/**
	 * Message implementation for ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus
	 */
	class DeleteParameterStatus implements GrpcMessage {
		static id: string;
		/**
		 * Deserialize binary data to message
		 * @param instance message instance
		 */
		static deserializeBinary(bytes: ByteSource): DeleteParameterStatus;
		/**
		 * Check all the properties and set default protobuf values if necessary
		 * @param _instance message instance
		 */
		static refineValues(_instance: DeleteParameterStatus): void;
		/**
		 * Deserializes / reads binary message into message instance using provided binary reader
		 * @param _instance message instance
		 * @param _reader binary reader instance
		 */
		static deserializeBinaryFromReader(_instance: DeleteParameterStatus, _reader: BinaryReader): void;
		/**
		 * Serializes a message to binary format using provided binary reader
		 * @param _instance message instance
		 * @param _writer binary writer instance
		 */
		static serializeBinaryToWriter(_instance: DeleteParameterStatus, _writer: BinaryWriter): void;
		private _successfullyDeleted?;
		private _errorMessage;
		private _deleteStatus;
		/**
		 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
		 * @param _value initial values object or instance of DeleteParameterStatus to deeply clone from
		 */
		constructor(_value?: RecursivePartial<DeleteParameterStatus.AsObject>);
		get successfullyDeleted(): googleProtobuf003.Empty | undefined;
		set successfullyDeleted(value: googleProtobuf003.Empty | undefined);
		get errorMessage(): string;
		set errorMessage(value: string);
		get deleteStatus(): DeleteParameterStatus.DeleteStatusCase;
		/**
		 * Serialize message to binary data
		 * @param instance message instance
		 */
		serializeBinary(): any;
		/**
		 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
		 */
		toObject(): DeleteParameterStatus.AsObject;
		/**
		 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
		 */
		toJSON(): DeleteParameterStatus.AsObject;
		/**
		 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
		 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
		 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
		 */
		toProtobufJSON(options?: ToProtobufJSONOptions): DeleteParameterStatus.AsProtobufJSON;
	}
	module DeleteParameterStatus {
		/**
		 * Standard JavaScript object representation for DeleteParameterStatus
		 */
		interface AsObject {
			successfullyDeleted?: googleProtobuf003.Empty.AsObject;
			errorMessage: string;
		}
		/**
		 * Protobuf JSON representation for DeleteParameterStatus
		 */
		interface AsProtobufJSON {
			successfullyDeleted: googleProtobuf003.Empty.AsProtobufJSON | null;
			errorMessage: string | null;
		}
		enum DeleteStatusCase {
			none = 0,
			successfullyDeleted = 1,
			errorMessage = 2
		}
	}
}
/**
 * Message implementation for ondewo.nlu.ListParametersRequest
 */
export declare class ListParametersRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListParametersRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListParametersRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListParametersRequest, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListParametersRequest, _writer: BinaryWriter): void;
	private _intentName;
	private _languageCode;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListParametersRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListParametersRequest.AsObject>);
	get intentName(): string;
	set intentName(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListParametersRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListParametersRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListParametersRequest.AsProtobufJSON;
}
export declare module ListParametersRequest {
	/**
	 * Standard JavaScript object representation for ListParametersRequest
	 */
	interface AsObject {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListParametersRequest
	 */
	interface AsProtobufJSON {
		intentName: string;
		languageCode: string;
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListParametersResponse
 */
export declare class ListParametersResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListParametersResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListParametersResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(_instance: ListParametersResponse, _reader: BinaryReader): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(_instance: ListParametersResponse, _writer: BinaryWriter): void;
	private _parameters?;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListParametersResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListParametersResponse.AsObject>);
	get parameters(): Intent.Parameter[] | undefined;
	set parameters(value: Intent.Parameter[] | undefined);
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
	toObject(): ListParametersResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListParametersResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListParametersResponse.AsProtobufJSON;
}
export declare module ListParametersResponse {
	/**
	 * Standard JavaScript object representation for ListParametersResponse
	 */
	interface AsObject {
		parameters?: Intent.Parameter.AsObject[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListParametersResponse
	 */
	interface AsProtobufJSON {
		parameters: Intent.Parameter.AsProtobufJSON[] | null;
		nextPageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest
 */
export declare class ListTrainingPhrasesofIntentsWithEnrichmentRequest implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(
		_instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		_reader: BinaryReader
	): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(
		_instance: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		_writer: BinaryWriter
	): void;
	private _parent;
	private _languageCode;
	private _intentIds;
	private _pageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentRequest to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject>);
	get parent(): string;
	set parent(value: string);
	get languageCode(): string;
	set languageCode(value: string);
	get intentIds(): string[];
	set intentIds(value: string[]);
	get pageToken(): string;
	set pageToken(value: string);
	/**
	 * Serialize message to binary data
	 * @param instance message instance
	 */
	serializeBinary(): any;
	/**
	 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
	 */
	toObject(): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsProtobufJSON;
}
export declare module ListTrainingPhrasesofIntentsWithEnrichmentRequest {
	/**
	 * Standard JavaScript object representation for ListTrainingPhrasesofIntentsWithEnrichmentRequest
	 */
	interface AsObject {
		parent: string;
		languageCode: string;
		intentIds: string[];
		pageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListTrainingPhrasesofIntentsWithEnrichmentRequest
	 */
	interface AsProtobufJSON {
		parent: string;
		languageCode: string;
		intentIds: string[];
		pageToken: string;
	}
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse
 */
export declare class ListTrainingPhrasesofIntentsWithEnrichmentResponse implements GrpcMessage {
	static id: string;
	/**
	 * Deserialize binary data to message
	 * @param instance message instance
	 */
	static deserializeBinary(bytes: ByteSource): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
	/**
	 * Check all the properties and set default protobuf values if necessary
	 * @param _instance message instance
	 */
	static refineValues(_instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse): void;
	/**
	 * Deserializes / reads binary message into message instance using provided binary reader
	 * @param _instance message instance
	 * @param _reader binary reader instance
	 */
	static deserializeBinaryFromReader(
		_instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		_reader: BinaryReader
	): void;
	/**
	 * Serializes a message to binary format using provided binary reader
	 * @param _instance message instance
	 * @param _writer binary writer instance
	 */
	static serializeBinaryToWriter(
		_instance: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		_writer: BinaryWriter
	): void;
	private _trainingPhrases;
	private _nextPageToken;
	/**
	 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
	 * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentResponse to deeply clone from
	 */
	constructor(_value?: RecursivePartial<ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject>);
	get trainingPhrases(): string[];
	set trainingPhrases(value: string[]);
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
	toObject(): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject;
	/**
	 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
	 */
	toJSON(): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject;
	/**
	 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
	 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
	 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
	 */
	toProtobufJSON(options?: ToProtobufJSONOptions): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsProtobufJSON;
}
export declare module ListTrainingPhrasesofIntentsWithEnrichmentResponse {
	/**
	 * Standard JavaScript object representation for ListTrainingPhrasesofIntentsWithEnrichmentResponse
	 */
	interface AsObject {
		trainingPhrases: string[];
		nextPageToken: string;
	}
	/**
	 * Protobuf JSON representation for ListTrainingPhrasesofIntentsWithEnrichmentResponse
	 */
	interface AsProtobufJSON {
		trainingPhrases: string[];
		nextPageToken: string;
	}
}
