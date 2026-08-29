// =========================================
// TIMEHUB DIGITAL CLOCK DASHBOARD
// =========================================


// =========================================
// DOM ELEMENTS
// =========================================

const clock = document.getElementById("time");

const periodDisplay =
    document.getElementById("period");

const dateDisplay =
    document.getElementById("date");

const timezoneDisplay =
    document.getElementById("timezone");

const greetingDisplay =
    document.getElementById("greeting");

const dayNameDisplay =
    document.getElementById("dayName");

const weekNumberDisplay =
    document.getElementById("weekNumber");

const dayOfYearDisplay =
    document.getElementById("dayOfYear");

const yearDisplay =
    document.getElementById("year");

const dayProgressBar =
    document.getElementById("dayProgressBar");

const dayProgressText =
    document.getElementById("dayProgressText");

const statusDisplay =
    document.getElementById("status");


// Buttons

const formatToggle =
    document.getElementById("formatToggle");

const secondsToggle =
    document.getElementById("secondsToggle");

const themeToggle =
    document.getElementById("themeToggle");

const fullscreenButton =
    document.getElementById("fullscreenButton");


// Stopwatch

const stopwatchDisplay =
    document.getElementById("stopwatchDisplay");

const stopwatchStart =
    document.getElementById("stopwatchStart");

const stopwatchReset =
    document.getElementById("stopwatchReset");


// Countdown

const countdownDisplay =
    document.getElementById("countdownDisplay");

const countdownMinutes =
    document.getElementById("countdownMinutes");

const countdownStart =
    document.getElementById("countdownStart");

const countdownReset =
    document.getElementById("countdownReset");


// =========================================
// SETTINGS
// =========================================

let is24Hour =
    localStorage.getItem("clockFormat") !== "12";

let showSeconds =
    localStorage.getItem("showSeconds") !== "false";


// =========================================
// TIMEZONE
// =========================================

const timezone =
    Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone;

timezoneDisplay.textContent =
    `Timezone: ${timezone}`;


// =========================================
// FORMAT NUMBER
// =========================================

function pad(number) {

    return String(number)
        .padStart(2, "0");

}


// =========================================
// GET WEEK NUMBER
// =========================================

function getWeekNumber(date) {

    const firstDay =
        new Date(
            date.getFullYear(),
            0,
            1
        );

    const pastDays =
        Math.floor(
            (
                date - firstDay
            ) /
            (24 * 60 * 60 * 1000)
        );

    return Math.ceil(
        (pastDays + firstDay.getDay() + 1) / 7
    );

}


// =========================================
// GET DAY OF YEAR
// =========================================

function getDayOfYear(date) {

    const start =
        new Date(
            date.getFullYear(),
            0,
            0
        );

    const difference =
        date - start;

    const oneDay =
        1000 *
        60 *
        60 *
        24;

    return Math.floor(
        difference / oneDay
    );

}


// =========================================
// GET DAY PROGRESS
// =========================================

function getDayProgress(date) {

    const secondsPassed =
        date.getHours() * 3600 +
        date.getMinutes() * 60 +
        date.getSeconds();

    const totalSeconds =
        24 * 60 * 60;

    return (
        secondsPassed /
        totalSeconds
    ) * 100;

}


// =========================================
// UPDATE GREETING
// =========================================

function updateGreeting(hour) {

    if (hour < 5) {

        greetingDisplay.textContent =
            "Good night";

    } else if (hour < 12) {

        greetingDisplay.textContent =
            "Good morning";

    } else if (hour < 18) {

        greetingDisplay.textContent =
            "Good afternoon";

    } else {

        greetingDisplay.textContent =
            "Good evening";

    }

}


// =========================================
// UPDATE MAIN CLOCK
// =========================================

