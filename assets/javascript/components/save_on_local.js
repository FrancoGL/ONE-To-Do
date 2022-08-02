/**
 * Save or update an array that contains all the tasks in the localStorage
 * @param task object that contain all data to store
 */
export const saveOnLocal = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))
}