const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.jobName}`);
