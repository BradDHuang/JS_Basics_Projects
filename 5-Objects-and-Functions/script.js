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
/*
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
*/
// Inheritance
// ben.calculateAge();
// brad.calculateAge();
// console.log(ben.familyName);
// console.log(brad.familyName);
// console.log(ben instanceof Person); // true

// console.info(ben);
// console.log(ben);
/*
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
*/
// ben.calculateAge();
// brad.calculateAge();


// Primitives VS. Objects

var obj1 = {
    age: 24
};
var obj2 = obj1;
obj1.age = 42;
// console.log(obj2.age); // 42
/*
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
*/
/*
// func. returning func.
function interviewQs(job) {
    if (job === "sde") {
        return function(name) {
            console.log(name + ", can you code with JS?");
        }
    } else if (job === "singer") {
        return function(name) {
            console.log(name + ", can you rap?");
        }
    } else {
        return function(name) {
            console.log(name + ", what do you do?");
        }
    }
}

var sdeQs = interviewQs("sde");
// sdeQs("Brad");
// sdeQs("Herman");
var phdQs = interviewQs("phd");
// phdQs("Ben");
*/
// ******
// interviewQs("sde")("James");


// IIFE.

// function () {
//     // func. without a name!
// }

// ( function () {
    
// } ) 
// In JS, (...), the content in () will be looked as 
// an expression, not a statement!
/*
( function () {
    var s = Math.random() * 10;
    console.log(s + " >= 5 ?");
    console.log(s >= 5);
} )(); // call the func.

( function (param) {
    var s = Math.random() * 10;
    console.log(s + " >= 5 - " + param + " ?");
    console.log(s >= 5 - param);
} )(5); // pass a param.
*/


// Closures
/*
function retirementAge(retireAge) {
    var str = " years left until retirement.";
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retireAge - age) + str);
        
        // Inner func. 
        // Always has access to 
        // the Var. & Param. of its 
        // Outer func!
        // Even after the outer func. has returned.
    }; 
}

// retirementAge(65)(1995);

// var retirementAgeC = retirementAge(65);
// retirementAgeC(1994);

function interviewQs(job) {
    return function(name) {
        if (job === "sde") {
            console.log(name + ", can you code with JS as a/an " + job + " ?");
        } else if (job === "singer") {
            console.log(name + ", can you rap as a/an " + job + " ?");
        } else {
            console.log(name + ", what do you do? a/an " + job + " ?");
        }
    };
}
// interviewQs("sde")("Brad");
// interviewQs("singer")("Ben");
// interviewQs("student")("Brad");
*/

// CALL
/*
var brad = {
    name: "Brad",
    age: 24,
    job: "sde",
    pre: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", I\'m " + this.name + ", I\'m a/an " + this.job + " and I\'m " + this.age + " years old.");
        } else if (style === "friendly") {
            console.log("Hi, What\'s up? Good " + timeOfDay + ", I\'m " + this.name + ", I\'m a/an " + this.job + " and I\'m " + this.age + " years old.");
        }
    }
};

// brad.pre("formal", "afternoon");

var emily = {
    name: "Emily",
    age: 28,
    job: "sdeII"
};

// brad.pre.call(emily, "friendly", "morning");

// brad.pre.apply(emily, ["friendly", "afternoon"]);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// BIND, 
// preset some param.

var bradFriendly = brad.pre.bind(brad, "friendly");
// bradFriendly("noon");
// bradFriendly("night");
var emilyFormal = brad.pre.bind(emily, "formal");
// emilyFormal("night");
*/

/*
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
// function fullAge(ele) {
function fullAge(limit, ele) {
    // return ele >= 18;
    return ele >= limit;
}

var ages = arrayCalculate(birthYears, agecalculator);
var fullAgeInJapan = arrayCalculate(ages, fullAge.bind(this, 24));
console.log(ages);
console.log(fullAgeInJapan);
*/


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



// ******
// make a program Private(change the scope) in JS.
// ******
/*
(function() {
    // Content
})(); // IIFE
*/
/*
(function() {
    // Content
    var Question = function(question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
    };
    
    Question.prototype.displayQA = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    };
    
    Question.prototype.checkAns = function(ans) {
        if (ans === this.answer) {
            console.log("Correct Answer!");
        } else {
            console.log("Answer is not correct, try again.");
        }
    };
    
    var q1 = new Question("How old are you?", ["24", "25"], 1);
    var q2 = new Question("What is your job?", ["sde", "sdeII", "intern"], 2);
    var q3 = new Question("What degree you are persuing?", ["Ms", "Bs", "Phd"], 0);
    
    // var qArr = [];
    // qArr.push(q1);
    // qArr.push(q2);
    // qArr.push(q3);
    var qArr = [q1, q2, q3];
    // console.log(qArr);
    
    // var qIndex = Math.floor(Math.random() * 3);
    var qIndex = Math.floor(Math.random() * qArr.length);
    
    qArr[qIndex].displayQA();
    
    // var correctAnswer = prompt("Plz select the correct answer.");
    var correctAnswer = parseInt(prompt("Plz select the correct answer."));
    // parses a string argument and returns an integer.
    
    qArr[qIndex].checkAns(correctAnswer);
    
})(); // IIFE
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
    var Question = function(question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
    };
    
    Question.prototype.displayQA = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    };
    
    // Question.prototype.checkAns = function(ans) {
    Question.prototype.checkAns = function(ans, callbackOfScore) {
        var sc;
        if (ans === this.answer) {
            console.log("Correct Answer!");
            
            sc = callbackOfScore(true);
        } else {
            console.log("Answer is not correct, try again.");
        
            sc = callbackOfScore(false);
        }
        
        this.displaySc(sc); // "this" is the object that the checkAns() is point to.
    };
    
    Question.prototype.displaySc = function(score) {
        console.log("Your score is: " + score);
        console.log("************");
    };
    
    var q1 = new Question("How old are you?", ["24", "25"], 1);
    var q2 = new Question("What is your job?", ["sde", "sdeII", "intern"], 2);
    var q3 = new Question("What degree you are persuing?", ["Ms", "Bs", "Phd"], 0);
    var qArr = [q1, q2, q3];
    
    function score() {
        var yourScore = 0;
        return function(ansIsRight) {
            if (ansIsRight) yourScore++;
            return yourScore;
        };
    }
    var showScore = score();
        
    var nextQ = function() {
        
        var qIndex = Math.floor(Math.random() * qArr.length);
        
        qArr[qIndex].displayQA();
        // var correctAnswer = parseInt(prompt("Plz select the correct answer."));
        var correctAnswer = prompt("Plz select the correct answer. Type in \"exit\" if you wanna exit the quiz."); // we need to compare it with a String later!
        // qArr[qIndex].checkAns(correctAnswer);
        
        // nextQ(); // never ends.
        if (correctAnswer !== "exit") {
            // qArr[qIndex].checkAns(correctAnswer);
            // qArr[qIndex].checkAns(parseInt(correctAnswer));
            qArr[qIndex].checkAns(parseInt(correctAnswer), showScore);
            nextQ();
        }
    };
    
    nextQ();
    
})();




