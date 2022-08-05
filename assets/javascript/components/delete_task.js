import {saveOrUpdateInLocalService} from "./save_update_in_local.js";
import {getTaskService} from "./get_tasks.js";

export const deleteTask = (id) => {
    const tasks = getTaskService.getTasksParsed()

    let elementIndex = tasks.findIndex( task => task.id === parseInt(id))

    tasks.splice(elementIndex, 1)

    saveOrUpdateInLocalService.updateTaskCollection(tasks)

    location.reload()
}