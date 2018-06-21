let userArr = ["hi", "my", "friends", "how", "are", "you"];

function printReversedUserArr(userInputArr){

    let joinedText = userInputArr.join("");
    console.log(joinedText);
    let reversedText = "";
    
    for (let a = joinedText.length - 1; a >= 0; a--) {
        reversedText += joinedText[a];
    }
    
    console.log(reversedText);
}

printReversedUserArr(userArr);