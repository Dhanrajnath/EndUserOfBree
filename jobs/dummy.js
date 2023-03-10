const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.name}`);
console.log("Job executed!");
setTimeout(function () {
  console.log("20 seconds timeout");
}, 20000);
