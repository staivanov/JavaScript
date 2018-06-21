let speed = 0;

function speedCheck(userSpeed) {

    let slow = 10, average = 50, fast = 150, ultraFast = 1000;

    if (userSpeed <= slow) {
        return console.log("slow");
    }
    else if ((userSpeed > slow) && (userSpeed <= average)) {
        return console.log("average");
    }
    else if ((userSpeed > average) && (userSpeed <= fast)) {
        return console.log("fast");
    }
    else if ((userSpeed > fast) && (userSpeed <= ultraFast)) {
        return console.log("ultra fast");
    }
    else if (userSpeed > ultraFast) {
        return console.log("extreemly fast");
    }
    return 0;
}

speedCheck(speed);