//ASCI table (decimal number)97 - 122

function printAllEnglishLetters(){

    let finalLetterNumber = 122;
    for(let letterNumber = 97; letterNumber <= finalLetterNumber; letterNumber++){
        console.log(String.fromCharCode(letterNumber));
    }
}

printAllEnglishLetters();