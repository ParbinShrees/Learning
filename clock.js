/* =====================================
   RESET
===================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =====================================
   VARIABLES
===================================== */

:root {

    --background: #0b1120;

    --background-secondary: #111827;

    --card: rgba(255, 255, 255, 0.06);

    --card-hover: rgba(255, 255, 255, 0.10);

    --border: rgba(255, 255, 255, 0.10);

    --text: #f8fafc;

    --muted: #94a3b8;

    --accent: #38bdf8;

    --accent-dark: #0284c7;

    --success: #22c55e;

    --danger: #ef4444;

    --shadow:
        0 25px 70px rgba(0, 0, 0, 0.35);
}


body.light {

    --background: #f1f5f9;

    --background-secondary: #e2e8f0;

    --card: rgba(255, 255, 255, 0.85);

    --card-hover: #ffffff;

    --border: rgba(15, 23, 42, 0.10);

    --text: #0f172a;

    --muted: #64748b;

    --shadow:
        0 20px 50px rgba(15, 23, 42, 0.12);
}


/* =====================================
   BODY
===================================== */

body {

    min-height: 100vh;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background:
        radial-gradient(
            circle at top left,
            rgba(56, 189, 248, 0.12),
            transparent 30%
        ),
        var(--background);

    color: var(--text);

    transition:
        background 0.3s,
        color 0.3s;
}


/* =====================================
   TOPBAR
===================================== */

.topbar {

    padding: 20px 5%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    border-bottom:
        1px solid var(--border);

    background:
        var(--card);

    backdrop-filter: blur(15px);
}


.brand {

    display: flex;

    align-items: center;

    gap: 12px;
}


.brand-icon {

    width: 42px;

    height: 42px;

    display: grid;

    place-items: center;

    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            var(--accent),
            var(--accent-dark)
        );

    color: white;

    font-weight: bold;
}


.brand h2 {
    font-size: 20px;
}


.brand span {

    display: block;

    margin-top: 3px;

    font-size: 12px;

    color: var(--muted);
}


.top-actions {

    display: flex;

    gap: 10px;
}


button {

    border: none;

    cursor: pointer;

    font: inherit;

    transition:
        transform 0.2s,
        opacity 0.2s;
}


button:hover {

    transform:
        translateY(-2px);

    opacity: 0.9;
}


button:disabled {

    cursor: not-allowed;

    opacity: 0.6;

    transform: none;
}


.top-actions button {

    padding: 10px 14px;

    border-radius: 8px;

    background:
        var(--card);

    color: var(--text);

    border:
        1px solid var(--border);
}


/* =====================================
   DASHBOARD
===================================== */

.dashboard {

    width:
        min(1100px, 92%);

    margin:
        40px auto;

    display: flex;

    flex-direction: column;

    gap: 20px;
}


/* =====================================
   COMMON
===================================== */

.eyebrow {

    font-size: 11px;

    letter-spacing: 2px;

    color: var(--accent);

    font-weight: bold;

    margin-bottom: 6px;
}


/* =====================================
   CLOCK
===================================== */

.clock-card {

    padding: 40px;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;

    box-shadow:
        var(--shadow);
}


.clock-header {

    display: flex;

    justify-content: space-between;

    align-items: flex-start;
}


#greeting {

    color: var(--muted);
}


.live-status {

    display: flex;

    align-items: center;

    gap: 6px;

    color: var(--success);

    font-size: 12px;

    font-weight: bold;
}


.live-status span {

    width: 8px;

    height: 8px;

    border-radius: 50%;

    background:
        var(--success);

    animation:
        pulse 1.5s infinite;
}


@keyframes pulse {

    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
}


.clock-display {

    text-align: center;

    margin:
        45px 0 25px;
}


#time {

    font-size:
        clamp(55px, 11vw, 125px);

    font-variant-numeric:
        tabular-nums;

    letter-spacing: 5px;
}


#period {

    margin-top: 15px;

    color: var(--muted);

    letter-spacing: 3px;

    font-size: 12px;
}


.date-section {

    text-align: center;

    margin-bottom: 30px;
}


