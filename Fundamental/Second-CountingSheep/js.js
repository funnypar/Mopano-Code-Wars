"use strict";

const enters = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(enters) {
  let i = 0;
  for (const sheep of enters) {
    if (sheep === true) {
      i++;
    }
  }
  return i;
}

console.log(`For example enter array is :
 ${enters}`);
console.log(
  `

  So the counts of the sheeps, which there are : ${countSheeps(enters)}
  
  `
);
