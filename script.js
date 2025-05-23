function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Edit Button (✏️)
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.title = "Edit";
    editBtn.onclick = () => {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

    // Delete Button (🗑️)
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete";
    deleteBtn.onclick = () => li.remove();

    const controls = document.createElement("div");
    controls.className = "task-controls";
    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(controls);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
