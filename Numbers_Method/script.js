console.log(+(12.56789).toFixed(2)); // it use for define numbers after .

let array = [1, 2, 10, 4, 5];
console.log(Math.max(...array));
console.log(Math.min.apply(null, array));

let result = [1, 2, 3].map(function (n) {
  return n * 2;
});
console.log(result);
