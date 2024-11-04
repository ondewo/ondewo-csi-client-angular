import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.OperationMetadata
 */
export class OperationMetadata {
    static { this.id = 'ondewo.nlu.OperationMetadata'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new OperationMetadata();
        OperationMetadata.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.status = _instance.status || 0;
        _instance.parentOperationName = _instance.parentOperationName || '';
        _instance.subOperationNames = _instance.subOperationNames || [];
        _instance.createTime = _instance.createTime || undefined;
        _instance.startTime = _instance.startTime || undefined;
        _instance.endTime = _instance.endTime || undefined;
        _instance.isCancellationRequested =
            _instance.isCancellationRequested || false;
        _instance.cancelCommand = _instance.cancelCommand || '';
        _instance.userIdCreated = _instance.userIdCreated || '';
        _instance.userIdCancelled = _instance.userIdCancelled || '';
        _instance.projectParent = _instance.projectParent || '';
        _instance.operationType = _instance.operationType || 0;
        _instance.hostName = _instance.hostName || '';
        _instance.numReruns = _instance.numReruns || 0;
        _instance.maxNumReruns = _instance.maxNumReruns || 0;
        _instance.description = _instance.description || '';
        _instance.log = _instance.log || [];
        _instance.logLimit = _instance.logLimit || 0;
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
                    _instance.status = _reader.readEnum();
                    break;
                case 2:
                    _instance.parentOperationName = _reader.readString();
                    break;
                case 3:
                    (_instance.subOperationNames =
                        _instance.subOperationNames || []).push(_reader.readString());
                    break;
                case 4:
                    _instance.createTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.createTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.startTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.startTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.endTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.endTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.isCancellationRequested = _reader.readBool();
                    break;
                case 8:
                    _instance.cancelCommand = _reader.readString();
                    break;
                case 9:
                    _instance.userIdCreated = _reader.readString();
                    break;
                case 10:
                    _instance.userIdCancelled = _reader.readString();
                    break;
                case 11:
                    _instance.projectParent = _reader.readString();
                    break;
                case 12:
                    _instance.operationType = _reader.readEnum();
                    break;
                case 13:
                    _instance.hostName = _reader.readString();
                    break;
                case 14:
                    _instance.numReruns = _reader.readInt32();
                    break;
                case 15:
                    _instance.maxNumReruns = _reader.readInt32();
                    break;
                case 16:
                    _instance.description = _reader.readString();
                    break;
                case 17:
                    (_instance.log = _instance.log || []).push(_reader.readString());
                    break;
                case 18:
                    _instance.logLimit = _reader.readInt32();
                    break;
                case 19:
                    _instance.createdAt = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.createdAt, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 20:
                    _instance.modifiedAt = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.modifiedAt, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
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
        OperationMetadata.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.status) {
            _writer.writeEnum(1, _instance.status);
        }
        if (_instance.parentOperationName) {
            _writer.writeString(2, _instance.parentOperationName);
        }
        if (_instance.subOperationNames && _instance.subOperationNames.length) {
            _writer.writeRepeatedString(3, _instance.subOperationNames);
        }
        if (_instance.createTime) {
            _writer.writeMessage(4, _instance.createTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.startTime) {
            _writer.writeMessage(5, _instance.startTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.endTime) {
            _writer.writeMessage(6, _instance.endTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.isCancellationRequested) {
            _writer.writeBool(7, _instance.isCancellationRequested);
        }
        if (_instance.cancelCommand) {
            _writer.writeString(8, _instance.cancelCommand);
        }
        if (_instance.userIdCreated) {
            _writer.writeString(9, _instance.userIdCreated);
        }
        if (_instance.userIdCancelled) {
            _writer.writeString(10, _instance.userIdCancelled);
        }
        if (_instance.projectParent) {
            _writer.writeString(11, _instance.projectParent);
        }
        if (_instance.operationType) {
            _writer.writeEnum(12, _instance.operationType);
        }
        if (_instance.hostName) {
            _writer.writeString(13, _instance.hostName);
        }
        if (_instance.numReruns) {
            _writer.writeInt32(14, _instance.numReruns);
        }
        if (_instance.maxNumReruns) {
            _writer.writeInt32(15, _instance.maxNumReruns);
        }
        if (_instance.description) {
            _writer.writeString(16, _instance.description);
        }
        if (_instance.log && _instance.log.length) {
            _writer.writeRepeatedString(17, _instance.log);
        }
        if (_instance.logLimit) {
            _writer.writeInt32(18, _instance.logLimit);
        }
        if (_instance.createdAt) {
            _writer.writeMessage(19, _instance.createdAt, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.modifiedAt) {
            _writer.writeMessage(20, _instance.modifiedAt, googleProtobuf000.Timestamp.serializeBinaryToWriter);
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
     * @param _value initial values object or instance of OperationMetadata to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.status = _value.status;
        this.parentOperationName = _value.parentOperationName;
        this.subOperationNames = (_value.subOperationNames || []).slice();
        this.createTime = _value.createTime
            ? new googleProtobuf000.Timestamp(_value.createTime)
            : undefined;
        this.startTime = _value.startTime
            ? new googleProtobuf000.Timestamp(_value.startTime)
            : undefined;
        this.endTime = _value.endTime
            ? new googleProtobuf000.Timestamp(_value.endTime)
            : undefined;
        this.isCancellationRequested = _value.isCancellationRequested;
        this.cancelCommand = _value.cancelCommand;
        this.userIdCreated = _value.userIdCreated;
        this.userIdCancelled = _value.userIdCancelled;
        this.projectParent = _value.projectParent;
        this.operationType = _value.operationType;
        this.hostName = _value.hostName;
        this.numReruns = _value.numReruns;
        this.maxNumReruns = _value.maxNumReruns;
        this.description = _value.description;
        this.log = (_value.log || []).slice();
        this.logLimit = _value.logLimit;
        this.createdAt = _value.createdAt
            ? new googleProtobuf000.Timestamp(_value.createdAt)
            : undefined;
        this.modifiedAt = _value.modifiedAt
            ? new googleProtobuf000.Timestamp(_value.modifiedAt)
            : undefined;
        this.createdBy = _value.createdBy;
        this.modifiedBy = _value.modifiedBy;
        OperationMetadata.refineValues(this);
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get parentOperationName() {
        return this._parentOperationName;
    }
    set parentOperationName(value) {
        this._parentOperationName = value;
    }
    get subOperationNames() {
        return this._subOperationNames;
    }
    set subOperationNames(value) {
        this._subOperationNames = value;
    }
    get createTime() {
        return this._createTime;
    }
    set createTime(value) {
        this._createTime = value;
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
    get isCancellationRequested() {
        return this._isCancellationRequested;
    }
    set isCancellationRequested(value) {
        this._isCancellationRequested = value;
    }
    get cancelCommand() {
        return this._cancelCommand;
    }
    set cancelCommand(value) {
        this._cancelCommand = value;
    }
    get userIdCreated() {
        return this._userIdCreated;
    }
    set userIdCreated(value) {
        this._userIdCreated = value;
    }
    get userIdCancelled() {
        return this._userIdCancelled;
    }
    set userIdCancelled(value) {
        this._userIdCancelled = value;
    }
    get projectParent() {
        return this._projectParent;
    }
    set projectParent(value) {
        this._projectParent = value;
    }
    get operationType() {
        return this._operationType;
    }
    set operationType(value) {
        this._operationType = value;
    }
    get hostName() {
        return this._hostName;
    }
    set hostName(value) {
        this._hostName = value;
    }
    get numReruns() {
        return this._numReruns;
    }
    set numReruns(value) {
        this._numReruns = value;
    }
    get maxNumReruns() {
        return this._maxNumReruns;
    }
    set maxNumReruns(value) {
        this._maxNumReruns = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get log() {
        return this._log;
    }
    set log(value) {
        this._log = value;
    }
    get logLimit() {
        return this._logLimit;
    }
    set logLimit(value) {
        this._logLimit = value;
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
        OperationMetadata.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            status: this.status,
            parentOperationName: this.parentOperationName,
            subOperationNames: (this.subOperationNames || []).slice(),
            createTime: this.createTime ? this.createTime.toObject() : undefined,
            startTime: this.startTime ? this.startTime.toObject() : undefined,
            endTime: this.endTime ? this.endTime.toObject() : undefined,
            isCancellationRequested: this.isCancellationRequested,
            cancelCommand: this.cancelCommand,
            userIdCreated: this.userIdCreated,
            userIdCancelled: this.userIdCancelled,
            projectParent: this.projectParent,
            operationType: this.operationType,
            hostName: this.hostName,
            numReruns: this.numReruns,
            maxNumReruns: this.maxNumReruns,
            description: this.description,
            log: (this.log || []).slice(),
            logLimit: this.logLimit,
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
            status: OperationMetadata.Status[this.status === null || this.status === undefined ? 0 : this.status],
            parentOperationName: this.parentOperationName,
            subOperationNames: (this.subOperationNames || []).slice(),
            createTime: this.createTime
                ? this.createTime.toProtobufJSON(options)
                : null,
            startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
            endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
            isCancellationRequested: this.isCancellationRequested,
            cancelCommand: this.cancelCommand,
            userIdCreated: this.userIdCreated,
            userIdCancelled: this.userIdCancelled,
            projectParent: this.projectParent,
            operationType: OperationMetadata.OperationType[this.operationType === null || this.operationType === undefined
                ? 0
                : this.operationType],
            hostName: this.hostName,
            numReruns: this.numReruns,
            maxNumReruns: this.maxNumReruns,
            description: this.description,
            log: (this.log || []).slice(),
            logLimit: this.logLimit,
            createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
            modifiedAt: this.modifiedAt
                ? this.modifiedAt.toProtobufJSON(options)
                : null,
            createdBy: this.createdBy,
            modifiedBy: this.modifiedBy
        };
    }
}
(function (OperationMetadata) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
        Status[Status["NOT_STARTED"] = 1] = "NOT_STARTED";
        Status[Status["IN_PROGRESS"] = 2] = "IN_PROGRESS";
        Status[Status["DONE"] = 3] = "DONE";
        Status[Status["CANCELLED"] = 4] = "CANCELLED";
        Status[Status["FAILED"] = 5] = "FAILED";
    })(Status = OperationMetadata.Status || (OperationMetadata.Status = {}));
    let OperationType;
    (function (OperationType) {
        OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
        OperationType[OperationType["CREATE_AGENT"] = 1] = "CREATE_AGENT";
        OperationType[OperationType["IMPORT_AGENT"] = 2] = "IMPORT_AGENT";
        OperationType[OperationType["EXPORT_AGENT"] = 3] = "EXPORT_AGENT";
        OperationType[OperationType["DELETE_AGENT"] = 4] = "DELETE_AGENT";
        OperationType[OperationType["RESTORE_AGENT"] = 5] = "RESTORE_AGENT";
        OperationType[OperationType["BUILD_AGENT_CACHE"] = 6] = "BUILD_AGENT_CACHE";
        OperationType[OperationType["TRAIN_AGENT"] = 7] = "TRAIN_AGENT";
        OperationType[OperationType["EXPORT_BENCHMARK_AGENT"] = 8] = "EXPORT_BENCHMARK_AGENT";
        OperationType[OperationType["INDEX_AGENT"] = 9] = "INDEX_AGENT";
    })(OperationType = OperationMetadata.OperationType || (OperationMetadata.OperationType = {}));
})(OperationMetadata || (OperationMetadata = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLW1ldGFkYXRhLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9uLW1ldGFkYXRhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjthQUNyQixPQUFFLEdBQUcsOEJBQThCLENBQUM7SUFFM0M7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FDM0MsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBNEI7UUFDOUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUN6QyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztRQUNwRSxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUNoRSxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7UUFDdkQsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUNuRCxT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LENBQUMsVUFBVTtTQUM1QixDQUFDO0lBQ0osQ0FBQzs7QUFFSCxXQUFjLGlCQUFpQjtJQXdEN0IsSUFBWSxNQU9YO0lBUEQsV0FBWSxNQUFNO1FBQ2hCLCtEQUFzQixDQUFBO1FBQ3RCLGlEQUFlLENBQUE7UUFDZixpREFBZSxDQUFBO1FBQ2YsbUNBQVEsQ0FBQTtRQUNSLDZDQUFhLENBQUE7UUFDYix1Q0FBVSxDQUFBO0lBQ1osQ0FBQyxFQVBXLE1BQU0sR0FBTix3QkFBTSxLQUFOLHdCQUFNLFFBT2pCO0lBQ0QsSUFBWSxhQVdYO0lBWEQsV0FBWSxhQUFhO1FBQ3ZCLDZGQUE4QixDQUFBO1FBQzlCLGlFQUFnQixDQUFBO1FBQ2hCLGlFQUFnQixDQUFBO1FBQ2hCLGlFQUFnQixDQUFBO1FBQ2hCLGlFQUFnQixDQUFBO1FBQ2hCLG1FQUFpQixDQUFBO1FBQ2pCLDJFQUFxQixDQUFBO1FBQ3JCLCtEQUFlLENBQUE7UUFDZixxRkFBMEIsQ0FBQTtRQUMxQiwrREFBZSxDQUFBO0lBQ2pCLENBQUMsRUFYVyxhQUFhLEdBQWIsK0JBQWEsS0FBYiwrQkFBYSxRQVd4QjtBQUNILENBQUMsRUE1RWEsaUJBQWlCLEtBQWpCLGlCQUFpQixRQTRFOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lk9wZXJhdGlvbk1ldGFkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25NZXRhZGF0YSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuT3BlcmF0aW9uTWV0YWRhdGEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPcGVyYXRpb25NZXRhZGF0YSgpO1xuICAgIE9wZXJhdGlvbk1ldGFkYXRhLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogT3BlcmF0aW9uTWV0YWRhdGEpIHtcbiAgICBfaW5zdGFuY2Uuc3RhdHVzID0gX2luc3RhbmNlLnN0YXR1cyB8fCAwO1xuICAgIF9pbnN0YW5jZS5wYXJlbnRPcGVyYXRpb25OYW1lID0gX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzID0gX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lID0gX2luc3RhbmNlLmNyZWF0ZVRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgPSBfaW5zdGFuY2Uuc3RhcnRUaW1lIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZW5kVGltZSA9IF9pbnN0YW5jZS5lbmRUaW1lIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPVxuICAgICAgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kID0gX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQgPSBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlcklkQ2FuY2VsbGVkID0gX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucHJvamVjdFBhcmVudCA9IF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlID0gX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UuaG9zdE5hbWUgPSBfaW5zdGFuY2UuaG9zdE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLm51bVJlcnVucyA9IF9pbnN0YW5jZS5udW1SZXJ1bnMgfHwgMDtcbiAgICBfaW5zdGFuY2UubWF4TnVtUmVydW5zID0gX2luc3RhbmNlLm1heE51bVJlcnVucyB8fCAwO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UubG9nID0gX2luc3RhbmNlLmxvZyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubG9nTGltaXQgPSBfaW5zdGFuY2UubG9nTGltaXQgfHwgMDtcbiAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gX2luc3RhbmNlLmNyZWF0ZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgPSBfaW5zdGFuY2UubW9kaWZpZWRBdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmNyZWF0ZWRCeSA9IF9pbnN0YW5jZS5jcmVhdGVkQnkgfHwgJyc7XG4gICAgX2luc3RhbmNlLm1vZGlmaWVkQnkgPSBfaW5zdGFuY2UubW9kaWZpZWRCeSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE9wZXJhdGlvbk1ldGFkYXRhLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVuZFRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UucHJvamVjdFBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5ob3N0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5udW1SZXJ1bnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIChfaW5zdGFuY2UubG9nID0gX2luc3RhbmNlLmxvZyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgX2luc3RhbmNlLmxvZ0xpbWl0ID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0ID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgX2luc3RhbmNlLm1vZGlmaWVkQXQgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0LFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRCeSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEJ5ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPcGVyYXRpb25NZXRhZGF0YS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE9wZXJhdGlvbk1ldGFkYXRhLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnN0YXR1cykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgJiYgX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0YXJ0VGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5kVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5lbmRUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg3LCBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbmNlbENvbW1hbmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOSwgX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMCwgX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJvamVjdFBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMSwgX2luc3RhbmNlLnByb2plY3RQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9wZXJhdGlvblR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEyLCBfaW5zdGFuY2Uub3BlcmF0aW9uVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaG9zdE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTMsIF9pbnN0YW5jZS5ob3N0TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubnVtUmVydW5zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMTQsIF9pbnN0YW5jZS5udW1SZXJ1bnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heE51bVJlcnVucykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDE1LCBfaW5zdGFuY2UubWF4TnVtUmVydW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxNiwgX2luc3RhbmNlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sb2cgJiYgX2luc3RhbmNlLmxvZy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxNywgX2luc3RhbmNlLmxvZyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9nTGltaXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigxOCwgX2luc3RhbmNlLmxvZ0xpbWl0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jcmVhdGVkQXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxOSxcbiAgICAgICAgX2luc3RhbmNlLmNyZWF0ZWRBdCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RpZmllZEF0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMjAsXG4gICAgICAgIF9pbnN0YW5jZS5tb2RpZmllZEF0IGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyMSwgX2luc3RhbmNlLmNyZWF0ZWRCeSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubW9kaWZpZWRCeSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyMiwgX2luc3RhbmNlLm1vZGlmaWVkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXR1czogT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzO1xuICBwcml2YXRlIF9wYXJlbnRPcGVyYXRpb25OYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3N1Yk9wZXJhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY3JlYXRlVGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfc3RhcnRUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9lbmRUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9pc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FuY2VsQ29tbWFuZDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VySWRDcmVhdGVkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJJZENhbmNlbGxlZDogc3RyaW5nO1xuICBwcml2YXRlIF9wcm9qZWN0UGFyZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgX29wZXJhdGlvblR5cGU6IE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGU7XG4gIHByaXZhdGUgX2hvc3ROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX251bVJlcnVuczogbnVtYmVyO1xuICBwcml2YXRlIF9tYXhOdW1SZXJ1bnM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9nOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbG9nTGltaXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3JlYXRlZEF0PzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9tb2RpZmllZEF0PzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9jcmVhdGVkQnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9kaWZpZWRCeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgT3BlcmF0aW9uTWV0YWRhdGEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlcmF0aW9uTWV0YWRhdGEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3RhdHVzID0gX3ZhbHVlLnN0YXR1cztcbiAgICB0aGlzLnBhcmVudE9wZXJhdGlvbk5hbWUgPSBfdmFsdWUucGFyZW50T3BlcmF0aW9uTmFtZTtcbiAgICB0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzID0gKF92YWx1ZS5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmNyZWF0ZVRpbWUgPSBfdmFsdWUuY3JlYXRlVGltZVxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKF92YWx1ZS5jcmVhdGVUaW1lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBfdmFsdWUuc3RhcnRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLnN0YXJ0VGltZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kVGltZSA9IF92YWx1ZS5lbmRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLmVuZFRpbWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gX3ZhbHVlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkO1xuICAgIHRoaXMuY2FuY2VsQ29tbWFuZCA9IF92YWx1ZS5jYW5jZWxDb21tYW5kO1xuICAgIHRoaXMudXNlcklkQ3JlYXRlZCA9IF92YWx1ZS51c2VySWRDcmVhdGVkO1xuICAgIHRoaXMudXNlcklkQ2FuY2VsbGVkID0gX3ZhbHVlLnVzZXJJZENhbmNlbGxlZDtcbiAgICB0aGlzLnByb2plY3RQYXJlbnQgPSBfdmFsdWUucHJvamVjdFBhcmVudDtcbiAgICB0aGlzLm9wZXJhdGlvblR5cGUgPSBfdmFsdWUub3BlcmF0aW9uVHlwZTtcbiAgICB0aGlzLmhvc3ROYW1lID0gX3ZhbHVlLmhvc3ROYW1lO1xuICAgIHRoaXMubnVtUmVydW5zID0gX3ZhbHVlLm51bVJlcnVucztcbiAgICB0aGlzLm1heE51bVJlcnVucyA9IF92YWx1ZS5tYXhOdW1SZXJ1bnM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmxvZyA9IChfdmFsdWUubG9nIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubG9nTGltaXQgPSBfdmFsdWUubG9nTGltaXQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBfdmFsdWUuY3JlYXRlZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZWRBdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubW9kaWZpZWRBdCA9IF92YWx1ZS5tb2RpZmllZEF0XG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLm1vZGlmaWVkQXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IF92YWx1ZS5jcmVhdGVkQnk7XG4gICAgdGhpcy5tb2RpZmllZEJ5ID0gX3ZhbHVlLm1vZGlmaWVkQnk7XG4gICAgT3BlcmF0aW9uTWV0YWRhdGEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzdGF0dXMoKTogT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IE9wZXJhdGlvbk1ldGFkYXRhLlN0YXR1cykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnRPcGVyYXRpb25OYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudE9wZXJhdGlvbk5hbWU7XG4gIH1cbiAgc2V0IHBhcmVudE9wZXJhdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudE9wZXJhdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3ViT3BlcmF0aW9uTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zdWJPcGVyYXRpb25OYW1lcztcbiAgfVxuICBzZXQgc3ViT3BlcmF0aW9uTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3ViT3BlcmF0aW9uTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlVGltZSgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVUaW1lO1xuICB9XG4gIHNldCBjcmVhdGVUaW1lKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXJ0VGltZSgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cbiAgc2V0IHN0YXJ0VGltZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuZFRpbWUoKTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuICBzZXQgZW5kVGltZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5kVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ7XG4gIH1cbiAgc2V0IGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FuY2VsQ29tbWFuZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYW5jZWxDb21tYW5kO1xuICB9XG4gIHNldCBjYW5jZWxDb21tYW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYW5jZWxDb21tYW5kID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZENyZWF0ZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkQ3JlYXRlZDtcbiAgfVxuICBzZXQgdXNlcklkQ3JlYXRlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcklkQ3JlYXRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRDYW5jZWxsZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkQ2FuY2VsbGVkO1xuICB9XG4gIHNldCB1c2VySWRDYW5jZWxsZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJZENhbmNlbGxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm9qZWN0UGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RQYXJlbnQ7XG4gIH1cbiAgc2V0IHByb2plY3RQYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2plY3RQYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3BlcmF0aW9uVHlwZSgpOiBPcGVyYXRpb25NZXRhZGF0YS5PcGVyYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uVHlwZTtcbiAgfVxuICBzZXQgb3BlcmF0aW9uVHlwZSh2YWx1ZTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZSkge1xuICAgIHRoaXMuX29wZXJhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaG9zdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdE5hbWU7XG4gIH1cbiAgc2V0IGhvc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1SZXJ1bnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtUmVydW5zO1xuICB9XG4gIHNldCBudW1SZXJ1bnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bVJlcnVucyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhOdW1SZXJ1bnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TnVtUmVydW5zO1xuICB9XG4gIHNldCBtYXhOdW1SZXJ1bnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heE51bVJlcnVucyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvZygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZztcbiAgfVxuICBzZXQgbG9nKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xvZyA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sb2dMaW1pdDtcbiAgfVxuICBzZXQgbG9nTGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xvZ0xpbWl0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZWRBdCgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cbiAgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3JlYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGlmaWVkQXQoKTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZpZWRBdDtcbiAgfVxuICBzZXQgbW9kaWZpZWRBdCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbW9kaWZpZWRBdCA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZEJ5O1xuICB9XG4gIHNldCBjcmVhdGVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZWRCeSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RpZmllZEJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmaWVkQnk7XG4gIH1cbiAgc2V0IG1vZGlmaWVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGlmaWVkQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBPcGVyYXRpb25NZXRhZGF0YS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBPcGVyYXRpb25NZXRhZGF0YS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBwYXJlbnRPcGVyYXRpb25OYW1lOiB0aGlzLnBhcmVudE9wZXJhdGlvbk5hbWUsXG4gICAgICBzdWJPcGVyYXRpb25OYW1lczogKHRoaXMuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBjcmVhdGVUaW1lOiB0aGlzLmNyZWF0ZVRpbWUgPyB0aGlzLmNyZWF0ZVRpbWUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUgPyB0aGlzLnN0YXJ0VGltZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZW5kVGltZTogdGhpcy5lbmRUaW1lID8gdGhpcy5lbmRUaW1lLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogdGhpcy5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCxcbiAgICAgIGNhbmNlbENvbW1hbmQ6IHRoaXMuY2FuY2VsQ29tbWFuZCxcbiAgICAgIHVzZXJJZENyZWF0ZWQ6IHRoaXMudXNlcklkQ3JlYXRlZCxcbiAgICAgIHVzZXJJZENhbmNlbGxlZDogdGhpcy51c2VySWRDYW5jZWxsZWQsXG4gICAgICBwcm9qZWN0UGFyZW50OiB0aGlzLnByb2plY3RQYXJlbnQsXG4gICAgICBvcGVyYXRpb25UeXBlOiB0aGlzLm9wZXJhdGlvblR5cGUsXG4gICAgICBob3N0TmFtZTogdGhpcy5ob3N0TmFtZSxcbiAgICAgIG51bVJlcnVuczogdGhpcy5udW1SZXJ1bnMsXG4gICAgICBtYXhOdW1SZXJ1bnM6IHRoaXMubWF4TnVtUmVydW5zLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBsb2c6ICh0aGlzLmxvZyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGxvZ0xpbWl0OiB0aGlzLmxvZ0xpbWl0LFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtb2RpZmllZEF0OiB0aGlzLm1vZGlmaWVkQXQgPyB0aGlzLm1vZGlmaWVkQXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5jcmVhdGVkQnksXG4gICAgICBtb2RpZmllZEJ5OiB0aGlzLm1vZGlmaWVkQnlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBPcGVyYXRpb25NZXRhZGF0YS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czpcbiAgICAgICAgT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzW1xuICAgICAgICAgIHRoaXMuc3RhdHVzID09PSBudWxsIHx8IHRoaXMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5zdGF0dXNcbiAgICAgICAgXSxcbiAgICAgIHBhcmVudE9wZXJhdGlvbk5hbWU6IHRoaXMucGFyZW50T3BlcmF0aW9uTmFtZSxcbiAgICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiAodGhpcy5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGNyZWF0ZVRpbWU6IHRoaXMuY3JlYXRlVGltZVxuICAgICAgICA/IHRoaXMuY3JlYXRlVGltZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzdGFydFRpbWU6IHRoaXMuc3RhcnRUaW1lID8gdGhpcy5zdGFydFRpbWUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZW5kVGltZTogdGhpcy5lbmRUaW1lID8gdGhpcy5lbmRUaW1lLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkLFxuICAgICAgY2FuY2VsQ29tbWFuZDogdGhpcy5jYW5jZWxDb21tYW5kLFxuICAgICAgdXNlcklkQ3JlYXRlZDogdGhpcy51c2VySWRDcmVhdGVkLFxuICAgICAgdXNlcklkQ2FuY2VsbGVkOiB0aGlzLnVzZXJJZENhbmNlbGxlZCxcbiAgICAgIHByb2plY3RQYXJlbnQ6IHRoaXMucHJvamVjdFBhcmVudCxcbiAgICAgIG9wZXJhdGlvblR5cGU6XG4gICAgICAgIE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGVbXG4gICAgICAgICAgdGhpcy5vcGVyYXRpb25UeXBlID09PSBudWxsIHx8IHRoaXMub3BlcmF0aW9uVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5vcGVyYXRpb25UeXBlXG4gICAgICAgIF0sXG4gICAgICBob3N0TmFtZTogdGhpcy5ob3N0TmFtZSxcbiAgICAgIG51bVJlcnVuczogdGhpcy5udW1SZXJ1bnMsXG4gICAgICBtYXhOdW1SZXJ1bnM6IHRoaXMubWF4TnVtUmVydW5zLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBsb2c6ICh0aGlzLmxvZyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGxvZ0xpbWl0OiB0aGlzLmxvZ0xpbWl0LFxuICAgICAgY3JlYXRlZEF0OiB0aGlzLmNyZWF0ZWRBdCA/IHRoaXMuY3JlYXRlZEF0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1vZGlmaWVkQXQ6IHRoaXMubW9kaWZpZWRBdFxuICAgICAgICA/IHRoaXMubW9kaWZpZWRBdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBjcmVhdGVkQnk6IHRoaXMuY3JlYXRlZEJ5LFxuICAgICAgbW9kaWZpZWRCeTogdGhpcy5tb2RpZmllZEJ5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBPcGVyYXRpb25NZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgT3BlcmF0aW9uTWV0YWRhdGFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHN0YXR1czogT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzO1xuICAgIHBhcmVudE9wZXJhdGlvbk5hbWU6IHN0cmluZztcbiAgICBzdWJPcGVyYXRpb25OYW1lczogc3RyaW5nW107XG4gICAgY3JlYXRlVGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBzdGFydFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgZW5kVGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogYm9vbGVhbjtcbiAgICBjYW5jZWxDb21tYW5kOiBzdHJpbmc7XG4gICAgdXNlcklkQ3JlYXRlZDogc3RyaW5nO1xuICAgIHVzZXJJZENhbmNlbGxlZDogc3RyaW5nO1xuICAgIHByb2plY3RQYXJlbnQ6IHN0cmluZztcbiAgICBvcGVyYXRpb25UeXBlOiBPcGVyYXRpb25NZXRhZGF0YS5PcGVyYXRpb25UeXBlO1xuICAgIGhvc3ROYW1lOiBzdHJpbmc7XG4gICAgbnVtUmVydW5zOiBudW1iZXI7XG4gICAgbWF4TnVtUmVydW5zOiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBsb2c6IHN0cmluZ1tdO1xuICAgIGxvZ0xpbWl0OiBudW1iZXI7XG4gICAgY3JlYXRlZEF0PzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIG1vZGlmaWVkQXQ/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE9wZXJhdGlvbk1ldGFkYXRhXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBwYXJlbnRPcGVyYXRpb25OYW1lOiBzdHJpbmc7XG4gICAgc3ViT3BlcmF0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICAgIGNyZWF0ZVRpbWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RhcnRUaW1lOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGVuZFRpbWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGJvb2xlYW47XG4gICAgY2FuY2VsQ29tbWFuZDogc3RyaW5nO1xuICAgIHVzZXJJZENyZWF0ZWQ6IHN0cmluZztcbiAgICB1c2VySWRDYW5jZWxsZWQ6IHN0cmluZztcbiAgICBwcm9qZWN0UGFyZW50OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uVHlwZTogc3RyaW5nO1xuICAgIGhvc3ROYW1lOiBzdHJpbmc7XG4gICAgbnVtUmVydW5zOiBudW1iZXI7XG4gICAgbWF4TnVtUmVydW5zOiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBsb2c6IHN0cmluZ1tdO1xuICAgIGxvZ0xpbWl0OiBudW1iZXI7XG4gICAgY3JlYXRlZEF0OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1vZGlmaWVkQXQ6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRCeTogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFN0YXR1cyB7XG4gICAgU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBOT1RfU1RBUlRFRCA9IDEsXG4gICAgSU5fUFJPR1JFU1MgPSAyLFxuICAgIERPTkUgPSAzLFxuICAgIENBTkNFTExFRCA9IDQsXG4gICAgRkFJTEVEID0gNVxuICB9XG4gIGV4cG9ydCBlbnVtIE9wZXJhdGlvblR5cGUge1xuICAgIE9QRVJBVElPTl9UWVBFX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBDUkVBVEVfQUdFTlQgPSAxLFxuICAgIElNUE9SVF9BR0VOVCA9IDIsXG4gICAgRVhQT1JUX0FHRU5UID0gMyxcbiAgICBERUxFVEVfQUdFTlQgPSA0LFxuICAgIFJFU1RPUkVfQUdFTlQgPSA1LFxuICAgIEJVSUxEX0FHRU5UX0NBQ0hFID0gNixcbiAgICBUUkFJTl9BR0VOVCA9IDcsXG4gICAgRVhQT1JUX0JFTkNITUFSS19BR0VOVCA9IDgsXG4gICAgSU5ERVhfQUdFTlQgPSA5XG4gIH1cbn1cbiJdfQ==