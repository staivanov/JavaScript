/*Write a JS function that determines whether a point is inside the volume, defined by the box, shown on the right.
The input comes as an array of string elements that need to be parsed as numbers. Each set of 3 elements are the x, y and z coordinates of a point.
The output should be printed to the console on a new line for each point. Print inside if the point lies inside the volume and outisde otherwise.
*/

let myInput = [8, 20, 22];

function inVolume(input) {

    let x = input[0], y = input[1], z = input[2];
    let x1 = 10, x2 = 50, y1 = 20, y2 = 80, z1 = 15, z2 = 50;

    if (x >= x1 && x <= x2) {
        if (y >= y1 && y <= y2) {
            if (z >= z1 && z <= z2) {
                return console.log('inside');
            }
        }
    }
    return console.log('outside');
}

inVolume(myInput);