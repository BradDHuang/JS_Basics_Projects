// For a given sorted array (ascending order) and a target number, 
// find the first index of this number 
// in O(log n) time complexity.
// If the target number does not exist in the array, return -1.

const arr = [1,2,3,4,4,5];

function binarySearch(arr, k) {
    if (arr.length > 0) {
        let startIdx = 0;
        let endIdx = arr.length -1;
        while (startIdx + 1 < endIdx) {
            let midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
            // console.log('midIdx', midIdx);
            if (arr[midIdx] === k) {
                endIdx = midIdx;
            } else if (arr[midIdx] > k) {
                endIdx = midIdx;
            } else {
                startIdx = midIdx;
            }
        }
        if (arr[startIdx] === k) {
            return startIdx;
        }  
        if (arr[endIdx] === k) {
            return endIdx;
        }
    } 
    return -1;
}

console.log(binarySearch(arr, 4)); // 3
console.log(binarySearch([2,4,4,6], 4)); // 1

