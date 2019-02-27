
console.log(divideArr([1,3,5,7],2));
// [[1,3],[5,7]]
console.log(divideArr([1,3,5,7,9],2));
// [[1,3],[5,7],[9]]

function divideArr(arr, k) {
    let newArr = [];
    let len = arr.length;
    let startIdx = 0;
    while(len > 0) {
        newArr.push(arr.slice(startIdx, startIdx + k));
        len -= k;
        startIdx += k;
    }
    return newArr;
}

