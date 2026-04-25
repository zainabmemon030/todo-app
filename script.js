let tasks = [];
let currentFilter = "all";

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    tasks.push({
        text: task,
        done: false
    });

    input.value = "";
    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(t => !t.done);
    } else if (currentFilter === "done") {
        filteredTasks = tasks.filter(t => t.done);
    }

    filteredTasks.forEach((task, index) => {
        let li = document.createElement("li");

        if (task.done) {
            li.classList.add("done");
        }

        li.textContent = task.text;

        // click to toggle done
        li.onclick = function () {
            task.done = !task.done;
            renderTasks();
        };

        list.appendChild(li);
    });
}

function filterTasks(type) {
    currentFilter = type;
    renderTasks();
}
