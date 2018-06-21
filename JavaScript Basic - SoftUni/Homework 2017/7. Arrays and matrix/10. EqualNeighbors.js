/*Write a JS function that finds the number of equal neighbor pairs inside a matrix of variable size and type.
The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
The output is return value of you function. Save the number of equal pairs you find and return it.
*/


let myInput = ['2 3 4 7 0',
 '4 0 5 3 4',
 '2 3 5 4 2',
 '9 8 7 5 4']




function equalNeighborsNumber(input) {

    let equalNeighborCounter = 0;
    let lenMatrix = input.length
    let rowOne = [], rowTwo = [], rowLength = input[0].length;

    for (let index = 1; index < lenMatrix; index++) {
        rowOne = input[index - 1].split(" ");
        rowTwo = input[index].split(" ");

        for (let index2 = 0; index2 < rowLength; index2++) {
            if (Number(rowOne[index2]) == Number(rowTwo[index2])) {
                equalNeighborCounter++;
            }
        }
    }
    return equalNeighborCounter;
}
let result = equalNeighborsNumber(myInput);
console.log(result);
