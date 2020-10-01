/**
 * JavaScript is a single-threaded, Async language
 *
 * Stack: contains the function pointers to get executed in order of Last in First out (LIFO).
 *        the list of functions to be executed is given by the Queue
 *
 * Heap: Stores all the objects, variables and data that is initiated.
 *
 */

console.log("Add this code to queue");

setTimeout(function () {
  //This goes and sits in the queue.
  console.log("Running next event from the queue.");
}, 0);

function a(x) {
  console.log("Function a added to the stack!");
  b(x);
  console.log("Function a removed from the stack!");
}

function b(x) {
  console.log("Function b is added to the stack.");
  console.log("Value passed is " + x);
  console.log("Function b is removed from the stack.");
}

console.log("starting work for this stack");
a(22);
console.log("Stopping work for this stack. stack would be empty after this.");
