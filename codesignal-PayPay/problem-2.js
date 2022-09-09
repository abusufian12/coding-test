function solution(elements) {
    //elements.unshift(elements.pop());
    var copy = [];
    //let sort = elements.slice().sort(function(a, b){return a - b}).join('');
    // console.log(copy.join(''), sort)
    // var result = [];
    for (let i = 0; i < elements.length -1; i++) {
        copy.push(elements[i-1] ? elements[i -1] : elements[i]);
    }
    // elements.sort(function(a, b){return a - b});
    console.log(elements, copy);
    
    //return copy.join('') == sort ? copy : -1;
}
  console.log(solution([3, 4, 5, 1, 2]));  