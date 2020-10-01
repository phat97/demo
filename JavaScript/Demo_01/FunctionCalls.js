// Normal Function
function normalFunction() {
  console.log("FunctionOne");
}

// Arrow key function
const arrowKeyFunction = () => {
  console.log("FunctionTwo");
};

// Arrow key function explicit return
const explicitReturn = () => {
  return 10;
};

// Arorw key function impicit return
const implicitReturn = () => 10;

// Curried Function
const curriedFunction = (x) => (y) => x + y;

// Breakdown of Curried Function
function breakdownCurriedFunction(x) {
  return function (y) {
    return x + y;
  };
}

// Closure
const closureFunction = (() => {
  let num = 0;
  const add = (add) => {
    num += add;
  };

  return {
    increment: () => {
      add(1);
    },
    decrement: () => {
      add(-1);
    },
    value: () => {
      return num;
    },
  };
})();

//Promise
const PromiseA = new Promise((res, rej) => {
  console.log("PromiseA");
  res("Resolved Promise");
});

// Executions
console.log("\nExplicit/Implicit Return");
console.log(explicitReturn());
console.log(implicitReturn());

console.log("\nCurried Function");
console.log(curriedFunction(1)(2));
console.log(breakdownCurriedFunction(1)(2));

console.log("\nClosure Clause");
console.log(closureFunction.value());
closureFunction.increment();
console.log(closureFunction.value());
closureFunction.decrement();
console.log(closureFunction.value());

PromiseA.then((val) => {
  console.log(`.then ${val}`);
});
