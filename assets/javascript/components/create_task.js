import {formatDate} from "../utils/format_date.js";
import {getTaskService} from "./get_tasks.js";
import {createElementService} from "./create_elements_card.js";

/**
 * Add one task
 * if the task contains a date that already exists added this one to the existing version
 * if the task contains a date that doesn't exist create a new card
 * @param task {object}
 */
const addSingleTask = (task) => {
    const $date = document.querySelector(`[data-date='${formatDate(task.date)}']`);
    const $cardList = document.querySelector(".card__list"); // parent

    if ($date !== null) {
        const $liItem = createElementService.createLiItem(task)
        $date.parentNode.appendChild($liItem)
    } else {
        const $container = createElementService.createContainer(formatDate(task.date))
        const $liItem = createElementService.createLiItem(task)
        $container.appendChild($liItem)
        $cardList.appendChild($container)
    }
}

/**
 * Load all tasks when the page is loaded
 */
const loadAllTask = () => {
    const tasks = getTaskService.getTasksParsed()
    const $cardList = document.querySelector(".card__list"); // parent
    const $fragment = document.createDocumentFragment();
    const tasksDateCollection = getTaskService.getTasksDates()

    tasksDateCollection.forEach(date => {

        const filterByDate = tasks.filter(task => task.date === date) // Filter task by date

        const $container = createElementService.createContainer(formatDate(date))

        filterByDate.forEach(task => {
            if (task.date === date) {
                const $liItem = createElementService.createLiItem(task)
                $container.appendChild($liItem)
                $fragment.appendChild($container)
            }
        })
        $cardList.appendChild($fragment)
    })
}

export const createTaskService = {
    addSingleTask,
    loadAllTask
}