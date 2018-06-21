let userCount = 6;
let userNumbers = [1, 10, 20, 0, 10, 21];


function leftRightCompare(count, numbers) {

    let leftSum = 0;
    let rightSum = 0;
    let result = " ";

    for (let a = 0; a < count / 2; a++) {
        leftSum += numbers[a];
    }

    for (let a = count - 1; a >= count / 2; a--) {
        rightSum += numbers[a];
    }

    if (leftSum == rightSum) {
        result = "Yes, sum = " + rightSum;
        return result;
    }
    else {

        if (leftSum > rightSum) {
            result = "No, diff = " + (leftSum - rightSum);
            return result;
        }
        else {
            result = "No, diff = " + (rightSum - leftSum);
            return result;
        }
    }
}

let test = leftRightCompare(userCount, userNumbers);
console.log(test);