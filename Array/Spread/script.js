let array = [1, 2, 3, 4, 5, 6];
let newArray = [...array];
console.log(newArray);
let addVales = [...newArray, 7, 8];
console.log(addVales);
let userDetails = ["Price", 25, "Male"];
let num = (name, age, gender) =>
  `name : ${name} age : ${age} gender : ${gender}`;
let passValues = num(...userDetails);
console.log(passValues);
