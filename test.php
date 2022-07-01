<?php

function twoSum($nums, $target) {
    $sum = 0; $output = array();
    foreach($nums as $key => $num){

        $sum = $nums[$key] + $nums[$key+1];
        if($sum == $target){
            $output[] = $key;
            $output[] = $key+1;
            return $output;
            //return array_push($output, $key, $key+1);
        }
        
    }
}

$nums = [11,15,2,7]; $target = 9;
//$nums = [3,2,4]; $target = 6;
//$nums = [2,7,11,15]; $target = 9;
print_r(twoSum($nums, $target));
?>