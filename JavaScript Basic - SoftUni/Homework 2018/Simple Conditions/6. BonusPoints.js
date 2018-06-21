let userNumber = 15875;

function bonusPointCalculator(userInput) {

    let bonusPoints = 0;

    if (userInput <= 100) {
        bonusPoints += 5;
    }
    else if ((userInput > 100) && (userInput < 1000)) {
        bonusPoints = + userInput / 5;
    }
    else if (userInput > 1000) {
        bonusPoints = + userInput / 10;
    }

    if (userInput % 2 === 0) {
        bonusPoints += 1;
    }
    else if(userInput % 5 === 0){
        bonusPoints += 2;
    }
    return bonusPoints;
}

let points = bonusPointCalculator(userNumber);
let finalPoints = userNumber + points;
console.log(points);
console.log(finalPoints);