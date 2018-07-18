


var res = [];
function cutSticks(arr) {
    let len = arr.length;
    res.push(len);
    let min = arr[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let newArr = [];
    for (let j = 0; j < len; j++) {
        arr[j] -= min;
        if (arr[j] !== 0) {
            newArr.push(arr[j]);
        }
    }
    if (newArr.length === 0) {
        return res;
    } else {
        return cutSticks(newArr);
    }
}

// const arr1 = [1,1,2,3]; // [4,2,1]
// console.log(cutSticks(arr1));
const arr2 = [5,4,4,2,2,8]; // [6,4,2,1]
console.log(cutSticks(arr2));





