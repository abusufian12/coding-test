function SumAllNumbersInRange(arr){
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    var total = 0;
    for (let i = start; i <=end; i++) {
        total += i;
    }
    return total;
}

console.log(SumAllNumbersInRange([2, 5]));