/*Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as an array with one string element in it.
The output should be returned as a result of your program.
*/

let day = 'Wednesday';

function dayOfWeekNumber(input) {

    let inputDay = input;

    let DaysOfWeek = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    for (let day in DaysOfWeek) {
        if (day == inputDay) {
            let val = DaysOfWeek[day];
            return val;
        }
    }
    return 'error';
}

let result = dayOfWeekNumber(day);
console.log(result);