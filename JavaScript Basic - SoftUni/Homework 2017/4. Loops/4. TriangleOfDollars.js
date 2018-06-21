/*Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
The input comes as array of strings. Its first element holds the number n (0 < n < 100).
The output consists of n text lines like shown below.
*/

let input = '10';

function printTriangle(input) {

    let sight = '$';
    let triangle = [];

    for (let col = 0; col < input; col++) {
        for (let row = col; row <= col; row++) {
            console.log('$'.repeat(col));
        }
    }
    return;
}

printTriangle(input);