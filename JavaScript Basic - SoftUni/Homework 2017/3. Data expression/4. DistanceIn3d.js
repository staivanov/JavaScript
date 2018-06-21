/*Write a JS function that calculates the distance between the two points in 3D by given coordinates.
The input comes as an array of strings that need to be parsed as numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.
The output should be printed to the console.
*/
//x,y, z  x2, y2, z2
let setOfCoordinates = [3.5, 0, 1, 0, 2, -1];

function twoPointsDistanceCalc(input){
  let pointsOne = Math.pow((input[3] - input[0]), 2);
  let pointTwo = Math.pow((input[4] - input[1]), 2);
  let pointThree = Math.pow((input[5] - input[2]), 2);
  let pointsSum = pointsOne + pointTwo + pointThree;
  let result = Math.sqrt(pointsSum);
    return result;
}

twoPointsDistanceCalc(setOfCoordinates);