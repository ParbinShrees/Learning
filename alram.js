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


const showToast = (message) => {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

};


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
            `
            <p class="empty-message">
                No alarms set.
            </p>
            `;

    }


    alarms.forEach(
        (alarm, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "alarm-item";


            item.innerHTML =
                `
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

        }
    );


    alarmCount.textContent =
        `${alarms.length} ${
            alarms.length === 1
                ? "alarm"
                : "alarms"
        }`;

};


addAlarm.addEventListener(
    "click",
    () => {

        const value =
            alarmInput.value;


        if (!value) {

            showToast(
                "Please select a time."
            );

            return;
        }


        if (alarms.includes(value)) {

            showToast(
                "This alarm already exists."
            );

            return;
        }


        alarms.push(value);

        alarms.sort();

        saveAlarms();

        renderAlarms();

        alarmInput.value = "";


        showToast(
            `Alarm set for ${value}`
        );

    }
);


alarmList.addEventListener(
    "click",
    (event) => {

        if (
            event.target.classList.contains(
                "delete-alarm"
            )
        ) {

            const index =
                Number(
                    event.target.dataset.index
                );


            const deleted =
                alarms[index];


            alarms.splice(index, 1);

            saveAlarms();

            renderAlarms();


            showToast(
                `Alarm ${deleted} deleted`
            );

        }

    }
);


setInterval(() => {

    const now = new Date();


    const currentTime =
        `${String(
            now.getHours()
        ).padStart(2, "0")}:` +
        `${String(
            now.getMinutes()
        ).padStart(2, "0")}`;


    if (now.getSeconds() !== 0) {

        return;
    }


    if (alarms.includes(currentTime)) {

        showToast(
            `Alarm: ${currentTime}`
        );


        alert(
            `Alarm: ${currentTime}`
        );

    }

}, 1000);


renderAlarms();