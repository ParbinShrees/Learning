const notes =
    document.getElementById("notes");

const notesStatus =
    document.getElementById("notesStatus");

const clearNotes =
    document.getElementById("clearNotes");

const savedNotes =
    localStorage.getItem("timehub-notes");

if (savedNotes) {
    notes.value = savedNotes;
}

notes.addEventListener("input", () => {
    localStorage.setItem(
        "timehub-notes",
        notes.value
    );

    notesStatus.textContent =
        "Saved automatically";

    setTimeout(() => {
        notesStatus.textContent =
            "Saved";
    }, 500);
});

clearNotes.addEventListener("click", () => {
    notes.value = "";

    localStorage.removeItem(
        "timehub-notes"
    );

    notesStatus.textContent =
        "Notes cleared";
});