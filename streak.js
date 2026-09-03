const streakElement =
    document.getElementById("streak");

const streakMessage =
    document.getElementById("streakMessage");

const completeDay =
    document.getElementById("completeDay");

const streakBoxes =
    document.querySelectorAll(".streak-box span");

let streakData =
    JSON.parse(
        localStorage.getItem("timehub-streak")
    ) || {
        count: 0,
        lastCompleted: null
    };

function getToday() {
    return new Date()
        .toISOString()
        .split("T")[0];
}

function updateStreakDisplay() {
    streakElement.textContent =
        streakData.count;

    const today = getToday();

    if (streakData.lastCompleted === today) {
        streakMessage.textContent =
            "Today's learning goal is complete.";

        completeDay.textContent =
            "Completed Today";
    } else {
        streakMessage.textContent =
            "Start your learning streak today.";

        completeDay.textContent =
            "Complete Today";
    }

    streakBoxes.forEach((box, index) => {
        if (index < streakData.count) {
            box.classList.add("completed");
        } else {
            box.classList.remove("completed");
        }
    });
}

completeDay.addEventListener("click", () => {
    const today = getToday();

    if (streakData.lastCompleted === today) {
        return;
    }

    if (streakData.lastCompleted) {
        const previousDate =
            new Date(streakData.lastCompleted);

        const currentDate =
            new Date(today);

        const difference =
            Math.floor(
                (currentDate - previousDate) /
                (1000 * 60 * 60 * 24)
            );

        if (difference === 1) {
            streakData.count++;
        } else {
            streakData.count = 1;
        }
    } else {
        streakData.count = 1;
    }

    streakData.lastCompleted = today;

    localStorage.setItem(
        "timehub-streak",
        JSON.stringify(streakData)
    );

    updateStreakDisplay();
});

updateStreakDisplay();