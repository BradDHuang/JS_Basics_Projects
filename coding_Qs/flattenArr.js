
let arrs = [1,[3,[5,5,5]],[7],9];

// console.log([].concat(...arrs));

let arr = arrs.reduce((acc, val) => acc.concat(val), []);

let deepArr = function(arrs) {
    return arrs.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepArr(val)) : acc.concat(val), []);
};

console.log(arr); 
// [1, 3, [5, 5, 5], 7, 9]

console.log(deepArr(arrs)); 
// [1, 3, 5, 5, 5, 7, 9]


