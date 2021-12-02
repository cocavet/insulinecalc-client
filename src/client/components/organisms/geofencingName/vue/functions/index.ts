export const functions = {
    close,
    changeTitle,
    updateValue,
    init,
    keepTitleWhenPressEnter,
    removePressEnterEvent
}

function updateValue(val) {
    this.title = val;
}

function close() {
    this.removePressEnterEvent();
    this.$emit('close');
}

function changeTitle() {
    this.removePressEnterEvent();
    this.$emit('accept', this.title);
}

function keepTitleWhenPressEnter(e) {
    console.log(e);
    if (e['keyCode'] === 13) {
        this.changeTitle();
    }
}

function init() {
    this.title = this.params.title;

    setTimeout(() => {
        document.querySelector('.modal__content input').select();
        document.addEventListener('keydown', this.keepTitleWhenPressEnter)
    }, 0);
}

function removePressEnterEvent() {
    document.removeEventListener('keydown', this.keepTitleWhenPressEnter);
}
