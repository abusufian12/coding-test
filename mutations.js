function mutation(arr){
    var first_word = arr[0].toLowerCase();
    var second_word = arr[1].toLowerCase();

    // for(let i=1; i < second_word.length; i++){
    //     if(first_word[i].indexOf(second_word[i]) === -1) return false;
    // }
    
    for(let letter of second_word){
        if(!first_word.includes(letter)) return false;
    }
    return true;
}

console.log(mutation(['hello', 'hey']));