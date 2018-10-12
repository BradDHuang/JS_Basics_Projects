
// sort an arr. with putting 0s in the end. 

let input = [1,0,5,6,0,7,0,0];
// output = [1,5,6,7,0,0,0,0];

function sorting(input) {
    let sorted = input.sort();
    let i = 0, j = sorted.length - 1;
    let res = [];
    for (let k = 0; k < sorted.length; k++) {
        if (sorted[k] === 0) {
            res[j] = 0;
            j -= 1;
        } else {
            res[i] = sorted[k];
            i += 1;
        }
    }
    return res;
}
console.log(sorting(input));

// alt:
function sorting2(input) {
    let sorted = input.sort();
    let zeros = [];
    let nonZeros = [];
    // Do Not use for...in
    // The for...in statement iterates over all non-Symbol, enumerable properties of an object.
    for (let k = 0; k < sorted.length; k++) {
        if (sorted[k] === 0) {
            zeros.push(0);
        } else {
            nonZeros.push(sorted[k]);
        }
    }
    // console.log(zeros, nonZeros);
    return nonZeros.concat(zeros);
}
console.log(sorting2(input));


