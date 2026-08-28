const formatButton =
    document.getElementById(
        "formatButton"
    );


const showSeconds =
    document.getElementById(
        "showSeconds"
    );


const twentyFourHour =
    document.getElementById(
        "twentyFourHour"
    );


const savedFormat =
    localStorage.getItem(
        "24hour"
    );


const savedSeconds =
    localStorage.getItem(
        "showSeconds"
    );


if (savedFormat !== null) {

    twentyFourHour.checked =
        savedFormat === "true";

}


if (savedSeconds !== null) {

    showSeconds.checked =
        savedSeconds === "true";

}


const updateFormat = () => {

    const is24 =
        twentyFourHour.checked;


    formatButton.textContent =
        is24
            ? "24H"
            : "12H";


    window.clockSettings
        .set24Hour(is24);


    localStorage.setItem(
        "24hour",
        is24
    );

};


twentyFourHour.addEventListener(
    "change",
    updateFormat
);


formatButton.addEventListener(
    "click",
    () => {

        twentyFourHour.checked =
            !twentyFourHour.checked;


        updateFormat();

    }
);


showSeconds.addEventListener(
    "change",
    () => {

        window.clockSettings
            .setShowSeconds(
                showSeconds.checked
            );


        localStorage.setItem(
            "showSeconds",
            showSeconds.checked
        );

    }
);


updateFormat();


window.clockSettings
    .setShowSeconds(
        showSeconds.checked
    );