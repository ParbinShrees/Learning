// ==========================================
// TIMEHUB - DAY UPDATE
// ==========================================


// ==========================================
// DOM ELEMENTS
// ==========================================

const clock = document.getElementById("time");
const periodDisplay = document.getElementById("period");
const dateDisplay = document.getElementById("date");
const timezoneDisplay = document.getElementById("timezone");
const greetingDisplay = document.getElementById("greeting");

const formatToggle = document.getElementById("formatToggle");
const secondsToggle = document.getElementById("secondsToggle");
const themeToggle = document.getElementById("themeToggle");
const fullscreenButton = document.getElementById("fullscreenButton");

const dayNameDisplay = document.getElementById("dayName");
const dayNumberText = document.getElementById("dayNumberText");
const weekNumberDisplay = document.getElementById("weekNumber");
const monthNameDisplay = document.getElementById("monthName");
const yearDisplay = document.getElementById("year");

const dayProgressBar = document.getElementById("dayProgressBar");
const dayProgressText = document.getElementById("dayProgressText");

const weekProgressBar = document.getElementById("weekProgressBar");
const weekProgressValue = document.getElementById("weekProgressValue");
const weekProgressText = document.getElementById("weekProgressText");

const monthProgressBar = document.getElementById("monthProgressBar");
const monthProgressValue = document.getElementById("monthProgressValue");
const monthProgressText = document.getElementById("monthProgressText");

const yearProgressBar = document.getElementById("yearProgressBar");
const yearProgressValue = document.getElementById("yearProgressValue");
const yearProgressText = document.getElementById("yearProgressText");

const hoursLeftDisplay = document.getElementById("hoursLeft");
const minutesLeftDisplay = document.getElementById("minutesLeft");
const secondsLeftDisplay = document.getElementById("secondsLeft");

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const stopwatchStart = document.getElementById("stopwatchStart");
const stopwatchReset = document.getElementById("stopwatchReset");

const countdownDisplay = document.getElementById("countdownDisplay");
const countdownMinutes = document.getElementById("countdownMinutes");
const countdownStart = document.getElementById("countdownStart");
const countdownReset = document.getElementById("countdownReset");

const statusDisplay = document.getElementById("status");


// ==========================================
// SETTINGS
// ==========================================

let is24Hour = true;
let showSeconds = true;


// ==========================================
// HELPER
// ==========================================

function pad(number) {
    return String(number).padStart(2, "0");
}


// ==========================================
// TIMEZONE
// ==========================================

const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

timezoneDisplay.textContent =
    `Timezone: ${timezone}`;


// ==========================================
// WEEK NUMBER
// ==========================================

function getWeekNumber(date) {

    const firstDay =
        new Date(date.getFullYear(), 0, 1);

    const days =
        Math.floor(
            (date - firstDay) / 86400000
        );

    return Math.ceil(
        (days + firstDay.getDay() + 1) / 7
    );
}


// ==========================================
// DAYS IN MONTH
// ==========================================

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}


// ==========================================
// DAY PROGRESS
// ==========================================

function getDayProgress(date) {

    const passed =
        date.getHours() * 3600 +
        date.getMinutes() * 60 +
        date.getSeconds();

    return (passed / 86400) * 100;
}


// ==========================================
// WEEK PROGRESS
// ==========================================

function getWeekProgress(date) {

    const day = date.getDay();

    const mondayDay =
        day === 0 ? 6 : day - 1;

    const currentDayProgress =
        getDayProgress(date) / 100;

    return (
        (mondayDay + currentDayProgress) / 7
    ) * 100;
}


// ==========================================
// MONTH PROGRESS
// ==========================================

function getMonthProgress(date) {

    const daysInMonth =
        getDaysInMonth(
            date.getFullYear(),
            date.getMonth()
        );

    const currentDay =
        date.getDate() - 1;

    const currentDayProgress =
        getDayProgress(date) / 100;

    return (
        (currentDay + currentDayProgress)
        / daysInMonth
    ) * 100;
}


// ==========================================
// YEAR PROGRESS
// ==========================================

function getYearProgress(date) {

    const start =
        new Date(date.getFullYear(), 0, 1);

    const end =
        new Date(date.getFullYear() + 1, 0, 1);

    return (
        (date - start) /
        (end - start)
    ) * 100;
}


// ==========================================
// GREETING
// ==========================================

function updateGreeting(hour) {

    if (hour < 5) {
        greetingDisplay.textContent =
            "Good night";
    }

    else if (hour < 12) {
        greetingDisplay.textContent =
            "Good morning";
    }

    else if (hour < 18) {
        greetingDisplay.textContent =
            "Good afternoon";
    }

    else {
        greetingDisplay.textContent =
            "Good evening";
    }
}


