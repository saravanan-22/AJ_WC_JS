let fruit = ["apple", "orange", "mango"];
[firstFruit, secondFruit, thirdFruit] = fruit;
console.log(firstFruit);
let [subjectOne, subjectTwo, ...subjectRest] = [
  "Tamil",
  "English",
  "Maths",
  "science",
  "socialScience",
];
console.log(subjectRest);
console.log(subjectOne);
