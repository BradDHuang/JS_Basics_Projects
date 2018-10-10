// most freq. # in an arr.

let arr = [2, 2, 2, 3, 3, 4, 4, 1, 1, 1, 3, 3];

function mostFreqNum(arr) {
	// assume arr is a valid array.
	if (arr.length === 0) return null;
	let freqs = {};
	arr.forEach(e => {
		if (e in freqs) {
			freqs[e]++;
		} else {
			freqs[e] = 1;
		}
	});
	// console.log(freqs);
	let mostFreq = 1, theNum = arr[0];
	for (let e in freqs) {
		if (freqs[e] > mostFreq) {
			mostFreq = freqs[e];
			theNum = e;
		}
	}
	return  theNum + " occurs most with " + mostFreq + " times.";
}

console.log(mostFreqNum(arr));



