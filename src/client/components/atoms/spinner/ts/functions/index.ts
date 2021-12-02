export const functions = {
    clicking
}

function clicking(e) {
    this.$emit('clicked');
}
