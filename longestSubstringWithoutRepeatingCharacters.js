
function LongestSubstringWithoutRepeatingCharacters(str){
    var arr = str.split();
    console.log(arr);
    for (value of arr){
        if (target.indexOf(value) === -1) {
            result.push(value);
        }
    }
    return result;

    // return arr.filter(function(value){
    //     return target.indexOf(value) === -1;
    // })
}

console.log(LongestSubstringWithoutRepeatingCharacters("abcabcbb")); // output: 3, Explanation: The answer is "abc", with the length of 3
//console.log(LongestSubstringWithoutRepeatingCharacters("bbbbb")); // output: 1, Explanation: The answer is "b", with the length of 1.
//console.log(LongestSubstringWithoutRepeatingCharacters("pwwkew")); // output: 3, Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.