/*Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
The input comes as array of one string element, holding a number.
The output should be printed to the console. Print yes if the year is leap and no otherwise.
*/
let leapYear = 2016;

function isLeap(input) {
    let ruleOne = (input % 4) === 0;
    let ruleTwo = (input % 100) === 0;
    let ruleThree = (input % 400) === 0;

    if (ruleOne && ruleTwo && ruleThree) {
        return 'yes';
    }
    else if (ruleOne && ruleTwo) {
        return 'no';
    }
    else if (ruleOne) {
        return 'yes';
    }
    else {
        return 'no';
    }
}

let result = isLeap(leapYear);
console.log(result);