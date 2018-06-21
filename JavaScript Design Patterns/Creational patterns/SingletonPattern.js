// The Singleton pattern is thus known because it restricts instantiation of a class to a single object. 
// Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance 
// of the class if one doesn't exist. In the event of an instance already existing, 
// it simply returns a reference to that object.

//Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. 
// An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application
// ensuring that no connections are 'lost'.


let mySingleton = (function () {

    let instance;

    function init() {
        //Singleton
        function privateMethod() {
            console.log("I am private method");
        }

        let privateVar = "I am private variable";
        let privateRandomNumber = Math.random();

        return {

            publicMethod: function () {
                console.log("I am public method");
            },

            publicProperty: "I am public property",

            getRandomNumber: function () {

                return privateRandomNumber;
            }
        };
    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            
            if (!instance) {

                instance = init();
            }

            return instance;

        }
    };
})();

let mySingletonInstance = mySingleton.getInstance();

