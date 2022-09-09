/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    console.time();
    let start = 0;
    let end = height.length-1;
    let maxN = 0;
    while (end > start) {
        startHeight = height[start];
        endHeight = height[end];
        if(startHeight>endHeight) {
            maxN = maxN < endHeight  (end - start) ? endHeight  (end - start) : maxN;
            end--;
        } else {
            maxN = maxN < startHeight  (end - start) ? startHeight  (end - start) : maxN;
            start++;
        }
    }
    console.timeEnd();
    return maxN;
};
//


// console.log(maxArea([1,2,4,3])); // output 4
// console.log(maxArea([0,2])); // output 0
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // output 49
// console.log(maxArea([1,1])); // output 1


/*
Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:




          |      
          |      
        9 |      
        8 |        ||                          ||
        7 |        ||             ||      ||
        6 |        ||   ||                     ||           ||
        5 |        ||   ||         ||          ||           ||
        4 |        ||   ||         ||    ||    ||           ||
        3 |        ||   ||         ||    ||    ||    ||     ||
        2 |        ||   ||    ||   ||    ||    ||    ||     ||
        1 |___||___||___||____||___||____||____||____||_____||________


Input: height = [1,1]
Output: 1



*/