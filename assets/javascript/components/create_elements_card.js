export const createContainer = (date) => {
    const $container = document.createElement("div")
    $container.classList.add("container")
    const $containerHeader = document.createElement("h3")
    $containerHeader.classList.add("container__header")
    $containerHeader.textContent = date
    $containerHeader.dataset.date = date

    $container.appendChild($containerHeader)

    return $container
}

export const createLiItem = (text) => {
    const $liItem = document.createElement("li")
    $liItem.classList.add("list__item")

    const $checkIcon = document.createElement("i")
    $checkIcon.classList.add("fa-regular", "fa-square-check", "fa-xl")

    $liItem.appendChild($checkIcon)

    const $itemText = document.createElement("p")
    $itemText.classList.add("item__text")
    $itemText.textContent = text

    $liItem.appendChild($itemText)

    const $listOptions = document.createElement("div")
    $listOptions.classList.add("list__options")

    const $editIcon = document.createElement("i")
    const $deleteIcon = document.createElement("i")
    $editIcon.classList.add("fa-solid", "fa-pen")
    $deleteIcon.classList.add("fa-solid", "fa-trash")

    $listOptions.appendChild($editIcon)
    $listOptions.appendChild($deleteIcon)

    $liItem.appendChild($listOptions)

    return $liItem
}