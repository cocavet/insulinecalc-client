import { arrowDown, arrowUp, getCurrentValue } from "../utils";


export function functions() {
    return {
        keyingUp,
        selectIngredient,
        onFocus
    }
}

function onFocus(val) {
    this.loading = true;

    if (val && val !== '') {
        this.$emit('keyuped', val);
        return false;
    } else {
        this.loading = false;
    }

    this.position = 0;
}

export function mounted(e) {
    this.optionsData = this.options;
}

async function keyingUp(e) {
    clearTimeout(this.typingTimer);

    switch (e.keyCode) {
        case 13:
            this.$emit('changed', getCurrentValue());
            e.target.blur();
            break;
        case 40:
            this.position = arrowDown(this.position);
            break;
        case 38:
            this.position = arrowUp(this.position);
            break;
        default:
            this.loading = true;
            this.$emit('keyuped', e.target.value);

            return false;
    }
}

export function selectIngredient(ingredient) {
    this.$emit('changed', ingredient);
}

export function options(val) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
        this.optionsData = val;
        this.loading = false;
    }, 400);
}

