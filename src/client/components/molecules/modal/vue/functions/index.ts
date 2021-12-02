export const functions = {
    closeModal,
    lowLayers,
    accept
}

function closeModal() {
    this.$emit('closeModal');
}

function accept(data) {
    this.$emit('accept', data);
}

function lowLayers(val) {
    const header = document.querySelector('.header');
    const aside = document.querySelector('.aside');

    if (val) {
        header.classList.add('--lowLayer');
        aside.classList.add('--lowLayer');
    } else {
        header.classList.remove('--lowLayer');
        aside.classList.remove('--lowLayer');
    }
}