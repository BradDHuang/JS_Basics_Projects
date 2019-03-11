
const arr = [1,2,3,4,5,5];
console.log(splitArrToEqualSum(arr), splitArrToEqualSum2(arr));
const arr2 = [4,1,2,3];
console.log(splitArrToEqualSum(arr2), splitArrToEqualSum2(arr2));
const arr3 = [1,2,3,4];
console.log(splitArrToEqualSum(arr3), splitArrToEqualSum2(arr3));

// O(n^2) solution:
function splitArrToEqualSum(arr) {
    let leftSum = 0;
    let midIdx = 0;
    let leftArr = [], rightArr = [], res = [];
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        if (leftSum === rightSum) {
            midIdx = i + 1;
            break;
        }
    }
    if (midIdx === 0) return 'No valid subarr.s found.';
    for (let i = 0; i < midIdx; i++) {
        leftArr.push(arr[i]);
    }
    for (let i = midIdx; i < arr.length; i++) {
        rightArr.push(arr[i]);
    }
    res.push(leftArr, rightArr);
    return res;
}

// O(n) solution:
function splitArrToEqualSum2(arr) {
    let leftSum = 0;
    let midIdx = 0;
    let leftArr = [], rightArr = [], res = [];
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
    }
    let rightSum = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
        rightSum += arr[j];

        leftSum -= arr[j];

        if (leftSum === rightSum) {
            midIdx = j;
            break;
        }
    }
    if (midIdx === 0) return 'No valid subarr.s found.';
    for (let i = 0; i < midIdx; i++) {
        leftArr.push(arr[i]);
    }
    for (let i = midIdx; i < arr.length; i++) {
        rightArr.push(arr[i]);
    }
    res.push(leftArr, rightArr);
    return res;
}

