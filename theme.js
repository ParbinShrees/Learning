const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const fullscreenButton =
    document.getElementById(
        "fullscreenButton"
    );


function loadTheme() {

    const theme =
        Storage.get(
            "theme",
            "dark"
        );


    if (theme === "light") {

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


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const light =
            document.body.classList.contains(
                "light"
            );


        Storage.set(
            "theme",
            light
                ? "light"
                : "dark"
        );


        themeToggle.textContent =
            light
                ? "Dark Mode"
                : "Light Mode";

    }
);


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

            console.error(error);

        }

    }
);


loadTheme();