import {saveOnLocal} from "./save_on_local.js";
import {taskObject} from "./task_object.js";
import {addSingleTask} from "./create_task.js";

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
        saveOnLocal(task)
        // Add a single task
        addSingleTask(task)
        // Clear input
        $input.value = ""
    }
}