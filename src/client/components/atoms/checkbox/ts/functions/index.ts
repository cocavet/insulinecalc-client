export function updateValue(e, text) {
    e.stopPropagation();
    this.$emit('updateValue', { value: e.target.value, text, isChecked: e.target.checked, event: e });
}