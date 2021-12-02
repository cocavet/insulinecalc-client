import { updateValue } from "./functions";

export const DATA = {
    type: 'radio',
    value: '',
}
export const PROPS = ['options', 'radioName', 'label', 'checkedValue', 'disabledOption'];
export const METHODS = {
    updateValue,
}