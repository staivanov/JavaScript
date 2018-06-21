/*Write a JS function to print a chessboard of size n X n. See the example for more information.
The input comes as array of one string element, holding the number n.
The output should be returned as a result of your function in the form of a string.
*/

let n = [5];
let tags = null;

function chessBoard(squaresNumber) {
    let numberOfSquares = Number(squaresNumber);
    tags = '<div class="chessboard">';
    let black = '\n\t\t' + '<span class="black"></span>';
    let white = '\n\t\t' + '<span class="white"></span>';
    let firstDiv = '\n\t' + '<div>';
    let lastDiv = '\n\t' + '</div>';

    for (let a = 1; a <= numberOfSquares; a++) {
        if ((a % 2) != 0) {
            tags += firstDiv + black + white + black + lastDiv;
        }
        else {

            tags += firstDiv + white + black + white + lastDiv;
        }
    }
    return tags;
}

let result = chessBoard(n);
console.log(result);

