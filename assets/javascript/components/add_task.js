import {saveOnLocal} from "./save_on_local.js";
import {noteObject} from "./note_object.js";
import {addSingleTask} from "./create_task.js";

/**
 * Function that adds one task.
 * The task is added to the HTML and saved in an array
 */
export const addTask = () => {
    const $input = document.querySelector(".form__input");
    const $date = document.querySelector(".form__date");

    if ($input.value !== "") {
        // Set task object
        const taskObject = noteObject($input.value, $date.valueAsNumber)
        // Save task in localStorage
        saveOnLocal(taskObject)
        // Add a single task
        addSingleTask(taskObject)
        // Clear input
        $input.value = ""
    }
}