const stopwatchDisplay =
    document.getElementById("stopwatchDisplay");

const startStopwatch =
    document.getElementById("startStopwatch");

const pauseStopwatch =
    document.getElementById("pauseStopwatch");

const resetStopwatch =
    document.getElementById("resetStopwatch");


let stopwatchSeconds = 0;

let stopwatchInterval = null;


const updateStopwatch = () => {

    const hours =
        Math.floor(stopwatchSeconds / 3600);

    const minutes =
        Math.floor((stopwatchSeconds % 3600) / 60);

    const seconds =
        stopwatchSeconds % 60;


    stopwatchDisplay.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
};


startStopwatch.addEventListener("click", () => {

    if (stopwatchInterval !== null) {
        return;
    }

    stopwatchInterval = setInterval(() => {

        stopwatchSeconds++;

        updateStopwatch();

    }, 1000);
});


pauseStopwatch.addEventListener("click", () => {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;
});


resetStopwatch.addEventListener("click", () => {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;

    stopwatchSeconds = 0;

    updateStopwatch();
});


updateStopwatch();