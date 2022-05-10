"use strict";

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
// const firstTest = even_or_odd(42);
// const secondTest = even_or_odd(3);
// const thirdTest = even_or_odd(0);
// const fourthTest = even_or_odd(-1);

const obj = {
  42: even_or_odd(42),
  3: even_or_odd(3),
  0: even_or_odd(0),
  "-1": even_or_odd(-1),
};

for (const key of Object.keys(obj)) {
  console.log(
    `If the number is ${key}  :  the answer is ${Object.values([obj[key]])}`
  );
}
