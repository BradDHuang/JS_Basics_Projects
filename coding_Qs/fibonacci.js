// O(n) solution:
function fibonacci(idx) {
    var a = 1, b = 0, tmp;

    while (idx >= 0) {
        tmp = a;
        a = a + b;
        b = tmp;
        idx--;
    }
    return b;
}
console.log(fibonacci(4), fibonacci(5), fibonacci(6), fibonacci(7));
// 1 1 2 3 5 8 13 21 34...

// O(2^n) solution:
function fibonacci2(idx) {
    if (idx <= 1) return 1;
    return fibonacci2(idx - 1) + fibonacci2(idx -2);
}
console.log(fibonacci2(2), fibonacci2(4), fibonacci2(6), fibonacci2(8));

// O(2n) solution:
function fibonacci3(idx, memo) {
    memo = memo || {};
    // console.log(memo, idx);
    if (memo[idx]) return memo[idx];
    if (idx <= 1) return 1;
    return memo[idx] = fibonacci3(idx - 1, memo) + fibonacci3(idx -2, memo);
}
console.log(fibonacci3(3), fibonacci3(5));

