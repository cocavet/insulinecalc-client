import { MealTypeENU } from '../../../../contracts/meal';
import { getStorage } from '../../../../utils/storage';
import { mealTypeOptions } from '../constants';

export const data = {
    user: getStorage('user').user,
    dailyNutritional: getStorage('user').dailyNutritional,
    userId: getStorage('user').userId,
    mealTypeOptions,
    currentMeal: {
        id: '',
        name: '',
        meal: null,
        mealType: MealTypeENU.Breakfast,
    },
    simulatedMeals: [],
    insulineDoses: [],
    modelSimulatedMeals: [],
    activeTraining: false,
    trainingFinished: false,
    model: null,
    storedMeals: getStorage('storedMeals'),
    predictedInsulineDose: null,
    loading: false,
}

export const props = [];