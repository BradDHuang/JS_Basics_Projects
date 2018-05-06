// console.log("Hello, JS!");

/*
multi-line comment
*/

/*
var name = "Brad";
console.log(name);

var lastName = "Hu";
console.log(lastName);

var age = 24;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// var name = "Brad";
// var age = 24;
// // console.log(name + age); // Brad24
// // console.log(age + age); // 48

// var job, isMarried;
// // console.log(job); // undefined, no value yet.

// job = "SDE";
// isMarried = false;
// console.log(name + " is " + age + " year-old " + job + ", is he married? " + isMarried + ".");

// age = "twenty-four"; // Dynamic Typing!
// job = "Singer";
// console.log(name + " is " + age + " year-old " + job + ", is he married? " + isMarried + ".");

// var firstName = prompt("What is your firstName?");
// console.log(firstName);

// alert("Session finished!");

// Operators
// var now = 2018;
// var birthYear = now - 24;
// birthYear = now - 24 * 2;
// console.log(birthYear);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// var ageofMe, ageOfYou;
// ageOfYou = ageofMe = 24; // Assignment, right-to-left.
// console.log(ageOfYou);

// if/else
// var name = "Brad";
// var isMarried = false;
// if (isMarried === false) { // ===
// if (!isMarried) {
//     console.log(name + " is not married.");
// } else {
//     console.log(name + " is married.");
// }

// if (23 == "23") { // JS will look the 23 as "23"(String)!
//     console.log("Convert a Number to a String");
// }
// if (23 === "23") { // 23 and "23" is not the same!
//     console.log("a Number === a String");
// }

// boolean logic in JS: && || !

// switch statement
// var job = "sde";
// job = prompt("what is your job?");
// switch(job) {
//     case "sde":
//         console.log("sde coding");
//         break;
//     case "singer":
//         console.log("singing");
//         break;
//     default:
//         console.log("make a living");
//         break;
// }

// escape
// console.log("this\'s an escape way.");

// Functions, DRY. 
// function calculateAge(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     return age;
// }
// var ageOfMe = calculateAge(1994);
// console.log(ageOfMe);

// // nested func.
// function yearsLeftToRetirement(birthYear) {
//     var age = calculateAge(birthYear);
//     var yearsLeftForRetirement = 65 - age;
//     return yearsLeftForRetirement;
// }
// var years = yearsLeftToRetirement(1995);
// console.log(years);

// func. expression
// var someFunc = function(param) {
//     return param * 2;
// }
// console.log(someFunc(5));

// // func. statement
// function someFu(para) {
//     return para * 3;
// }
// console.log(someFu(5));

// Arrays.
var names = ["Brad", "Herman", "M"];
console.log(names[0]);
names[0] = "James";
console.log(names[0]);
var years = new Array(1994, 1995, 2018);
console.log(years[1]);

var brad = ["Brad", 24, "sde"]; // Mixed data types.

