let table = ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'];

function printTownsAndIncomeSum(userTable) {

    let stringedTable = userTable.toString();
    let regExpTown = new RegExp(/([a-z]+\s\w+)|([a-z]+)/, "gi");
    let towns = stringedTable.match(regExpTown);
    let regExpIncomes = new RegExp(/\d+/, "gi");
    let arrTownIcomes = stringedTable.match(regExpIncomes);
    let townIncomeSum = 0;

    for (let income of arrTownIcomes) {
        townIncomeSum += parseInt(income);
    }

    let finalResult = towns + "\r\n" + townIncomeSum;
    return console.log(finalResult);
}

printTownsAndIncomeSum(table);
