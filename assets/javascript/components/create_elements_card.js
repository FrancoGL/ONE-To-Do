/**
 * Return container for li elements
 * @param date
 * @returns {HTMLDivElement}
 */
const createContainer = (date) => {
    const $container = document.createElement("div")
    $container.classList.add("container")
    const $containerHeader = document.createElement("h3")
    $containerHeader.classList.add("container__header")
    $containerHeader.textContent = date
    $containerHeader.dataset.date = date

    $container.appendChild($containerHeader)

    return $container
}

/**
 * Return li element
 * @param task {object}
 * @returns {HTMLLIElement}
 */
const createLiItem = (task) => {
    const $liItem = document.createElement("li")
    $liItem.classList.add("list__item")

    const $checkIcon = document.createElement("i")
    if (task.completed) {
        $checkIcon.classList.add("fa-solid", "fa-square-check", "fa-xl", "item--state", "active")
    } else {
        $checkIcon.classList.add("fa-regular", "fa-square-check", "fa-xl", "item--state")
    }
    $checkIcon.dataset.id = task.id

    $liItem.appendChild($checkIcon)

    const $itemText = document.createElement("p")
    $itemText.classList.add("item__text")
    $itemText.textContent = task.value

    $liItem.appendChild($itemText)

    const $listOptions = document.createElement("div")
    $listOptions.classList.add("list__options")

    const $editIcon = document.createElement("i")
    const $deleteIcon = document.createElement("i")
    $editIcon.classList.add("fa-solid", "fa-pen", "btn--update")
    $deleteIcon.classList.add("fa-solid", "fa-trash", "btn--delete")
    $editIcon.dataset.id = task.id
    $deleteIcon.dataset.id = task.id

    $listOptions.appendChild($editIcon)
    $listOptions.appendChild($deleteIcon)

    $liItem.appendChild($listOptions)

    return $liItem
}

export const createElementService = {
    createContainer,
    createLiItem
}