/*Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.
The input comes as array of strings that need to be parsed as numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
The output should be printed to the console. Calculate the distance in meters.
S = V*T
*/

let input = [11, 10, 120];

function calculateDistance(input) {
    let objOneSpeed = input[0];
    let objTwoSpeed = input[1];
    let timeInMinutes = input[2] / 3600;
    let objOneDistance = (input[0] * 1000) * timeInMinutes;
    let objTwoDistance = (input[1] * 1000) * timeInMinutes;
    return Math.abs(objOneDistance - objTwoDistance);
}

let result = calculateDistance(input);
console.log(result);