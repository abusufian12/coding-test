//1st way
// function quicksort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   var pivot = array[0];

//   var left = [];
//   var right = [];

//   for (var i = 1; i < array.length; i++) {
//     array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//   }

//   return quicksort(left).concat(pivot, quicksort(right));
// }

// var unsorted = [23, 45, 16, 37, 3, 99, 22];
// var sorted = quicksort(unsorted);

// console.log("Sorted array", sorted);

// 2nd way

let QuickSort = (arr, low, high) => {
  if (low < high) {
    p = Partition(arr, low, high);
    QuickSort(arr, low, p - 1);
    QuickSort(arr, p + 1, high);
  }
  return arr.A;
};

let Partition = (arr, low, high) => {
  let pivot = arr.A[high];
  let i = low;
  for (let j = low; j <= high; j++) {
    if (arr.A[j] < pivot) {
      [arr.A[i], arr.A[j]] = [arr.A[j], arr.A[i]];
      i++;
    }
  }
  [arr.A[i], arr.A[high]] = [arr.A[high], arr.A[i]];
  return i;
};

let arr = { A: [33, 22, 88, 23, 45, 0, 44, 11] };
let res = QuickSort(arr, 0, arr.A.length - 1);
console.log(res);

//3rd way
/*
function QuickSort(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }

  const pivot = Arr[Arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < Arr.length - 1; i++) {
    Arr[i] < pivot ? leftArr.push(Arr[i]) : rightArr.push(Arr[i]);
  }

  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
}

const items = [33, 22, 88, 23, 45, 0, 44, 11];
console.log(QuickSort(items));
*/
