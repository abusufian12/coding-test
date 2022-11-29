var topKFrequent = function (nums, k) {
  let countElements = {};
  //   let countElements2 = new Map();

  nums.forEach((el) => {
    countElements[el] ? countElements[el]++ : (countElements[el] = 1);
    //countElements2[el] ? countElements2[el]++ : (countElements2[el] = 1);
  });

  const sortCountElements = Object.keys(countElements).sort(function (a, b) {
    return countElements[b] - countElements[a];
  });
  //   console.log(sortCountElements);
  console.log(sortCountElements.splice(0, k));
};

// topKFrequent([1, 1, 1, 2, 2, 3], 2);
topKFrequent([4, 1, -1, 2, -1, 2, 3], 2); // output
