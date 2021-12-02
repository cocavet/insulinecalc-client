import draggable from 'vuedraggable'
import { mounted, getExtension, getHrefName, dragEnd, deleteDoc } from "./functions";

export const DATA = {
    extension: '',
    hrefName: ''
}
export const PROPS = ['options', 'indexForm'];
export const METHODS = {
    getExtension,
    getHrefName,
    dragEnd,
    deleteDoc
}
export const MOUNTED = mounted;
export const WATCH = {};
export const COMPONENTS = {
    Draggable: draggable
}