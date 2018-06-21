function numberEnd7Printer(){

    for(let number = 0; number <=1000; number++){
        if((number % 10) == 7){
            console.log(number);
        }
    }
}

numberEnd7Printer();