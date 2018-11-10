

// ES6 Review cont.


// Destructuring:

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









