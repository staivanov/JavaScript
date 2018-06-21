let input = 95;

function numberTest(userInput) {

    if (userInput < 100) {
        return console.log("Less than 100");
    }
    else if ((userInput > 100) && (userInput < 200)) {
        return console.log("Between 100 and 200");
    }
    else if(userInput == 200){
        return console.log("Number is 200");
    }
    else {
        return console.log("Greater than 200");
    }
}

numberTest(100);