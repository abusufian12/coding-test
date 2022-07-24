function calculateFactorial(number){
    var factorial_number = 1;
    for(let i=1; i < number; i++){
        factorial_number *= i;
    }
    return factorial_number;
}

console.log(calculateFactorial(8));