import {getTaskService} from "./get_tasks.js";
/**
 * Save one task in LocalStorage
 * @param task object that contain all data to store
 */
const saveOneTask = (task) => {
    const tasks = getTaskService.getTasksParsed()

    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

/**
 * Update a task collection either if the operation is update or delete
 * @param taskCollection
 */
const updateTaskCollection = (taskCollection) => {

    const tasks = JSON.stringify(taskCollection)

    localStorage.setItem("tasks", tasks)
}

export const saveOrUpdateInLocalService = {
    saveOneTaskOnLocal: saveOneTask,
    updateTaskCollection
}