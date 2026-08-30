const cities = {

    kathmandu: "Asia/Kathmandu",

    london: "Europe/London",

    newYork: "America/New_York",

    tokyo: "Asia/Tokyo",

    dubai: "Asia/Dubai",

    sydney: "Australia/Sydney"

};


function updateWorldClock() {

    const now =
        new Date();


    Object.entries(cities)
        .forEach(
            ([city, timezone]) => {

                const element =
                    document.getElementById(
                        city
                    );


                if (!element) {
                    return;
                }


                element.textContent =
                    new Intl.DateTimeFormat(
                        "en-US",
                        {
                            timeZone:
                                timezone,

                            hour:
                                "2-digit",

                            minute:
                                "2-digit",

                            second:
                                "2-digit",

                            hour12:
                                false
                        }
                    ).format(now);

            }
        );

}


updateWorldClock();

setInterval(
    updateWorldClock,
    1000
);