#date {

    font-size: 20px;
}


#timezone {

    margin-top: 8px;

    color: var(--muted);
}


/* =====================================
   DAY PROGRESS
===================================== */

.day-progress {

    max-width: 700px;

    margin: auto;
}


.progress-info {

    display: flex;

    justify-content: space-between;

    color: var(--muted);

    font-size: 13px;

    margin-bottom: 8px;
}


.progress-bar {

    width: 100%;

    height: 8px;

    border-radius: 20px;

    overflow: hidden;

    background:
        var(--background-secondary);
}


.progress-fill {

    width: 0%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            var(--accent-dark),
            var(--accent)
        );

    transition:
        width 0.5s;
}


/* =====================================
   BUTTONS
===================================== */

.clock-controls,
.tool-buttons {

    display: flex;

    justify-content: center;

    gap: 10px;

    flex-wrap: wrap;

    margin-top: 30px;
}


.primary-button {

    padding:
        12px 18px;

    border-radius: 10px;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--accent),
            var(--accent-dark)
        );
}


.secondary-button {

    padding:
        12px 18px;

    border-radius: 10px;

    background:
        var(--card);

    color:
        var(--text);

    border:
        1px solid var(--border);
}


/* =====================================
   STREAK
===================================== */

.streak-card {

    padding: 30px;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;

    box-shadow:
        var(--shadow);
}


.streak-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 25px;
}


.streak-number {

    text-align: center;

    min-width: 90px;

    padding: 12px;

    border-radius: 15px;

    background:
        var(--background-secondary);
}


.streak-number strong {

    display: block;

    font-size: 32px;

    color:
        var(--accent);
}


.streak-number span {

    font-size: 11px;

    color:
        var(--muted);
}


.today-update {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    padding: 20px;

    border-radius: 15px;

    background:
        var(--background-secondary);
}


.update-label {

    font-size: 11px;

    letter-spacing: 2px;

    color:
        var(--accent);

    font-weight: bold;
}


.update-text h3 {

    margin:
        6px 0;

    font-size: 18px;
}


.update-text p {

    font-size: 13px;

    color:
        var(--muted);
}


.streak-message {

    margin-top: 20px;

    color:
        var(--muted);

    text-align: center;
}


/* =====================================
   10 DAY STREAK
===================================== */

.streak-days {

    margin-top: 30px;
}


.streak-title {

    display: flex;

    justify-content: space-between;

    margin-bottom: 12px;

    color:
        var(--muted);

    font-size: 13px;
}


.streak-grid {

    display: grid;

    grid-template-columns:
        repeat(10, 1fr);

    gap: 8px;
}


.streak-day {

    aspect-ratio: 1;

    display: grid;

    place-items: center;

    border-radius: 10px;

    border:
        1px solid var(--border);

    background:
        var(--background-secondary);

    color:
        var(--muted);

    font-size: 12px;

    transition:
        0.2s;
}


.streak-day.active {

    background:
        var(--accent);

    color: white;

    border-color:
        var(--accent);

    transform:
        translateY(-2px);
}


/* =====================================
   STATS
===================================== */

.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;
}


.stat-card {

    padding: 22px;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;
}


.stat-label {

    display: block;

    font-size: 10px;

    letter-spacing: 2px;

    color:
        var(--muted);

    margin-bottom: 12px;
}


.stat-card strong {

    display: block;

    font-size: 25px;
}


.stat-card small {

    display: block;

    margin-top: 6px;

    color:
        var(--muted);
}


/* =====================================
   WORLD CLOCK
===================================== */

.world-section {

    padding: 30px;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;

    box-shadow:
        var(--shadow);
}


.section-heading {

    margin-bottom: 20px;
}


.world-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}


.world-card {

    padding: 20px;

    border-radius: 15px;

    background:
        var(--background-secondary);

    border:
        1px solid var(--border);

    transition:
        0.2s;
}


.world-card:hover {

    transform:
        translateY(-3px);

    background:
        var(--card-hover);
}


.world-info {

    display: flex;

    flex-direction: column;

    gap: 5px;
}


