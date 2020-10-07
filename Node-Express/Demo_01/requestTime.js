module.exports = (req, res, next) => {
  console.log("Date NOW!");
  req.requestTime = Date.now();
  next();
};
