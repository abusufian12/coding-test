function findLongestWord(words){

    var words = words.split(" ");
    var lognest_word = "";
    for(var word of words){
        if(word.length > lognest_word.length) lognest_word = word;
    }
    return lognest_word.length;
}

console.log(findLongestWord("The quick brown jumped over the lazy dog"));