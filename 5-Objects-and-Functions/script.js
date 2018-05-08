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