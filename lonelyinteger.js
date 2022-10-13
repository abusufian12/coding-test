function lonelyinteger(a) {
    // Write your code here
    var duplicate_value = a.filter((e, i, a) => a.indexOf(e) !== i);
    var lonely_value = a.filter((item) => !duplicate_value.includes(item));
    return lonely_value;
}

console.log(lonelyinteger[4, 9, 95, 93, 57, 4, 57, 93, 9]);  // output [95]