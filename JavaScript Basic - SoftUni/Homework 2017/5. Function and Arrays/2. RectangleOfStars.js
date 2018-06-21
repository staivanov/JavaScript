/*Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
The input comes as an array with one string element in it, which needs to be parsed to a number.
The output is a series of lines printed on the console, forming a rectangle of variable size
*/

let rectangleSize = '6';

function rectanglePrint(input) {
    let star = '*';
    let size = Number(input);

    if (size <= 0) {
        for (let a = 0; a < 5; a++) {
            console.log(star.repeat(5));
        }
    }
    else {
        for (let a = 0; a < size; a++) {
            console.log(star.repeat(size));
        }
    }
}

rectanglePrint(rectangleSize);