const ACTIVE_CLASS = '--active';

export function deactiveList() {
    [...getAutocompleteListElements()].forEach(element => {
        element.classList.remove(ACTIVE_CLASS);
    });
}

export function getAutocompleteListElements() {
    return document.querySelectorAll('.autoComplete__input:focus + .autoComplete__ul .autoComplete__li');
}

export function arrowDown(position) {
    const list = [...getAutocompleteListElements()];

    if (listNotEmpty(list)) {
        if (!isFinalList(list, position)) {
            deactiveList();
            position++;
            list[position].classList.add(ACTIVE_CLASS);
            scrollToActiveElement(position);
        }
    }

    return position;
}

export function arrowUp(position) {
    const list = [...getAutocompleteListElements()];

    if (listNotEmpty(list)) {
        if (beginingOfList(position)) {
            position = 0;
        } else {
            deactiveList();
            position--;
            list[position].classList.add(ACTIVE_CLASS);
            scrollToActiveElement(position);
        }
    }

    return position;
}

export function getCurrentValue() {
    const activeElement = getCurrentActiveElement();
    return activeElement.innerHTML;
}

function listNotEmpty(list) {
    return list && list.length > 0;
}

function isFinalList(list, position) {
    return list.length <= position + 1;
}

function beginingOfList(position) {
    return position === 0;
}

function scrollToActiveElement(position) {
    const ulElement = document.querySelector('.autoComplete__input:focus + .autoComplete__ul');
    const activeElement = getCurrentActiveElement();
    ulElement.scroll(0, position * activeElement.clientHeight);
}

function getCurrentActiveElement() {
    return document.querySelector('.autoComplete__input:focus + .autoComplete__ul .autoComplete__li.--active');
}

