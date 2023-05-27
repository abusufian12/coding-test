function removeDuplicates(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let currentIndex = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[currentIndex - 2]) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }

  return currentIndex;
}

const nums = [1, 1, 1, 2, 2, 3];
const length = removeDuplicates(nums);
console.log(length); // Output: 5
console.log(nums.slice(0, length)); // Output: [1, 1, 2, 2, 3]
