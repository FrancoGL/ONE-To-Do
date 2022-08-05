import {getTaskService} from "./get_tasks.js";
import {saveOrUpdateInLocalService} from "./save_update_in_local.js";

const setupUpdate = (idElement) => {

    const tasks = getTaskService.getTasksParsed()
    const $input = document.querySelector(".form__input")
    const $inputDate = document.querySelector(".form__date")
    const $btn = document.querySelector(".form__btn")

    const {id, value, date} = tasks.find(task => task.id === parseInt(idElement))

    $input.value = value
    $inputDate.valueAsNumber = date
    $btn.textContent = "Update"
    $btn.dataset.id = id


}

const updateTask = (id) => {

    const tasks = getTaskService.getTasksParsed()
    const $input = document.querySelector(".form__input")
    const $inputDate = document.querySelector(".form__date")

    tasks.forEach(task => {
        if (task.id === parseInt(id)) {
            task.value = $input.value
            task.date = $inputDate.valueAsNumber
        }
    })

    saveOrUpdateInLocalService.updateTaskCollection(tasks)
}

export const updateServices = {
    updateAction: setupUpdate,
    setUpdate: updateTask
}