let str = "Hello, world";

function getPrintedLetters(userString) {

    let splitedUserString = userString.split("");
    let strLen = userString.length;

    for (let a = 0; a < strLen; a++) {
        console.log(`Str[${a}] -> ` + splitedUserString[a]);
    }
}

getPrintedLetters(str);
