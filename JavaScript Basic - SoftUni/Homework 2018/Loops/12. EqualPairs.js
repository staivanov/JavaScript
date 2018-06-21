let arr = [4, 15, 0, 3, 3, 20, 20, 1, 1];
let currentPairSum, previousPair;
let smallestPairSum = Number.MAX_VALUE, biggestPairSum = Number.MIN_VALUE;

for (let index = 1; index <= arr.length - 2; index = index + 2) {
    currentPairSum = arr[index] + arr[index + 1];

    if (smallestPairSum > currentPairSum) {
        smallestPairSum = currentPairSum;
    }
    else if (biggestPairSum < currentPairSum) {
        biggestPairSum = currentPairSum;
    }

    previousPair = currentPairSum;
}

if (smallestPairSum != biggestPairSum) {
    let pairsDiff = biggestPairSum - smallestPairSum;
    console.log(`No, diff = ${pairsDiff}`);
}
else {
    console.log(`Yes, value = ${currentPairSum}`);
}

