// 1st way
// function largestNumberInArrays(arr){
//     var maxes = [];
//     for (let i = 0; i < arr.length; i++) {
//         var large_number = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             if(large_number <= arr[i][j]) large_number = arr[i][j];
//         }
//         maxes.push(large_number);
//     }
//     return maxes;
// }

//2nd way
function findMax(arr){
    var large_number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(large_number <= arr[i]) large_number = arr[i];
    }
    return large_number;
}

function largestNumberInArrays(arr){
    var maxes = [];
    for (let i = 0; i < arr.length; i++) {
        var inner_max = findMax(arr[i]);
        maxes.push(inner_max);
    }
    return maxes;
}

console.log(largestNumberInArrays([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));