<?php
// echo intval('100', 16); 

function getGaps($binaryArray, $gaps)
{
	
	$first_one = array_search("1", $binaryArray);
	
	if ($first_one >  -1) {
		$newBinaryArray = array_slice($binaryArray, $first_one+1);

		$secondOne = array_search("1", $newBinaryArray);

		if ($secondOne > 0) {
			array_push($gaps, $secondOne);
		}

		return getGaps(array_slice($newBinaryArray, $secondOne+1), $gaps);
	}

	return (count($gaps) ? max($gaps) : 0);
}

function solution ($N) {

	if (intval($N, 10) && $N >= 1 && $N <= 2147483647) {
		echo $binary = decbin($N);
		echo "\n";
		$binary = str_split($binary);
		//print_r($binary);

		return getGaps($binary, []);
	}

	return 0;

}

echo solution('529');

?>