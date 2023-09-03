const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("task");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            ${taskText}
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});