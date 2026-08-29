// ==========================================
// DIGITAL CLOCK DASHBOARD
// ==========================================


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const clock = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const greeting = document.getElementById("greeting");
const timezoneDisplay = document.getElementById("timezone");
const statusDisplay = document.getElementById("status");

const formatToggle = document.getElementById("formatToggle");
const secondsToggle = document.getElementById("secondsToggle");


// ==========================================
// SETTINGS
// ==========================================

let is24Hour = true;
let showSeconds = true;


// ==========================================
// TIMEZONE
// ==========================================

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

timezoneDisplay.textContent = `Timezone: ${timezone}`;


// ==========================================
// UPDATE CLOCK
// ==========================================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");


    // ======================================
    // SECONDS
    // ======================================

    const secondsPart = showSeconds
        ? `:${seconds}`
        : "";


    // ======================================
    // 24 HOUR FORMAT
    // ======================================

    if (is24Hour) {

        const formattedHours = String(hours)
            .padStart(2, "0");

        clock.textContent =
            `${formattedHours}:${minutes}${secondsPart}`;

    }


    // ======================================
    // 12 HOUR FORMAT
    // ======================================

    else {

        const period = hours >= 12
            ? "PM"
            : "AM";

        hours = hours % 12 || 12;

        const formattedHours = String(hours)
            .padStart(2, "0");

        clock.textContent =
            `${formattedHours}:${minutes}${secondsPart} ${period}`;

    }


    // ======================================
    // DATE
    // ======================================

    const day = now.toLocaleDateString(
        "en-US",
        {
            weekday: "long"
        }
    );

    const date = now.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    dateDisplay.textContent =
        `${day}, ${date}`;


    // ======================================
    // GREETING
    // ======================================

    const currentHour = now.getHours();

    if (currentHour < 12) {

        greeting.textContent =
            "Good morning";

    }

    else if (currentHour < 18) {

        greeting.textContent =
            "Good afternoon";

    }

    else {

        greeting.textContent =
            "Good evening";

    }


    // ======================================
    // STATUS
    // ======================================

    statusDisplay.textContent =
        "Live • Updating every second";

}


// ==========================================
// 12 / 24 HOUR BUTTON
// ==========================================

formatToggle.addEventListener(
    "click",
    () => {

        is24Hour = !is24Hour;

        formatToggle.textContent =
            is24Hour
                ? "12 Hour"
                : "24 Hour";

        updateClock();

    }
);


// ==========================================
// SECONDS BUTTON
// ==========================================

secondsToggle.addEventListener(
    "click",
    () => {

        showSeconds = !showSeconds;

        secondsToggle.textContent =
            showSeconds
                ? "Hide Seconds"
                : "Show Seconds";

        updateClock();

    }
);


// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        // T = Toggle 12/24 hour
        if (event.key.toLowerCase() === "t") {

            is24Hour = !is24Hour;

            formatToggle.textContent =
                is24Hour
                    ? "12 Hour"
                    : "24 Hour";

            updateClock();

        }


        // S = Toggle seconds
        if (event.key.toLowerCase() === "s") {

            showSeconds = !showSeconds;

            secondsToggle.textContent =
                showSeconds
                    ? "Hide Seconds"
                    : "Show Seconds";

            updateClock();

        }

    }
);


// ==========================================
// INITIALIZE
// ==========================================

updateClock();


// ==========================================
// UPDATE EVERY SECOND
// ==========================================

setInterval(
    updateClock,
    1000
);