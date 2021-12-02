export const watchers = {
    userName,
    userImage
}

function userName(val) {
    this.avatar["name"] = val;
}

function userImage(val) {
    this.avatar.image = val;
}

