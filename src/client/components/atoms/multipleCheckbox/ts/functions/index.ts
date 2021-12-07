export function mounted() {
    this.value = this.radioName;
    this.text = this.radioText;
}

export function updateValue(val) {
   this.$emit('updateValue', val);
}