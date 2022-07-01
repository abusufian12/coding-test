<?php
/*
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.
*/

function solution($A) {
    // write your code in PHP7.0
    $n=1;
    sort($A);
    foreach ($A as $key => $value) {
        if($value <= 0) continue;

        if($n < $value){
            return $n;
        }else{
            $n = $value+1;
        }
    }
    return $n;
    
}
$A = [1, 3, 6, 4, 1, 2];
echo solution($A);

?>