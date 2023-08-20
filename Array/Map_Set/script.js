//Map is an ordered collection of key-value pairs where each key can occur only once. The purpose of using a Map is to store and manage data in a way that allows quick retrieval based on the keys. Some key points about Map:

//   Keys can be of any data type (primitive values, objects, or even functions).
//   Maintains the order of insertion, which means the order of keys remains the same as they were added.
//   Allows easy addition, removal, and lookup of key-value pairs.
//   Map is often used when you need to associate data with specific keys and maintain the order of insertion.

const myMap = new Map();
myMap.set("name", "john");
myMap.set("age", 24);
myMap.set("isValid", true);
console.log(myMap);
console.log(myMap.get("name"));
myMap.set("name", "jack");
console.log(myMap);
console.log(myMap.entries());
console.log(myMap.values);

let userObj = {
  name: "John",
  age: 24,
  city: "Chennai",
};
console.log(userObj);

const map = new Map(Object.entries(userObj));
console.log(Object.fromEntries(map));
console.log(map);
//

//         Set is a collection of unique values, meaning each value can occur only once. It is useful when you want to store a list of items but ensure that there are no duplicate entries. Some key points about Set:

//   Only stores unique values, eliminating duplicates automatically.
//   Allows quick membership tests to check if a value exists in the Set.
//   Set is often used when you need to maintain a unique list of elements.

const mySet = new Set();

mySet.add("name", "king");
mySet.add("name", "john");
console.log(mySet);
const myArray = Array.from(myMap);
console.log(myArray);

let fruitsObj = {
  apple: 20,
  mango: 30,
  orange: 40,
};
console.log(fruitsObj);
let newFruitsObj = Object.fromEntries(
  Object.entries(fruitsObj).map((fruit) => {
    return [fruit[0], fruit[1] * 2];
  })
);

let newFruitsObj = Object.fromEntries(
  Object.entries(fruitsObj).map((fruit) => {
    return [fruit[0], fruit[1] * 2];
  })
);
console.log(newFruitsObj);
