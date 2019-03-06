let a = [1,2,3,5,9];
let b = [4,6,7,8];

function mergeSortedArr(a1, a2) {
    return a1.concat(a2).sort((a, b) => a - b);
}

console.log(mergeSortedArr(a, b));

