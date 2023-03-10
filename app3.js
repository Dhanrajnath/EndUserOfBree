const express = require("express");
const app = express();
const router = express.Router();
const Bree = require("/home/dhanrp/Desktop/bree/bree/src");

router.get("/heartbeat", (req, res) => {
  res.status(200).send("Application is running");
});

const bree = new Bree({
  mysqlDatabase: {
    driverUrl: "mysql://springstudent:springstudent@127.0.0.1:3306/bree",
    jobInterval: 5000,
    maxJobs: 2,
  },
});

bree.start();

bree.put({
  name: "job5",
  time: null,
  data: '{"jobName" : "Job5"}',
  isRecurringJob: false,
});

bree.put({
  name: "dummy",
  time: null,
  data: '{"name" : "dummy"}',
  isRecurringJob: false,
});

app.listen(5002, () => console.log("listening on port 5002"));
