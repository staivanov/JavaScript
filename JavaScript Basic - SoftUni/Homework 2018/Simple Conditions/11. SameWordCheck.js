let first = "Hello";
let second = "1lo";

function wordCheck(firstWord, secondWord){

    let yes = "yes";
    let no = "no";
    let firstWordLowerCase = firstWord.toLowerCase();
    let secondWordToLowerCase = secondWord.toLowerCase();

    if(firstWordLowerCase === secondWordToLowerCase){
        return console.log(yes);
    }
    else {
        return console.log(no);
    }
}

wordCheck(first, second);