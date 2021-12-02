import { editName, getBateryColor, getBateryIcon, stopEdit } from "../../../../../../../utils/common"
import { updateDeviceName } from '../../../../../../../services/orbbyteService';

const TITLE_H1_SELECTOR = '.basicInfo__H1';

export const functions = {
    getBateryColor,
    getBateryIcon,
    backToMap,
    editTitle,
    saveTitle
}

function backToMap() {
    this.$emit('backToMap');
}

function editTitle() {
    this.edit = true;
    editName(document.querySelector(TITLE_H1_SELECTOR), true);
}

async function saveTitle() {
    const selector = document.querySelector(TITLE_H1_SELECTOR);
    this.edit = false;
    stopEdit(selector);

    await updateDeviceName({
        data: { name: "uuu" },
        postId: this.device.idPost
    });

    this.$emit('updateDeviceName', this.device, selector.textContent);
}