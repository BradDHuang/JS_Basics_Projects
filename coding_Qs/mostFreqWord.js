
let thestr = "Hi hi, here is a string. Please do s-th!! please please ha ha ha.";

function findMostFreqWordInAStr(str) {
    let newStr = str.replace(/!+|[,.]/g, '').toLowerCase();
    // console.log(newStr);

    let obj = {};
    newStr.split(" ").map(e => {
        if (obj[e]) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
    });
    // console.log(obj);

    let mostFreqWord = '';
    let mostFreq = 0;
    for (let i in obj) {
        // console.log(i);
        if (obj[i] > mostFreq) {
            mostFreq = obj[i];
            mostFreqWord = i;
        }
    }
    return "Most freq. word: '" + mostFreqWord + "' appears " + mostFreq + " times.";
}

console.log(findMostFreqWordInAStr(thestr));
// Most freq. word: 'please' appears 3 times.

