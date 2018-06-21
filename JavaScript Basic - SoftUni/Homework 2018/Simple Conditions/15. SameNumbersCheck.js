let numbers = ["5", "5", "5"];

function sameNumbersChecking(userNumbers) {

    let sameNumber = "no";
    let checkedNumbers = 3;

    for (let a = 0; a < checkedNumbers; a++) {
        if ((userNumbers[0] == userNumbers[1]) && (userNumbers[1] == userNumbers[2])) {
            sameNumber = "yes";
            return sameNumber;
        }
        else {
            return sameNumber;
        }
    }
}

let test = sameNumbersChecking(numbers);
console.log(test);