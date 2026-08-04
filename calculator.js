// ===========================================
// Student Grade Calculator
// ===========================================

// Get HTML Elements
const nameInput = document.getElementById("name");
const mark1 = document.getElementById("m1");
const mark2 = document.getElementById("m2");
const mark3 = document.getElementById("m3");
const button = document.getElementById("calc");
const result = document.getElementById("result");

// Button Click Event
button.addEventListener("click", () => {

    // Get Input Values
    const studentName = nameInput.value;

    const marks = [
        Number(mark1.value),
        Number(mark2.value),
        Number(mark3.value)
    ];

    // Validation
    if (
        studentName === "" ||
        mark1.value === "" ||
        mark2.value === "" ||
        mark3.value === ""
    ) {
        result.style.color = "red";
        result.innerHTML = "Please fill in all fields.";
        return;
    }

    // Check marks
    for (const mark of marks) {
        if (mark < 0 || mark > 100) {
            result.style.color = "red";
            result.innerHTML = "Marks must be between 0 and 100.";
            return;
        }
    }

    // Calculate Total
    const total = marks.reduce((sum, mark) => sum + mark, 0);

    // Calculate Average
    const average = total / marks.length;

    // Grade
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Pass / Fail
    let status;

    if (grade === "F") {
        status = "FAIL";
        result.style.color = "red";
    } else {
        status = "PASS";
        result.style.color = "green";
    }

    // Highest Mark
    const highestMark = Math.max(...marks);

    // Show Result
    result.innerHTML = `
        <h2>Result</h2>

        <p><strong>Student:</strong> ${studentName.toUpperCase()}</p>

        <p><strong>Marks:</strong> ${marks.join(", ")}</p>

        <p><strong>Total:</strong> ${total}</p>

        <p><strong>Average:</strong> ${average.toFixed(2)}</p>

        <p><strong>Grade:</strong> ${grade}</p>

        <p><strong>Status:</strong> ${status}</p>

        <p><strong>Highest Mark:</strong> <b>${highestMark}</b></p>
    `;
});