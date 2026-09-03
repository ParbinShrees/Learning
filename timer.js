const minutesInput =
    document.getElementById("minutesInput");

const countdown =
    document.getElementById("countdown");

const startCountdown =
    document.getElementById("startCountdown");

const resetCountdown =
    document.getElementById("resetCountdown");

let countdownInterval = null;

let countdownSeconds =
    Number(minutesInput.value) * 60;

let countdownRunning = false;

function formatCountdown(seconds) {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

function updateCountdownDisplay() {
    countdown.textContent =
        formatCountdown(countdownSeconds);
}

function startTimer() {
    if (countdownRunning) {
        clearInterval(countdownInterval);

        countdownRunning = false;

        startCountdown.textContent = "Start";

        return;
    }

    if (countdownSeconds <= 0) {
        return;
    }

    countdownRunning = true;

    startCountdown.textContent = "Pause";

    countdownInterval = setInterval(() => {
        countdownSeconds--;

        updateCountdownDisplay();

        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);

            countdownRunning = false;

            startCountdown.textContent = "Start";

            alert("Countdown complete!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdownInterval);

    countdownRunning = false;

    countdownSeconds =
        Number(minutesInput.value) * 60;

    startCountdown.textContent = "Start";

    updateCountdownDisplay();
}

minutesInput.addEventListener("input", () => {
    if (!countdownRunning) {
        countdownSeconds =
            Number(minutesInput.value) * 60;

        updateCountdownDisplay();
    }
});

startCountdown.addEventListener(
    "click",
    startTimer
);

resetCountdown.addEventListener(
    "click",
    resetTimer
);

updateCountdownDisplay();