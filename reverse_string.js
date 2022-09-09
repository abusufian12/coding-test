console.time()
function revereseString(str){
    //return str.split("").reverse().join("");
    
    var reverse_string = '';
    for(let i=str.length -1; i >= 0; i--){
        reverse_string += str[i];
    }
    return reverse_string;
}
console.timeEnd();

// way 2
/*
console.time();
function revereseString(str){
    var str_length = str.length;
    var last = str_length-1;

    var charArray = str.split('');
    for (let i = 0; i < str_length/2; i++) {
        let ch = charArray[i];
        charArray[i] = charArray[last - i];
        charArray[last - i] = ch;
        
    }

    return charArray.join('');
}
console.timeEnd();
*/
console.log(revereseString("hello"));