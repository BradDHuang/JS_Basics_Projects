///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1995); // this is the Hoisting!
// call the func. Before it is declared!

function calculateAge(bornYear) {
    console.log(2018 - bornYear);
}
// calculateAge(1994);

// retirement(1995); 
// Hoisting is not working with func. expression!

var retirement = function(year) {
    console.log(65 - (2018 - year));
};
retirement(1994);

// Var.
console.log(age); // Hoisting with var.
// age is undefined(has no value yet).
var age = 24;
console.log(age);

function foo() {
    console.log(age); // undefined.
    var age = 42;
    console.log(age);
}
foo(); // 42
console.log(age); // 24, var. scope.
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d); // b, c are not defined.
    console.log(a + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
1. Regular func. call:
    'this' points at the global obj., (the Window obj., in the browser).
    
2. Method call:
    'this' points to the obj. that is calling the method.
    
3. 'this' is Not assigned a value
    until a func. where it is defined is actually called.
*/
// console.log(this); // Window(default) object.

// calculateAge(1994);
// function calculateAge(bornYear) {
//     console.log(2018 - bornYear);
//     console.log(this); // Window(default) object.
// }

var brad = {
    name: "Brad",
    lastName: "Hu",
    birthYear: 1994,
    job: "sde",
    isMarried: false,
    family: ["James", "Ben"],
    calculateAge: function() {
        console.log(this); // object brad.
        console.log(2018 - this.birthYear);
        
        // function inner() {
            
        //     console.log(this); // Window (default) object.
        // }
        // inner();
    }
};
brad.calculateAge();


var ben = {
    name: "Ben",
    birthYear: 1998
};

ben.calculateAge = brad.calculateAge; // Borrow a func.
ben.calculateAge();
// there is an object(ben) returned by calling calculateAge().

// In Visual Studio Code
// console.log(this);

function calculateAge(year) {
    console.log(2019 - year); // 25
    console.log(this); // global
}
calculateAge(1994);

var ben = {
    name: 'Ben',
    birthYear: 1995,
    calculateAge: function() {
        console.log(2019 - this.birthYear);
        function inner() {

            console.log(this); // global
            // 1. Regular func. call

        }
        inner();
    }
}
ben.calculateAge(); // 24
// 2. Method call
    
var mike = {
    name: 'Mike',
    birthYear: 1992,
}

mike.calculateAge = ben.calculateAge;

mike.calculateAge(); // 27
// 3. 'this' is Not assigned a value
//     until a func. where it is defined is actually called.

