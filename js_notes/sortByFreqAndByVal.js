

function customSort(arr) {
    var freq = {};
    var mapping = [];
    var res = [];
    arr.forEach(e => {
        if (e in freq) {
            freq[e]++;
        } else {
            freq[e] = 1;
        }
    });
    for (let key in freq) {
        mapping.push([key, freq[key]]);
    }

    mapping.sort((a, b) => {
        return a[1] - b[1];
    });
    mapping.forEach(m => {
        for (let i = 0; i < m[1]; i++) {
            res.push(m[0]);
        }
    });

    return res;
}    

const arr = [4,5,6,5,4,3]; // [3,6,4,4,5,5]
console.log(customSort(arr)); // ["3","6","4","4","5","5"]
const arr2 = [3,1,2,2,4]; // [1,3,4,2,2]
console.log(customSort(arr2));


