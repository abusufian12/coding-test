function plusMinus(arr) {
    // Write your code here
    let result = arr.reduce(function(obj, b){
        if(b > 0) obj['positive'] = ++obj['positive'] || 1;
        if(b < 0) obj['negative'] = ++obj['negative'] || 1;
        if(b == 0) obj['zero'] = ++obj['zero'] || 1;
        return obj;
    },{'positive': 0, 'negative': 0, 'zero': 0})
    var count = arr.length;
    console.log((result['positive']/count).toFixed(6));    
    console.log((result['negative']/count).toFixed(6));
    console.log((result['zero'] /count).toFixed(6))
    

}

plusMinus([1, -2, -7, 9, 1, -8, -5]);