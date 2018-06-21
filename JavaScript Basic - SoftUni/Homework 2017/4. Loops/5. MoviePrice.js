/*Movie ticket prices in a big retro-cinema depend on the movie title and on the day of week as shown below: 
Write a JS function that calculate the ticket price by movie title and day of week.
The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
The output should hold the ticket price or “error” if the title or day of week is invalid.
*/

function ticketPriceCalculator(input) {

    let movies = {
        'The Godfather': {
            'Monday': 12,
            'Tuesday': 10,
            'Wednesday': 15,
            'Thursday': 12.5,
            'Friday': 15,
            'Saturday': 25,
            'Sunday': 30
        },
        'Schindler\'s List': {
            'Monday': 8.5,
            'Tuesday': 8.5,
            'Wednesday': 8.5,
            'Thursday': 8.5,
            'Friday': 8.5,
            'Saturday': 15,
            'Sunday': 15
        },
        'Casablanca': {
            'Monday': 8,
            'Tuesday': 8,
            'Wednesday': 8,
            'Thursday': 8,
            'Friday': 8,
            'Saturday': 10,
            'Sunday': 10
        },
        'The Wizard of Oz': {
            'Monday': 10,
            'Tuesday': 10,
            'Wednesday': 10,
            'Thursday': 10,
            'Friday': 10,
            'Saturday': 15,
            'Sunday': 15
        }
    };

    let inputedMovie = input[0];
    let inputedDay = input[1];
    let isMovieThere = false;

    for (let movie in movies) {
        if (movie == inputedMovie) {
            isMovieThere = true;
        }
    }

    if (!isMovieThere) {
        return 'error';
    }
    else if (movies[inputedMovie].hasOwnProperty(inputedDay)) {
        return movies[inputedMovie][inputedDay];
    }
    else {
        return 'error';
    }
}

let movieAndDay = ['The Godfather', 'Saturday'];
let result = ticketPriceCalculator(movieAndDay);
console.log(result);
