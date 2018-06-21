/*Write a JS function that finds the biggest of 3 numbers.
The input comes as array of strings, where each element holds a number.
The output is the biggest from the input numbers.
*/

let numbs = ['130', '5', '99'];

function biggestNumber(input) {

    let max = 0;
    if ((input[0] >= input[1]) || (input[1] >= input[0]))
        max = input[0];
    if (max >= input[2]) max = input[2];
    return max;
}
let result = biggestNumber(numbs);
console.log(result);