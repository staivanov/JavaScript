/*Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of string elements holding numbers.
The output is printed on the console, each element on a new line
*/

let numbers = ['3', '-2', '0', '-1'];

function negativeToPositiveMaker(input) {
    let len = input.length;
    let negativeFirst = [];

    for (let a = 0; a < len; a++) {
        if (input[a] < 0) {
            negativeFirst.unshift(input[a]);
        }
        else {
            negativeFirst.push(input[a]);
        }
    }
    return console.log(negativeFirst);
}

negativeToPositiveMaker(numbers);
