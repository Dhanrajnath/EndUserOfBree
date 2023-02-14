const { workerData } = require("worker_threads");
console.log(`Hello copy!, ${workerData.name}`);
console.log("Job executed!");
