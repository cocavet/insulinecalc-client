import { UPLOAD_FILE } from "../../../server/routes";
import { encriptedId } from "../../utils/common";
import { requestSE } from "../requests";

export async function uploadFileSE(file) {
    const form = prepareFileToUpload(file[0], 'pointer');
    const response = await requestSE().post(UPLOAD_FILE, form);

    return response.data;
}

const prepareFileToUpload = (element, path) => {
    const form = new FormData();

    form.append('files', element);
    form.append('path', `/${path}/${encriptedId() + element.name}`);

    return form;
};