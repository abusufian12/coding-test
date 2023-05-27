/**
 * 
 * In this approach, we create a new array called mergedArray to store the merged elements. We use two pointers, i and j, to traverse arr1 and arr2 respectively.
  While both pointers are within their respective array lengths, we compare the elements at the current positions and push the smaller element into the mergedArray.
  Afterward, we handle any remaining elements in either array by appending them to mergedArray. Finally, we return the mergedArray.
 */

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, append them
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, append them
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
