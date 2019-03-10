
const arr = [1,2,3,2,1,4,5,8,9,6,5,7,9];
console.log(longestIncSubarr(arr)); // [1,4,5,8,9]
console.log(longestIncSubarrLen(arr)); // 5

function longestIncSubarr(arr) {
    let max = 1, len = 1;
    let endIdx = 0, res = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            len++;
        } else {
            if (len > max) {
                max = len;
                endIdx = i - 1;
                // console.log(endIdx);
            }
            len = 1;
        }
    }
    if (len > max) max = len;
    for (let i = endIdx + 1 - max; i <= endIdx; i++) {
        res.push(arr[i]);
    }
    return res;
}

function longestIncSubarrLen(arr) {
    let max = 1, len = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            len++;
        } else {
            if (len > max) max = len;
            len = 1;
        }
    }
    if (len > max) max = len;
    return max;
}

