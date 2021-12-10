import _ from 'lodash';
import { CONSTANTS } from '../../../../constants';
import { ActivityENU, GenderENU } from '../../../../contracts/user/user'
import { getModelSE, getPlanSE } from '../../../../services/insulineCalc';
import { getUniqId, goTo } from '../../../../utils/common';

const NUM_OF_SIMULATED_MEALS = 10;

export const functions = {
    getActivity,
    getGender,
    simulateMeals,
    editUser,
    trainModel,
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
        const plan = await getPlanSE({
            ...this.user, sport: _.random(0, 75), stress: _.random(55, 220 - this.user.age),
            bloodGlucose: _.random(120, 350),
        });

        plan?.plan.forEach(el => {
            if (el) {
                this.simulatedMeals.push(
                    [
                        getUniqId(),
                        el.Name,
                        el.Kcal,
                        el.Proteins,
                        el.Fats,
                        el.CHO,
                        el.totalWeight,
                    ]
                );

                this.insulineDoses.push([el.insulineDose])
            }
        });
    }

    this.activeTraining = true;
}

function trainModel() {
    this.model = getModelSE(this.simulatedMeals, this.insulineDoses);

    console.log(this.model);
}