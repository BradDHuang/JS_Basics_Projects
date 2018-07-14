var coins = [50, 25, 5, 1];
var numOfCoins = 48;
var amount = 100;
var solutions = 0;

var counts = [0, 0, 0, 0];

var index = 0;
combinations(coins, counts, index, amount);

function combinations(coins, counts, index, amount) {
    if (index === coins.length) {

        let total = 0;
        for (let i = 0; i < coins.length; i++) {
            total += counts[i];
        }
        if (total === numOfCoins) {
            solutions += 1;
            if (solutions > 2) {
                return;
            }
            console.log("****** this is solution #" + solutions);
            for (let i = 0; i < coins.length; i++) {
                console.log("num of " + coins[i] + " is: " + counts[i]);
            }
        }
        return;
    }

    if (index === coins.length - 1) {
        if (amount % coins[index] === 0) {
            counts[index] = amount / coins[index];
            combinations(coins, counts, index + 1, 0);
        }
    } else {
        for (let j = 0; j <= amount / coins[index]; j++) {
            counts[index] = j;
            combinations(coins, counts, index + 1, amount - j * coins[index]);
        }
    }
}

/*
****** this is solution #1
num of 50 is: 0
num of 25 is: 0
num of 5 is: 13
num of 1 is: 35
****** this is solution #2
num of 50 is: 0
num of 25 is: 1
num of 5 is: 7
num of 1 is: 40
*/

// Reference:
// http://agilestyle.iteye.com/blog/2361927

// Optional Solution: Use for-loops.
var coins = [50, 25, 5, 1];
var numOfCoins = 48;
var amount = 100;
var solutions = 0;
function combinations(coins, numOfCoins, amount, solutions) {
    for (let i = 0; i <= amount / coins[0]; i++) {       
        for (let j = 0; j <= amount / coins[1]; j++) {            
            for (let k = 0; k <= amount / coins[2]; k++) {               
                for (let l = 0; l <= numOfCoins; l++) {
                    let res = amount - (i * coins[0] + j * coins[1] + k * coins[2] + l * coins[3]);
                    if (res > 0) continue;
                    if (res < 0) break;
                    if (res === 0) {
                        if ((i + j + k + l) === numOfCoins) {
                            solutions++;
                            if (solutions <= 2) {
                                console.log("50: " + i + ", 25: " + j + ", 5: " + k + ", 1: " + l);
                            } else break;
                        } else continue;
                    }
                }
            }
        }
    }
}
combinations(coins, numOfCoins, amount, solutions);
// 50: 0, 25: 0, 5: 13, 1: 35
// 50: 0, 25: 1, 5: 7, 1: 40







