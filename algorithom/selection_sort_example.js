/**
 * 
 * The algorithm divides the array into two portions: the sorted portion on the left and the unsorted portion on the right. In each iteration of the outer loop,
 * it finds the minimum element in the unsorted portion by comparing each element with the current minimum. The index of the minimum element is stored in minIndex.
 * After finding the minimum, it swaps it with the first element of the unsorted portion.

This process is repeated until the entire array is sorted, with the sorted portion expanding from left to right.

In the example usage, an array [7, 2, 4, 1, 5, 3] is passed to selectionSort, and the sorted array [1, 2, 3, 4, 5, 7] is printed to the console.

Selection Sort has a time complexity of O(n^2) in all cases, making it less efficient than other sorting algorithms like Merge Sort or Quick Sort.
However, it is relatively easy to understand and implement. 
 */

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

// Example usage:
const arr = [7, 2, 4, 1, 5, 3];
console.log(selectionSort(arr)); // Output: [1, 2, 3, 4, 5, 7]
