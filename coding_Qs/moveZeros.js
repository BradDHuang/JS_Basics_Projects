let arr = [1,0,4,0,3,4,1,0];
console.log(moveZerosToRHS(arr)); // [1,4,3,4,1,0,0,0]

function moveZerosToRHS(arr) {
    let marker = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp = arr[marker];
            arr[marker] = arr[i];
            arr[i] = temp;
            marker++;
        }
    }
    return arr;
}

