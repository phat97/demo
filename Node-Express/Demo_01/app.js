const express = require("express");
const logger = require("./myLogger");
const requestTime = require("./requestTime");
const app = express();

app.use(logger);
app.use(requestTime);

app.get("/", (req, res) => {
  res.status(200).send(`The current time is: ${req.requestTime}`);
});

app.listen(3000);
