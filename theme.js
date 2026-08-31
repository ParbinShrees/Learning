const themeButton =
    document.getElementById(
        "themeButton"
    );

const fullscreenButton =
    document.getElementById(
        "fullscreenButton"
    );


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        themeButton.textContent =
            isLight
                ? "Dark Mode"
                : "Light Mode";

    }
);


fullscreenButton.addEventListener(
    "click",
    async () => {

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

    }
);