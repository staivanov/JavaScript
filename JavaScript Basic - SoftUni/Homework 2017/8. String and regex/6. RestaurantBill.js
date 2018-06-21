let userInput = ['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69', 'Bread', '0.2'];

function printRestaurantBill(productsAndPrices) {

    let bill = 0, consumedProducts = "";

    for (let a = 0; a < userInput.length; a++) {

        let isNumber = parseFloat(userInput[a]);

        if (isNumber) {
            bill += parseFloat(userInput[a]);
        }
        else {
            consumedProducts += userInput[a] + ", ";
        }
    }

    let removeLastComma = new RegExp(/ \w+/, 'gi');
    let finalConsumedProducts = consumedProducts.match(removeLastComma);

    console.log(`You purchased ${finalConsumedProducts} for a total sum of ` + bill);
}

printRestaurantBill(userInput);
