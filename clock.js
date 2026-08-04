const clock = document.getElementById("time");

const updateClock = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.textContent = `${hours}:${minutes}:${seconds}`;
};

updateClock();          // Show time immediately
setInterval(updateClock, 1000);

// const d = new Date("October 13, 2014 11:13:00");

// document.getElementById("demo").innerHTML = d;



// function updateClock() {
//     const now = new Date();

//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     const seconds = String(now.getSeconds()).padStart(2, "0");

//     document.getElementById("time").textContent =
//         `${hours}:${minutes}:${seconds}`;
// }

// updateClock();          // Run immediately
// setInterval(updateClock, 1000); // Update every second

// const d = new Date();

// console.log(d);