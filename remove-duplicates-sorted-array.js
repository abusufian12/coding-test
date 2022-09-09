// 1st way
// function RemoveDuplicatesSortedArray(arr){
//     var unique_value = [];
//     arr.filter(function(value, index, array){
//         if (array.indexOf(value) === index) {
//             unique_value.push(value)
//         }
//     })
//     return unique_value;
// }

//2nd way
// function RemoveDuplicatesSortedArray(arr){
//     var unique_value = [];
//     for(let i = 0; i < arr.length; i++){
//         if(unique_value.includes(arr[i]) == false){
//             unique_value.push(arr[i]);
//         }
//     }
//     return unique_value;
// }

//3rd way
// function RemoveDuplicatesSortedArray(arr){
//     var unique_value = [];
//     for(let i = 0; i < arr.length; i++){
//         if(unique_value.indexOf(arr[i]) == -1){
//             unique_value.push(arr[i]);
//         }
//     }
//     return unique_value;
// }

//4th way
function RemoveDuplicatesSortedArray(arr){
    let unique_value = 0;    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            console.log(arr[i], arr[i+1], unique_value)
            arr[unique_value] = arr[i];
            unique_value++;
        }
    }
    //return unique_value;
}

console.log(RemoveDuplicatesSortedArray([0,0,1,1,1,2,2,3,3,4]));