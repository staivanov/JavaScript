/*Write a JS function that rounds numbers to specific precision.
The input comes as an array of two string elements that need to be parsed as a numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
The output should be printed to the console. Do not print insignificant decimals.
*/

let arrInput = [3.1415926535897932384626433832795, '16'];

function roundNumber(input) {
    let inputNumber = input[0],
        precision = input[1],
        result = parseFloat(inputNumber).toFixed(precision),
        maxPrecision = 15;

        if(precision > maxPrecision){
            result = parseFloat(inputNumber).toFixed(15);
        }
        return result;
}

let roundedNumber = roundNumber(arrInput);
console.log(roundedNumber);