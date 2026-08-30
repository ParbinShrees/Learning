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
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;

}


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


stopwatchReset.addEventListener(
    "click",
    () => {

        clearInterval(
            stopwatchInterval
        );

        stopwatchSeconds = 0;

        stopwatchRunning =
            false;

        stopwatchStart.textContent =
            "Start";

        updateStopwatch();

    }
);


updateStopwatch();


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
    Number(
        countdownMinutes.value
    ) * 60;

let countdownInterval = null;

let countdownRunning = false;


function updateCountdown() {

    const minutes =
        Math.floor(
            countdownSeconds / 60
        );

    const seconds =
        countdownSeconds % 60;


    countdownDisplay.textContent =
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;

}


function resetCountdown() {

    clearInterval(
        countdownInterval
    );

    countdownRunning =
        false;

    countdownSeconds =
        Number(
            countdownMinutes.value
        ) * 60;

    countdownStart.textContent =
        "Start";

    updateCountdown();

}


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

                        updateCountdown();

                        document.getElementById(
                            "status"
                        ).textContent =
                            "Countdown finished";

                    }

                },
                1000
            );

    }
);


countdownReset.addEventListener(
    "click",
    resetCountdown
);


countdownMinutes.addEventListener(
    "change",
    resetCountdown
);


updateCountdown();