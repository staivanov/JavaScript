let userCount = 3;
let userNumbers = [-10, 20, -30];

function findBiggestNumber(count, numbers) {

    let biggest = Number.POSITIVE_INFINITY;

    for (let a = 0; a < count; a++) {
        if (biggest > numbers[a]) {
            biggest = numbers[a];
        }
    }

    return biggest;
}

let biggestNumber = findBiggestNumber(userCount, userNumbers);
console.log(biggestNumber);
