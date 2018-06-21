/*Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
The input comes as array of strings that need to be parsed as numbers.
The output should be printed to the console on two lines.
*/
let sideAB = ['1', '3'];

function calcRectangleAreaAndPerimeter(input) {
    let perimeter = (2 * input[0]) + (2 * input[1]);
    let area = input[0] * input[1];
    return console.log(perimeter + '\n' + area);
}

calcRectangleAreaAndPerimeter(sideAB);
