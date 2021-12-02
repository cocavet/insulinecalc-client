export function mounted() {}

export function getExtension(ext) {
    const hrefName = ext.split('_@@_')[1];
    return hrefName.split('.')[1];
}

export function getHrefName(ext) {
    return ext.split('_@@_')[1];
}

export function dragEnd() {
    this.$emit('dragEnd');
}

export function deleteDoc(index) {
    this.options.splice(index, 1);

    this.$emit('deleteDoc', this.options.join(','), this.indexForm);
}