.country {

    font-size: 11px;

    color:
        var(--muted);
}


.world-info strong {

    font-size: 16px;
}


.world-time {

    margin-top: 20px;

    font-size: 28px;

    font-weight: bold;

    font-variant-numeric:
        tabular-nums;
}


/* =====================================
   TOOLS
===================================== */

.tools-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;
}


.tool-card {

    padding: 28px;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;

    box-shadow:
        var(--shadow);
}


.tool-header {

    display: flex;

    justify-content: space-between;
}


.tool-status {

    font-size: 10px;

    color:
        var(--muted);

    border:
        1px solid var(--border);

    padding:
        5px 8px;

    border-radius: 6px;
}


.tool-display {

    text-align: center;

    font-size: 48px;

    font-weight: bold;

    margin: 30px 0;

    font-variant-numeric:
        tabular-nums;
}


.timer-input {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 10px;

    color:
        var(--muted);
}


.timer-input input {

    width: 90px;

    padding: 10px;

    text-align: center;

    background:
        var(--background-secondary);

    color:
        var(--text);

    border:
        1px solid var(--border);

    border-radius: 8px;
}


/* =====================================
   SHORTCUTS
===================================== */

.shortcuts-card {

    padding: 25px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    background:
        var(--card);

    border:
        1px solid var(--border);

    border-radius: 20px;
}


.shortcut-list {

    display: flex;

    gap: 15px;

    flex-wrap: wrap;
}


.shortcut {

    display: flex;

    gap: 6px;

    align-items: center;

    color:
        var(--muted);

    font-size: 13px;
}


kbd {

    padding:
        5px 8px;

    border-radius: 6px;

    background:
        var(--background-secondary);

    border:
        1px solid var(--border);

    color:
        var(--text);
}


/* =====================================
   FOOTER
===================================== */

footer {

    width:
        min(1100px, 92%);

    margin:
        0 auto 30px;

    display: flex;

    justify-content: space-between;

    color:
        var(--muted);

    font-size: 12px;
}


/* =====================================
   MOBILE
===================================== */

@media (max-width: 850px) {

    .stats-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }


    .world-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }


    .tools-grid {

        grid-template-columns: 1fr;
    }


    .shortcuts-card {

        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

}


@media (max-width: 600px) {

    .topbar {

        padding: 15px;
    }


    .brand span {

        display: none;
    }


    .clock-card {

        padding: 25px 15px;
    }


    #time {

        font-size: 50px;

        letter-spacing: 1px;
    }


    .stats-grid {

        grid-template-columns: 1fr;
    }


    .world-grid {

        grid-template-columns: 1fr;
    }


    .streak-grid {

        grid-template-columns:
            repeat(5, 1fr);
    }


    .today-update {

        flex-direction: column;

        align-items: stretch;
    }


    .today-update button {

        width: 100%;
    }


    .top-actions button {

        padding: 8px;

        font-size: 12px;
    }


    footer {

        flex-direction: column;

        gap: 5px;
    }

}


// =========================================
// TIMEHUB WORLD CLOCK
// =========================================


const cities = {

    kathmandu: {
        timezone: "Asia/Kathmandu"
    },

    london: {
        timezone: "Europe/London"
    },

    newYork: {
        timezone: "America/New_York"
    },

    tokyo: {
        timezone: "Asia/Tokyo"
    },

    dubai: {
        timezone: "Asia/Dubai"
    },

    sydney: {
        timezone: "Australia/Sydney"
    }

};


// =========================================
// UPDATE WORLD CLOCK
// =========================================

function updateWorldClock() {

    const now =
        new Date();


    Object.entries(cities)
        .forEach(
            ([city, data]) => {

                const element =
                    document.getElementById(
                        city
                    );


                if (!element) {

                    return;

                }


                const time =
                    new Intl.DateTimeFormat(
                        "en-US",
                        {
                            timeZone:
                                data.timezone,

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


                element.textContent =
                    time;

            }
        );

}


// =========================================
// INITIALIZE
// =========================================

updateWorldClock();


setInterval(
    updateWorldClock,
    1000
);