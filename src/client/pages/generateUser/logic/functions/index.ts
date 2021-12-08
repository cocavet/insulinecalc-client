import { CONSTANTS } from '../../../../constants';
import { getDailyNutritionalSE } from '../../../../services/insulineCalc';
import { goTo } from '../../../../utils/common';
import { setStorage } from '../../../../utils/storage';

export const functions = {
    generateUser,
    updateContent,
    goToCalcInsuline,
}

function updateContent(content, val) {
    this.user[content] = Number(val);
}

async function generateUser() {
    this.generateUserLoading = true;
    const dailyNutritional = await getDailyNutritionalSE(this.user);
    setStorage('user', { user: this.user, dailyNutritional });
    this.goToCalcInsuline();
    this.generateUserLoading = false;
}

function goToCalcInsuline() {
    goTo(this.$router, CONSTANTS.ROUTERS.CALC_INSULINE);
}