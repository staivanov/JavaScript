/*Write a JS function that finds the biggest element inside a matrix.
The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
The output is the return value of your function. Find the biggest element and return it.
*/

let numbers = ['20 50 10', '8 33 145', '1100 2 44'];

function biggestNumberInMatrix(input) {
    let biggest = Number.MIN_VALUE;
    let len = numbers.length;
    let testArr = [];

    for (let a = 0; a < len; a++) {
        testArr = numbers[a].split(" ");

        for (let b = 0; b < testArr.length; b++) {
            if (Number(biggest) < Number(testArr[b])) {
                biggest = Number(testArr[b]);
            }
        }
    }
    return biggest;
}

let result = biggestNumberInMatrix(numbers);
console.log(result);