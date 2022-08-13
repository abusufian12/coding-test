// function bouncer(arr){
//     const truthies = [];    
//     for(let element of arr){
//         if(element) truthies.push(element);
//     }
//     return truthies;
//}

function bouncer(arr){
    return arr.filter(function(elem){
        return elem;
    })
}

console.log(bouncer([7, false, undefined, 'hey', "", null]));