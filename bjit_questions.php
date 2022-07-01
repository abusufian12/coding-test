<?php
echo "------------------Question No. 1-------------------------<br>";
// function getConsonants($data){
// 	$removable_char = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ");

// 	$result = str_replace($removable_char, "", $data);
// 	$result = strtoupper($result);
// 	$result2=array();
// 	for ($i = 0; $i < strlen($result); $i++){
// 	    $result2[$i]=$result[$i].'*';
// 	}
// 	$result=rtrim(implode("",$result2), "*");
// 	return $result;
// }

// $input1 = "1A2bcDnajMkW";
// $input2 = "A1B2C3DEFGH";

// print_r(getConsonants($input1));
// echo "<br>";
// print_r(getConsonants($input2));

?>

<?php  
echo "<br><br>------------------Question No. 2-------------------------<br><br>";


?>
<?php  
echo "<br><br>------------------Question No. 3-------------------------<br><br>";


?>
<?php
echo "<br><br>------------------Question No. 4-------------------------<br><br>";
/*
Given two expression in the form of strings. You have to write a program to eliminate all
numeric values from string and then compare and check if they are similar.
Example:
Input1: "2a-b-(3c-d)" & "5a-b-c+6d"
Output1: Two expressions are identical
Input2: "2a-b-(3c-d)" & "5a-b-c-6d"
Output2: Two expressions are different
*/
$input1="2a-b-(3c-d)";
$removable_char = array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ");
$result = str_replace($removable_char, "", $input1);

// preg_match('#\((.*?)\)#', $result, $match);
// print_r($match);
// $result = preg_replace("/\(([^)]+)\)/", "",$result);
//print_r($result);

$result = str_split($result);
foreach ($result as $key => $value) {
	echo $value.'<br>';
	if($value == '('){
		echo $result[$key-1].' d<br>';
		checkOperator($result[$key-1]);
	}
}

function checkOperator($sign){

}

?>


<?php

echo "<br><br>------------------Question No. 5-------------------------<br><br>";

/*
Suppose you are designing a automatic car controlling system for different brands like BMW,
Ford and GMC. Different brands have different types of behaviour in changing gear with
respect to speed, speed up rate in pressing an accelerator and slow down rate in applying
brakes. Hummer is a sub-brand of GMC and its behaviour is also different from traditional
GMC brand. Therefore, your system should be designed in such a way that all of the
behaviours are reflected. Write the program from OOD and OOP concept.
i. Abstraction: Define a parent class i.e Car and declare behaviour changeGear, speedUp
and applyBrakes.
ii. Inheritance: Define sub-classes for different brands like BMWCar, FordCar and GMCCar
iii. Polymorphism: Apply run-time polymorphism to override the traditional behaviour of
GMC brand
*/

abstract class Car {
  
  abstract public function changeGear();
  abstract public function speedUp();
  abstract public function applyBrakes();
}


class BMWCar extends Car {
  public function changeGear() {
    return "BMW changeGear Option";
  }
  public function speedUp() {
    return "BMW speedUp Option";
  }
  public function applyBrakes() {
    return "BMW applyBrakes Option";
  }

}

class FordCar extends Car {
  public function changeGear() {
    return "FordCar changeGear Option";
  }
  public function speedUp() {
    return "FordCar speedUp Option";
  }
  public function applyBrakes() {
    return "FordCar applyBrakes Option";
  }
}

class GMCCar extends Car {
  public function changeGear($brand=null) {
  	if ($brand) {
  		 return "GMCCar changeGear and brand: $brand";
  	}else{
  		return "GMCCar changeGear option";
  	}
    
  }
  public function speedUp($brand=null) {
    if ($brand) {
    return "GMCCar speedUp Option and brand: $brand";
    }else{
    	return "GMCCar speedUp option";
    }	
  }
  public function applyBrakes($brand=null) {
    if ($brand) {
    return "GMCCar applyBrakes Option and brand: $brand";
    }else{
    	return "GMCCar applyBrakes option ";
    }	
  }
}

$bmwcar = new BMWCar();
$fordcar = new FordCar();
$gmccar = new GMCCar();

echo $bmwcar->changeGear();
echo "<br>";
echo $fordcar->changeGear();
echo "<br>";
echo $gmccar->changeGear();

echo "<br>";
echo $gmccar->changeGear('Hummer Brand');
?>



<script type="text/javascript">
<!-- Question 4 -->
var exp1 = "a-b-(c-d)";
exp1=change(exp1);
var exp2 = "a-b-c+d";
exp2=change(exp2);

function change(test){
var test1='';
var flag=0;
var t=test.length;

for(var i=0; i<t; i++){
        if(test.substring(i,i+2)=="-("){
         
        	test1+='-'+test.charAt(i+2);
        	i=i+2;
 			flag=1;

        }else if(flag==1){
           
           if(test.charAt(i)==')'){
            	flag=0;

           }else{

				if(test.charAt(i)=='+'){
		            test1+='-a';
		        }else if(test.charAt(i)=='-'){
		           test1+='+';
		        }else{
		           test1+=test.charAt(i);
		        }

            }

		}else{
        	test1+=test.charAt(i);
        }
}
return test1;
}

var j=0;
if(exp1.length==exp2.length){
  for(var i=0;i<exp1.length;i++){
    if(exp1[i]==exp2[i]){
     j++;
    }
    else{
    console.log('No');
    break;
    }
  }
}
else{
 console.log('No');
}
if(j==exp1.length){
console.log('Yes');
}	
</script>