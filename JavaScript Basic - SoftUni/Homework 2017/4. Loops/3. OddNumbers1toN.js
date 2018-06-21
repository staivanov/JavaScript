/*Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
The input comes as array of strings. Its first element holds the string representation of n. The number n will be an integer in the range [1 … 100 000].
The output should hold the expected odd numbers, each at a separate line.
*/

let n = ['40'];

function printOddNumberToN(input) {

    let lastNumber = Number(input[0]);
    for (let a = 1; a <= lastNumber; a += 2) {
        console.log(a);
    }
    return;
}
printOddNumberToN(n);
