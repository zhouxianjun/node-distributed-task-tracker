'use strict';
const path = require('path');
const trc = require('trc');
const logger = require('tracer-logger');
const instance = Symbol();
const thrift = require('thrift');
const ServerRegister = trc.ServerRegister;
const ServerProvider = trc.ServerProvider;
const PublicStruct = require('./thrift/PublicStruct_types');
class TaskProcessor {
    static get thrift() {
        return require('./thrift/TaskProcessor');
    }
    static get version() {
        return '1.0.0';
    }
    async execute(job){
        throw new Error(`this is interface function`);
    }
}
const ACTIONS = new Map();
class TaskTracker {
    constructor(symbol, zk, group, config = {}) {
        if (!symbol || symbol !== instance)
            throw new ReferenceError('Cannot be instantiated, please use static instance function');

        const self = this;
        Reflect.defineProperty(TaskProcessor, 'attr', {writable: false, configurable: false, value: `{"nodeGroup": "${group}"}`});
        Reflect.defineProperty(TaskProcessor.prototype, 'execute', {
            writable: false, configurable: false,
            async value(job) {
                logger.debug(`RECEIVE JOB ${job.taskId}`);
                try {
                    if (job.params) {
                        job.params = JSON.parse(job.params);
                    }
                    return await self.handler(job);
                } catch (err) {
                    logger.error(`job ${job.taskId} handler error`, err);
                    throw err;
                }
            }
        });

        (async () => {
            let provider = new ServerProvider(zk, Object.assign({
                invoker: new trc.invoker.factory.PoolInvokerFactory({
                    transport: thrift.TFramedTransport,
                    protocol: thrift.TCompactProtocol
                }),
                loadBalance: new trc.loadBalance.RoundRobinLoadBalance(),
            }, config));
            await provider.loadType(path.resolve(__dirname, './thrift'));
            let server = new ServerRegister(zk, config);
            self.host = server.config.host;
            self.port = server.config.port;
            await server.loadObject(TaskProcessor, 'TaskProcessor');
            self.ready = true;
            self.hostInfo = {host: self.host, port: self.port, pid: process.pid};
        })();
    }

    static instance(zk, group, config) {
        if (!this._instance) {
            this._instance = Reflect.construct(this, [instance, zk, group, config]);
        }
        return this._instance;
    }

    async handler(job) {
        if (!ACTIONS.has(job.action)) {
            throw new Error(`job ${job.taskId} action ${job.action} is not found`);
        }
        setImmediate(async () => {
            try {
                let result = await Reflect.apply(ACTIONS.get(job.action), this, [job]);
                let jobService = await this.getService();
                await jobService.complete(job.taskId, typeof result === 'string' ? result : 'ok', new PublicStruct.HostInfo(this.hostInfo), typeof result === 'string' || result === true);
            } catch (e) {
                logger.error(`execute job ${job.taskId} error`, e);
            }
        });

        return new PublicStruct.ExecuteResult({
            msg: 'ok',
            info: this.hostInfo
        });
    }

    action(action, handler) {
        ACTIONS.set(action, handler);
        return this;
    }

    async getService() {
        if (this.jobService) return this.jobService;
        if (this.ready !== true && !this.jobService) {
            await TaskTracker.sleep(500);
            return this.getService();
        }
        this.jobService = trc.ServerProvider.instance(require('./thrift/JobService'));
        return this.jobService;
    }

    static sleep(n) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), n);
        });
    }
}
module.exports = TaskTracker;