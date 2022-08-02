import {formatDate} from "../utils/format_date.js";
import {getTasksDates} from "./get_tasks_date.js";
import {createContainer, createLiItem} from "./create_elements_card.js";

export const addSingleTask = (task) => {
    const $date = document.querySelector(`[data-date='${formatDate(task.date)}']`);
    const $cardList = document.querySelector(".card__list"); // parent

    if ($date !== null) {
        const $liItem = createLiItem(task.value)
        $date.parentNode.appendChild($liItem)
    } else {
        const $container = createContainer(formatDate(task.date))
        const $liItem = createLiItem(task.value)
        $container.appendChild($liItem)
        $cardList.appendChild($container)
    }
}

export const loadAllTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || []);
    const $cardList = document.querySelector(".card__list"); // parent
    const $fragment = document.createDocumentFragment();
    const tasksDateCollection = getTasksDates()

    tasksDateCollection.forEach(date => {

        const filterByDate = tasks.filter(task => task.date === date) // Filter task by date

        const $container = createContainer(formatDate(date))

        filterByDate.forEach(task => {
            if (task.date === date) {
                const $liItem = createLiItem(task.value)
                $container.appendChild($liItem)
                $fragment.appendChild($container)
            }
        })
        $cardList.appendChild($fragment)
    })
}