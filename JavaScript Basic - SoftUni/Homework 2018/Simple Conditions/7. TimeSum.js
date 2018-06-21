// From 0 to 50 sec.
let timeOfAthletes = ["40", "45", "40"];

function sumSeconds(times) {

    let firstTime = parseInt(times[0], 10),
        secondTime = parseInt(times[1], 10),
        thirdTime = parseInt(times[2], 10);
    let timeSum = firstTime + secondTime + thirdTime;
    let oneMinute = 60, twoMinutes = 120;
    let result = " ";

    if (timeSum < oneMinute) {
        result = "0:" + timeSum;
        //Below 10 seconds
        if (timeSum < 10) {
            result = "0:0" + timeSum;
            return result;
        }
        return result;
    }
    else if ((timeSum > oneMinute) && (timeSum < twoMinutes)) {
        result = "1:";
        let differenceInSeconds = timeSum - oneMinute;

        if (differenceInSeconds < 10) {
            return result + "0" + differenceInSeconds;
        }
        else {
            return result + differenceInSeconds;
        }
    }
    else if (timeSum > twoMinutes) {
        let differenceInTwoMinutesSeconds = timeSum - twoMinutes;
        result = "2:";

        if (differenceInTwoMinutesSeconds < 10) {
            return result + "0" + differenceInTwoMinutesSeconds;
        }
        else {
            return result + differenceInTwoMinutesSeconds;
        }
    }
    else if(timeSum == oneMinute){
        result = "1:00";
        return result;
    }
    else if(timeSum == twoMinutes){
        result = "2:00";
        return result;
    }
}

let test = sumSeconds(timeOfAthletes);
console.log(test);