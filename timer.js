const timerMinutes =
    document.getElementById("timerMinutes");

const startTimer =
    document.getElementById("startTimer");

const pauseTimer =
    document.getElementById("pauseTimer");

const resetTimer =
    document.getElementById("resetTimer");

const timerDisplay =
    document.getElementById("timerDisplay");


let timerSeconds = 0;

let timerInterval = null;


const updateTimerDisplay = () => {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
};


startTimer.addEventListener("click", () => {

    if (timerInterval !== null) {
        return;
    }


    if (timerSeconds === 0) {

        const minutes =
            Number(timerMinutes.value);

        if (minutes <= 0) {
            alert("Enter a valid number of minutes.");
            return;
        }

        timerSeconds = minutes * 60;
    }


    updateTimerDisplay();


    timerInterval = setInterval(() => {

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            alert("Timer finished!");

            return;
        }


        timerSeconds--;

        updateTimerDisplay();

    }, 1000);
});


pauseTimer.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = null;
});


resetTimer.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 0;

    timerMinutes.value = "";

    updateTimerDisplay();
});


updateTimerDisplay();