function diffArray(arr1, arr2){
    commb_arr = arr1.concat(arr2);
    diff_number = [];
    commb_arr.filter(function(num){
        if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
            diff_number.push(num);
        }
    })
    return diff_number;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 6]));