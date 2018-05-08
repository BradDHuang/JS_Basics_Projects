// Func. Constructor

/*
var brad = {
    name: "Brad",
    job: "SDE",
    birthYear: 1994
};

var Person = function(name, job, birthYear) {
    this.name = name;
    this.job = job;
    this.birthYear = birthYear;
    this.calculateAge = function() {
        console.log(2018 - this.birthYear);
    }
};
var ben = new Person("Ben", "SDE", 1995);

// Inheritance
ben.calculateAge();
*/

// *********
// Prototype
// *********

var Person = function(name, job, birthYear) {
    this.name = name;
    this.job = job;
    this.birthYear = birthYear;
    // this.calculateAge = function() {
    //     console.log(2018 - this.birthYear);
    // }
};
Person.prototype.calculateAge = function() {
    console.log(2018 - this.birthYear);
};
Person.prototype.familyName = "Hu";
    
var ben = new Person("Ben", "SDE", 1995);
var brad = new Person("Brad", "SDE", 1994);

// Inheritance
// ben.calculateAge();
// brad.calculateAge();
// console.log(ben.familyName);
// console.log(brad.familyName);
// console.log(ben instanceof Person); // true

// console.info(ben);
// console.log(ben);

var personProto = {
    calculateAge: function() {
        console.log(2018 - this.birthYear);
    }
};

var ben = Object.create(personProto);
// ben.name = "Ben";
ben.birthYear = 1995;

var brad = Object.create(personProto, {
    name: { value: "Brad" },
    birthYear: { value: 1994 }
});

// ben.calculateAge();
// brad.calculateAge();


// Primitives VS. Objects

var obj1 = {
    age: 24
};
var obj2 = obj1;
obj1.age = 42;
// console.log(obj2.age); // 42

// passing func. as an argu.
var birthYears = [1995, 1994, 1993, 1998];

function arrayCalculate(arr, func) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(func(arr[i]));
    }
    return arrRes;
}
function agecalculator(ele) {
    return 2018 - ele;
}

var ages = arrayCalculate(birthYears, agecalculator);
// console.log(ages);