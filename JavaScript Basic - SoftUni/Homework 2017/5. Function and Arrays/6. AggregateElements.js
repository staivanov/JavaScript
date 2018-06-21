/*Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of elements that must be parsed as numbers, where necessary.
The output should be printed on the console on a new line for each of the operations.
*/

let numbers = ['3', '2', '10', '20'];

function sumAndConcatNumbers(input) {

    let numbersToStringSum = input[0];
    let sumOfNumbers = Number(input[0]);

    for (let a = 1; a < input.length; a++) {
        numbersToStringSum += input[a];
        sumOfNumbers += Number(input[a]);
    }

    return console.log(numbersToStringSum, '\n' + sumOfNumbers);
}

sumAndConcatNumbers(numbers);


