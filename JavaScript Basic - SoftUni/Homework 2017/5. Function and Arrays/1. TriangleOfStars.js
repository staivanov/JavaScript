/*Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
The input comes as an array with one string element in it, which needs to be parsed to a number.
The output is a series of lines printed on the console, forming a triangle of variable size.
*/

let input = '8';

function printTriangle(input) {

    let sight = '*';
    let maxRow = input[0];

    for (let col = 0; col <= maxRow; col++) {
        for (let row = col; row <= col; row++) {
            console.log(sight.repeat(row));
        }
    }
    for (let row2 = maxRow - 1; row2 >= 0; row2--) {
        console.log(sight.repeat(row2));
    }
    return;
}

printTriangle(input);