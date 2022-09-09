function LongestCommonPrefix(arr){
    let prefix = arr[0];
    for(word of arr){        
        while(word.indexOf(prefix) !=0){
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    return prefix;
}

console.log(LongestCommonPrefix(["flower","fkow"]));