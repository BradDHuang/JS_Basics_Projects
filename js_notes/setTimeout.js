

// BLOCKING OPERATIONS:
// setTimeout()
// setInterval()


console.log(new Date());
setTimeout(function() {
    console.log(new Date());
}, 10000);

// Sun Jul 22 2018 20:51:44 GMT-0700 (Pacific Daylight Time) {}
// Sun Jul 22 2018 20:51:54 GMT-0700 (Pacific Daylight Time) {}

console.log(new Date());
sleep(10000);
console.log(new Date());
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

// The getTime() method returns the numeric value corresponding to the time 
// for the specified date according to universal time.
// Return value
// A number representing the milliseconds 
// elapsed between 1 January 1970 00:00:00 UTC and the given date.








