

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    console.log("Same instance? " + (instance1 === instance2));  
}
run(); // Same instance? true


// ES5
// constructor based implementation using JavaScript's closures.

// Closures:
// A func. that make use of Var.s defined in Outer func.s that have previously returned.

function Singleton() {
    // var instance;
    Singleton = function() {
        return instance;
    }
    // Singleton.prototype = this;
    var instance = new Singleton();
    // instance.constructor = Singleton;
    console.log(instance); // Singleton {}
    
// Only create A new instance for the 1st time.
    
    return instance;
}

function run() {
    var ins1 = new Singleton();
    var ins2 = new Singleton();
    console.log("Same instance? " + (ins1 === ins2));  
}
run(); // Same instance? true


// ES6 / ES2015
class Singleton {
    constructor() {
        if(!Singleton.instance){
            console.log(this); // Singleton{}
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
var ins1 = new Singleton();
var ins2 = new Singleton();
console.log("Same instance? " + (ins1 === ins2)); 
// Singleton {}
// Same instance? true


// Ref:
// https://anasshekhamis.com/2017/07/27/the-singleton-design-pattern-es5-and-es2015/






