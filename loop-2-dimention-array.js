const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  for (let j = 0; j < array[i].length; j++) {
    const element = array[i][j];
    console.log(element);
  }
}
