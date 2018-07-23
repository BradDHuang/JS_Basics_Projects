
// integers within the 32-bit signed integer range. 
// assume that your function returns 0 when the reversed integer overflows. 
// Please use exception handling to deal with integer overflows.

function reverseInt(int) {
    let arr = int.toString().split("");
    let num;
    if (arr[0] === '-') {
        let sign = arr.shift();
        num = parseInt(sign + arr.reverse().join(""));
    } else {
        num = parseInt(arr.reverse().join(""));
    }
/*
    if (num >= Math.pow(2, 31) || num < (-1) * Math.pow(2, 31)) {
        num = 0;
    }
*/
    try {
        if (num >= Math.pow(2, 31) || num < (-1) * Math.pow(2, 31)) {
            throw new Error();
        }
    } catch(err) {
        num = 0;
    }
    return num;
}
console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(-120)); // -21
console.log(reverseInt(7463847412)); // 2147483647 = (2 ^ 31) - 1
console.log(reverseInt(8463847412)); // 0
console.log(reverseInt(-8463847412)); // -2147483648 = -(2 ^ 31)
console.log(reverseInt(-9463847412)); // 0






