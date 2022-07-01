<?php
function reverseArray($a) {
    // Write your code here
    $rev_arr=[];
    for($i=count($a)-1; $i >= 0; $i--){
        array_push($rev_arr,$a[$i]);
    }
    echo "<pre>";
    print_r($rev_arr);

}

$arr=[1,4,3,2];
reverseArray($arr);
?>


