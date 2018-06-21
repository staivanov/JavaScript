let userName = "Kalota";

function printGreeting(inputName){
    let fullGreeting = "Hello, " + inputName + "!";
    return fullGreeting;
}

let test = printGreeting(userName);
console.log(test);