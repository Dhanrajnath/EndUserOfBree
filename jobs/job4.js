const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.jobName}`);
setTimeout(function () {
  console.log("30 seconds timeout");
}, 30000);
