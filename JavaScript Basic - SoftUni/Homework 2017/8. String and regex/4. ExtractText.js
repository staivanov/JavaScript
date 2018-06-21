let userInput = ['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink) and (beer)'];

function extractText(text) {
    let userText = text[0];
    let searchedPattern = new RegExp(/([(]\w*\w * \w+[)])|([(]\w+[)])/, 'gi');
    let wordsInParentheses = userText.match(searchedPattern);
    console.log(wordsInParentheses);
}

extractText(userInput);