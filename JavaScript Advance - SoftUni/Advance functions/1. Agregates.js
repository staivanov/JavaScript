let myArr = [5, -3, 20, 7, 0.5];
let result = agregator(myArr);
console.log(result);


function agregator(userArray) {

    let arrLength = userArray.length;
    let arrSum = giveNumbersSum(userArray);
    let arrProduct = givenNumbersProtudct(userArray);
    let arrJoin = userArray.join("");
    let arrMax = Math.max(...userArray);
    let arrMin = Math.min(...userArray);

    function giveNumbersSum(arr) {

        let sum = 0;
        for (let a = 0; a < arrLength; a++) {
            sum += arr[a];
        }
        return sum;
    }

    function givenNumbersProtudct(arr) {

        let product = 1;

        for (let a = 0; a < arrLength; a++) {
            product *= arr[a];
        }
        return product;
    }

    return `Sum = ${arrSum}\n\rMin = ${arrMin}\n\rMax = ${arrMax}\n\rProduct = ${arrProduct}\n\rJoin = ${arrJoin}`;
}
