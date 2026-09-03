const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const greetingElement = document.getElementById("greeting");
const timezoneElement = document.getElementById("timezone");

const formatButton = document.getElementById("formatButton");
const secondsButton = document.getElementById("secondsButton");
const dayProgress = document.getElementById("dayProgress");
const dayProgressBar = document.getElementById("dayProgressBar");

let use24Hour = false;
let showSeconds = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let period = "";

    if (!use24Hour) {
        period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }
    }

    hours = String(hours).padStart(2, "0");

    let currentTime = `${hours}:${minutes}`;

    if (showSeconds) {
        currentTime += `:${seconds}`;
    }

    if (!use24Hour) {
        currentTime += ` ${period}`;
    }

    timeElement.textContent = currentTime;

    dateElement.textContent = now.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    const currentHour = now.getHours();

    if (currentHour < 12) {
        greetingElement.textContent = "Good morning";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good afternoon";
    } else {
        greetingElement.textContent = "Good evening";
    }

    timezoneElement.textContent =
        Intl.DateTimeFormat().resolvedOptions().timeZone;

    updateDayProgress(now);
}

function updateDayProgress(now) {
    const secondsToday =
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds();

    const totalSeconds = 24 * 60 * 60;

    const percentage =
        (secondsToday / totalSeconds) * 100;

    dayProgress.textContent =
        `${percentage.toFixed(1)}%`;

    dayProgressBar.style.width =
        `${percentage}%`;
}

formatButton.addEventListener("click", () => {
    use24Hour = !use24Hour;

    formatButton.textContent =
        use24Hour ? "24 Hour" : "12 Hour";

    updateClock();
});

secondsButton.addEventListener("click", () => {
    showSeconds = !showSeconds;

    secondsButton.textContent =
        showSeconds
            ? "Hide Seconds"
            : "Show Seconds";

    updateClock();
});

updateClock();

setInterval(updateClock, 1000);