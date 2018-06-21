/*Write a JS function that prints the first k and the last k elements from an array of numbers.
The input comes as array of string elements holding numbers. The first element represents the number k,
 all other elements are from the array that needs to be processed.
*/
//              0   1    2    3     4      5     6      7
let numbers = ['3', '7', '8', '9', '100', '36', '55', '22', '96'];


function firstAndLastKelements(input) {

    let k = Number(input[0]);
    let str = Number(input[1]);
    let len = Number(input.length);
    let counter = k;

    for (let a = 2; a < len; a++) {
        if ((a <= k)) {
            str += " " + Number(input[a]);
        }
        else if (len - a == counter) {
             str += " " + Number(input[a]);
             counter--;
        }
       
    }
    return str;
}

let result = firstAndLastKelements(numbers);
console.log(result);

