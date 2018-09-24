
// Reverse a string but if the letter repeat 3 or more times in a row skip it in the results 
// Input: abbccccbdd 
// Output: ddbbba 

var str = "abbccccbdd"; 

function reverseAndSkip(str) {
    let newStr = str.split("").reverse().join(""); // console.log(newStr); // ddbccccbba
    if (str.length <= 2) {
        return newStr;
    }
    let count = 1;
    let res = "";
    let cur = newStr[0];
    for (let i = 1; i < str.length; i++) {
        if (newStr[i] === newStr[i - 1]) {
            count++;
            cur += newStr[i]; // console.log("the cur now is " + cur);
        } else {
            if (count <= 2) {
                res += cur; // console.log("the res now is " + res);
                cur = newStr[i];
            } else {
                count = 1;
                cur = newStr[i];
            }
            if (i === str.length - 1) {
                res += newStr[i];
            }
        }
    }
    return res;
}
console.log(reverseAndSkip(str));





