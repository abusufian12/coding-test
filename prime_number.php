<?php
//palindrome
function checkPrimeNumber($n){
    if ($n <2) {
        return 0;
    }

    for ($i=2; $i <= $n/2; $i++) { 
        if ($n % $i == 0) {
            return 0;
        }
    }

    return 1;
}

$input =59;
$num = checkPrimeNumber($input);
if ($num == 1) {
    echo "Prime number";
}else{
    echo "Not Prime number";
}