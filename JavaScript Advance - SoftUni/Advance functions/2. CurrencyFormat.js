//Gived by condition
// separator: ","
// symbol: "$"
// symbolFirst: true


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function result(func) {
    return function (value) {
        return currencyFormatter(',', '$', true, value);
    };
}

let dollarFormater = result(currencyFormatter);
console.log(dollarFormater(5345));
