import {addTask} from "../components/add_task.js";
import {loadAllTask} from "../components/create_task.js";

document.addEventListener("DOMContentLoaded", () => {
    const tasks = localStorage.getItem("tasks") || [];
    if (tasks.length > 0) {
        loadAllTask()
    }
})

document.addEventListener("submit", (e) => {
    e.preventDefault()
    if (e.target.matches(".body__form")) {
        addTask()
    }
})