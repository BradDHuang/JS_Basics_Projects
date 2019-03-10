
// string permutation
/*
let str = "abc"; // No dup. in this case.

let arr = [];
for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}
// console.log(arr);

// get permutations:
function permute(arr) {
  let permutations = [];
  let permutation = [];
  helper(permutations, permutation, arr);
  return permutations;
}

function helper(permutations, permutation, arr) {
  if (permutation.length === arr.length) {
    permutations.push(permutation.join(""));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (permutation.includes(arr[i])) {
      continue;
    }
    permutation.push(arr[i]);
    helper(permutations, permutation, arr);
    // remove last char.
    permutation.splice(-1, 1);
  }
}

console.log(permute(arr));
*/

// Review version:

let str = 'abc';
console.log(permutations(str)); // Array(6) ["abc", "acb", "bac", "bca", "cab", "cba"]

function permutations(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    let res = [];
    let ele = [];
    helper(res, ele, arr);
    return res;
}
function helper(res, ele, arr) {
    if (ele.length === arr.length) {
        res.push(ele.join(''));
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (ele.includes(arr[i])) continue;
        ele.push(arr[i]);
        helper(res, ele, arr);
        ele.splice(-1, 1);
    }
}

