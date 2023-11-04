console.log(25 < 5 || 18 < 5 || "123"); // it all return true display last truthy value
console.log(20 < 5 || 12 > 25 || 23 < 12 || 10 == 10);

let a = undefined;
// const alertFn = () => {
//   alert("value is not defined");
// };

let b = null;
console.log(a ?? "value not found");
console.log(b ?? 2); // it check whether lhs variable value is "undefined or null". it returns rhs value
