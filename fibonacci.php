<?php
//way 2
// function Fibonacci($n)
// {
//     return round(pow((sqrt(5)+1)/2, $n) / sqrt(5));
// }

//way 3
// function Fibonacci($n) {
//     $fib_array = [0, 1];
//     for ($i = 2; $i < $n; $i++) {
//         $fib_array[$i] = $fib_array[$i - 1] + $fib_array[$i - 2];
//     }
//     return $fib_array;
// }

// way 4
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

//way 5
// function fibonacci(n){
//     if (n < 2) {
//         return n;
//     } else {
//        return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

//way 1
function Fibonacci($n){
    return $n <= 1 ? $n : Fibonacci($n-1) + Fibonacci($n-2);
}

$input = 10;
$num = Fibonacci($input);
echo $num;
