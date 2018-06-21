let userPassword = "s3cr3t!P@ssw0rd";

function guessPassword(userPas){
    let correct = "Welcome";
    let failed = "Wrong Password";
    let correctPassword = "s3cr3t!P@ssw0rd";

    if(userPas === correctPassword){
        return correct;
    }
    else {
        return failed;
    }
}

let test = guessPassword(userPassword);
console.log(test);