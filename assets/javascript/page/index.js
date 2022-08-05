import {addTask} from "../components/add_task.js";
import {createTaskService} from "../components/create_task.js";
import {getTaskService} from "../components/get_tasks.js";
import {deleteTask} from "../components/delete_task.js";
import {updateServices} from "../components/update_task.js";

document.addEventListener("DOMContentLoaded", () => {
    const tasks = getTaskService.getTasksParsed()
    if (tasks.length > 0) {
        createTaskService.loadAllTask()
    }
})

// document.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(e.target)
//     // if (e.target.matches(".body__form")) {
//     //     addTask()
//     // }
// })

document.addEventListener("click", (e) => {

    if (e.target.matches(".btn--delete")) {

        deleteTask(e.target.dataset.id)
    }
    if (e.target.matches(".btn--update")) {
        updateServices.updateAction(e.target.dataset.id)
    }

    if (e.target.matches(".form__btn") && !e.target.matches("[data-id]")) {
        e.preventDefault()
        addTask()
    }

    if (e.target.matches(".form__btn") && e.target.matches("[data-id]")) {
        updateServices.setUpdate(e.target.dataset.id)
    }
})