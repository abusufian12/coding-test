function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      console.log(arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // temp = arr[j];
        //arr[j] = arr[j + 1];
        //arr[j+1] = temp;
        //or
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 3, 6, 2]));