function updateClock() {

    const now =
        new Date();

    let hours =
        now.getHours();

    const minutes =
        pad(now.getMinutes());

    const seconds =
        pad(now.getSeconds());


    // =====================================
    // FORMAT CLOCK
    // =====================================

    let period = "";

    if (is24Hour) {

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (showSeconds
                ? `:${seconds}`
                : "");

        periodDisplay.textContent =
            "24 HOUR";

    } else {

        period =
            hours >= 12
                ? "PM"
                : "AM";

        hours =
            hours % 12 || 12;

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (showSeconds
                ? `:${seconds}`
                : "");

        periodDisplay.textContent =
            period;
    }


    // =====================================
    // DATE
    // =====================================

    const dateText =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

    dateDisplay.textContent =
        dateText;


    // =====================================
    // DAY
    // =====================================

    dayNameDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    // =====================================
    // WEEK
    // =====================================

    weekNumberDisplay.textContent =
        getWeekNumber(now);


    // =====================================
    // DAY OF YEAR
    // =====================================

    dayOfYearDisplay.textContent =
        getDayOfYear(now);


    // =====================================
    // YEAR
    // =====================================

    yearDisplay.textContent =
        now.getFullYear();


    // =====================================
    // GREETING
    // =====================================

    updateGreeting(
        now.getHours()
    );


    // =====================================
    // DAY PROGRESS
    // =====================================

    const progress =
        getDayProgress(now);

    dayProgressBar.style.width =
        `${progress}%`;

    dayProgressText.textContent =
        `${progress.toFixed(1)}%`;


    // =====================================
    // STATUS
    // =====================================

    statusDisplay.textContent =
        `Last updated ${pad(now.getHours())}:${minutes}:${seconds}`;

}


// =========================================
// 12 / 24 HOUR TOGGLE
// =========================================

function toggleFormat() {

    is24Hour =
        !is24Hour;

    localStorage.setItem(
        "clockFormat",
        is24Hour
            ? "24"
            : "12"
    );

    formatToggle.textContent =
        is24Hour
            ? "Switch to 12 Hour"
            : "Switch to 24 Hour";

    updateClock();

}


// =========================================
// SECONDS TOGGLE
// =========================================

function toggleSeconds() {

    showSeconds =
        !showSeconds;

    localStorage.setItem(
        "showSeconds",
        showSeconds
    );

    secondsToggle.textContent =
        showSeconds
            ? "Hide Seconds"
            : "Show Seconds";

    updateClock();

}


formatToggle.addEventListener(
    "click",
    toggleFormat
);


secondsToggle.addEventListener(
    "click",
    toggleSeconds
);


// =========================================
// THEME
// =========================================

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "theme"
        );

    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        themeToggle.textContent =
            "Dark Mode";

    } else {

        themeToggle.textContent =
            "Light Mode";

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        const isLight =
            document.body.classList.contains(
                "light"
            );

        localStorage.setItem(
            "theme",
            isLight
                ? "light"
                : "dark"
        );

        themeToggle.textContent =
            isLight
                ? "Dark Mode"
                : "Light Mode";

    }
);


// =========================================
// FULLSCREEN
// =========================================

fullscreenButton.addEventListener(
    "click",
    async () => {

        try {

            if (!document.fullscreenElement) {

                await document.documentElement
                    .requestFullscreen();

            } else {

                await document.exitFullscreen();

            }

        } catch (error) {

            console.error(
                "Fullscreen error:",
                error
            );

        }

    }
);


// =========================================
// STOPWATCH
// =========================================

let stopwatchSeconds = 0;

let stopwatchInterval = null;

let stopwatchRunning = false;


function formatStopwatch(seconds) {

    const hours =
        Math.floor(
            seconds / 3600
        );

    const minutes =
        Math.floor(
            (seconds % 3600) / 60
        );

    const remainingSeconds =
        seconds % 60;

    return (
        `${pad(hours)}:` +
        `${pad(minutes)}:` +
        `${pad(remainingSeconds)}`
    );

}


function updateStopwatchDisplay() {

    stopwatchDisplay.textContent =
        formatStopwatch(
            stopwatchSeconds
        );

}


