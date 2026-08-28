const checkInButton =
    document.getElementById(
        "checkInButton"
    );


const currentStreakElement =
    document.getElementById(
        "currentStreak"
    );


const bestStreakElement =
    document.getElementById(
        "bestStreak"
    );


const totalCheckInsElement =
    document.getElementById(
        "totalCheckIns"
    );


const streakStatus =
    document.getElementById(
        "streakStatus"
    );


const streakMessage =
    document.getElementById(
        "streakMessage"
    );


const streakBar =
    document.getElementById(
        "streakBar"
    );


const streakHistory =
    document.getElementById(
        "streakHistory"
    );


/*
    Streak data is saved in localStorage.

    Example:

    {
        current: 5,
        best: 10,
        dates: [
            "2026-08-24",
            "2026-08-25",
            "2026-08-26"
        ]
    }
*/


let streakData =
    JSON.parse(
        localStorage.getItem(
            "streakData"
        )
    ) || {

        current: 0,

        best: 0,

        dates: []

    };


/* ================= DATE ================= */


const getToday = () => {

    const now = new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            now.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

};


const getYesterday = () => {

    const date =
        new Date();


    date.setDate(
        date.getDate() - 1
    );


    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

};


/* ================= SAVE ================= */


const saveStreak = () => {

    localStorage.setItem(
        "streakData",
        JSON.stringify(
            streakData
        )
    );

};


/* ================= CHECK STREAK ================= */


const calculateStreak = () => {

    const dates =
        [...new Set(
            streakData.dates
        )].sort();


    if (dates.length === 0) {

        streakData.current = 0;

        return;

    }


    const today =
        getToday();


    const yesterday =
        getYesterday();


    const lastDate =
        dates[dates.length - 1];


    /*
        If the last check-in is today,
        keep the current streak.
    */


    if (lastDate === today) {

        return;

    }


    /*
        If the last check-in was yesterday,
        the streak is still alive.

        The next check-in today will
        continue it.
    */


    if (lastDate === yesterday) {

        return;

    }


    /*
        If the user missed a day,
        streak resets.
    */


    streakData.current = 0;

};


/* ================= CHECK IN ================= */


checkInButton.addEventListener(
    "click",
    () => {

        const today =
            getToday();


        if (
            streakData.dates.includes(
                today
            )
        ) {

            showStreakMessage(
                "You already checked in today."
            );

            return;

        }


        const yesterday =
            getYesterday();


        const lastDate =
            streakData.dates[
                streakData.dates.length - 1
            ];


        /*
            Consecutive day
        */


        if (
            lastDate === yesterday
        ) {

            streakData.current++;

        } else {

            /*
                New streak
            */

            streakData.current = 1;

        }


        /*
            Save today's date
        */


        streakData.dates.push(
            today
        );


        /*
            Update best streak
        */


        if (
            streakData.current >
            streakData.best
        ) {

            streakData.best =
                streakData.current;

        }


        saveStreak();

        renderStreak();


        showStreakMessage(
            `Great! Your streak is now ${streakData.current} day${
                streakData.current === 1
                    ? ""
                    : "s"
            }.`
        );

    }
);


/* ================= RENDER ================= */


const renderStreak = () => {

    calculateStreak();


    const today =
        getToday();


    const checkedToday =
        streakData.dates.includes(
            today
        );


    currentStreakElement.textContent =
        streakData.current;


    bestStreakElement.textContent =
        streakData.best;


    totalCheckInsElement.textContent =
        streakData.dates.length;


    if (checkedToday) {

        streakStatus.textContent =
            "Done";

        checkInButton.textContent =
            "Completed";

        checkInButton.disabled =
            true;

        checkInButton.style.opacity =
            "0.6";


        streakMessage.textContent =
            "Today's check-in is complete. Keep your streak going!";

    } else {

        streakStatus.textContent =
            "Pending";

        checkInButton.textContent =
            "Check In";

        checkInButton.disabled =
            false;

        checkInButton.style.opacity =
            "1";


        if (
            streakData.current > 0
        ) {

            streakMessage.textContent =
                `You have a ${streakData.current}-day streak. Check in today to continue it.`;

        } else {

            streakMessage.textContent =
                "Check in today to start your streak.";

        }

    }


    /*
        Progress bar.

        Every 7 days gives
        a full progress cycle.
    */


    const progress =
        (
            streakData.current % 7
        ) * (100 / 7);


    streakBar.style.width =
        `${progress || (
            streakData.current > 0
                ? 100
                : 0
        )}%`;


    renderHistory();

    saveStreak();

};


/* ================= HISTORY ================= */


const renderHistory = () => {

    streakHistory.innerHTML = "";


    if (
        streakData.dates.length === 0
    ) {

        streakHistory.innerHTML =
            `
            <p class="empty-message">
                No check-ins yet.
            </p>
            `;

        return;

    }


    const dates =
        [...streakData.dates]
            .sort()
            .reverse();


    dates.forEach(
        (date) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "history-item";


            const formattedDate =
                new Date(
                    `${date}T00:00:00`
                ).toLocaleDateString(
                    "en-US",
                    {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }
                );


            item.innerHTML =
                `
                <span class="history-date">
                    ${formattedDate}
                </span>

                <span class="history-check">
                    Completed
                </span>
                `;


            streakHistory.appendChild(
                item
            );

        }
    );

};


/* ================= MESSAGE ================= */


const showStreakMessage =
    (message) => {

        streakMessage.textContent =
            message;


        setTimeout(() => {

            renderStreak();

        }, 2500);

    };


/* ================= START ================= */


renderStreak();