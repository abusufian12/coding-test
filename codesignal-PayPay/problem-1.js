// problem 1
function helloWorld(nums) {
    return nums.map((e, i) => {
        let a1 = nums[i];
        let b1 = nums[i+1];
        let c1 = nums[i+2];
        if(checkValidity(a1,b1,c1) && c1) {
            return 1;
        } else if(c1) { return 0 }
    }).filter((e)=>e>=0)

    function checkValidity(a, b, c) {
        // check condition
        if (a + b <= c || a + c <= b || b + c <= a)
            return false;
        else
            return true;
    }
}

console.log(helloWorld([2, 10, 2, 10, 2]))


/**
 * For an array a and an integer t (0 ≤ t < a.length), let's define cyclic t-shift operation as carrying t elements from the beginning of the array to the end.

For example, applying cyclic t-shift to a = [1, 2, 3, 4] can turn it into four different arrays:

[1, 2, 3, 4] (0-shift),
[2, 3, 4, 1] (1-shift: one element from the beginning, i.e. 1, was carried to the end),
[3, 4, 1, 2] (2-shift: two elements, i.e. 1, 2, were carried to the end),
[4, 1, 2, 3] (3-shift: 1, 2, 3 were carried to the end).
Given an array of integers elements, find such t (0 ≤ t < elements.length) that cyclic t-shift operation turns elements into a sorted array [1, 2, ..., elements.length]. If there is no such t, return -1.

Example

For elements = [1, 4, 2, 3], the output should be solution(elements) = -1.

Let's consider all possible cyclic t-shifts:

0-shift: moving 0 elements from the beginning to the end, we get [1, 4, 2, 3].
1-shift: moving 1 element from the beginning to the end, we get [4, 2, 3, 1].
2-shift: moving 2 elements from the beginning to the end, we get [2, 3, 1, 4].
3-shift: moving 3 elements from the beginning to the end, we get [3, 1, 4, 2].
None of the resulting arrays equals sorted array [1, 2, 3, 4], so the answer is -1.

For elements = [3, 4, 5, 1, 2], the output should be solution(elements) = 3.

If we move the first 3 elements of the given array from the beginning to the end, we get a sorted array [1, 2, 3, 4, 5], so the answer is 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer elements

An array of integers. It is guaranteed that all numbers from 1 to elements.length appear exactly once in the array.

Guaranteed constraints:
3 ≤ elements.length ≤ 100,
1 ≤ elements[i] ≤ elements.length.

[output] integer

Return such t (0 ≤ t < elements.length) that cyclic t-shift operation turns elements into a sorted array [1, 2, ..., elements.length]. If it is not possible to turn elements into the sorted array by performing a cyclic t-shift, return -1.
 */