
/*
Given: 	
a=1 b=2 c=3 d=4 e=5 f=6 ... z=26,
And 
    abc -> 1 + 2 + 3 = 6
    bdc -> 2 + 4 + 3 = 9
    fc -> 6 + 3 = 9
For input: "abc cde adb dfb def ee abcd cc"
Output will be: 
{
  "6": ["abc", "cc"],
  "12": ["cde", "dfb"],
  "7": ["adb"],
  "15": ["def"],
  "10": ["ee", "abcd"]
}
Write a function to do so.
*/

let input = "abc cde adb dfb def ee abcd cc";

function charToNum(input) {

    let arr = input.split(" ");
    // console.log(arr);
    var res = [];
    var output = {};
    // var prop;
    var noDup = [];
    for (let i = 0; i < arr.length; i++) {
        var len = arr[i].length;
        let sum = 0;
        for (let j = 0; j < len; j++) {
            sum += arr[i].charCodeAt(j) - 96;
        }
    // console.log(sum);
        if (res[sum] === undefined) {
            res[sum] = [arr[i]];
        } else {
            res[sum].push(arr[i]);
        }
    // console.log(res[sum]);
        var pos;
        if (noDup.length === 0 && sum !== 0) {
            pos = 0;
            noDup.push(sum);
        } else {
            let dup;
            for (let l = 0; l < noDup.length; l++) {
                if (noDup[l] === sum) {
                    pos = l;
                    dup = true;
                    break;
                }
            }
            if (!dup) {
                noDup.push(sum);
                pos = noDup.length - 1;
            }
        }
    // console.log(noDup); // [6, 12, 7, 15, 10]
        res[pos] = res[sum];
    // console.log(res); // [Array(2), Array(2), Array(1), Array(1), Array(2), ...]
    }
    for (let i = 0; i < noDup.length; i++) {
        output[noDup[i].toString()] = res[i];
    }
    console.log(output);
    console.log(output[noDup[0].toString()]);
    console.log(output[noDup[1].toString()]);
    console.log(output[noDup[2].toString()]);
    console.log(output[noDup[3].toString()]);
    console.log(output[noDup[4].toString()]);

}

charToNum(input);

/*
object {6: Array(2), 7: Array(1), 10: Array(2), 12: Array(2), 15: Array(1)}
Array(2) ["abc", "cc"]
Array(2) ["cde", "dfb"]
Array(1) ["adb"]
Array(1) ["def"]
Array(2) ["ee", "abcd"]
*/












