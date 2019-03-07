
let str = 'A4D1C5F'; // A - Z, 0 - 9.
// let arr = ['A', '4', 'D', '1', 'C', '5', 'F'];
// ['A', 'C', 'D', 'F', 10]
console.log(sortCharsSumNums(str)); // 'ACDF10'
console.log(sortCharsSumNums('str')); // rst

function sortCharsSumNums(str) {
    let newStr = str.split('').sort();
    // console.log(newStr);
    let sum = 0;
    let arr = [];
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] >= '0' && newStr[i] <= '9') {
            sum += Number(newStr[i]);
        } else {
            arr.push(newStr[i]);
        }
    }
    if (sum !== 0) {
        arr.push(sum);
    }
    // console.log(arr);
    return arr.join('');
}

