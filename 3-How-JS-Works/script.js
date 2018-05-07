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
            
        //     console.log(this); // Window(default) object.
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

