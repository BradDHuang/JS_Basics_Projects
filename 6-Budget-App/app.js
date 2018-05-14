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
        
        this.percentage = -1;
    };
    
    Expense.prototype.calculatePercentage = function(total_inc) {
        if (total_inc > 0) {
            this.percentage = Math.round(100 * (this.value / total_inc));
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function() {
        return this.percentage;
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
        },
        budget: 0,
        percentage: -1 // "-1" represents there is no val. yet
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value; // cur is inc/exp.
        });
        data.totals[type] = sum;
    };
    
    return {
        addItem: function(type, description, value) {
            var newItem, id;
            
            if (data.allItems[type].length > 0) {
                // id = last_id + 1;
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0; // 0-based.
            }
            
            if (type === "exp") {
                newItem = new Expense(id, description, value);
            } else if (type === "inc") {
                newItem = new Income(id, description, value);
            }
            
            // brad.birthYear;
            // brad["birthYear"]; // alternative.
            // var x = "birthYear";
            // brad[x]; // alternative.
            data.allItems[type].push(newItem);
            
            return newItem;
        },
        
        deleteItem: function(type, id) {
            // e.g. if we deleted the item with id=3 already
            // then the ids left will be [0,1,2,4,5,...], so now id=4 with index=3.
            var ids, index;
            ids = data.allItems[type].map(function(cur) {
                return cur.id;
            }); // a New arr.
            index = ids.indexOf(id); // -1 if not found.
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1); // remove 1 ele. from index
            }
        },
        
        calculateBudget: function() {
            // total inc/exp
            calculateTotal("inc");
            calculateTotal("exp");
            
            // budget = inc - exp
            data.budget = data.totals.inc - data.totals.exp;
            
            // percentage = exp / inc
            if (data.totals.inc > 0) {
                data.percentage = Math.round(100 * (data.totals.exp / data.totals.inc));
            } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                // cur.calculatePercentage();
                // cur.calculatePercentage(data.allItems.totals.inc);
                cur.calculatePercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var percentages = data.allItems.exp.map(function(cur) { // use map() for data-storing, not just loop.
                return cur.getPercentage();
            });
            return percentages; // an arr.
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        test: function() {
            console.log(data);
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
        inputBtn: ".add__btn",
        // incContainer: "income__list",
        incContainer: ".income__list",
        // expContainer: "expenses__list"
        expContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incLabel: ".budget__income--value",
        expLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expPercentage: ".item__percentage"
    };
    
    var formatNum = function(num, type) {
        // '+'/'-'; 2-decimal-points; comma separating. (-1,000.00)
        // var numSplit, int, dec, sign;
        var numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2); // 2-decimal-points, returns a String!
        numSplit = num.split('.');
        int = numSplit[0];
        if (int.length > 3) { // assume input are <= 999,999.99
            var len = int.length;
            int = int.substr(0, len - 3) + ',' + int.substr(len - 3, 3);
        }
        dec = numSplit[1];
        // type === "exp" ? sign = '-' : sign = '+';
        // return sign + " " + int + "." + dec;
        return (type === "exp" ? '-' : '+') + " " + int + "." + dec;
    };
    
    return {
        getInput: function() {
            return {
              type: document.querySelector(DOMStrings.inputType).value,  
              description: document.querySelector(DOMStrings.inputDescription).value,  
            //   value: document.querySelector(DOMStrings.inputValue).value // a string.
              value: parseFloat(document.querySelector(DOMStrings.inputValue).value) // a floating num.
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, ele;
            // create HTML str with placeholder text
            if (type === "inc") {
                ele = DOMStrings.incContainer;
                // html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                // html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {
                ele = DOMStrings.expContainer;
                // html = '<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                // html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // replace the placeholder text with actual data
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            // newHtml = newHtml.replace("%value%", obj.value);
            newHtml = newHtml.replace("%value%", formatNum(obj.value, type));
            
            // insert the HTML to the DOM
            /*element.insertAdjacentHTML(position, text);
            'beforebegin': Before the element itself.
            'afterbegin': Just inside the element, before its first child.
            'beforeend': Just inside the element, after its last child.
            'afterend': After the element itself.*/
            document.querySelector(ele).insertAdjacentHTML('beforeend', newHtml);
        },
        
        deleteListItem: function(item_id) {
            // document.getElementById(id).parentNode.removeChild(document.getElementById(id));
            var ele = document.getElementById(item_id);
            ele.parentNode.removeChild(ele);
        },
        
        clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            // querySelectorAll() returns a List.
            fieldsArr = Array.prototype.slice.call(fields); // get an Array.
            fieldsArr.forEach(function(cur, index, arr) {
                cur.value = "";
            });
            
            fieldsArr[0].focus();
        },
        
        displayBudget: function(obj) {
            
            var type;
            obj.budget >= 0 ? type = "inc" : type = "exp";
            
            // document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            // document.querySelector(DOMStrings.incLabel).textContent = obj.totalInc;
            // document.querySelector(DOMStrings.expLabel).textContent = obj.totalExp;
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNum(obj.budget, type);
            document.querySelector(DOMStrings.incLabel).textContent = formatNum(obj.totalInc, "inc");
            document.querySelector(DOMStrings.expLabel).textContent = formatNum(obj.totalExp, "exp");
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "N/A";
            }
        },
        
        displayPercentages: function(percentages) {
            var nodeList = document.querySelectorAll(DOMStrings.expPercentage); // Returns a NodeList!
        
            var nodeListLoop = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            nodeListLoop(nodeList, function(node, index) {
                if (percentages[index] > 0) {
                    node.textContent = percentages[index] + '%';
                } else {
                    node.textContent = "n/a";
                }
            });
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
        
        document.querySelector(DOMstrs.container).addEventListener("click", deleteItem);
    };
    
    var updateBudget = function() {
        // calculate it
        budgetCtrl.calculateBudget();
        
        // return it
        var budget = budgetCtrl.getBudget(); // an obj.
        
        // display it
        // console.log("calculateBudget works!");
        UICtrl.displayBudget(budget);
    };
    
    var updatePercentages = function() {
        // calculate; return; update.
        budgetCtrl.calculatePercentages();
        var exp_percentages = budgetCtrl.getPercentages();
        
        // console.log(exp_percentages);
        UICtrl.displayPercentages(exp_percentages);
    };
    
    var addItem = function() {
        var input, newItem;
        
        // step 2: get the field input data.
        input = UICtrl.getInput();
        // console.log(input);
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { // validate the input.
            // step 3: add the item to the budget controller.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // step 4: add the item to the UI; clear the fields.
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            
            // step 5: calculate budget.
            // step 6: update UI.
            updateBudget();
            updatePercentages();
        }
        
        // console.log("test works.");
    };
    
    var deleteItem = function(event) {
        var itemID, splitID, type, id;
        // console.log(event.target);
        // console.log(event.target.parentNode);
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
        // itemID format: e.g. inc-0, exp-1.
            splitID = itemID.split('-'); // an String arr. ["inc", "0"]
            type = splitID[0];
            id = parseInt(splitID[1]);
            
            // delete the item from db.
            budgetCtrl.deleteItem(type, id);
            
            // delete it from UI.
            UICtrl.deleteListItem(itemID);
            
            // update and display new budget.
            updateBudget();
            updatePercentages();
        }
    };
    
    return {
        init: function() {
            console.log("app has started...");
            
            // UICtrl.displayBudget(budget);
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }  
    };
    
})(budgetController, UIController);
// controller.publicTest2() // 28

controller.init();



