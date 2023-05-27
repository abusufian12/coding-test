function oddNumbers(l, r) {
  // Write your code here
  let arr = [];
  for (i = l; i <= r; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  return arr;
}

let result = oddNumbers(2, 5);
console.log(result);
