// Updated pattern where we would simply define all of our functions and variables in the private scope
//  and return an anonymous object with pointers to the private functionality we wished to reveal as public.

let myRevealingModulePattern = (function () {

    let privateName = "Madjuna",
        publicVar = "Dqqqqqqqq";

    function privateFunction() {
        console.log("His name is: " + privateVar);
    }

    function publicSetFunction(name) {
        privateName = name;
    }

    function publicGetName() {
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties

    return {
        setName: publicSetFunction,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModulePattern.setName("Hinko");
myRevealingModulePattern.getName();
console.log(myRevealingModulePattern.greeting);


