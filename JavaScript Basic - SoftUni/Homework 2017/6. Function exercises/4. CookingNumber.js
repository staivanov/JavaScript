/*Write a JS program that receives a number and a list of five operations. Perform the operations in sequence by starting with the input number and using the result of every operation as starting point for the next. Print the result of every operation in order. The operations can be one of the following:
•	chop – divide the number by two
•	dice – square root of number
•	spice – add 1 to number
•	bake – multiply number by 3
•	fillet – subtract 20% from number
The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a number. The remaining 5 elements are the names of operations to be performed.
The output should be printed on the console.
*/

let myInput = [9, 'dice', 'spice', 'chop', 'bake', 'fillet'];

function cookedNumbers(input) {

    let result = ' ';
    let number = input[0];
    let len = input.length - 1;

    for (step = 1; step <= len; step++) {
        switch (input[step]) {
            case 'chop': number = number / 2;
                result += " " + number;
                break;
            case 'dice': number = Math.sqrt(number);
                result += " " + number;
                break;
            case 'spice': number = number + 1;
                result += " " + number;
                break;
            case 'bake': number = number * 3;
                result += " " + number;
                break;
            case 'fillet': number = number - (number * (20 / 100)).toFixed(2);
                result += " " + number;
                break;
            default:
                break;
        }
    }
    return console.log(result);
}
cookedNumbers(myInput);