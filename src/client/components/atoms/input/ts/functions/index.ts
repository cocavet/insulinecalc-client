import { getTargetValue } from "../../../../../utils/value";

export function updateValue(event) {
    this.$emit('updateValue', getTargetValue(event));
}