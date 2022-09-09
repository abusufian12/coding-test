
function getOnlyUniqueData(arr){
    let unique_value = {};
    var unique = arr.filter((element, index, a) => {
        unique_value[element] = arr.filter((e) => e == element).length;
        //return a.indexOf(element) === index
    });

    Object.keys(unique_value).map((element) => {
        console.log(unique_value[element]);
        if(unique_value[element] > 1){
            delete unique_value[element];
        }
    })
    return unique_value;
    //return [...new Set(arr)]
}
//console.log(getOnlyUniqueData([2, 10, 3, 10, 2, 2, 5]))


let x = {a:10}
let y = x;
x.a = 15;

//console.log(y.a)

function sum(a){
    console.log(a);
    console.log(arguments);
    return arguments.length === 3   //were two arguments passed?
    ? a+b                         //yes: return their sum
    : (b) => a+b 
}

console.log(sum(2)(3)(4));

let obj1 = {}
let obj2 = {}

console.log(obj1 === obj2)

// [2, 10, 3, 10, 2, 2, 5] result = 3, 5