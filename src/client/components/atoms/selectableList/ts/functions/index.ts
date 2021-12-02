export function clicking(e, value) {
    const selectableList = document.querySelectorAll('.selectableList__list');

    [...selectableList].forEach(element => {
        element.classList.remove('active')
    });

    e.target.classList.add('active');

    this.$emit('clicked', value);
}

export function mounted() {
    this.itemsMounted = this.items;
}
