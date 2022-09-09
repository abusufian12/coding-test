<?php
/*
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
*/
function checkPalindrom($string){
    
    // way 1
    // if($string == strrev($string)){
    //     echo "is palindrome";
    // }else{
    //     echo "not palindrome";
    // }
    // strrev()
    $result = "";
    // way 2    
    // for ($i = strlen($string)-1; $i >= 0; $i--){
    //     $result .=$string[$i];
    // }

    //way 3
    foreach (array_reverse(str_split($string)) as $key => $value) {
        $result .=$value;
    }
    
    if ($string == $result) {
        echo "is palindrome";
    }else{
        echo "not palindrome";
    }

    
    
}

checkPalindrom(' 31213 ');