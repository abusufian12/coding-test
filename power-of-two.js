function PowersofTwo(num) { 

  // code goes here  
  if (num == 0){
    return false;
  }
 
  return parseInt( (Math.ceil((Math.log(num) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(num) / Math.log(2))))));

}
   
// keep this function call here 
console.log(PowersofTwo(readline()));