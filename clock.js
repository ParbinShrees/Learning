const time =
    document.getElementById("time");

const date =
    document.getElementById("date");

const formatButton =
    document.getElementById("formatButton");


let is24Hour = true;


function updateClock() {

    const now = new Date();


    let hours =
        now.getHours();

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            now.getSeconds()
        ).padStart(2, "0");


    if (is24Hour) {

        hours =
            String(hours)
                .padStart(2, "0");

        time.textContent =
            `${hours}:${minutes}:${seconds}`;

    } else {

        const period =
            hours >= 12
                ? "PM"
                : "AM";


        hours =
            hours % 12 || 12;


        time.textContent =
            `${hours}:${minutes}:${seconds} ${period}`;

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


updateClock();

setInterval(
    updateClock,
    1000
);