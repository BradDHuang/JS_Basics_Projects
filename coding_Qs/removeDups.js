// remove dup. char.s of a str.
let str = "cbbaacccdee";

// method 1:
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   obj[str[i]] = 1;
// }
// // console.log(obj);

// let resStr = "";
// for (let key in obj) {
//   resStr += key;
// }
// console.log(resStr);

// method 2:
let set = new Set(str);
let res = String.prototype.concat(...set);
console.log(res);

// Remove dup. e. in an arr.
function findDupInArr(arr) {
    let newArr = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    for (let p in obj) {
        newArr.push(Number(p));
    }
    return newArr;
}

console.log( findDupInArr([]) ); // []
console.log( findDupInArr([1, 1, 1]) ); // [1]
console.log( findDupInArr([1, 5, 3, 1, 5, 1]) ); // [1, 3, 5]


