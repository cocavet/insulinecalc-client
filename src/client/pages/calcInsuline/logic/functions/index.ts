import { CONSTANTS } from '../../../../constants';
import { ActivityENU, GenderENU } from '../../../../contracts/user/user'
import { getPlanSE } from '../../../../services/insulineCalc';
import { goTo } from '../../../../utils/common';

const NUM_OF_SIMULATED_MEALS = 10;

export const functions = {
    getActivity,
    getGender,
    simulateMeals,
    editUser,
}

function getActivity() {
    return Object.keys(ActivityENU).find(el => ActivityENU[el] === this.user.activity);

}

function getGender() {
    return Object.keys(GenderENU).find(el => GenderENU[el] === this.user.gender);
}

function editUser() {
    goTo(this.$router, CONSTANTS.ROUTERS.GENERATE_USER);
}

async function simulateMeals() {
    for (let i = 0; i < NUM_OF_SIMULATED_MEALS; i++) {
        const plan = await getPlanSE(this.user)
        plan.plan.foreach(el => {
            this.simulatedMeals.push(
                [
                    COUNTER,
                    el.Name,
                    el.Kcal,
                    el.Proteins,
                    el.Fats,
                    el.CHO,
                    el.totalWeight,
                ]
            )
        });
    }
}