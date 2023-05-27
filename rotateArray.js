/**
 * 
 * that reverses a portion of the array specified by the start and end indices. To rotate the array, we perform three steps:

We calculate the number of rotations needed by taking the modulo (%) of k with the length of the array. 
This adjustment is necessary to handle cases where k is greater than the length of the array, as it will result in unnecessary rotations.

We reverse the entire array using the reverse helper function.

We reverse the first part of the array up to the rotations index.

Finally, we reverse the remaining part of the array after the rotations index.
 */

function rotateArray(nums, k) {
  const rotations = k % nums.length; // Adjusting for cases where k > nums.length

  reverse(nums, 0, nums.length - 1); // Reverse the entire array
  reverse(nums, 0, rotations - 1); // Reverse the first part up to k
  reverse(nums, rotations, nums.length - 1); // Reverse the remaining part after k
}

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
