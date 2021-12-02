import { getStorage } from "../../../../../utils/storage";
import { contextualMenu } from "../constants";

export const data = {
    avatar: getStorage('user'),
    contextualMenu,
    displayMenu: false
}

export const props = ['userName', 'userImage'];