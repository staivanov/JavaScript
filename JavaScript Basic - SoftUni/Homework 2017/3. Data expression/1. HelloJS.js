/*Write a JS function that can receive a name as input and print a greeting to the console.
The input comes as array of strings with one element that is the name of the person.
The output should be printed to the console.
*/

let name = ['Rich'];


function greeting(input) {
    return 'Hello, ' + input[0] + ', I am JavaScript';
}

let result = greeting(name);
console.log(result);