// ==========================================
// UPDATE CLOCK
// ==========================================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes =
        pad(now.getMinutes());

    const seconds =
        pad(now.getSeconds());


    // CLOCK FORMAT

    if (is24Hour) {

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (showSeconds ? `:${seconds}` : "");

        periodDisplay.textContent =
            "24 HOUR";

    }

    else {

        const period =
            hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (showSeconds ? `:${seconds}` : "");

        periodDisplay.textContent =
            period;
    }


    // DATE

    dateDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    // DAY

    dayNameDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );

    dayNumberText.textContent =
        `Day ${now.getDate()}`;


    // WEEK

    weekNumberDisplay.textContent =
        `Week ${getWeekNumber(now)}`;


    // MONTH

    monthNameDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                month: "long"
            }
        );


    // YEAR

    yearDisplay.textContent =
        now.getFullYear();


    // GREETING

    updateGreeting(now.getHours());


    // DAY PROGRESS

    const dayProgress =
        getDayProgress(now);

    dayProgressBar.style.width =
        `${dayProgress}%`;

    dayProgressText.textContent =
        `${dayProgress.toFixed(1)}%`;


    // WEEK PROGRESS

    const weekProgress =
        getWeekProgress(now);

    weekProgressBar.style.width =
        `${weekProgress}%`;

    weekProgressValue.textContent =
        `${weekProgress.toFixed(1)}%`;

    weekProgressText.textContent =
        `${weekProgress.toFixed(1)}% completed`;


    // MONTH PROGRESS

    const monthProgress =
        getMonthProgress(now);

    monthProgressBar.style.width =
        `${monthProgress}%`;

    monthProgressValue.textContent =
        `${monthProgress.toFixed(1)}%`;

    monthProgressText.textContent =
        `${monthProgress.toFixed(1)}% completed`;


    // YEAR PROGRESS

    const yearProgress =
        getYearProgress(now);

    yearProgressBar.style.width =
        `${yearProgress}%`;

    yearProgressValue.textContent =
        `${yearProgress.toFixed(1)}%`;

    yearProgressText.textContent =
        `${yearProgress.toFixed(1)}% completed`;


    // TIME LEFT TODAY

    hoursLeftDisplay.textContent =
        23 - now.getHours();

    minutesLeftDisplay.textContent =
        59 - now.getMinutes();

    secondsLeftDisplay.textContent =
        59 - now.getSeconds();


    // STATUS

    statusDisplay.textContent =
        `Updated ${pad(now.getHours())}:${minutes}:${seconds}`;
}


// ==========================================
// CLOCK FORMAT
// ==========================================

formatToggle.addEventListener("click", () => {

    is24Hour = !is24Hour;

    formatToggle.textContent =
        is24Hour
            ? "Switch to 12 Hour"
            : "Switch to 24 Hour";

    updateClock();
});


// ==========================================
// SECONDS
// ==========================================

secondsToggle.addEventListener("click", () => {

    showSeconds = !showSeconds;

    secondsToggle.textContent =
        showSeconds
            ? "Hide Seconds"
            : "Show Seconds";

    updateClock();
});


// ==========================================
// THEME
// ==========================================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light")
            ? "Dark Mode"
            : "Light Mode";
});


// ==========================================
// FULLSCREEN
// ==========================================

fullscreenButton.addEventListener("click", async () => {

    if (!document.fullscreenElement) {

        await document.documentElement.requestFullscreen();

    } else {

        await document.exitFullscreen();

    }
});


// ==========================================
// STOPWATCH
// ==========================================

let stopwatchSeconds = 0;
let stopwatchInterval = null;
let stopwatchRunning = false;


function updateStopwatch() {

    const hours =
        Math.floor(stopwatchSeconds / 3600);

    const minutes =
        Math.floor(
            (stopwatchSeconds % 3600) / 60
        );

    const seconds =
        stopwatchSeconds % 60;

    stopwatchDisplay.textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


stopwatchStart.addEventListener("click", () => {

    if (stopwatchRunning) {

        clearInterval(stopwatchInterval);

        stopwatchRunning = false;

        stopwatchStart.textContent =
            "Start";

    } else {

        stopwatchInterval =
            setInterval(() => {

                stopwatchSeconds++;

                updateStopwatch();

            }, 1000);

        stopwatchRunning = true;

        stopwatchStart.textContent =
            "Pause";
    }
});


stopwatchReset.addEventListener("click", () => {

    clearInterval(stopwatchInterval);

    stopwatchRunning = false;

    stopwatchSeconds = 0;

    stopwatchStart.textContent =
        "Start";

    updateStopwatch();
});


// ==========================================
// COUNTDOWN
// ==========================================

let countdownSeconds = 300;
let countdownInterval = null;
let countdownRunning = false;


function updateCountdown() {

    const minutes =
        Math.floor(countdownSeconds / 60);

    const seconds =
        countdownSeconds % 60;

    countdownDisplay.textContent =
        `${pad(minutes)}:${pad(seconds)}`;
}


function resetCountdown() {

    clearInterval(countdownInterval);

    countdownRunning = false;

    countdownSeconds =
        Number(countdownMinutes.value) * 60;

    countdownStart.textContent =
        "Start";

    updateCountdown();
}


countdownStart.addEventListener("click", () => {

    if (countdownRunning) {

        clearInterval(countdownInterval);

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
        setInterval(() => {

            countdownSeconds--;

            updateCountdown();


            if (countdownSeconds <= 0) {

                clearInterval(countdownInterval);

                countdownRunning = false;

                countdownSeconds = 0;

                countdownStart.textContent =
                    "Start";

                statusDisplay.textContent =
                    "Countdown finished";

                updateCountdown();
            }

        }, 1000);
});


countdownReset.addEventListener(
    "click",
    resetCountdown
);


countdownMinutes.addEventListener(
    "change",
    resetCountdown
);


// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.target.tagName === "INPUT") {
        return;
    }


    if (event.key.toLowerCase() === "t") {
        formatToggle.click();
    }


    if (event.key.toLowerCase() === "s") {
        secondsToggle.click();
    }


    if (event.key.toLowerCase() === "f") {
        fullscreenButton.click();
    }


    if (event.code === "Space") {

        event.preventDefault();

        stopwatchStart.click();
    }
});


// ==========================================
// START
// ==========================================

updateClock();
updateStopwatch();
updateCountdown();

setInterval(updateClock, 1000);