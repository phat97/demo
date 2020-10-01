const globalVariable = (function () {
  var1 = "Oops";
  console.log(var1);
})();

// var1 is global
console.log(var1);

var2 = "global";

const localVariable = (function () {
  // Locally scope variable >>> Global variable
  let var2 = "local";
  console.log(var2);
})();

// Using global
console.log(var2);
