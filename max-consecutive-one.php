<?php
//Max consecutive ones
$array = array(1,1,0,1,0,1,1,1,0,1,1,1,1,0,1);
$count = 0;
$max = 0;

foreach( $array as $key => $value ){
    if($value == 1){
    	$count++;
    }else{
    	if($count > $max){
    		$max = $count;
    	}
    	$count= 0;
    
    }
}

echo $max;