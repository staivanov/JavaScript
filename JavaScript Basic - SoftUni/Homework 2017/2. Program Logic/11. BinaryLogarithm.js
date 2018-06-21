/*Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
The input comes as array of string elements, each holding a number.
The output should be printed to the console, on a new line for each number.
*/

let numbs = [1, 2, 4, 32];
let binaryLogarithmResults = [];

function binaryLogarithmCalc(input) {
    for (let a = 0; a < input.length; a++) {
        binaryLogarithmResults[a] = Math.log2(input[a]);
    }
    return binaryLogarithmResults;
}

let result = binaryLogarithmCalc(numbs);
console.log(result);

