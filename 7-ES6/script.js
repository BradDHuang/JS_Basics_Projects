

// console.log("hi");

// what is new in es6?

// (1) the let and const key words:
// const name = "ben";
// name = "brad";
// console.log(name);
// Uncaught TypeError: Assignment to constant variable.


// var is func. scope, let / const is block scope:

/*
function dl5(passed) {
    if (passed) {
        var name5 = "John";
        var yearOfBirth = 1990;
    }
    console.log(name5 + " was born in " + yearOfBirth);
}
dl5(true);
// John was born in 1990

function dl6(passed) {
    if (passed) {
        let name6 = "John";
        const yearOfBirth = 1990;
    }
    console.log(name6 + " was born in " + yearOfBirth);
}
dl6(true);
// Uncaught ReferenceError: name6 is not defined
// Uncaught ReferenceError: yearOfBirth is not defined
*/


// Hoisting:
// Variables and constants declared with let or const are not hoisted!
/*
function dl5(passed) {
    if (passed) {
        // console.log(name5); // undefined
        var name5 = "John";
        var yearOfBirth = 1990;
    }
    console.log(name5 + " was born in " + yearOfBirth);
}
dl5(true);
// John was born in 1990

function dl6(passed) {
    // console.log(name6); // Uncaught ReferenceError: name6 is not defined
    let name6;
    const yearOfBirth = 1990;
    if (passed) {
        name6 = "John";
    }
    console.log(name6 + " was born in " + yearOfBirth);
}
dl6(true);
// John was born in 1990
*/

let i = 10;
for (let i = 0; i < 5; i++) {
    console.log(i);
    // 0 1 2 3 4
}
console.log(i);
// 10

var j = 10;
for (var j = 0; j < 5; j++) {
    console.log(j);
    // 0 1 2 3 4
}
console.log(j);
// 5







