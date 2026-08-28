const timerHours =
    document.getElementById(
        "timerHours"
    );

const timerMinutes =
    document.getElementById(
        "timerMinutes"
    );

const timerSecondsInput =
    document.getElementById(
        "timerSeconds"
    );

const timerDisplay =
    document.getElementById(
        "timerDisplay"
    );

const startTimer =
    document.getElementById(
        "startTimer"
    );

const pauseTimer =
    document.getElementById(
        "pauseTimer"
    );

const resetTimer =
    document.getElementById(
        "resetTimer"
    );

const timerProgress =
    document.getElementById(
        "timerProgress"
    );


let totalTimerSeconds = 0;

let remainingTimerSeconds = 0;

let timerInterval = null;


const updateTimer = () => {

    const hours =
        Math.floor(
            remainingTimerSeconds / 3600
        );


    const minutes =
        Math.floor(
            (remainingTimerSeconds % 3600) /
            60
        );


    const seconds =
        remainingTimerSeconds % 60;


    timerDisplay.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;


    if (totalTimerSeconds > 0) {

        const progress =
            (
                (
                    totalTimerSeconds -
                    remainingTimerSeconds
                ) /
                totalTimerSeconds
            ) * 100;


        timerProgress.style.width =
            `${progress}%`;

    }

};


startTimer.addEventListener(
    "click",
    () => {

        if (timerInterval) {

            return;

        }


        if (remainingTimerSeconds === 0) {

            const hours =
                Number(
                    timerHours.value
                ) || 0;


            const minutes =
                Number(
                    timerMinutes.value
                ) || 0;


            const seconds =
                Number(
                    timerSecondsInput.value
                ) || 0;


            totalTimerSeconds =
                hours * 3600 +
                minutes * 60 +
                seconds;


            remainingTimerSeconds =
                totalTimerSeconds;


            if (totalTimerSeconds <= 0) {

                alert(
                    "Enter a valid timer."
                );

                return;

            }

        }


        updateTimer();


        timerInterval =
            setInterval(() => {

                if (
                    remainingTimerSeconds <=
                    0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    timerInterval = null;


                    alert(
                        "Timer finished!"
                    );


                    return;

                }


                remainingTimerSeconds--;

                updateTimer();

            }, 1000);

    }
);


pauseTimer.addEventListener(
    "click",
    () => {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }
);


resetTimer.addEventListener(
    "click",
    () => {

        clearInterval(
            timerInterval
        );


        timerInterval = null;

        totalTimerSeconds = 0;

        remainingTimerSeconds = 0;


        timerHours.value = "";

        timerMinutes.value = "";

        timerSecondsInput.value = "";


        timerProgress.style.width =
            "0%";


        updateTimer();

    }
);


updateTimer();