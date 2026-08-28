const stopwatchDisplay =
    document.getElementById(
        "stopwatchDisplay"
    );

const startStopwatch =
    document.getElementById(
        "startStopwatch"
    );

const lapStopwatch =
    document.getElementById(
        "lapStopwatch"
    );

const resetStopwatch =
    document.getElementById(
        "resetStopwatch"
    );

const laps =
    document.getElementById("laps");


let stopwatchTime = 0;

let stopwatchInterval = null;

let lapNumber = 0;


const updateStopwatch = () => {

    const milliseconds =
        stopwatchTime % 1000;


    const totalSeconds =
        Math.floor(
            stopwatchTime / 1000
        );


    const seconds =
        totalSeconds % 60;


    const minutes =
        Math.floor(
            totalSeconds / 60
        ) % 60;


    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    stopwatchDisplay.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}.` +
        `${String(
            Math.floor(
                milliseconds / 10
            )
        ).padStart(2, "0")}`;

};


startStopwatch.addEventListener(
    "click",
    () => {

        if (stopwatchInterval) {

            return;

        }


        stopwatchInterval =
            setInterval(() => {

                stopwatchTime += 10;

                updateStopwatch();

            }, 10);

    }
);


lapStopwatch.addEventListener(
    "click",
    () => {

        if (!stopwatchInterval) {

            return;

        }


        lapNumber++;


        const lap =
            document.createElement(
                "div"
            );


        lap.className =
            "lap-item";


        lap.innerHTML =
            `
            <span>
                Lap ${lapNumber}
            </span>

            <span>
                ${stopwatchDisplay.textContent}
            </span>
            `;


        laps.prepend(lap);

    }
);


resetStopwatch.addEventListener(
    "click",
    () => {

        clearInterval(
            stopwatchInterval
        );


        stopwatchInterval = null;

        stopwatchTime = 0;

        lapNumber = 0;

        laps.innerHTML = "";

        updateStopwatch();

    }
);


updateStopwatch();