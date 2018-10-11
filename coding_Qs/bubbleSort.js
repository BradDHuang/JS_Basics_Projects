
// review: bubble sort with JS.

let arr = [1,2,3,4,-2,-4,-3,-1];

function bubbleSort(arr) {
    let swapped = true; // work as the flag.
    let j = 0;
    
    while(swapped) {
        swapped = false;
        j += 1;
        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                // swap here:
                let t = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = t;
                // change the flag.
                swapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr)); // [-4, -3, -2, -1, 1, 2, 3, 4]



