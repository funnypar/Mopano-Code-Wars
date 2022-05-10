"use strict";

console.log(`you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer`);

function squareDigits(num) {
  let string = "";
  const number = String(num);
  for (const numb of number) {
    string += Number(numb) ** 2;
  }
  console.log(`
  
  For example for 9119 the result is :  ${Number(string)}
  
  `);
}

squareDigits(9119);
