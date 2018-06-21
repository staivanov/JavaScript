/*Write a JS function that prints the two smallest elements from an array of numbers.
The input comes as array of string elements holding numbers.
The output is printed on the console on a single line, separated by space.
*/

let numbers = ['1', '30', '15', '-1', '50', '2', '5', '4', '-100'];

function smalletsTwoNumbers(input) {

    let smallestOne = Number(input[0]), smallestTwo = Number(input[1]);
    let len = input.length;
    let smallestNumbs = ' ';

    for (let a = 0; a < len; a++) {
        if (smallestOne > Number(input[a])) {
            smallestOne = input[a];
        }
    }

    for (let b = 0; b < len; b++) {
        if (smallestTwo > Number(input[b]) && (Number(numbers[b]) > smallestOne)) {
            smallestTwo = Number(input[b]);
        }
    }
    smallestNumbs = smallestOne + ' ' + smallestTwo;
    return console.log(smallestNumbs);
}

smalletsTwoNumbers(numbers);

