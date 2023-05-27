const threeDimensionalArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

for (let i = 0; i < threeDimensionalArray.length; i++) {
  for (let j = 0; j < threeDimensionalArray[i].length; j++) {
    for (let k = 0; k < threeDimensionalArray[i][j].length; k++) {
      console.log(threeDimensionalArray[i][j][k]);
    }
  }
}
