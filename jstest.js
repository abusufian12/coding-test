// function myDisplayer(some) {
//     document.getElementById("s").innerHTML=some;
// }

// function calculator(x, y, callback) {
//     let sum = x + y;
//     callback(sum);
// }

//  calculator(3,3, myDisplayer);

//fibonacci
 // 0,1,1,2,3,5,8,13,21,34,55,89,144
// var first=0;
// var second=1;
//  for (let i = 0; i < 15; i++) {
//     relutl= first+second;
//     console.log(result);
//     first=second;
//     second=result;
     
//  }


 function fibonacci(n){
     if (n < 2) {
         return n;
     } else {
        return fibonacci(n-1) + fibonacci(n-2);
     }
 }
 

 //get user input
//  const number = 10;

//  if (number <= 0) {
//      console.log("Enter positme number");
//  } else {
//      for (let i = 0; i < number; i++) {
//          console.log(fibonacci(i))
         
//      }
//  }



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


