import { ActivityENU, GenderENU } from '../../../../contracts/user/user'
import { getPlanSE } from '../../../../services/insulineCalc';

export const functions = {
    getActivity,
    getGender,
    simulateMeals,
}

function getActivity() {
    return Object.keys(ActivityENU).find(el => ActivityENU[el] === this.user.activity);

}

function getGender() {
    return Object.keys(GenderENU).find(el => GenderENU[el] === this.user.gender);
}

function simulateMeals() {
    getPlanSE()
}