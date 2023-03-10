const express = require("express");
const app = express();
const Bree = require("/home/dhanrp/Desktop/bree/bree/src");

app.get("/heartbeat", (req, res) => {
  res.status(200).send("Application is running");
});

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://springstudent:springstudent@127.0.0.1:3306/bree",
    jobInterval: 10000,
    maxJobs: 2,
  },
});

bree.start();

bree.put({
  name: "send SMS",
  time: "2023-02-27 12:44:00",
  isRecurringJob: false,
  data: '{"smsTo": "LDP","smsFrom": "Dhanraj","smsMessage": "Hey! How are you?"}',
});

app.listen(5000, () => console.log("listening on port 5000"));
