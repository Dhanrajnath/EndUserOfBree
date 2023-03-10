const express = require("express");
const app = express();
const router = express.Router();
const Bree = require("/home/dhanrp/Desktop/bree/bree/src");
app.listen(5001, () => console.log("listening on port 5001"));

router.get("/heartbeat", (req, res) => {
  res.status(200).send("Application is running");
});

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://springstudent:springstudent@127.0.0.1:3306/bree",
    jobInterval: 3000,
    maxJobs: 2,
  },
});

bree.start();

bree.put({
  name: "send MAIL",
  time: "* * * * *",
  data: '{"emailTo": "LDP","emailFrom": "Dhanraj","emailMessage": "Hey! How are you?"}',
  isRecurringJob: true,
  isActive: true,
});

bree.put({
  name: "dummy-copy",
  time: null,
  data: '{"name" : "dummy-copy"}',
  isRecurringJob: false,
});
