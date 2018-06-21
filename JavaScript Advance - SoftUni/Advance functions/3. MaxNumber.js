let arrA = [1, 44, 123, 33];
let arrB = [20, 5, 1, 18];

let biggestNumberArrA = Math.max.apply(this, arrA);
let biggestNumberArrB = Math.max.apply(this, arrB);
console.log(biggestNumberArrA);
console.log(biggestNumberArrB);