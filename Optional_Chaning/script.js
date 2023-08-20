const user = {
  name: "Alice",
  getAddress: function () {
    return {
      city: "London",
      postalCode: "12345",
    };
  },
};

console.log(user.getAddress?.().city); // "London"
console.log(user.getAge?.()); // undefined
