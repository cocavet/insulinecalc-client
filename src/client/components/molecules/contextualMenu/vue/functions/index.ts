import { getClosestsElement } from "../../../../../utils/common";

export const functions = {
    clickValue,
    eventMouse
}

function clickValue(val) {
    this.$emit('clickValue', val)
}

function eventMouse(e) {
    let event = getClosestsElement(e.target, 'contextualMenu');
    if (!event) {
        document.removeEventListener('mouseup', this.eventMouse);
        this.$emit('hide');
    }
}