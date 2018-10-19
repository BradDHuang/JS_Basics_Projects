


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


// method2

// cut the sticks

let lens = [1, 1, 2, 3];
// 1 1 2 3, min = 1, cuts = 4;
// - - 1 2, min = 1, cuts = 2;
// - - - 1, min = 1, cuts = 1;
// res = [4, 2, 1]

let lens2 = [5,4,4,2,2,8];

function cutSticks(lens) {
  let res = [];
  while (lens.length > 0) {
    res.push(lens.length);
    lens.sort((a, b) => a - b);
    let min = lens[0];
    for (let i = 0; i < lens.length; i++) {
      lens[i] -= min;
    }
    let lastZeroIdx = lens.lastIndexOf(0);
    lens.splice(0, lastZeroIdx + 1);
  }
  return res;
}

console.log(cutSticks(lens2));





