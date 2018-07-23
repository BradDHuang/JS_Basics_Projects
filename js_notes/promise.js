

// The Promise object 
// represents the eventual completion (or failure) 
// of an asynchronous operation, and its resulting value.


// Promise Constructor:
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
console.log(promise1);
// expected output: [object Promise]


// axios:

// Promise based HTTP client for the browser and node.js


/*
The then() method 
returns a Promise. 
It takes up to 2 arguments: 
    1. callback functions for the success 
    2. failure cases of the Promise.
*/   
// e.g.
var p = new Promise(function(resolve, reject) {
  resolve('Success!');
});
p.then(function(value) {
  console.log(value);
});
// expected output: "Success!"

/*
The catch() method 
returns a Promise 
and deals with rejected cases only. 
It behaves the same as calling Promise.prototype.then(undefined, onRejected) 
(in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)).
*/
// e.g.
var p1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});
p1.catch(function(error) {
  console.log(error);
});
// expected output: Uh-oh!










