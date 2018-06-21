/*Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator.
The input comes as an array of three strings – two need to be parsed as numbers, and one is the operator.
The output should be printed on the console
*/

let numbsAndOperator = ['10', '4', '*'];

function calcNumbers(input) {

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operatorResult = 0;

    switch (input[2]) {
        case '+': operatorResult = numberOne + numberTwo;
            break;
        case '-': operatorResult = numberOne - numberTwo;
            break;
        case '*': operatorResult = numberOne * numberTwo;
            break;
        case '/': operatorResult = numberOne / numberTwo;
            break;
        default: operatorResult = 'operator error';
            break;
    }
    return console.log(operatorResult);
}

calcNumbers(numbsAndOperator);