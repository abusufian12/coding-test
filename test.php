<?php
/*
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
*/

// function arraySum($v)
// {
//     return $v + $v;
// }
// $arr = [2, 3, 4, 5, 8];
// print_r(array_map('arraySum', $arr));

// function arraySum($v1, $v2)
// {
//     return $v1 + $v2;
// }
// $arr = [2, 3, 4, 5, 8];
// print_r(array_reduce($arr, 'arraySum'));

// $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
 
// var_dump(json_decode($jsonobj, true));


//$string = "abc$@0123&%";
//$string = preg_filter("/[^0-9a-z]/", '', $string);
//print_r($string);

// $input = [
//     "Red",
//     "Pink",
//     "@@#$",
//     "455",
//     "12",
//     "*&"
//   ];
// $input = preg_grep("/[0-9a-z]/", $input);
// print_r($input);

// $string2 = "abc$@0123&%";
// $string2 = preg_match_all("/[0-9a-z]/i", $string2);
// print_r($string2);

// $string3 = "abc$@0123&%";
// $arr = str_split($string3);
// foreach ($arr as $key => $value) {
//     echo $value . "\n";
// }

// $json = '{"number": 123456789012345678901234567890}';
// $decoded = (array) json_decode($json);
// echo $decoded['number'];
// //or
// $decoded = json_decode($json, true);
// echo $decoded['number'];
// //or
// $decoded = json_decode($json);
// echo $decoded->number;

// $x = (object) ['a' => 'sufian'];
// echo $x->a;

// $x = "abcd";
// $arr = explode(" ", $x);
// print_r($arr);

// $y = implode(" ", $arr);
// print_r($y);

$x = "abcd";
$arr = chunk_split($x, "2");
print_r($arr);

// $y = join(", ", $arr);
// print_r($y);
?>