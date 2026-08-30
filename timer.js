// =========================================
// TIMEHUB TIMER
// =========================================


// =========================================
// STOPWATCH
// =========================================

const stopwatchDisplay =
    document.getElementById(
        "stopwatchDisplay"
    );

const stopwatchStart =
    document.getElementById(
        "stopwatchStart"
    );

const stopwatchReset =
    document.getElementById(
        "stopwatchReset"
    );


let stopwatchSeconds = 0;

let stopwatchInterval = null;

let stopwatchRunning = false;


// =========================================
// STOPWATCH DISPLAY
// =========================================

function updateStopwatch() {

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


    stopwatchDisplay.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

}


// =========================================
// START / PAUSE
// =========================================

stopwatchStart.addEventListener(
    "click",
    () => {

        if (stopwatchRunning) {

            clearInterval(
                stopwatchInterval
            );

            stopwatchRunning =
                false;

            stopwatchStart.textContent =
                "Resume";

            return;
        }


        stopwatchRunning =
            true;

        stopwatchStart.textContent =
            "Pause";


        stopwatchInterval =
            setInterval(
                () => {

                    stopwatchSeconds++;

                    updateStopwatch();

                },
                1000
            );

    }
);


// =========================================
// RESET
// =========================================

stopwatchReset.addEventListener(
    "click",
    () => {

        clearInterval(
            stopwatchInterval
        );

        stopwatchSeconds =
            0;

        stopwatchRunning =
            false;

        stopwatchStart.textContent =
            "Start";

        updateStopwatch();

    }
);


// =========================================
// COUNTDOWN
// =========================================

const countdownDisplay =
    document.getElementById(
        "countdownDisplay"
    );

const countdownMinutes =
    document.getElementById(
        "countdownMinutes"
    );

const countdownStart =
    document.getElementById(
        "countdownStart"
    );

const countdownReset =
    document.getElementById(
        "countdownReset"
    );


let countdownSeconds =
    Number(countdownMinutes.value) * 60;

let countdownInterval = null;

let countdownRunning = false;


// =========================================
// DISPLAY
// =========================================

function updateCountdown() {

    const minutes =
        Math.floor(
            countdownSeconds / 60
        );

    const seconds =
        countdownSeconds % 60;


    countdownDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

}


// =========================================
// RESET COUNTDOWN
// =========================================

function resetCountdown() {

    clearInterval(
        countdownInterval
    );

    countdownRunning =
        false;

    countdownSeconds =
        Number(countdownMinutes.value) * 60;

    countdownStart.textContent =
        "Start";

    updateCountdown();

}


// =========================================
// START COUNTDOWN
// =========================================

countdownStart.addEventListener(
    "click",
    () => {

        if (countdownRunning) {

            clearInterval(
                countdownInterval
            );

            countdownRunning =
                false;

            countdownStart.textContent =
                "Resume";

            return;
        }


        if (countdownSeconds <= 0) {

            resetCountdown();

        }


        countdownRunning =
            true;

        countdownStart.textContent =
            "Pause";


        countdownInterval =
            setInterval(
                () => {

                    countdownSeconds--;

                    updateCountdown();


                    if (
                        countdownSeconds <= 0
                    ) {

                        clearInterval(
                            countdownInterval
                        );

                        countdownRunning =
                            false;

                        countdownSeconds =
                            0;

                        countdownStart.textContent =
                            "Start";

                        countdownDisplay.textContent =
                            "00:00";

                        const status =
                            document.getElementById(
                                "status"
                            );

                        status.textContent =
                            "Countdown finished";

                    }

                },
                1000
            );

    }
);


// =========================================
// RESET
// =========================================

countdownReset.addEventListener(
    "click",
    resetCountdown
);


// =========================================
// INPUT CHANGE
// =========================================

countdownMinutes.addEventListener(
    "change",
    resetCountdown
);


// =========================================
// INITIAL
// =========================================

updateStopwatch();

updateCountdown();