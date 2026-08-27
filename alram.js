const alarmInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarmButton");
const alarmStatus = document.getElementById("alarmStatus");

let alarmTime = null;
let alarmTriggered = false;


setAlarmButton.addEventListener("click", () => {

    if (alarmInput.value === "") {
        alarmStatus.textContent = "Please select a time.";
        return;
    }

    alarmTime = alarmInput.value;
    alarmTriggered = false;

    alarmStatus.textContent =
        `Alarm set for ${alarmTime}`;
});


setInterval(() => {

    if (alarmTime === null || alarmTriggered) {
        return;
    }

    const now = new Date();

    const currentHours =
        String(now.getHours()).padStart(2, "0");

    const currentMinutes =
        String(now.getMinutes()).padStart(2, "0");

    const currentTime =
        `${currentHours}:${currentMinutes}`;


    if (currentTime === alarmTime) {

        alarmStatus.textContent =
            "Alarm ringing!";

        alert("Alarm!");

        alarmTriggered = true;
    }

}, 1000);