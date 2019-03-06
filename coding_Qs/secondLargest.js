const arr = [1,200,3,200,20,4,-5,9];
const arr2 = [1,200,3,20,20,4,-5,9];

function secondLargest(array) {
    /*
    let largest = -Infinity;
    let secondL = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondL = largest;
            largest = array[i];
        } else if (array[i] > secondL) {
            secondL = array[i];
        }
    }
    */

    // Solution2:
    let largest = Math.max(...array);
    // let largestIdx = array.indexOf(largest);
    // array[largestIdx] = -Infinity;
    // Or use:
    array.splice(array.indexOf(largest), 1);
    let secondL = Math.max(...array);

    console.log(secondL);
    return secondL;
}
secondLargest(arr);
secondLargest(arr2);

