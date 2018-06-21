/*Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax and prints whether the point {x, y} is inside the rectangle or outside of it. If the point is at the rectangle border, it is considered inside.
The input comes as array of strings. Its holds the string representations of x, y, xMin, xMax, yMin, yMax. All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that xMin < xMax and yMin < yMax.
The output is a single line holding “inside” or “outside”.
*/

//numbers x, y, xMin, xMax, yMin, yMax 
let inputs = [12.5, -1, 2, 12, -3, 3];

function pointInRectangle(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let xMin = Number(input[2]);
    let xMax = Number(input[3]);
    let yMin = Number(input[4]);
    let yMax = Number(input[5]);

    if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
        return 'inside';
    }
    else {
        return 'outside';
    }
}
console.log(pointInRectangle(inputs));
