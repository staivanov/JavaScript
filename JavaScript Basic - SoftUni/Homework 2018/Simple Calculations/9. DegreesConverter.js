//f = c * 1.8 + 32
let userInputCelsius = 0;

function FahrenheitToCelsius(userInput){
    let fahrenheitDegree = (userInput * 1.8) + 32;
    return fahrenheitDegree;
}

let test = FahrenheitToCelsius(userInputCelsius);
console.log(test);

