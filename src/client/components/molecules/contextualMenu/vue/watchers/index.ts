export const watchers = {
    isVisible
}

function isVisible(val) {
    val
        ? document.addEventListener('mouseup', this.eventMouse)
        : null
}