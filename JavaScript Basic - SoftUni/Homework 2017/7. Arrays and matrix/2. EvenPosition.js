/*Write a JS function that finds the elements at even positions in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function. Collect all elements in a string, separated by space.
*/

let numbers = ['20', '30', '40', '10', '30', '15', '100'];

function evenPositionElements(input) {

    let str = null;
    let len = input.length;
    str = input[0];

    for (let a = 1; a < len; a++) {

        if ((a % 2) == 0) {
            str = str + " " + input[a];
        }
    }
    return str;
}
let result = evenPositionElements(numbers);
console.log(result);