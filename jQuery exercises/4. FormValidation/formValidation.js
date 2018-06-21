function validate() {
    let companyInfoFieldSet = $("#companyInfo");
    let submitBtn = $("#submit");
    let company = $("#company");

    company.on("click", function () {
        let isCheckedCompany = $("input[type=checkbox]:checked").val();

        if (isCheckedCompany == 'on') {
            companyInfoFieldSet.css("display", "block");
        }
        else {
            companyInfoFieldSet.css("display", "none");
        }
    });

    submitBtn.on("click", function (ev) {
        ev.preventDefault();
        let usernameVal = $("#username").val(),
            username = $("#username"),
            minUsernameCharsLen = 3,
            maxUsernameCharsLen = 20,
            isUsernameValid,
            usernamePattern = new RegExp(/\W/, 'gi'), //match any non-word characters -> [^A-Za-z0-9_]
            usernamePatternCheck = usernameVal.search(usernamePattern),
            minUsernameLenCheck = (usernameVal.length >= minUsernameCharsLen),
            maxUsernameLenCheck = (usernameVal.length <= maxUsernameCharsLen);

        if (minUsernameLenCheck && maxUsernameLenCheck && (usernamePatternCheck < 0)) {
            username.css("border", "none");
            isUsernameValid = true;
        }
        else {
            username.css("border", "1px solid red");
            isUsernameValid = false;
        }

        let password = $("#password"),
            passwordVal = $("#password").val(),
            confirmPassword = $("#confirm-password"),
            confirmPasswordVal = $("#confirm-password").val(),
            isPasswordEqual = false,
            isPasswordValid = false,
            minPasswordCharsLen = 5,
            maxPasswordCharsLen = 15,
            passwordPattern = new RegExp(/\W/, 'gi'),
            passwordSearchVal = passwordVal.search(passwordPattern),
            confirmpasswordSearchVal = confirmPasswordVal.search(passwordPattern),
            passwordLenCheck = (passwordVal.length >= minPasswordCharsLen) && (passwordVal.length <= maxPasswordCharsLen),
            confirmPasswordLenCheck = (confirmPasswordVal.length >= minPasswordCharsLen) && (confirmPasswordVal.length <= maxPasswordCharsLen),
            passwordCheck = (passwordSearchVal < 0) && passwordLenCheck,
            confirmPasswordCheck = (confirmpasswordSearchVal < 0) && confirmPasswordLenCheck;

        //Validating password
        if (passwordCheck) {
            password.css("border", "none");
            isPasswordValid = true;
        }
        else {
            password.css("border", "1px solid red");
        }

        //Validating confirm password
        if (confirmPasswordCheck) {
            confirmPassword.css("border", "none");
        }
        else {
            isPasswordValid = false;
            confirmPassword.css("border", "1px solid red");
        }

        if (passwordVal === confirmPasswordVal) {
            isPasswordEqual = true;
        }
        else {
            password.css("border", "1px solid red");
            confirmPassword.css("border", "1px solid red");
        }

        //Email field
        let emailVal = $("#email").val(),
            email = $("#email"),
            emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            emailCheck = emailVal.search(emailPattern),
            isEmailValid;

        if (emailCheck < 0) {
            email.css("border", "1px solid red");
            isEmailValid = false;
        }
        else {
            email.css("border", "none");
            isEmailValid = true;
        }


        let companyNumber = $("#companyNumber"),
            companyNumberVal = $("#companyNumber").val(),
            isComnanyNumberValid = false,
            maxCompanyNumber = 9999,
            minCompanyNumber = 1000,
            maxCompanyNumberCheck = companyNumberVal >= minCompanyNumber,
            minCompanyNumberCheck = companyNumberVal <= maxCompanyNumber;

        if (maxCompanyNumberCheck && minCompanyNumberCheck) {
            isComnanyNumberValid = true;
        }

        if (isComnanyNumberValid) {
            companyNumber.css("border", "none");
        }
        else {
            companyNumber.css("border", "1px solid red");
        }

        let validDiv = $("#valid");

        if (isUsernameValid && isEmailValid && isComnanyNumberValid && isPasswordValid) {
            validDiv.css("display", "block");
        }
        else {
            validDiv.css("display", "none");
        }
    });
}
