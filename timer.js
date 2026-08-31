// =============================
// STOPWATCH
// =============================

const stopwatch =
    document.getElementById(
        "stopwatch"
    );

const startStopwatch =
    document.getElementById(
        "startStopwatch"
    );

const resetStopwatch =
    document.getElementById(
        "resetStopwatch"
    );


let stopwatchSeconds = 0;

let stopwatchInterval = null;

let stopwatchRunning = false;


function showStopwatch() {

    const hours =
        Math.floor(
            stopwatchSeconds / 3600
        );

    const minutes =
        Math.floor(
            (stopwatchSeconds % 3600) / 60
        );

    const seconds =
        stopwatchSeconds % 60;


    stopwatch.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

}


startStopwatch.addEventListener(
    "click",
    () => {

        if (stopwatchRunning) {

            clearInterval(
                stopwatchInterval
            );

            stopwatchRunning =
                false;

            startStopwatch.textContent =
                "Resume";

            return;

        }


        stopwatchRunning =
            true;

        startStopwatch.textContent =
            "Pause";


        stopwatchInterval =
            setInterval(
                () => {

                    stopwatchSeconds++;

                    showStopwatch();

                },
                1000
            );

    }
);


resetStopwatch.addEventListener(
    "click",
    () => {

        clearInterval(
            stopwatchInterval
        );

        stopwatchSeconds =
            0;

        stopwatchRunning =
            false;

        startStopwatch.textContent =
            "Start";

        showStopwatch();

    }
);


showStopwatch();


// =============================
// COUNTDOWN
// =============================

const minutesInput =
    document.getElementById(
        "minutesInput"
    );

const countdown =
    document.getElementById(
        "countdown"
    );

const startCountdown =
    document.getElementById(
        "startCountdown"
    );

const resetCountdown =
    document.getElementById(
        "resetCountdown"
    );


let countdownSeconds =
    Number(
        minutesInput.value
    ) * 60;

let countdownInterval = null;

let countdownRunning = false;


function showCountdown() {

    const minutes =
        Math.floor(
            countdownSeconds / 60
        );

    const seconds =
        countdownSeconds % 60;


    countdown.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

}


function resetTimer() {

    clearInterval(
        countdownInterval
    );

    countdownSeconds =
        Number(
            minutesInput.value
        ) * 60;

    countdownRunning =
        false;

    startCountdown.textContent =
        "Start";

    showCountdown();

}


startCountdown.addEventListener(
    "click",
    () => {

        if (countdownRunning) {

            clearInterval(
                countdownInterval
            );

            countdownRunning =
                false;

            startCountdown.textContent =
                "Resume";

            return;

        }


        countdownRunning =
            true;

        startCountdown.textContent =
            "Pause";


        countdownInterval =
            setInterval(
                () => {

                    if (
                        countdownSeconds <= 0
                    ) {

                        clearInterval(
                            countdownInterval
                        );

                        countdownRunning =
                            false;

                        startCountdown.textContent =
                            "Start";

                        alert(
                            "Countdown finished!"
                        );

                        return;

                    }


                    countdownSeconds--;

                    showCountdown();

                },
                1000
            );

    }
);


resetCountdown.addEventListener(
    "click",
    resetTimer
);


minutesInput.addEventListener(
    "change",
    resetTimer
);


showCountdown();