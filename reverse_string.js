function revereseString(str){
    
    //return str.split("").reverse().join("");
    
    var reverse_string = '';
    for(let i=str.length -1; i >= 0; i--){
        reverse_string += str[i];
    }
    return reverse_string;
}

console.log(revereseString("hello"));