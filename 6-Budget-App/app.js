var budgetController = (function() {
    
    var x = 23;
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            // console.log(add(b));
            return add(b);
        }
    }; // return an obj.
})(); // IIFE
// budgetController.x // undefined
// budgetController.add(5) // Uncaught TypeError: budgetController.add is not a function
// budgetController.publicTest(5) // 28
// x, add() are private; only inner func. publicTest() has access to them.

var UIController = (function() {
    
    
    
})();

var controller = (function(budgetCtrl, UICtrl) {
    
    var z = budgetCtrl.publicTest(5);
    
    return {
        publicTest2: function() {
            console.log(z);
        }
    };
    
})(budgetController, UIController);
// controller.publicTest2() // 28


