// The for...of statement 
// creates a loop iterating over iterable objects, including: 
// built-in String, 
// Array, Array-like objects (e.g., arguments or NodeList), TypedArray, 
// Map, 
// Set, 
// and user-defined iterables. 
// It invokes a custom iteration hook with statements to be executed 
// for the value of each distinct property of the object.

// e.g.
let iterableArr = [10, 20, 30];

for (let value of iterableArr) {
  value += 1;
  console.log(value);
}
// 11 21 31

// e.g.
let iterableStr = 'boo';

for (let value of iterableStr) {
  console.log(value);
}
// b o o

// e.g.
let iterableMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterableMap) {
  console.log(entry);
}
// ['a', 1] ['b', 2] ['c', 3]
for (let [key, value] of iterableMap) {
  console.log(value);
}
// 1 2 3

// e.g.
// let iterableSet = new Set([1, 1, 2, 2, 3, 3]);
let iterableSet = new Set("112233");

for (let value of iterableSet) {
  console.log(value);
}
// 1 2 3

// e.g.
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, "a", [2, "b"]);
// 1 "a" [2, "b"]





