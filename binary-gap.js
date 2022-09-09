function binaryGap(N) {
    
    
    let binary_number = N.toString(2);
    console.log(binary_number);

    let max_gap = 0;

    for(let i=0; i <= binary_number.length; i++){

        for (let j = i+1; j < binary_number.length; j++) {
            if (binary_number[i] == 1 && binary_number[j] == 1) {
                if (max_gap < j - i - 1) {
                    max_gap = j - i -1;
                }
                i = j;
            }
        }
        
        //console.log(binary_number[i])
    }
    return max_gap;
}

console.log(binaryGap(33))

/*
// Binary Gap
function solution (N) {
     
    // Tests if our value is an integer 
    // Tests if N is within range
    if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {

        //convert to binary
        const binaryNumber = N.toString(2);

        //convert to array
        const convArray = binaryNumber.split('');

        //get first value
        const firstValue= convArray.indexOf("1");

        return firstValue;
    }
     
    // default if it doesn't meet the requirements
    return 0;
}

// 1041
console.log(solution(1041));
*/