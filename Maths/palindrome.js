/**
 * Program to check the number is Palindrome or not
 */

/*
num = 4562 
rev_num = 0
rev_num = rev_num *10 + num%10 = 2 
num = num/10 = 456
rev_num = rev_num *10 + num%10 = 20 + 6 = 26 
num = num/10 = 45
rev_num = rev_num *10 + num%10 = 260 + 5 = 265 
num = num/10 = 4
rev_num = rev_num *10 + num%10 = 2650 + 4 = 2654 
num = num/10 = 0
*/
function reverseDigits(num) {
  let rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num;
}

/* Function to check if n is Palindrome*/
function isPalindrome(n) {
  // get the reverse of n
  let rev_n = reverseDigits(n);

  // Check if rev_n and n are same or not.
  if (rev_n == n) return 1;
  else return 0;
}

/*Driver program to test reversDigits*/

let n = 4562;
console.log("Is " + n + " a Palindrome number? -> ");
console.log(isPalindrome(n) == 1 ? "true" : "false");

n = 2002;
console.log("Is " + n + " a Palindrome number? -> ");
console.log(isPalindrome(n) == 1 ? "true" : "false");
