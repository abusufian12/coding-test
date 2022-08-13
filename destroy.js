
function destroy(arr){
    var args = Array.from(arguments);
    args.splice(0,1);
    var target = args;

    var result = [];
    for (num of arr){
        if (target.indexOf(num) === -1) {
            result.push(num);
        }
    }
    return result;

    // return arr.filter(function(num){
    //     return target.indexOf(num) === -1;
    // })
}

console.log(destroy([1,2,3,1,2,3], 2,3));