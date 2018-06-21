let userCount = 5;
let userNumbers = [100, 99, 103, 2, 1];

function findBiggestNumber(count, numbers) {

    let biggest = Number.NEGATIVE_INFINITY;

    for (let a = 0; a < count; a++) {
        if (biggest < numbers[a]) {
            biggest = numbers[a];
        }
    }

    return biggest;
}

let biggestNumber = findBiggestNumber(userCount, userNumbers);
console.log(biggestNumber);
