let userCity = "Sofia";
let userQuantity = 1500;

function commisionCalculator(town, quantity) {
    let commission = 0;
    if (town == "Sofia") {
        switch (true) {
            case ((quantity >= 0) && (quantity <= 500)):
                commission = quantity * 0.05;
                break;
            case ((quantity > 500) && (quantity <= 1000)):
                commission = quantity * 0.07;
                break;
            case ((quantity > 1000) && (quantity <= 10000)):
                commission = quantity * 0.08;
                break;
            case (quantity > 10000):
                commission = quantity * 0.12;
                break;
            default:
                commission = "error";
                break;
        }
    }

    if (town == "Varna") {
        switch (true) {
            case ((quantity >= 0) && (quantity <= 500)):
                commission = quantity * 0.045;
                break;
            case ((quantity > 500) && (quantity <= 1000)):
                commission = quantity * 0.075;
                break;
            case ((quantity > 1000) && (quantity <= 10000)):
                commission = quantity * 0.1;
                break;
            case (quantity > 10000):
                commission = quantity * 0.13;
                break;
            default:
                commission = "error";
                break;
        }
    }

    if (town == "Plovdiv") {
        switch (true) {
            case ((quantity >= 0) && (quantity <= 500)):
                commission = quantity * 0.055;
                break;
            case ((quantity > 500) && (quantity <= 1000)):
                commission = quantity * 0.08;
                break;
            case ((quantity > 1000) && (quantity <= 10000)):
                commission = quantity * 0.12;
                break;
            case (quantity > 10000):
                commission = quantity * 0.145;
                break;
            default:
                commission = "error";
                break;
        }
    }
    return commission;

}

let test = commisionCalculator(userCity, userQuantity);
console.log(test);