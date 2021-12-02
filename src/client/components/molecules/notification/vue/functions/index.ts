export const functions = {
    clickNotification
}

function clickNotification(id) {
    this.$emit('clickNotification', id)
}


