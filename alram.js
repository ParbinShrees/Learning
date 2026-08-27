const alarmInput =
    document.getElementById("alarmInput");

const addAlarm =
    document.getElementById("addAlarm");

const alarmList =
    document.getElementById("alarmList");

const alarmCount =
    document.getElementById("alarmCount");


let alarms =
    JSON.parse(
        localStorage.getItem("alarms")
    ) || [];


const saveAlarms = () => {

    localStorage.setItem(
        "alarms",
        JSON.stringify(alarms)
    );

};


const renderAlarms = () => {

    alarmList.innerHTML = "";


    if (alarms.length === 0) {

        alarmList.innerHTML =
            `<p class="empty-message">
                No alarms set
            </p>`;

    }


    alarms.forEach((alarm, index) => {

        const item =
            document.createElement("div");

        item.className = "alarm-item";


        item.innerHTML = `
            <span class="alarm-time">
                ${alarm}
            </span>

            <button
                class="delete-alarm"
                data-index="${index}"
            >
                Delete
            </button>
        `;


        alarmList.appendChild(item);

    });


    alarmCount.textContent =
        `${alarms.length} ${
            alarms.length === 1
                ? "alarm"
                : "alarms"
        }`;

};


addAlarm.addEventListener("click", () => {

    const value = alarmInput.value;


    if (!value) {

        alert("Please select an alarm time.");

        return;
    }


    if (alarms.includes(value)) {

        alert("This alarm already exists.");

        return;
    }


    alarms.push(value);

    alarms.sort();

    saveAlarms();

    renderAlarms();

    alarmInput.value = "";

});


alarmList.addEventListener("click", (event) => {

    if (
        event.target.classList.contains(
            "delete-alarm"
        )
    ) {

        const index =
            Number(
                event.target.dataset.index
            );

        alarms.splice(index, 1);

        saveAlarms();

        renderAlarms();

    }

});


setInterval(() => {

    const now = new Date();


    const currentTime =
        `${String(now.getHours()).padStart(2, "0")}:` +
        `${String(now.getMinutes()).padStart(2, "0")}`;


    const currentSecond =
        now.getSeconds();


    if (currentSecond !== 0) {
        return;
    }


    if (alarms.includes(currentTime)) {

        alert(
            `Alarm: ${currentTime}`
        );

    }

}, 1000);


renderAlarms();