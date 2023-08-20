let init = 1;

// while ..... Entry check loop

while (init <= 10) {
  console.log(init); // 1,2,3..........9,10
  init++;
}

while (init <= 20) {
  console.log(init); // 2,
  init += 2;
}

while (init <= 20) {
  if (init % 2 === 0) {
    console.log(init);
  }
  init++;
}

// do while ..... exit check loop

do {
  if (init % 2 === 1) {
    console.log(init);
  }
  init++;
} while (init <= 20);

do {
  if (init % 5 === 0) {
    if (init == 5) continue;
    console.log(init);
  }
  init++;
} while (init <= 20);

// for loop...

for (let init = 1; init <= 3; init++) {
  for (let innerInit = 1; innerInit <= 3; innerInit++) {
    console.log(init);
  }
}
