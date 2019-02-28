
function findDupInArr(arr) {
    let newArr = [];
    
    arr.forEach((e, idx) => {
        if (arr.indexOf(e, idx + 1) !== -1) {
            if (newArr.indexOf(e) === -1) {
                newArr.push(e);
            }
        }
    });

    return newArr;
}

console.log( findDupInArr([]) ); // []
console.log( findDupInArr([1, 1, 1]) ); // [1]
console.log( findDupInArr([1, 5, 3, 1, 5, 1]) ); // [1, 5]


