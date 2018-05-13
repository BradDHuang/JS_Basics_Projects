var budgetController = (function() {
    
    // var x = 23;
    // var add = function(a) {
    //     return x + a;
    // }
    
    // return {
    //     publicTest: function(b) {
    //         // console.log(add(b));
    //         return add(b);
    //     }
    // }; // return an obj.
    
    // Func. Constructors
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
})(); // IIFE
// budgetController.x // undefined
// budgetController.add(5) // Uncaught TypeError: budgetController.add is not a function
// budgetController.publicTest(5) // 28
// x, add() are private; only inner func. publicTest() has access to them.
    
var UIController = (function() {
    
    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    };
    
    return {
        getInput: function() {
            return {
              type: document.querySelector(DOMStrings.inputType).value,  
              description: document.querySelector(DOMStrings.inputDescription).value,  
              value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
    
})();
// global app controller
var controller = (function(budgetCtrl, UICtrl) {
    /*
    var z = budgetCtrl.publicTest(5);
    
    return {
        publicTest2: function() {
            console.log(z);
        }
    };
    */
    
    // step 1: add event handler.
    var setupEventListeners = function() {
        
        var DOMstrs = UICtrl.getDOMStrings();
        // document.querySelector(".add__btn").addEventListener("click", function() {
        //     // console.log("this is a test: btn was clicked.");
        // });
        document.querySelector(DOMstrs.inputBtn).addEventListener("click", addItem); // addItem is a callback func. here
        
        document.addEventListener("keypress", function(keyboardEvent) {
           
        //   console.log(KeyboardEvent);
            if (keyboardEvent.keyCode === 13 || keyboardEvent.which === 13) { // the "Enter" key.
                // console.log("Enter was pressed!");
                addItem();
            }
        });
    };
    
    var addItem = function() {
        // step 2: get the field input data.
        var input = UICtrl.getInput();
        // console.log(input);
        
        // step 3: add the item to the budget controller.
        
        // step 4: add the item to the UI.
        
        // step 5: calculate budget.
        
        // step 6: update UI.
        
        // console.log("test works.");
    };
    
    return {
        init: function() {
            // console.log("app has started...");
            setupEventListeners();
        }  
    };
    
})(budgetController, UIController);
// controller.publicTest2() // 28

controller.init();



