let numberOne = 99;
let numberTwo = 5;

function greaterNumber(numOne, numTwo) {

    if (numOne > numTwo) {
        return numOne;
    }
    else if (numOne < numTwo) {
        return numTwo;
    }
    else {
        return numOne;
    }
}

let test = greaterNumber(numberOne, numberTwo);
console.log(test);