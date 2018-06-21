let arrUserText = ['A Regular 18 Expression 99 needs to have the global flag in order to match all occurrences in the text'];

function matchAllWords(userInput) {
    let userText = userInput[0];
    let regExpExportWords = new RegExp(/\b\w+/, "gi");
    let arrWords = userText.match(regExpExportWords);
    let concatenatedWords = arrWords.join("|");
    console.log(concatenatedWords);
}

matchAllWords(arrUserText);