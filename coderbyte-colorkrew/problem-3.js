function stockPicker(arr) { 
    var profit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
    var changeIndex = true;
    for (var i = 0; i < arr.length-1; i++) {
      sellPrice = arr[i+1];
      if (changeIndex) { buyPrice = arr[i]; }
      if (sellPrice < buyPrice) {
        changeIndex = true; 
        continue;
      } else { 
        var tempProfit = sellPrice - buyPrice;
        if (tempProfit > profit) { profit = tempProfit; }
        changeIndex = false;
      }
    }
    return profit;        
}
  
console.log(stockPicker([14,20,4,12,5,11])); 