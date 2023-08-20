let weakMap = new WeakMap();

console.log(weakMap);

let john = { name: "John" };
let jack = { name: "Jack" };
weakMap.set(john, "John Details");
weakMap.set(jack, "Jack Details");

console.log(weakMap);
