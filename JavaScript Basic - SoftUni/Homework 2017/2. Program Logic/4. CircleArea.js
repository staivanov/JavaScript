/*Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
The input comes as array of one string element, holding a number.
The output should be printed to the console on a new line for each result.
*/

function calculateCircleArea(radius){
    circleArea = Math.PI * radius * radius;
    return console.log(parseFloat(circleArea).toFixed(2),"\n", circleArea);
}

calculateCircleArea(5);