const array = [1, 2, 3, 4, 5];
const lastElement = array.pop();
console.log(lastElement);
console.log(array);
const add = array.push(5, 6);
console.log(array);
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log(array.length);
const name = "john jack";
console.log(name.slice(5, 4));
console.log(name.length);
console.log(name.charAt(1));
console.log(name[name.length - 1]); // to access the strings last value through used -1
// the charAt method is not applicable directly to arrays in JavaScript. The charAt method is specific to strings and is used to retrieve the character at a specified index position within a string.
