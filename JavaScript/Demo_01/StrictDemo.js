"use strict";
const strictHoistVariable = (function () {
  var3 = "Oops again";
  console.log(var3);
})();

// Error
console.log(var3);
