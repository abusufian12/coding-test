/**
 * 11 2 4
 * 4  5 6
 * 10 8 -12
 * 
 * 11+5+(-12) = 4
 * 4+5+10 = 19
 * 19-4 = 15
 */
/*
 function diagonalDifference(arr) {
    // Write your code here
    let first_diagonal = 0 ;
    let second_diagonal = 0 ;
    const len = arr.length
    
    for (let i = 0; i < len; i++){
        first_diagonal += arr[i][i];
        second_diagonal += arr[ (len-1) - i][i]    
    }
    
    return Math.abs(first_diagonal - second_diagonal);
    
}
*/

function diagonalDifference(arr) {
    // Write your code here
    let first_diagonal = 0;  let second_diagonal = 0;
    arr.forEach(function(value, index, arr){
        //console.log(value)
        if (index == 0 || index == 4 || index == 8 ) {
            first_diagonal = first_diagonal+value;
        }

        if (index == 2 || index == 4 || index == 6 ) {
            second_diagonal = second_diagonal+value;
        }
    });

    return Math.abs(first_diagonal-second_diagonal);
    
}

console.log(diagonalDifference([11,2,4,4,5,6,10,8,-12])); // output 15 
console.log(diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9])); // output 2 The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is  15-17=2