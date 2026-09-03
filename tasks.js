const taskInput =
    document.getElementById("taskInput");

const addTask =
    document.getElementById("addTask");

const taskList =
    document.getElementById("taskList");

const taskCount =
    document.getElementById("taskCount");

let tasks =
    JSON.parse(
        localStorage.getItem("timehub-tasks")
    ) || [];

function saveTasks() {
    localStorage.setItem(
        "timehub-tasks",
        JSON.stringify(tasks)
    );
}

function updateTaskCount() {
    const remaining =
        tasks.filter(
            (task) => !task.completed
        ).length;

    taskCount.textContent =
        `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        const left = document.createElement("div");

        left.className = "task-left";

        if (task.completed) {
            left.classList.add("completed");
        }

        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;

        checkbox.addEventListener(
            "change",
            () => {
                task.completed =
                    checkbox.checked;

                saveTasks();

                renderTasks();
            }
        );

        const text =
            document.createElement("span");

        text.textContent = task.text;

        left.appendChild(checkbox);

        left.appendChild(text);

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className =
            "delete-task";

        deleteButton.addEventListener(
            "click",
            () => {
                tasks =
                    tasks.filter(
                        (item) =>
                            item.id !== task.id
                    );

                saveTasks();

                renderTasks();
            }
        );

        li.appendChild(left);

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

    updateTaskCount();
}

function addNewTask() {
    const text =
        taskInput.value.trim();

    if (!text) {
        return;
    }

    tasks.push({
        id: Date.now(),

        text: text,

        completed: false
    });

    taskInput.value = "";

    saveTasks();

    renderTasks();
}

addTask.addEventListener(
    "click",
    addNewTask
);

taskInput.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "Enter") {
            addNewTask();
        }
    }
);

renderTasks();