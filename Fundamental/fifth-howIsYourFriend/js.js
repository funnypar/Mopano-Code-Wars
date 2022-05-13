"use strict";

function friend(friends) {
  let arr = [];
  for (const man of friends) {
    man.length == 4 ? arr.push(man) : 0;
  }
  return arr;
}

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

const [friend1, friend2, ...friends] = friend([
  "Ryan",
  "Kieran",
  "Jason",
  "Yous",
]);

console.log(`Your friends are : ${friend1} , ${friend2}  ${friends}`);
