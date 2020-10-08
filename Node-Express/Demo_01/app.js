const express = require("express");
const logger = require("./middleware/myLogger");
const requestTime = require("./middleware/requestTime");
const userRouter = require("./Router/users");
const app = express();

app.use(logger);
app.use(requestTime);

app.get(
  "/",
  (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    next();
  },
  (req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    next();
  },
  (req, res) => {
    res.status(200).send(`The current time is: ${req.requestTime}`);
  }
);

app.get(
  "/gamer/:id",
  (req, res, next) => {
    if (req.params.id === "1337") {
      next("route");
    } else {
      next();
    }
  },
  (req, res) => {
    res.status(200).send("Pleb");
  }
);

app.get("/gamer/:id", (req, res) => {
  res.status(200).send("ELITE");
});

app.use("/api/", userRouter);

app.listen(3000);
