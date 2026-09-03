document.addEventListener(
    "keydown",
    (event) => {
        const activeElement =
            document.activeElement;

        const isTyping =
            activeElement.tagName === "INPUT" ||
            activeElement.tagName === "TEXTAREA";

        if (isTyping) {
            return;
        }

        const key =
            event.key.toLowerCase();

        if (key === "t") {
            document
                .getElementById("formatButton")
                .click();
        }

        if (key === "s") {
            document
                .getElementById("secondsButton")
                .click();
        }

        if (key === "f") {
            document
                .getElementById("fullscreenButton")
                .click();
        }

        if (event.code === "Space") {
            event.preventDefault();

            document
                .getElementById("startStopwatch")
                .click();
        }
    }
);