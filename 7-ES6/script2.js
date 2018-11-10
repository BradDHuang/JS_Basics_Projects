

// ES6 Review cont.


// Destructuring:
/*
const John = ["John", 24];
const [name, age] = John;
console.log(name, age);
// John 24

const fullName = {
    fn: "Leo",
    ln: "Johnson"
};
const {fn, ln} = fullName;
console.log(fn, ln);
// Leo Johnson

// Assigning to new variable names:
const {fn: f, ln: l} = fullName;
console.log(f, l);
// Leo Johnson

// use case e.g.

function calcRetireAge(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age];
}
const [curAge, yearsToRetire] = calcRetireAge(1995);
console.log("curAge: " + curAge, "yearsToRetire: " + yearsToRetire);
*/

// Array

// const boxes = document.querySelectorAll(".box");
// returns a static NodeList object.

// ES5
/*
var boxesArr = Array.prototype.slice.call(boxes);
boxesArr.forEach(function(e) {
    e.style.backgroundColor = "dodgerblue";
});

for (var i = 0; i < boxesArr.length; i++) {
    if (boxesArr[i].className === "box blue") {
        continue;
    }
    boxesArr[i].textContent = "I changed to blue now.";
}
*/
/*
// ES6
const boxesArr = Array.from(boxes);
boxesArr.forEach(e => e.style.backgroundColor = "orangered");

for (let e of boxesArr) {
    // if (e.className === "box orange") {
    if (e.className.includes("orange")) {
        continue;
    }
    e.textContent = "I changed to orange now.";
}

// ES6
let ages = [1, 12, 19, 2, 14];

const fullAgeIdx = ages.findIndex(e => e >= 18);
console.log(ages[fullAgeIdx] + " >= 18.");

// Or use:
console.log(ages.find(e => e >= 18) + " >= 18.");
*/


// Spread Operator
/*
// ES5
function sum(a, b, c, d) {
    return a + b + c + d;
}

var nums = [10, 20, 30, 42];

console.log(sum.apply(null, nums)); // 102

// ES6
console.log(sum(...nums)); // 102

// use case e.g.

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach(e => e.style.color = "purple");
*/
















