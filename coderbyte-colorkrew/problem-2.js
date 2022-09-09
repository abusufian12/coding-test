function SearchingChallenge(strArr) { 

    // code goes here  
    var max_zero = 0;
    for (let i = 0; i < strArr.length; i++) {
      var row_max_zero = 0;
      var count_max_zero = 0;
      for (let j = 0; j < strArr[i].length; j++) {
        if(strArr[i][j] == 0){
          row_max_zero += 1;
          
        }
        else if(strArr[i][j] == 1){
          if (row_max_zero > count_max_zero) {
            count_max_zero = row_max_zero;
          }
          row_max_zero = 0;
        }
        //console.log(strArr[i][j])
      }
      if(max_zero < count_max_zero){
        max_zero = count_max_zero;
      }
    }

    return max_zero; 
  
  }
  /**
   * "0 1 1 1 1", 
   * "0 1 1 0 1",
   * "0 0 0 1 1",
   * "1 1 1 1 0"
   * 3
   * "1 0 1 1",
   * "0 0 1 0"
   * 
   *  */   
  // keep this function call here 
  console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]));