stopwatchStart.addEventListener(
    "click",
    () => {

        if (stopwatchRunning) {

            clearInterval(
                stopwatchInterval
            );

            stopwatchRunning = false;

            stopwatchStart.textContent =
                "Start";

        } else {

            stopwatchInterval =
                setInterval(
                    () => {

                        stopwatchSeconds++;

                        updateStopwatchDisplay();

                    },
                    1000
                );

            stopwatchRunning = true;

            stopwatchStart.textContent =
                "Pause";

        }

    }
);


stopwatchReset.addEventListener(
    "click",
    () => {

        clearInterval(
            stopwatchInterval
        );

        stopwatchRunning = false;

        stopwatchSeconds = 0;

        stopwatchStart.textContent =
            "Start";

        updateStopwatchDisplay();

    }
);


// =========================================
// COUNTDOWN
// =========================================

let countdownSeconds = 300;

let countdownInterval = null;

let countdownRunning = false;


function formatCountdown(seconds) {

    const minutes =
        Math.floor(
            seconds / 60
        );

    const remainingSeconds =
        seconds % 60;

    return (
        `${pad(minutes)}:` +
        `${pad(remainingSeconds)}`
    );

}


function updateCountdownDisplay() {

    countdownDisplay.textContent =
        formatCountdown(
            countdownSeconds
        );

}


function resetCountdown() {

    clearInterval(
        countdownInterval
    );

    countdownRunning = false;

    const minutes =
        Number(
            countdownMinutes.value
        );

    if (
        !Number.isFinite(minutes) ||
        minutes < 1
    ) {

        countdownSeconds = 300;

    } else {

        countdownSeconds =
            Math.floor(minutes * 60);

    }

    countdownStart.textContent =
        "Start";

    updateCountdownDisplay();

}


countdownStart.addEventListener(
    "click",
    () => {

        if (countdownRunning) {

            clearInterval(
                countdownInterval
            );

            countdownRunning = false;

            countdownStart.textContent =
                "Resume";

            return;

        }


        if (countdownSeconds <= 0) {

            resetCountdown();

        }


        countdownRunning = true;

        countdownStart.textContent =
            "Pause";


        countdownInterval =
            setInterval(
                () => {

                    countdownSeconds--;

                    updateCountdownDisplay();


                    if (
                        countdownSeconds <= 0
                    ) {

                        clearInterval(
                            countdownInterval
                        );

                        countdownRunning = false;

                        countdownSeconds = 0;

                        countdownStart.textContent =
                            "Start";

                        statusDisplay.textContent =
                            "Countdown finished";

                        updateCountdownDisplay();

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


// =========================================
// KEYBOARD SHORTCUTS
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        // Don't trigger shortcuts
        // while typing in an input.

        if (
            event.target.tagName ===
            "INPUT"
        ) {

            return;

        }


        // T = Clock format

        if (
            event.key.toLowerCase()
            === "t"
        ) {

            toggleFormat();

        }


        // S = Seconds

        if (
            event.key.toLowerCase()
            === "s"
        ) {

            toggleSeconds();

        }


        // F = Fullscreen

        if (
            event.key.toLowerCase()
            === "f"
        ) {

            fullscreenButton.click();

        }


        // Space = Stopwatch

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            stopwatchStart.click();

        }

    }
);


// =========================================
// INITIAL SETTINGS
// =========================================

function initialize() {

    formatToggle.textContent =
        is24Hour
            ? "Switch to 12 Hour"
            : "Switch to 24 Hour";

    secondsToggle.textContent =
        showSeconds
            ? "Hide Seconds"
            : "Show Seconds";

    loadTheme();

    updateClock();

    updateStopwatchDisplay();

    updateCountdownDisplay();

}


initialize();


// =========================================
// CLOCK UPDATE
// =========================================

setInterval(
    updateClock,
    1000
);