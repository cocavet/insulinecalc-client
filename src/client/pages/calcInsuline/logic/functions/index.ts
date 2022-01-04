import _ from 'lodash';
import { CONSTANTS } from '../../../../constants';
import { ActivityENU, GenderENU } from '../../../../contracts/user'
import { getMealSE, getModelSE, getPlanSE, getPreictionSE } from '../../../../services/insulineCalc';
import { getUniqId, goTo } from '../../../../utils/common';
import { setStorage } from '../../../../utils/storage';

const NUM_OF_SIMULATED_MEALS = 10;

export const functions = {
    getActivity,
    getGender,
    simulateMeals,
    editUser,
    trainModel,
    predict,
    updateContent,
    updateMeal,
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
    this.loading = true;
    for (let i = 0; i < NUM_OF_SIMULATED_MEALS; i++) {
        this.user.sport = _.random(0, 75);
        this.user.stress = _.random(55, 220 - this.user.age);
        this.user.bloodGlucose = _.random(120, 350);

        const plan = await getPlanSE(this.user);

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

                this.modelSimulatedMeals.push(
                    [
                        ...Object.values(this.user),
                        el.Kcal,
                        el.Proteins,
                        el.Fats,
                        el.CHO,
                        el.totalWeight,
                    ]
                )
                this.insulineDoses.push([el.insulineDose])
            }
        });
    }

    setStorage('simulatedMeals', this.simulatedMeals);
    setStorage('modelSimulatedMeals', this.modelSimulatedMeals);
    setStorage('insulineDoses', this.insulineDoses);

    this.activeTraining = true;
    this.loading = false;

    this.trainModel();
}

async function trainModel() {
    this.model = await getModelSE(this.modelSimulatedMeals, this.insulineDoses, this.userId);

    this.activeTraining = false;
    this.trainingFinished = true;

    setStorage('haveModel', true);
}

async function predict() {
    const meal = await getMealSE(this.user, this.currentMeal.mealType);
    const prediction = await getPreictionSE([
        ...Object.values(this.user),
        meal.Kcal,
        meal.Proteins,
        meal.Fats,
        meal.CHO,
        meal.totalWeight,
    ], this.userId);

    this.predictedInsulineDose = Number(prediction).toFixed(1);
}

function updateContent(content, val) {
    this.user[content] = Number(val);
}

function updateMeal(content, val) {
    this.currentMeal[content] = val;
}