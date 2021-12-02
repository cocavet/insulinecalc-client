export function mounted() {
    this.activeClass = this.isActive;
}

export function isActive(val) {
    if (this.isActive) {
        this.activeClass = val;
        setTimeout(() => {
            this.activeClass = false;
            this.$emit('deactiveSnackBar');
        }, 3000);
    }
}
