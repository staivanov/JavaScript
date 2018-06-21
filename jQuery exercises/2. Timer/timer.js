function timer() {
    let hours = $("#hours"),
        minutes = $("#minutes"),
        seconds = $("#seconds"),
        startBtn = $("#start-timer"),
        pauseBtn = $("#pause-timer"),
        timerOn;


    startBtn.on("click", function () {
        let second = seconds.text();
        let minute = minutes.text();
        let hour = hours.text();

        timerOn = setInterval(function () {

            if (second < 10) {
                second++;
                seconds.text(second);
            }
            else if (second == 60) {
                second = 0;
                minute++;

                if (minute < 10) {
                    seconds.text(second);
                    minutes.text("0" + minute);
                }
                else if (minute == 60) {
                    minute = 0;
                    hour++;
                    minutes.text(minute);

                    if (hour < 10) {
                        hours.text("0" + hour);
                    }
                    else {
                        hours.text(hour);
                    }
                }
                else {
                    seconds.text(second);
                    minutes.text(minute);
                }
            }
            else {
                seconds.text(second);
                second++;
            }

        }, 1000);
    });

    pauseBtn.on("click", function () {
        let clearTimer = clearInterval(timerOn);
    });
}
