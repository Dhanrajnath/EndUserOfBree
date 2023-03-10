const express = require("express");
const app = express();

// const heartbeatController = require("./controllers/heartbeat");

// Mount the heartbeat controller as middleware
app.use("/", (req, res) => {
  res.status(200).send("Application is running");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
