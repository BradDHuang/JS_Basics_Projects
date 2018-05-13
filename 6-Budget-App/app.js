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
    
    var DOMstrs = UICtrl.getDOMStrings();
    
    var addItem = function() {
        // step 2: get the field input data.
        var input = UICtrl.getInput();
        console.log(input);
        
        // step 3: add the item to the budget controller.
        
        // step 4: add the item to the UI.
        
        // step 5: calculate budget.
        
        // step 6: update UI.
        
        // console.log("test works.");
    };
    
    // step 1: add event handler.
    // document.querySelector(".add__btn").addEventListener("click", function() {
    //     // console.log("this is a test: btn was clicked.");
    // });
    document.querySelector(DOMstrs.inputBtn).addEventListener("click", addItem); // addItem is a callback func. here
    
    document.addEventListener("keypress", function(KeyboardEvent) {
       
    //   console.log(KeyboardEvent);
        if (KeyboardEvent.keyCode === 13 || KeyboardEvent.which === 13) { // the "Enter" key.
            // console.log("Enter was pressed!");
            addItem();
        }
    });
    
})(budgetController, UIController);
// controller.publicTest2() // 28


