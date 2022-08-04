import {saveOrUpdateInLocalService} from "./save_update_in_local.js";
import {taskObject} from "./task_object.js";
import {createTaskService} from "./create_task.js";

/**
 * Function that adds one task and save a task in localStorage
 */
export const addTask = () => {
    const $input = document.querySelector(".form__input");
    const $date = document.querySelector(".form__date");

    if ($input.value !== "") {
        // Set task object
        const task = taskObject($input.value, $date.valueAsNumber)
        // Save task in localStorage
        saveOrUpdateInLocalService.saveOneTaskOnLocal(task)
        // Add a single task
        createTaskService.addSingleTask(task)
        // Clear input
        $input.value = ""
    }
}