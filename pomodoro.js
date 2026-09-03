const pomodoroElement =
    document.getElementById("pomodoro");

const pomodoroMode =
    document.getElementById("pomodoroMode");

const startPomodoro =
    document.getElementById("startPomodoro");

const resetPomodoro =
    document.getElementById("resetPomodoro");

const focusButton =
    document.getElementById("focusButton");

const breakButton =
    document.getElementById("breakButton");

let pomodoroSeconds = 25 * 60;

let pomodoroInterval = null;

let pomodoroRunning = false;

let pomodoroModeName = "Focus";

function formatPomodoro(seconds) {
    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

function updatePomodoro() {
    pomodoroElement.textContent =
        formatPomodoro(pomodoroSeconds);
}

function setPomodoroMode(mode) {
    clearInterval(pomodoroInterval);

    pomodoroRunning = false;

    startPomodoro.textContent = "Start";

    pomodoroModeName = mode;

    if (mode === "Focus") {
        pomodoroSeconds = 25 * 60;

        pomodoroMode.textContent = "Focus";
    } else {
        pomodoroSeconds = 5 * 60;

        pomodoroMode.textContent = "Break";
    }

    updatePomodoro();
}

function startPomodoroTimer() {
    if (pomodoroRunning) {
        clearInterval(pomodoroInterval);

        pomodoroRunning = false;

        startPomodoro.textContent = "Start";

        return;
    }

    pomodoroRunning = true;

    startPomodoro.textContent = "Pause";

    pomodoroInterval = setInterval(() => {
        pomodoroSeconds--;

        updatePomodoro();

        if (pomodoroSeconds <= 0) {
            clearInterval(pomodoroInterval);

            pomodoroRunning = false;

            startPomodoro.textContent = "Start";

            alert(
                `${pomodoroModeName} session complete!`
            );
        }
    }, 1000);
}

function resetPomodoroTimer() {
    clearInterval(pomodoroInterval);

    pomodoroRunning = false;

    startPomodoro.textContent = "Start";

    if (pomodoroModeName === "Focus") {
        pomodoroSeconds = 25 * 60;
    } else {
        pomodoroSeconds = 5 * 60;
    }

    updatePomodoro();
}

startPomodoro.addEventListener(
    "click",
    startPomodoroTimer
);

resetPomodoro.addEventListener(
    "click",
    resetPomodoroTimer
);

focusButton.addEventListener(
    "click",
    () => setPomodoroMode("Focus")
);

breakButton.addEventListener(
    "click",
    () => setPomodoroMode("Break")
);

updatePomodoro();