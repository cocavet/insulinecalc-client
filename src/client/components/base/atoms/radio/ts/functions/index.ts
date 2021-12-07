export function mounted() {
    this.value = this.radioName;
    this.text = this.radioText;
}

export function updateValue(e) {
    this.$emit('updateValue', e.target.value);
}