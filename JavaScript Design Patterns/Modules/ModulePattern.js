// The Module pattern was originally defined as a way to provide both 
// private and public encapsulation for classes in conventional software engineering.

// In JavaScript, the Module pattern is used to further emulate the concept of classes
// in such a way that we're able to include both public/private methods and variables inside a single object,
// thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood 
// of our function names conflicting with other functions defined in additional scripts on the page.

let myModule = (function () {

    let counter = 0;

    return {

        increment: function () {
            return counter++;
        },
        reset: function () {
            console.log("Counter is reseted");
            counter = 0;
        }

    };
})();

myModule.increment();
myModule.increment();
myModule.increment();
myModule.increment();
let result = myModule.increment();
console.log(result);
myModule.reset();


//Dojo Variant

var house = window.store || {};

if (!(house["table"])) {
    house.table = {};
}

if (!(house.table["foot"])) {
    house.table.foot = {};
}

house.table.foot = {
    //...
};