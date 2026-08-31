// ================================
// STOPWATCH
// ================================

const stopwatch =
    document.getElementById("stopwatch");

const startStopwatch =
    document.getElementById(
        "startStopwatch"
    );

const resetStopwatch =
    document.getElementById(
        "resetStopwatch"
    );

const lapButton =
    document.getElementById(
        "lapButton"
    );

const laps =
    document.getElementById("laps");


let stopwatchSeconds = 0;

let stopwatchInterval = null;

let stopwatchRunning = false;

let lapNumber = 0;


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

        lapNumber =
            0;

        startStopwatch.textContent =
            "Start";

        laps.innerHTML = "";

        showStopwatch();

    }
);


lapButton.addEventListener(
    "click",
    () => {

        if (!stopwatchRunning) {
            return;
        }


        lapNumber++;


        const li =
            document.createElement("li");


        li.textContent =
            `Lap ${lapNumber}: ${stopwatch.textContent}`;


        laps.appendChild(li);

    }
);


showStopwatch();


// ================================
// COUNTDOWN
// ================================

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
    Number(minutesInput.value) * 60;

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


function resetCountdown() {

    clearInterval(
        countdownInterval
    );

    countdownSeconds =
        Number(minutesInput.value) * 60;

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


        if (countdownSeconds <= 0) {

            resetCountdown();

        }


        countdownRunning =
            true;

        startCountdown.textContent =
            "Pause";


        countdownInterval =
            setInterval(
                () => {

                    countdownSeconds--;

                    showCountdown();


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

                    }

                },
                1000
            );

    }
);


resetCountdown.addEventListener(
    "click",
    resetCountdown
);


minutesInput.addEventListener(
    "change",
    resetCountdown
);


showCountdown();