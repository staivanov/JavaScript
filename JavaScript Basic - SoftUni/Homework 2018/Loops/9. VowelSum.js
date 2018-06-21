//a - 1, e - 2, i - 3, o - 4, u - 5. Only lower case.
let userWord = "beer";

function vowelSumming(word) {

    let sum = 0;

    for (let a = 0; a < word.length; a++) {

        if (word[a] == 'a') {
            sum += 1;
        }
        else if (word[a] == 'e') {
            sum += 2;
        }
        else if (word[a] == 'i') {
            sum += 3;
        }
        else if (word[a] == 'o') {
            sum += 4;
        }
        else if (word[a] == 'u') {
            sum += 5;
        }
    }
    return console.log(sum);
}

vowelSumming(userWord);