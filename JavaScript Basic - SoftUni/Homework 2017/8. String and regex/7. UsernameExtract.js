let userEmails = ['peshoo_qwe@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'];


function extractUsername(emails) {

    let regExp = /(\w+(?=@))|(\b\w)/gi;
    let finalResult = "";
    let usernames = [ ];

    for (let a = 0; a < emails.length; a++) {

        let email = userEmails[a].match(regExp);

        for (let b = 0; b < email.length; b++) {
            finalResult += email[b];
            if (b === 0) {
                finalResult += ".";
            }
        }
        finalResult += ", ";
    }
    return console.log(finalResult);
}

extractUsername(userEmails);