 document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.querySelector("button");

    addButton.addEventListener("click", addTask);
    listContainer.addEventListener("click", handleTaskClick);

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;
        
        const span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×' (delete symbol)
        li.appendChild(span);
        
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }

    function handleTaskClick(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            saveData();
        } else if (event.target.tagName === "SPAN") {
            event.target.parentElement.remove();
            saveData();
        }
    }

    function saveData() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function loadTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks") || "";
    }

    loadTasks();
});
