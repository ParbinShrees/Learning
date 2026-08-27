const themeButton =
    document.getElementById(
        "themeButton"
    );


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeButton.textContent =
        "Dark";

}


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
                ? "Dark"
                : "Light";


        localStorage.setItem(
            "theme",
            isLight
                ? "light"
                : "dark"
        );

    }
);