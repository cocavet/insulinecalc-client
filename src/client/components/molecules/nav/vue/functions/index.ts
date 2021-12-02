export const functions = {
    clickItem
}

function clickItem(val) {
    this.$emit('clickItem', val);
}