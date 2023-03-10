const { workerData } = require("worker_threads");
console.log(`Hello copy!, ${workerData.name}`);
console.log("Job executed!");
setTimeout(function () {
  console.log("10 seconds timeout");
}, 10000);
