let firstName = "Kalota";
let lastName = "Merenges";
let age = 30;
let town = "Berlin";

function printShortBio(fName, lName, personAge, town){
    let fullText = "You are " + fName + " " + lName  + ", " + personAge + "-years old person from " + town;
    return fullText; 
}

let test = printShortBio(firstName, lastName, age, town);
console.log(test);