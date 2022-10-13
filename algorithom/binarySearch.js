function binarySearch(arr, find_number) {
  let left, right, mid;
  left = 0;
  right = arr.length - 1;
  //console.log(right);
  while (left <= right) {
    mid = Math.ceil((right + left) / 2);
    if (arr[mid] == find_number) return mid;

    if (arr[mid] < find_number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(binarySearch([2, 4, 5, 6, 7, 8, 9], 7));
