import { CONSTANTS } from "../../../../constants";
import { goTo } from "../../../../utils/common";
import { setStorage } from "../../../../utils/storage";

export const functions = {
    generateUser,
    updateContent,
    goToCalcInsuline
}

function updateContent(content, val) {
    this.user[content] = Number(val);
}

function generateUser() {
    this.generateUserLoading = true;
    setStorage('user', this.user);
    this.goToCalcInsuline();
    this.generateUserLoading = false;
}

function goToCalcInsuline() {
    goTo(this.$router, CONSTANTS.ROUTERS.CALC_INSULINE);
}