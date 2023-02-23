const express = require("express");
const app = express();
const Bree = require("/home/dhanrp/Desktop/bree/bree/src");

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://springstudent:springstudent@127.0.0.1:3306/bree",
    jobInterval: 1000,
    maxJobs: 3,
  },
});

bree.put([
  {
    name: "job5",
    time: null,
    data: '{"jobName" : "Job5"}',
    isRecurringJob: false,
  },
  {
    name: "dummy",
    time: null,
    data: '{"name":"Testing Job"}',
    isRecurringJob: false,
  },
  {
    name: "send MAIL",
    time: "*/5 * * * *",
    data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
    isRecurringJob: true,
    isActive: false,
  },
  // {
  //   name: "dummy",
  //   time: "*/2 * * * *",
  //   data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
  //   isRecurringJob: true,
  // },
]);

bree.start();
// bree.stop();
app.listen(5000, () => console.log("listening on port 5000"));
