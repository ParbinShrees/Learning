const time = document.getElementById("time");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");

const formatButton =
    document.getElementById("formatButton");

const secondsButton =
    document.getElementById("secondsButton");

const timezone =
    document.getElementById("timezone");

const dayProgress =
    document.getElementById("dayProgress");

const dayProgressBar =
    document.getElementById("dayProgressBar");


let is24Hour = true;
let showSeconds = true;


timezone.textContent =
    `Timezone: ${
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone
    }`;


function pad(number) {

    return String(number)
        .padStart(2, "0");

}


function updateGreeting(hour) {

    if (hour < 5) {

        greeting.textContent =
            "Good night";

    } else if (hour < 12) {

        greeting.textContent =
            "Good morning";

    } else if (hour < 18) {

        greeting.textContent =
            "Good afternoon";

    } else {

        greeting.textContent =
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


    updateGreeting(hours);


    if (is24Hour) {

        hours =
            pad(hours);

        time.textContent =
            `${hours}:${minutes}` +
            (
                showSeconds
                    ? `:${seconds}`
                    : ""
            );

    } else {

        const period =
            hours >= 12
                ? "PM"
                : "AM";


        hours =
            hours % 12 || 12;


        time.textContent =
            `${hours}:${minutes}` +
            (
                showSeconds
                    ? `:${seconds}`
                    : ""
            ) +
            ` ${period}`;

    }


    date.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    const passed =
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds();


    const percentage =
        passed / 86400 * 100;


    dayProgress.textContent =
        `${percentage.toFixed(1)}%`;

    dayProgressBar.style.width =
        `${percentage}%`;

}


formatButton.addEventListener(
    "click",
    () => {

        is24Hour =
            !is24Hour;

        formatButton.textContent =
            is24Hour
                ? "12 Hour"
                : "24 Hour";

        updateClock();

    }
);


secondsButton.addEventListener(
    "click",
    () => {

        showSeconds =
            !showSeconds;

        secondsButton.textContent =
            showSeconds
                ? "Hide Seconds"
                : "Show Seconds";

        updateClock();

    }
);


updateClock();

setInterval(
    updateClock,
    1000
);