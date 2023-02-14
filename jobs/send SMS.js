const { workerData } = require("worker_threads");
console.log(`Hello!, ${workerData.smsTo}`);
console.log(`you got an SMS from, ${workerData.smsFrom}`);
console.log(`Message: ${workerData.smsMessage}`);
