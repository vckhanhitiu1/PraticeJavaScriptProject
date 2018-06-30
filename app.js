var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

})();



var UIController = (function() {

    var Domstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: 'add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(Domstrings.inputType).value,
                description: document.querySelector(Domstrings.inputDescription).value,
                value: document.querySelector(Domstrings.inputValue).value
            }

        },

        getDomStrings: function() {
            return Domstrings;
        }
    }
})();



//Global app controller
var controller = (function(budgetCtr, UICtr) {


    var setUpEventListener = function() {

        var DOM = UIController.getDomStrings

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrAddItem);


        document.addEventListener('keypress', function(event) {
            console.log(event);
            if (event.keyCode === 97) {
                console.log("key up");
            }
            if (event.keyCode === 100) {
                console.log("key down");
            }

        });

    }


    var ctrAddItem = function() {
        //get Data from input
        var input = UIController.getInput();
        console.log(input)
    }



    document.querySelector('.add__btn').addEventListener('click', ctrAddItem());
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctr
        }
    })

    return {
        init: function() {
            console.log('Application has started');
            setUpEventListener();
        }
    }


})(budgetController, UIController)

controller.init();