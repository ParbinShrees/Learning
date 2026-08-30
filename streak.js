// =========================================
// LEARNING STREAK
// =========================================

const streakCount =
    document.getElementById(
        "streakCount"
    );

const todayStatus =
    document.getElementById(
        "todayStatus"
    );

const lastUpdate =
    document.getElementById(
        "lastUpdate"
    );

const completeDayButton =
    document.getElementById(
        "completeDayButton"
    );

const streakMessage =
    document.getElementById(
        "streakMessage"
    );

const streakGoalText =
    document.getElementById(
        "streakGoalText"
    );

const streakDays =
    document.querySelectorAll(
        ".streak-day"
    );


function getToday() {

    const date =
        new Date();

    return date
        .toISOString()
        .split("T")[0];

}


function getYesterday() {

    const date =
        new Date();

    date.setDate(
        date.getDate() - 1
    );

    return date
        .toISOString()
        .split("T")[0];

}


function loadStreak() {

    let streak =
        Storage.get(
            "learningStreak",
            0
        );

    const lastCompleted =
        Storage.get(
            "lastCompletedDay",
            null
        );


    // RESET STREAK IF DAY WAS MISSED

    if (
        lastCompleted &&
        lastCompleted !== getToday() &&
        lastCompleted !== getYesterday()
    ) {

        streak = 0;

        Storage.set(
            "learningStreak",
            0
        );

    }


    streakCount.textContent =
        streak;


    streakDays.forEach(
        (element) => {

            const day =
                Number(
                    element.dataset.day
                );


            element.classList.toggle(
                "active",
                day <= Math.min(streak,10)
            );

        }
    );


    streakGoalText.textContent =
        `${Math.min(streak,10)} / 10`;


    if (
        lastCompleted ===
        getToday()
    ) {

        todayStatus.textContent =
            "Today's learning is complete";

        lastUpdate.textContent =
            `Completed on ${lastCompleted}`;

        completeDayButton.textContent =
            "Completed";

        completeDayButton.disabled =
            true;


        if (streak >= 10) {

            streakMessage.textContent =
                "10 day goal completed. Keep the habit going!";

        } else {

            streakMessage.textContent =
                `${streak} day streak active.`;

        }

    } else {

        todayStatus.textContent =
            "Complete today's learning";

        lastUpdate.textContent =
            "You have not completed today's update.";

        completeDayButton.textContent =
            "Complete Today";

        completeDayButton.disabled =
            false;

        streakMessage.textContent =
            `Current streak: ${streak} days`;

    }

}


completeDayButton.addEventListener(
    "click",
    () => {

        const today =
            getToday();

        const lastCompleted =
            Storage.get(
                "lastCompletedDay",
                null
            );


        if (
            lastCompleted === today
        ) {

            return;

        }


        let streak =
            Storage.get(
                "learningStreak",
                0
            );


        if (
            lastCompleted !==
            getYesterday()
        ) {

            streak = 0;

        }


        streak++;


        Storage.set(
            "learningStreak",
            streak
        );


        Storage.set(
            "lastCompletedDay",
            today
        );


        loadStreak();

    }
);


loadStreak();