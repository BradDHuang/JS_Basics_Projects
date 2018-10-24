
// Search in Rotated Sorted Arr.
// Assume no dup.
// return index or -1.

let sortedArr = [4,5,6,7,0,1,2];
let t = 1;

function search(arr, target) {
  let startIdx = 0, endIdx = arr.length - 1;
  while (startIdx + 1 < endIdx) {
    // let mid = startIdx + (endIdx - startIdx) / 2;
    // console.log(mid);
    let mid = Math.floor(startIdx + (endIdx - startIdx) / 2);
    if (arr[startIdx] < arr[mid]) {
      if (arr[startIdx] <= target && target <= arr[mid]) {
        endIdx = mid;
      } else {
        startIdx = mid;
      }
    } else {
      if (arr[mid] <= target && target <= arr[endIdx]) {
        startIdx = mid;
      } else {
        endIdx = mid;
      }
    }
  }
  if (arr[startIdx] === target) {
    console.log(`arr[${startIdx}] = ${target}`);
    return startIdx;
  } 
  if (arr[endIdx] === target) {
    console.log(`arr[${endIdx}] = ${target}`);
    return endIdx;
  }
  return -1;
}

console.log(search(sortedArr, t));





