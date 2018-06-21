//Currency: BGN, USD, EUR, GBP

let userInput = ["20", "USD", "BGN"];

function convertCurrency(amount, fromCurrency, toCurrency) {

    let usdRate = 1.79549, eurRate = 1.95583, gbpRate = 2.53405, bgnRate = 1;
    let usd = "USD", eur = "EUR", bgn = "BGN", gbp = "GBP";
    let convertedAmount,
        convertToBGfromUSD = parseFloat(amount) * usdRate,
        convertToBGfromEUR = parseFloat(amount) * eurRate,
        convertToBGfromGBP = parseFloat(amount) * gbpRate;

    //BGN to other currency
    if ((fromCurrency == bgn) && (toCurrency) == usd) {
        convertedAmount = amount / usdRate;
    }
    else if ((fromCurrency == bgn) && (toCurrency) == eur) {
        convertedAmount = amount / eurRate;
    }
    else if ((fromCurrency == bgn) && (toCurrency) == gbp) {
        convertedAmount = amount / gbpRate;
    }

    //USD to other currency
    if ((fromCurrency == usd) && (toCurrency) == bgn) {
        convertedAmount = parseFloat(amount) * usdRate;
    }
    else if ((fromCurrency == usd) && (toCurrency) == eur) {
        convertedAmount = convertToBGfromUSD / eurRate;
    }
    else if ((fromCurrency == usd) && (toCurrency) == gbp) {
        convertedAmount = convertToBGfromUSD / gbpRate;
    }

    //EUR to other currency
    if ((fromCurrency == eur) && (toCurrency == bgn)) {
        convertedAmount = convertToBGfromEUR;
    }
    else if ((fromCurrency == eur) && (toCurrency == usd)) {
        convertedAmount = convertToBGfromEUR / usdRate;
    }
    else if ((fromCurrency == eur) && (toCurrency == gbp)) {
        convertedAmount = convertToBGfromEUR / gbpRate;
    }

    //GBP to other currency
    if ((fromCurrency == gbp) && (toCurrency == bgn)) {
        convertedAmount = convertToBGfromGBP;
    }
    else if ((fromCurrency == gbp) && (toCurrency == usd)) {
        convertedAmount = convertToBGfromGBP / usdRate;
    }
    else if ((fromCurrency == gbp) && (toCurrency == eur)) {
        convertedAmount = convertToBGfromGBP / eurRate;
    }

    return console.log(convertedAmount.toFixed(2));
}

convertCurrency(userInput[0], userInput[1], userInput[2]);