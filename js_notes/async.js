

// ASYNC PROGRAMMING METHODS:

// • Callback
// • Promise

// • Later is built on top of previous


console.log("Before timeout: " + new Date());
function f() {
    console.log("After timeout: " + new Date());
}
setTimeout(f, 6 * 1000); // 6 sec.
console.log("I happen after setTimeout!");
/*
Before timeout: Sun Jul 22 2018 22:21:23 GMT-0700 (Pacific Daylight Time)
I happen after setTimeout!
After timeout: Sun Jul 22 2018 22:21:29 GMT-0700 (Pacific Daylight Time)
*/


// CALLBACK HELL:

// Callbacks are difficult to manage when multiple async calls
// need to be sequentialized, or put into some order.







