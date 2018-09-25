
// Given an array and a function, 
// write a function that returns a map 
// where the keys are the items of the array 
// and the values are the returning output of executing the function by passing item as parameter. 

let arr = [1,2,3,4,5];

function double(param) {
    return param * 2;
}

let map = new Map();

function returnMap(array) {
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], double(array[i]));
    }
    return map;
}

for (let [key, val] of returnMap(arr)) {
    console.log(key + " double gets: " + val);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map



