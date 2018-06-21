//1 euro is 1.94 BGN
let vegetablesOneKgPrice = 1.5;
let fruitsOneKgPrice = 2.5;
let vegetablesWeightInKg = 10;
let fruitsWeightInKg = 10;

function profitCalculatorToEuro(vegPrice, fruPrice, vegWeight, fruWeight){

    let profit = (vegPrice * vegWeight) + (fruPrice * fruWeight);
    let oneEuro = 1.94;
    let profitToEuro = profit / oneEuro;
    return profitToEuro.toFixed(2);
}

let test = profitCalculatorToEuro(vegetablesOneKgPrice, fruitsOneKgPrice, vegetablesWeightInKg, fruitsWeightInKg);
console.log(test);

