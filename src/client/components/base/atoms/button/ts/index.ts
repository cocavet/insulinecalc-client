import { clicking } from "./functions";
import spinner from '../../spinner/index.vue';
import icon from '../../icon/index.vue';

export const DATA = {}
export const PROPS = ['text', 'type', 'disabled', 'loading', 'icon'];
export const METHODS = {
    clicking
}

export const COMPONENTS = {
    Spinner: spinner,
    Iconatom: icon
}