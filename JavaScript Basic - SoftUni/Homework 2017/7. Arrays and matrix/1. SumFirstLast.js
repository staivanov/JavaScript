/*Write a JS function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/

let numbs = ['5', '10', '40', '20', '15', '35'];

function sumFirstAndLastNumbers(input) {
    let sumOfFirstAndLast = 0, len = input.length;

    for (let a = 0; a < len; a++) {
        if ((a === 0) || (a == (len - 1))) {
            sumOfFirstAndLast += Number(input[a]);
        }
    }
    return sumOfFirstAndLast;
}

let result = sumFirstAndLastNumbers(numbs);
console.log(result);