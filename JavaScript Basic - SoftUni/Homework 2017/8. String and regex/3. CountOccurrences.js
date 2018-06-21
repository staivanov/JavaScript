let str = ['the', 'The quick brown fox jumps ovtheer the lay dog.'];

function countOccurrences(userText) {
    let searchedWord = new RegExp(userText[0], 'gi');
    let arrFoundedWords = userText[1].match(searchedWord);
    console.log(arrFoundedWords.length);
}
countOccurrences(str);
