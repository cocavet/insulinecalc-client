import { getStorage } from '../../../../utils/storage';

export const data = {
    user: getStorage('user').user,
    dailyNutritional: getStorage('user').dailyNutritional,
    simulatedMeals: [],
}

export const props = [];