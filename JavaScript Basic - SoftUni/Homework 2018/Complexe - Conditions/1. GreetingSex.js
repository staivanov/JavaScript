let age = 16;
let sex = "f";

function greeting(userAge, userSex) {

    let male = "m";
    let female = "f";
    let title = " ";

    if (userAge >= 16 && userSex == male){
        title = "Mr.";
        return title;
    }
    else if(userAge < 16 && userSex == male){
        title = "Master";
        return title;
    }
    else if(userAge >= 16 && userSex == female){
        title = "Ms.";
        return title;
    }
    else if(userAge < 16 && userSex == female){
        title = "Miss";
        return title;
    }
}

let testTitle = greeting(age, sex);
console.log(testTitle);