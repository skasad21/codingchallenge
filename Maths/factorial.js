/**
 * Program for factorial of a number
 */

function factorial(n) {
  let result = 1;
  for (i = n; i >= 1; i--) {
    result = result * i;
    //console.log(result);
  }
  return result;
}

let input = 6;
console.log(factorial(input));
