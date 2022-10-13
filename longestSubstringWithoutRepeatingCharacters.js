
function LongestSubstringWithoutRepeatingCharacters(str){
    // var longest_str = [];
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== str[i+1] && !longest_str.includes(str[i])) {
    //         longest_str.push(str[i]);
    //     }
    //     if (str[i] === str[i+1]) {
    //         longest_str = [];
    //         longest_str.push(str[i]);
    //     }
    // }
    // console.log(longest_str);

    var start = 0, maxLen = 0;
    var map = new Map();

    for(var i = 0; i < str.length; i++) {
        var ch = str[i];
        
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
        
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
        //maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;

}

console.log(LongestSubstringWithoutRepeatingCharacters("abcabcbb")); // output: 3, Explanation: The answer is "abc", with the length of 3
//console.log(LongestSubstringWithoutRepeatingCharacters("bbbbb")); // output: 1, Explanation: The answer is "b", with the length of 1.
//console.log(LongestSubstringWithoutRepeatingCharacters("pwwkew")); // output: 3, Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.