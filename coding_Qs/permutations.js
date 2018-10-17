
// string permutation

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




