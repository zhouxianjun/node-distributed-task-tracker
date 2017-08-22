//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var JobStruct = module.exports.JobStruct = function(args) {
  this.taskId = null;
  this.type = null;
  this.maxRetryTimes = 10;
  this.retryTimes = 0;
  this.nodeGroup = null;
  this.action = null;
  this.params = null;
  this.feedback = false;
  this.cron = null;
  this.triggerTime = null;
  this.repeatCount = 0;
  this.repeatInterval = 1000;
  this.relyOnPrevCycle = false;
  this.submitHost = null;
  this.submitPid = null;
  if (args) {
    if (args.taskId !== undefined && args.taskId !== null) {
      this.taskId = args.taskId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field taskId is unset!');
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field type is unset!');
    }
    if (args.maxRetryTimes !== undefined && args.maxRetryTimes !== null) {
      this.maxRetryTimes = args.maxRetryTimes;
    }
    if (args.retryTimes !== undefined && args.retryTimes !== null) {
      this.retryTimes = args.retryTimes;
    }
    if (args.nodeGroup !== undefined && args.nodeGroup !== null) {
      this.nodeGroup = args.nodeGroup;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field nodeGroup is unset!');
    }
    if (args.action !== undefined && args.action !== null) {
      this.action = args.action;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field action is unset!');
    }
    if (args.params !== undefined && args.params !== null) {
      this.params = Thrift.copyMap(args.params, [null]);
    }
    if (args.feedback !== undefined && args.feedback !== null) {
      this.feedback = args.feedback;
    }
    if (args.cron !== undefined && args.cron !== null) {
      this.cron = args.cron;
    }
    if (args.triggerTime !== undefined && args.triggerTime !== null) {
      this.triggerTime = args.triggerTime;
    }
    if (args.repeatCount !== undefined && args.repeatCount !== null) {
      this.repeatCount = args.repeatCount;
    }
    if (args.repeatInterval !== undefined && args.repeatInterval !== null) {
      this.repeatInterval = args.repeatInterval;
    }
    if (args.relyOnPrevCycle !== undefined && args.relyOnPrevCycle !== null) {
      this.relyOnPrevCycle = args.relyOnPrevCycle;
    }
    if (args.submitHost !== undefined && args.submitHost !== null) {
      this.submitHost = args.submitHost;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field submitHost is unset!');
    }
    if (args.submitPid !== undefined && args.submitPid !== null) {
      this.submitPid = args.submitPid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field submitPid is unset!');
    }
  }
};
JobStruct.prototype = {};
JobStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.taskId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.maxRetryTimes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.retryTimes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.nodeGroup = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.action = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.params = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var key6 = null;
          var val7 = null;
          key6 = input.readString();
          val7 = input.readString();
          this.params[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BOOL) {
        this.feedback = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.cron = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.triggerTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.repeatCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I32) {
        this.repeatInterval = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.BOOL) {
        this.relyOnPrevCycle = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.submitHost = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.I32) {
        this.submitPid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

JobStruct.prototype.write = function(output) {
  output.writeStructBegin('JobStruct');
  if (this.taskId !== null && this.taskId !== undefined) {
    output.writeFieldBegin('taskId', Thrift.Type.STRING, 1);
    output.writeString(this.taskId);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 2);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.maxRetryTimes !== null && this.maxRetryTimes !== undefined) {
    output.writeFieldBegin('maxRetryTimes', Thrift.Type.I32, 3);
    output.writeI32(this.maxRetryTimes);
    output.writeFieldEnd();
  }
  if (this.retryTimes !== null && this.retryTimes !== undefined) {
    output.writeFieldBegin('retryTimes', Thrift.Type.I32, 5);
    output.writeI32(this.retryTimes);
    output.writeFieldEnd();
  }
  if (this.nodeGroup !== null && this.nodeGroup !== undefined) {
    output.writeFieldBegin('nodeGroup', Thrift.Type.STRING, 6);
    output.writeString(this.nodeGroup);
    output.writeFieldEnd();
  }
  if (this.action !== null && this.action !== undefined) {
    output.writeFieldBegin('action', Thrift.Type.STRING, 7);
    output.writeString(this.action);
    output.writeFieldEnd();
  }
  if (this.params !== null && this.params !== undefined) {
    output.writeFieldBegin('params', Thrift.Type.MAP, 8);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.params));
    for (var kiter8 in this.params)
    {
      if (this.params.hasOwnProperty(kiter8))
      {
        var viter9 = this.params[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.feedback !== null && this.feedback !== undefined) {
    output.writeFieldBegin('feedback', Thrift.Type.BOOL, 9);
    output.writeBool(this.feedback);
    output.writeFieldEnd();
  }
  if (this.cron !== null && this.cron !== undefined) {
    output.writeFieldBegin('cron', Thrift.Type.STRING, 10);
    output.writeString(this.cron);
    output.writeFieldEnd();
  }
  if (this.triggerTime !== null && this.triggerTime !== undefined) {
    output.writeFieldBegin('triggerTime', Thrift.Type.I64, 11);
    output.writeI64(this.triggerTime);
    output.writeFieldEnd();
  }
  if (this.repeatCount !== null && this.repeatCount !== undefined) {
    output.writeFieldBegin('repeatCount', Thrift.Type.I32, 12);
    output.writeI32(this.repeatCount);
    output.writeFieldEnd();
  }
  if (this.repeatInterval !== null && this.repeatInterval !== undefined) {
    output.writeFieldBegin('repeatInterval', Thrift.Type.I32, 13);
    output.writeI32(this.repeatInterval);
    output.writeFieldEnd();
  }
  if (this.relyOnPrevCycle !== null && this.relyOnPrevCycle !== undefined) {
    output.writeFieldBegin('relyOnPrevCycle', Thrift.Type.BOOL, 14);
    output.writeBool(this.relyOnPrevCycle);
    output.writeFieldEnd();
  }
  if (this.submitHost !== null && this.submitHost !== undefined) {
    output.writeFieldBegin('submitHost', Thrift.Type.STRING, 15);
    output.writeString(this.submitHost);
    output.writeFieldEnd();
  }
  if (this.submitPid !== null && this.submitPid !== undefined) {
    output.writeFieldBegin('submitPid', Thrift.Type.I32, 16);
    output.writeI32(this.submitPid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var InvalidOperation = module.exports.InvalidOperation = function(args) {
  Thrift.TException.call(this, "InvalidOperation");
  this.name = "InvalidOperation";
  this.code = null;
  this.msg = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = args.msg;
    }
  }
};
Thrift.inherits(InvalidOperation, Thrift.TException);
InvalidOperation.prototype.name = 'InvalidOperation';
InvalidOperation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

InvalidOperation.prototype.write = function(output) {
  output.writeStructBegin('InvalidOperation');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRING, 2);
    output.writeString(this.msg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var HostInfo = module.exports.HostInfo = function(args) {
  this.host = null;
  this.port = null;
  this.pid = null;
  if (args) {
    if (args.host !== undefined && args.host !== null) {
      this.host = args.host;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field host is unset!');
    }
    if (args.port !== undefined && args.port !== null) {
      this.port = args.port;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field port is unset!');
    }
    if (args.pid !== undefined && args.pid !== null) {
      this.pid = args.pid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field pid is unset!');
    }
  }
};
HostInfo.prototype = {};
HostInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.host = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.port = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HostInfo.prototype.write = function(output) {
  output.writeStructBegin('HostInfo');
  if (this.host !== null && this.host !== undefined) {
    output.writeFieldBegin('host', Thrift.Type.STRING, 1);
    output.writeString(this.host);
    output.writeFieldEnd();
  }
  if (this.port !== null && this.port !== undefined) {
    output.writeFieldBegin('port', Thrift.Type.I32, 2);
    output.writeI32(this.port);
    output.writeFieldEnd();
  }
  if (this.pid !== null && this.pid !== undefined) {
    output.writeFieldBegin('pid', Thrift.Type.I32, 3);
    output.writeI32(this.pid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.CRON = 'CRON';
ttypes.REAL_TIME = 'REAL_TIME';
ttypes.TIMER = 'TIMER';
ttypes.REPEAT = 'REPEAT';
