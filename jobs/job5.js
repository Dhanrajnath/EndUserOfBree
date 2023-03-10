const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.jobName}`);
console.log(`How are you?`);
setTimeout(function () {
  console.log("10 seconds timeout");
}, 10000);
