const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router Middlware");
  next();
});

router.get("/user", (req, res) => {
  res.status(200).send("Users");
});

router.get("/admin", (req, res, next) => {
  console.log("Admin");
  next();
});

router.use((req, res, next) => {
  res.status(200).send("Middleware after admin");
});

module.exports = router;
