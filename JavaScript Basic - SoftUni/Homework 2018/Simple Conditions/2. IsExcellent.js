let grade = 5;
let excellentGrade = 5.5;

function isExcellent(personGrade){

    if((personGrade) >= 5.5 && (personGrade <= 6)) {
        console.log("Excellent!");
    }
    else {
        console.log("Not excellent!");
    }
}

isExcellent(grade);
isExcellent(excellentGrade);