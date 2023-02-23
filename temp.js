const cronParser = require("cron-parser");

const cronExpr = "* * * * *"; // every 2 hours
const interval = cronParser.parseExpression(cronExpr);
// return interval;
// console.log(interval);
nextDate = interval.next().toDate();
console.log(nextDate);
console.log(interval.next().toDate());
console.log(interval.next().toDate());

// const nextDate = interval.next().toDate();
// const timestamp = nextDate.getTime() / 1000; // divide by 1000 to convert to Unix timestamp
// console.log(timestamp);
// console.log(interval);
// console.log(nextDate);
//
// const cronParser = require("cron-parser");

// const cronExpr = "*/5 * * * *"; // every 2 hours
// const interval = cronParser.parseExpression(cronExpr);
// const nextDate = interval.next().toDate();
// const currentDate = new Date();
// const prevDate = interval.prev().toDate();
// if (nextDate > currentDate) {
//   console.log(prevDate);
// } else {
//   console.log(nextDate);
// }

// var cronValidator = require("cron-expression-validator");
// var isValid = cronValidator.isValidCronExpression(null);
// console.log(isValid);

// how to insert rows using nodejs sequlize?
// console.log(new Date().toJSON());

// const array = [
//   {
//     name: "Joe",
//     age: 17,
//   },
//   {
//     name: "Bob",
//     age: 17,
//   },
//   {
//     name: "Carl",
//     age: 35,
//   },
// ];
// const unique = Array.from(new Set(array.map((item) => item.age)));
// console.log(unique);

// group by element from array of object?
// convert cron expression to date format?
// cron expression to date?
