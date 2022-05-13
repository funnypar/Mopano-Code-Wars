"use strict";

function find_average(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum / array.length || 0;
}

console.log(`The Average of array is : ${find_average([1, 2, 5, 12])}`);
