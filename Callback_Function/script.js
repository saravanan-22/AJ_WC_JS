function name(user, age) {
  console.log(user);
  age();
}
function userAge(num) {
  console.log(20);
}
name("john", userAge);

fetch("https://api.themoviedb.org/3/trending/movie/day")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
