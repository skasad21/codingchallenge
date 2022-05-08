/**
 * Program to count digits in an integer
 */

// using Simple Iterative
/*
function countDigit(n) {
  let count = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    //console.log(n);
    count++;
  }
  return count;
}

let n = 341205;
console.log("Number of Digits: ", countDigit(n));

*/

function countDigit(n) {
  return Math.floor(Math.log10(n) + 1);
}

// Driver code
var n = 7;
console.log("Number of digits : " + countDigit(n));
