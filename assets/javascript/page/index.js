import {addTask} from "../components/add_task.js";

document.addEventListener("submit", (e) => {
    e.preventDefault()
    if (e.target.matches(".body__form")) {
        addTask()
    }
})