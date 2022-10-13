function repeatedString(s, n) {
    // Write your code here
    let a = (s.match(/a/g) || '').length;
    a = Math.floor(n/s.length) * a;
    console.log(n%s.length);
    return a +  (s.substring(0, n % s.length).match(/a/g) || '').length;

}

console.log(repeatedString('aab', 882787));