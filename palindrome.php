<?php

//palindrome
function palindrome($n){
    // by js
    // var reverese = n.splite("").reverese().join("");
    // if(n === reverese) return true;
    
    $number = $n;
    $sum = 0;
    while(floor($number)){
        $rem = $number % 10;
        $sum = $sum * 10 + $rem;
        $number =   $number / 10;
    }

    return $sum;
}

$input = 1121;
$num = palindrome($input);

if ($num == $input) {
    echo "palindrome number";
}else{
    echo "not palindrome number";
}