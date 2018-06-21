let userInput = 8;
//One inch is 2.54cm
function inchToCmConverter(input){
    let inchSize = 2.54;
    let cmResult = input * inchSize;
    return cmResult;
}

let testConvertion = inchToCmConverter(userInput);
console.log(testConvertion);