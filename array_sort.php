<?php
//palindrome
function arraySort(){
    $arr=[3,5,2,7,4,9,6];
    $temp = 0;
    for ($i=0; $i < count($arr); $i++) { 
        for ($j=0; $j < count($arr); $j++) { 
            if ($arr[$i] < $arr[$j]) {
                echo $arr[$i];
                echo $arr[$j];
                echo "\n";
                $temp = $arr[$i];
                $arr[$i] = $arr[$j];
                $arr[$j] = $temp;
            }
        }
    }

    return $arr;
}

$result = arraySort();
print_r($result);

