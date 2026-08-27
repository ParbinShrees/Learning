const cities = {

    kathmandu: {
        element: "kathmanduTime",
        timeZone: "Asia/Kathmandu"
    },

    london: {
        element: "londonTime",
        timeZone: "Europe/London"
    },

    newYork: {
        element: "newYorkTime",
        timeZone: "America/New_York"
    },

    tokyo: {
        element: "tokyoTime",
        timeZone: "Asia/Tokyo"
    }

};


const updateWorldClock = () => {

    Object.values(cities).forEach(
        (city) => {

            const element =
                document.getElementById(
                    city.element
                );


            const time =
                new Date().toLocaleTimeString(
                    "en-US",
                    {
                        timeZone:
                            city.timeZone,

                        hour: "2-digit",

                        minute: "2-digit",

                        second: "2-digit",

                        hour12: true
                    }
                );


            element.textContent = time;

        }
    );

};


updateWorldClock();

setInterval(
    updateWorldClock,
    1000
);