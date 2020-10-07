const express = require("express");
const logger = require("./myLogger");
const requestTime = require("./requestTime");
const userRouter = require("./Router/users");
const app = express();

app.use(logger);
app.use(requestTime);

app.get("/", (req, res) => {
  res.status(200).send(`The current time is: ${req.requestTime}`);
});

app.use("/api/", userRouter);

app.listen(3000);
