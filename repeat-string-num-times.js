//1st way
// function repeatStringNumTimes(str, number){

//     if(number < 0) return "";
//     return str.repeat(number);
// }

//2nd way
// function repeatStringNumTimes(str, number){
//     var final = "";
//     if(number < 0) return "";
//     for (let i = 0; i < number; i++) {
//         final += str;
//     }
//     return final;
// }

//3rd way
function repeatStringNumTimes(str, number){
    var final = "";
    if(number < 0) return "";
    if(number == 1) return str;

    return str + repeatStringNumTimes(str, number-1);
}
console.log(repeatStringNumTimes("Sufian", 4));

