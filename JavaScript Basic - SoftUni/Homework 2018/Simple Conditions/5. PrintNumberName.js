let number = 8;

function numberNamePrinter(num) {
    let textNumber = " ";

    switch (num) {
        case 1:
            console.log(textNumber = "one");
            break;
        case 2:
            console.log(textNumber = "two");
            break;
        case 3:
            console.log(textNumber = "three");
            break;
        case 4:
            console.log(textNumber = "four");
            break;
        case 5:
            console.log(textNumber = "five");
            break;
        case 6:
            console.log(textNumber = "six");
            break;
        case 7:
            console.log(textNumber = "seven");
            break;
        default:
            textNumber = "Too big";
            console.log(textNumber);
            break;
    }
}

let test = numberNamePrinter(number);