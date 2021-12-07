import { functions, options, mounted } from "./functions";
import icon from '../../icon/index.vue';

export const DATA = {
    optionsData: {},
    typingTimer: {},
    valueTemp: '',
    position: 0,
    loading: false
}

export const PROPS = ['list', 'options', 'value', 'placeholder'];

export const COMPONENTS = {
    Iconatom: icon
}

export const METHODS = functions();
export const MOUNTED = mounted;
export const WATCH = {
    options
}