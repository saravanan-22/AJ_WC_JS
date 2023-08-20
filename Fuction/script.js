function expression....

let funcExp = function (num1, num2) {
  return num1 + num2;
};
let result = funcExp(2, 3);
console.log(funcExp(2, 3));
// callback function
function doSomething(callback) {
  console.log("Doing something...");
  // Simulating an asynchronous operation
  setTimeout(function () {
    console.log("Async operation completed.");
    callback();
  }, 2000);
}

function callbackFunction() {
  console.log("Callback function executed.");
}

doSomething(callbackFunction);

function add(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(add(2, 3));

function sum() {
  let result = 2 + 3;
  console.log(result);
}
sum()