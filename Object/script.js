let object = {};

object.name = "saravanan";

object["date of birth"] = "12 13 41";

object["date of birth"] = "22-10-8888";
//   delete object["date of birth"];
object.age = 25;
object.color = "black";
object.slipperSize = "10";
console.log(object);

//   let array = [];

for (const key in object) {
  let value = `${object[key]}`;
  array.push(value);
}

console.log(array);

//   Object reference /////

const name = { name: "john" };
console.log(name);
const newName = name;
console.log(newName);

let objOne = { name: "John" };
let objTwo = objOne;
console.log(objOne);
console.log(objTwo);

//   object method /////////////

let userDetails = {
  name: "John",
  displayMessage() {
    console.log(`Welcome, ${this.name}`);
    console.log(`Welcome, ${userDetails.name}`);
  },
};
console.log(userDetails);
userDetails.displayMessage();

let numbers = [1, 2, 3, 4, 5];
let array = () => {
  numbers.map((num) => {
    console.log(num * num);
  });
};
array();
