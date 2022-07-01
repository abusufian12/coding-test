<?php

interface Machine {
	public function calcTask();
}

/**
 * 
 */
class Circle implements Machine
{
	private $radius;
	function __construct($radius)
	{
		$this->radius = $radius;
	}

	public function calcTask()
	{
		$this->radius * $this->radius * pi();
	}
}

/**
 * 
 */
class Rectangle implements Machine
{
	private $height;
	private $weight;
	function __construct($height, $weight)
	{
		$this->height = $height;
		$this->weight = $weight;
	}

	public function calcTask(){
		$this->height * $this->weight;
	}
}
?>