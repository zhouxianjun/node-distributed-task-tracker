'use strict';
const zookeeper = require('node-zookeeper-client');
let zk = zookeeper.createClient('127.0.0.1:2181');
zk.connect();
const TaskTracker = require('./index');
TaskTracker.instance(zk, 'test', {port: 9080});
TaskTracker.instance().action('say', async job => {
    console.log(`job ${job.taskId} say ok`);
    return true;
});