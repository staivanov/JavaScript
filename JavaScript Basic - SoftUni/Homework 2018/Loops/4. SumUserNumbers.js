let userNumbers = 3;
let numbers = [-10, -20, -30];

function sumNumbers(count, userNumbers){

    let sum = 0;

    for(let a = 0; a < count; a++){
        sum += userNumbers[a];
    }

    return sum;
}

let test = sumNumbers(userNumbers, numbers);
console.log(test);