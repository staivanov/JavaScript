//From 100 to 200 is valid. Zero is also valid number.
let number = 200;

function numberCheck(input) {
    let result = " ";

    if ((input >= 100) && (input <= 200)) {
        return result;
    }
    else if ((input > 200) || (input < 0)) {
        result = "invalid";
        return result;
    }
    else if (input === 0) {
        return result;
    }
}

let test = numberCheck(number);
console.log(test);