import {addTask} from "../components/add_task.js";
import {createTaskService} from "../components/create_task.js";
import {deleteTask} from "../components/delete_task.js";

document.addEventListener("DOMContentLoaded", () => {
    const tasks = localStorage.getItem("tasks") || [];
    if (tasks.length > 0) {
        createTaskService.loadAllTask()
    }
})

document.addEventListener("submit", (e) => {
    e.preventDefault()
    if (e.target.matches(".body__form")) {
        addTask()
    }
})

document.addEventListener("click", (e) => {

    if (e.target.matches(".btn--delete")) {

        deleteTask(e.target.dataset.id)
    }
})