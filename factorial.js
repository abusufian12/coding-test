function calculateFactorial(number){
    var factorial_number = 1;
    for(let i=1; i < number; i++){
        factorial_number *= i;
    }
    return factorial_number;
}

// not accurate
// function calculateFactorial(number){
//     var n = number;
//     return n = n*(n+1)*(n+2);
// }

console.log(calculateFactorial(8));