import {saveOrUpdateInLocalService} from "./save_update_in_local.js";

export const deleteTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || [])

    let elementIndex = tasks.findIndex( task => task.id === parseInt(id))

    tasks.splice(elementIndex, 1)

    saveOrUpdateInLocalService.updateTaskCollection(tasks)

    location.reload()
}