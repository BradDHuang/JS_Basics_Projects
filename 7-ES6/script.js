

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
/*
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
*/

// (2) Template literals (Template strings) with backticks
// e.g.
// `string text ${expression} string text`


// (3) arrow functions

// Using map() with index:
// const years = [1990, 1992, 1995];

// const curYear = new Date().getFullYear();
// let ages = years.map((e, index) => `index of ${index} has age of ${curYear - e}`);
// console.log(ages);

// ES5 
/*
var obj = {
    color: "green",
    clicked: function() {
        console.log(this); // {color: "green", clicked: ƒ}
        document.querySelector(".green")
        .addEventListener("click", function() {
            // console.log(this);
            alert(`You clicked a box of color ${this.color}`);
        });
    }
};
obj.clicked();
// You clicked a box of color undefined
*/
/*
var obj2 = {
    color: "green",
    clicked: function() {
        // console.log(this); // {color: "green", clicked: ƒ}
        var self = this;
        document.querySelector(".green")
        .addEventListener("click", function() {
            // console.log(this);
            alert(`You clicked a box of color ${self.color}`);
        });
    }
};
obj2.clicked();
// You clicked a box of color green
*/

// ES6
/*
const obj3 = {
    color: "green",
    clicked: function() {
        // console.log(this); // obj3 {}
        document.querySelector(".green")
        .addEventListener("click", () => {
            // console.log(this); // obj3{}
            alert(`You clicked a box of color ${this.color}`);
        });
    }
};
obj3.clicked();
// You clicked a box of color green
*/

// In arrow functions, this retains the value of the enclosing lexical context's this.

// Arrow functions follow the normal variable lookup rules. 
// So while searching for this which is not present in current scope 
// they end up finding this from its enclosing scope. 



function Person(name) {
    this.name = name;
}

// ES5
/*
Person.prototype.myFriends = function(friends) {
    var list = friends.map(function(friend) {
        console.log(this); // Window {}
        return this.name + " is friend of " + friend;
    });
    console.log(list); 
};

var friends = ["Bob", "Chris"];
new Person("Ben").myFriends(friends);
// [" is friend of Bob", " is friend of Chris"]
*/

/*
// Use bind()
Person.prototype.myFriends = function(friends) {
    var list = friends.map(function(friend) {
        console.log(this); // Person {name: "Ben"}
        return this.name + " is friend of " + friend;
    }.bind(this));
    console.log(list); 
};

var friends = ["Bob", "Chris"];
new Person("Ben").myFriends(friends);
// ["Ben is friend of Bob", "Ben is friend of Chris"]
*/


// ES6

Person.prototype.myFriends = function(friends) {
    const list = friends.map((friend) => {
        console.log(this); // Person {name: "Ben"}
        return this.name + " is friend of " + friend;
    });
    console.log(list); 
};

const friends = ["Bob", "Chris"];
new Person("Ben").myFriends(friends);
// ["Ben is friend of Bob", "Ben is friend of Chris"]








