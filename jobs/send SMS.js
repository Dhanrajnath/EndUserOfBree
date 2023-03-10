const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.smsTo}`);
console.log(`you got an SMS from, ${workerData.smsFrom}`);
console.log(`Message: ${workerData.smsMessage}`);
console.log("Welcome to My Console,");
setTimeout(function () {
  console.log("40 seconds timeout");
}, 40000);
console.log(new Date().toString());
