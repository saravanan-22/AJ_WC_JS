function UserDetails(name, age, isAdmin) {
  // implicitly
  // let this = {};
  this.name = name;
  this.age = age;
  this.isAdmin = isAdmin;
  // implicitly
  // return this;
}
let john = new UserDetails("John", 25, true);
console.log(john);
let jack = new UserDetails("Jack", 30, false);
console.log(jack);
let mary = new UserDetails("Mary", 27, false);
console.log(mary);

function UserDerails(name, age) {
  this.name = name;
  this.age = age;
}
let john = new UserDerails("John", 30);
console.log(john);

function name(age) {
  this.age = age;
}
new name(20);
