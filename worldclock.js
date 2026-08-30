// =========================================
// TIMEHUB THEME
// =========================================


const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const fullscreenButton =
    document.getElementById(
        "fullscreenButton"
    );


// =========================================
// LOAD THEME
// =========================================

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        themeToggle.textContent =
            "Dark Mode";

    } else {

        themeToggle.textContent =
            "Light Mode";

    }

}


// =========================================
// CHANGE THEME
// =========================================

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        localStorage.setItem(
            "theme",
            isLight
                ? "light"
                : "dark"
        );


        themeToggle.textContent =
            isLight
                ? "Dark Mode"
                : "Light Mode";

    }
);


// =========================================
// FULLSCREEN
// =========================================

fullscreenButton.addEventListener(
    "click",
    async () => {

        try {

            if (
                !document.fullscreenElement
            ) {

                await document.documentElement
                    .requestFullscreen();

                fullscreenButton.textContent =
                    "Exit Fullscreen";

            } else {

                await document.exitFullscreen();

                fullscreenButton.textContent =
                    "Fullscreen";

            }

        } catch (error) {

            console.error(
                "Fullscreen error:",
                error
            );

        }

    }
);


// =========================================
// INITIALIZE
// =========================================

loadTheme();