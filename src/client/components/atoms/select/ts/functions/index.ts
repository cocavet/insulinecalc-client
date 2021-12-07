import { getTargetValue } from '../../../../../utils/value';

function updateValue(event) {
    this.$emit('updateValue', getTargetValue(event));
}

function selectMultiOption(option, selectedArray) {
    return selectedArray && selectedArray.includes(option.value) ? 'selected' : '';
}

function clicking(value) {
    this.$emit('clicked', value);
}

export const functions = {
    updateValue,
    selectMultiOption,
    clicking
}
