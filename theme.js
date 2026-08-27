const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeButton.textContent = "Dark Mode";

    } else {

        themeButton.textContent = "Light Mode";
    }

});