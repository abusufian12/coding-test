function confirmEnding(str, target){

    //return str.substr(-target.length) === target;
    //or
    return str.slice(-target.length) === target;
}
console.log(confirmEnding("Sufian", "an"));

