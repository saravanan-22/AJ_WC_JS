let array = [1, 2, 3, 4, 5];
console.log(Math.min(...array));
const sum = array.reduce((acc, ele) => acc + ele, 0); //accumulator : The accumulated value that results from the previous iterations. It starts with the initialValue or the first element of the array if initialValue is not provided.
console.log(sum); //initialValue (optional): The initial value of the accumulator. If not provided, the first element of the array is used as the initial value, and the reduce() method starts with the second element.
const maxValue = array.reduce((acc, ele) => Math.max(acc, ele), 0);
console.log(maxValue);

let students = [
  { id: 1001, name: "John", age: 23, dept: "CSE" },
  { id: 1002, name: "Jack", age: 20, dept: "IT" },
  { id: 1003, name: "Mary", age: 18, dept: "ECE" },
  { id: 1004, name: "Robert", age: 21, dept: "ECE" },
  { id: 1005, name: "Prince", age: 20, dept: "MECH" },
  { id: 1003, name: "Ram", age: 18, dept: "CIVIL" },
];

students.push({ id: 1022, name: "saravanan", age: 18, dept: "BBA" });
console.log(students);
students[6] = { id: 1023, name: "king", age: 18, dept: "psychology" };
console.log(students);

const eceAge = students
  .filter((student) => student.dept === "ECE")
  .reduce((acc, student) => acc + student.age, 0);
console.log(eceAge);
