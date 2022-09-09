// problem 3
function solution(name){
return name.split('').map((e)=>{
    if(Number.isInteger(parseInt(e))) {
        return [...Array(parseInt(e)).fill(1).values()].join('');
    }
    return e;
}).join('');
}
console.log(solution("abc5bc3"));

/**
 * Given a string s consisting of Latin letters and digits, change each of its digit to the corresponding number of ones.

Example

For s = "abc5bc3", the output should be solution(s) = "abc11111bc111".

We change digit 5 to five ones and digit 3 to three ones.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

The string consisting of Latin letters and digits.

Guaranteed constraints:
1 ≤ s.length ≤ 100.

[output] string

The input string with digits replaced to the corresponding number of ones.
 */


