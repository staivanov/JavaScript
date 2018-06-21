/*You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of string elements holding numbers.
The output is printed on the console on a single line, separated by space.
*/

let numbers = ['200', '100', '30', '10', '15', '20', '25'];

function printOddElementsDouble(input) {

    let len = input.length;
    let reverseDoubledArray = 0;
    let inputedArray = input;
    reverseDoubledArray = [input[len - 1] * 2];

    for (let a = len - 2; a >= 0; a--) {
        if (a % 2 == 0) {
            reverseDoubledArray += ' ' + inputedArray[a] * 2;
        }
    }
    return console.log(reverseDoubledArray);
}
printOddElementsDouble(numbers);