let evenNumber = 54;
let oddNumber = 43;

function evenOrOdd(number) {

    let evenCheck = number % 2;

    if (evenCheck === 0) {
        let even = "even";
        return even;
    }
    else if (evenCheck !== 0 && evenCheck > 0) {
        let odd = "odd";
        return odd;
    }
    else {
        return 0;
    }
}

let test = evenOrOdd(oddNumber);
console.log(test);