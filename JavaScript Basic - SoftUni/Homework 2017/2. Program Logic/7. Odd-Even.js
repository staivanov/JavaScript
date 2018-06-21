/*Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
The input comes as array of one string element, holding a number.
The output should be printed to the console. Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.
*/

let num = ['26.5'];

function numberOddEvenChecker(number) {
    if (number % 2 === 0) {
        return 'even';
    }
    else if ((number % 2 !== 0) && (number % 1 == 0)) {
        return 'odd';
    }
    else {
        return 'invalid';
    }
}

let result = numberOddEvenChecker(num);
console.log(result);