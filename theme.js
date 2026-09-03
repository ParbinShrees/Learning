const themeButton =
    document.getElementById("themeButton");

const fullscreenButton =
    document.getElementById("fullscreenButton");

const savedTheme =
    localStorage.getItem("timehub-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");

    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeButton.textContent =
        isDark ? "Light Mode" : "Dark Mode";

    localStorage.setItem(
        "timehub-theme",
        isDark ? "dark" : "light"
    );
});

fullscreenButton.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();

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
});

document.addEventListener(
    "fullscreenchange",
    () => {
        fullscreenButton.textContent =
            document.fullscreenElement
                ? "Exit Fullscreen"
                : "Fullscreen";
    }
);