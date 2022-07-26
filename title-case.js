// function titleCase(str){
//     var words = str.toLowerCase().split(" ");
//     var lognest_word = "";
//     for(let i=0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

function titleCase(str){
    var words = str.toLowerCase().split(" ").map(function(element){
        return element[0].toUpperCase() + element.slice(1)
    });

    return words.join(" ");
}
console.log(titleCase("The quick brown jumped over the lazy dog"));

