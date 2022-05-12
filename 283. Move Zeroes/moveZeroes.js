/**
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
*/

let nums = [0,1,0,3,12];
//let nums = [0];

var moveZeroes = function(nums) {
    for(var i = nums.length-1; i >= 0 ;i--){
        if ( nums[i] === 0) { 
            nums.push(0);
            nums.splice(i,1); 
        }
    }
    return nums;
};
var result = moveZeroes(nums);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);
