export const functions = {
    close,
    changePassword

}

function close() {
    this.$emit('close');
}

function changePassword() {
    this.loading = true;
    this.loading = false;
    this.close();
}
