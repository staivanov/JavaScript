/*Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
The input comes as array of two string elements, each holding a number. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result.
*/

let radius = 3.3;
let height = 7.8;
let coneValues = [radius, height];

//Volume
//V = pi* r * r (height/3)
function coneVolume(input) {
    return Math.PI * input[0] * input[0] * (input[1] / 3);
}

//Area
//A = pi * r * ( r + sqrt((h*h + r*r)))
function coneSurface(input) {
    return Math.PI * input[0] * (input[0] + Math.sqrt((input[1] * input[1]) + input[0] * input[0]));
}

console.log(coneVolume(coneValues));
console.log(coneSurface(coneValues));