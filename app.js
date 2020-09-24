'use strict';
const number = process.argv[2] || 0;
//this code above get command line input as argument.
//Why[2]? => cuz [0] is for path of node command file, 
//           and [1] is for path of runnign program file.

// '|| 0' is logical sum with condition
//meaning if LHS is falty, then assing 0
//otherwise, assign LHS


let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);

//run by 'node app.js 'number'