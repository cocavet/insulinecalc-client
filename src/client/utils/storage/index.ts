export function setStorage(item, value, stringify = true) {
    let val = value;
    if (stringify) { val = JSON.stringify(value); }
    localStorage.setItem(item, val);
}

export function getStorage(item, parse = true) {
    return parse
        ? JSON.parse(localStorage.getItem(item))
        : localStorage.getItem(item);
}

export function deleteStorage(item) {
    localStorage.removeItem(item);
}