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




