const clock = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const dayName = document.getElementById("dayName");

let is24Hour = true;
let showSeconds = true;


const updateClock = () => {

    const now = new Date();

    let options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !is24Hour
    };

    if (showSeconds) {
        options.second = "2-digit";
    }


    const time = now.toLocaleTimeString(
        "en-US",
        options
    );


    clock.textContent = time;


    dateDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );


    dayName.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );

};


updateClock();

setInterval(updateClock, 1000);


// Make settings.js able to control these
window.clockSettings = {

    set24Hour(value) {
        is24Hour = value;
        updateClock();
    },

    setShowSeconds(value) {
        showSeconds = value;
        updateClock();
    }

};