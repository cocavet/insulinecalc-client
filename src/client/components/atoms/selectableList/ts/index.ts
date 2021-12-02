import { clicking, mounted } from './functions/index';

export const DATA = {
    itemsMounted: [],
    isActive: false
}
export const PROPS = ['items', 'classList','selectFirstItem'];
export const METHODS = { clicking }
export const MOUNTED = mounted;