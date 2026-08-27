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


formatButton.addEventListener(
    "click",
    () => {

        twentyFourHour.checked =
            !twentyFourHour.checked;


        updateFormat();

    }
);


twentyFourHour.addEventListener(
    "change",
    updateFormat
);


showSeconds.addEventListener(
    "change",
    () => {

        window.clockSettings
            .setShowSeconds(
                showSeconds.checked
            );

    }
);


function updateFormat() {

    const is24 =
        twentyFourHour.checked;


    formatButton.textContent =
        is24
            ? "24H"
            : "12H";


    window.clockSettings
        .set24Hour(is24);

}


updateFormat();