const express = require("express");
const app = express();
// const Bree = require("/home/dhanrp/Desktop/OPENSOURCE/BREEJS/bree/src");
const Bree = require("/home/dhanrp/Desktop/bree/bree/src");

const bree = new Bree({
  // mysqlDatabase: {
  //   host: "127.0.0.1",
  //   user: "springstudent",
  //   password: "springstudent",
  //   database: "bree",
  // },
  mysqlDatabase: {
    driverUrl: "mysql://springstudent:springstudent@127.0.0.1:3306/bree",
    jobInterval: 5000,
    maxJobs: 3, // run max of 3 jobs at a time
  },
  //assume email_job_id, emial_from, email_to, email_subject, email_body
  // interval: 5, throw exception <5
  // accept db driver url -> mysql://{username}:{password}@{host}/{database} -----
  // builder design pattern
  // jobs (8) (recurring_job_id) interval 5s  recurring_job 1 2 3 4 5 6 7 8
  // sonar setup
  // dbJobNames=[]
  jobs: [
    {
      name: "dummy",
      interval: "5s",
      timeout: "5s",
    },
  ],
});

bree.start();

app.listen(5000, () => console.log("listening on port 5000"));
