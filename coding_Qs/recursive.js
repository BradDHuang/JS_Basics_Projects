

// Recursive Programming:
// 	write a function that counts how many steps the given number can reach to 1, 
// 	when number is even N = N / 2; when odd N = N * 3 + 1.

// Example: 8  8/2=4 4/2=2 2/2=1 => Output 3 steps
// Example: 3  3*3+1=10 10/2=5 5*3+1=16 16/2=8 8/2=4 4/2=2 2/2=1 => Output 7 steps

// Solution #1:
function stepsCount(num, steps) {
    if (num <= 0) return;
    if (num === 1) {
        console.log(steps + " steps");
        return;
    }
    if (num % 2 === 0) {
        num /= 2;
        steps++;
        // console.log(num);
        // console.log(steps);
        stepsCount(num, steps);
    } else if (num % 2 === 1) {
        num = num * 3 + 1;
        steps++;
        stepsCount(num, steps);
    }
}

// console.log(stepsCount(num, steps)); // undefined???

// stepsCount(num, steps);
stepsCount(8, 0); // 3 steps
stepsCount(3, 0); // 7 steps


// Solution #2:
// Using returns
function stepsCount(num, steps) {
    if (num <= 0) return;
    if (num === 1) {
        // console.log(steps + " steps");
        return steps;
    }
    if (num % 2 === 0) {
        num /= 2;
        // steps++;
        // console.log(num);
        // console.log(steps);
        return 1 + stepsCount(num, steps);
    } else if (num % 2 === 1) {
        num = num * 3 + 1;
        // steps++;
        return 1 + stepsCount(num, steps);
    }
}
console.log(stepsCount(8,0));


