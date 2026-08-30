const clock =
    document.getElementById("time");

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

const formatToggle =
    document.getElementById("formatToggle");

const secondsToggle =
    document.getElementById("secondsToggle");


let is24Hour =
    Storage.get(
        "clockFormat",
        "24"
    ) === "24";

let showSeconds =
    Storage.get(
        "showSeconds",
        true
    );


const timezone =
    Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone;

timezoneDisplay.textContent =
    `Timezone: ${timezone}`;


function pad(number) {

    return String(number)
        .padStart(2, "0");

}


function getWeekNumber(date) {

    const firstDay =
        new Date(
            date.getFullYear(),
            0,
            1
        );

    const days =
        Math.floor(
            (date - firstDay) /
            86400000
        );

    return Math.ceil(
        (days + firstDay.getDay() + 1) /
        7
    );

}


function getDayOfYear(date) {

    const start =
        new Date(
            date.getFullYear(),
            0,
            0
        );

    return Math.floor(
        (date - start) /
        86400000
    );

}


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


function updateClock() {

    const now =
        new Date();

    let hours =
        now.getHours();

    const minutes =
        pad(now.getMinutes());

    const seconds =
        pad(now.getSeconds());


    if (is24Hour) {

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (
                showSeconds
                    ? `:${seconds}`
                    : ""
            );

        periodDisplay.textContent =
            "24 HOUR";

    } else {

        const period =
            hours >= 12
                ? "PM"
                : "AM";

        hours =
            hours % 12 || 12;

        clock.textContent =
            `${pad(hours)}:${minutes}` +
            (
                showSeconds
                    ? `:${seconds}`
                    : ""
            );

        periodDisplay.textContent =
            period;

    }


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


    dayNameDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    weekNumberDisplay.textContent =
        getWeekNumber(now);


    dayOfYearDisplay.textContent =
        getDayOfYear(now);


    yearDisplay.textContent =
        now.getFullYear();


    updateGreeting(
        now.getHours()
    );


    const secondsPassed =
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds();


    const progress =
        secondsPassed /
        86400 *
        100;


    dayProgressBar.style.width =
        `${progress}%`;

    dayProgressText.textContent =
        `${progress.toFixed(1)}%`;

}


formatToggle.addEventListener(
    "click",
    () => {

        is24Hour =
            !is24Hour;

        Storage.set(
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
);


secondsToggle.addEventListener(
    "click",
    () => {

        showSeconds =
            !showSeconds;

        Storage.set(
            "showSeconds",
            showSeconds
        );

        secondsToggle.textContent =
            showSeconds
                ? "Hide Seconds"
                : "Show Seconds";

        updateClock();

    }
);


formatToggle.textContent =
    is24Hour
        ? "Switch to 12 Hour"
        : "Switch to 24 Hour";


secondsToggle.textContent =
    showSeconds
        ? "Hide Seconds"
        : "Show Seconds";


updateClock();

setInterval(
    updateClock,
    1000
);