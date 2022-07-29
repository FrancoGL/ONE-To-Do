export const addTask = () => {
    const $cardList = document.querySelector(".card__list");
    const $input = document.querySelector(".form__input");
    const $template = document.getElementById("li__template").content;
    const $fragment = document.createDocumentFragment();

    if ($input.value !== "") {
        $template.querySelector(".item__text").textContent = $input.value

        let $clone = document.importNode($template, true)
        $fragment.appendChild($clone)
        $cardList.appendChild($fragment)
        $input.value = ""
    }
}