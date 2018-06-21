
function billCalculator(fruit, dayOfWeek, weight) {

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let sum = 0;

    if ((dayOfWeek != week[5]) && (dayOfWeek != week[6])) {
        switch (fruit) {
            case "banana":
                sum = 2.5 * weight;
                break;
            case "apple":
                sum = 1.2 * weight;
                break;
            case "orange":
                sum = 0.85 * weight;
                break;
            case "grapefruit":
                sum = 1.45 * weight;
                break;
            case "kiwi":
                sum = 2.7 * weight;
                break;
            case "pineapple":
                sum = 5.5 * weight;
                break;
            case "grapes":
                sum = 3.85 * weight;
                break;

            default:
                sum = "error";
                break;
        }
    }
    else if ((dayOfWeek == week[5]) || (dayOfWeek == week[6])) {
        switch (fruit) {
            case "banana":
                sum = 2.7 * weight;
                break;
            case "apple":
                sum = 1.25 * weight;
                break;
            case "orange":
                sum = 0.9 * weight;
                break;
            case "grapefruit":
                sum = 1.6 * weight;
                break;
            case "kiwi":
                sum = 3 * weight;
                break;
            case "pineapple":
                sum = 5.6 * weight;
                break;
            case "grapes":
                sum = 4.2 * weight;
                break;

            default:
                sum = "error";
                break;
        }
    }

    return sum;
}

let userFruit = "pineapple";
let userDayOfWeek = "Sunday";
let userWeight = 5;

let test = billCalculator(userFruit, userDayOfWeek, userWeight);
console.log(test);