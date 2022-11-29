// calculate the sum of squares of given integers, excluding any negatives.
// Do not use any for and goto statement
let n = 0;
let total = 0;
function sumOfSquares(arr, size) {
  if (arr[n] > 0) {
    total = total + arr[n] * arr[n];
  }

  if (n == size) {
    return total;
  } else {
    n = n + 1;
  }
  sumOfSquares(arr, size);
}

// sumOfSquares([3, -1, 1, 14], 4); // output 206
sumOfSquares([9, 6, -53, 32, 16], 5); // output 1397
console.log(total);
