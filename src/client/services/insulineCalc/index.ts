import { CONSTANTS } from '../../constants';
import { requestSE } from '../requests';

export async function getDailyNutritionalSE(user) {
    const response = await requestSE().post({
        url: `${CONSTANTS.INSULINE_URL}/get/dailyNutritional`,
        data: user,
    })

    return response.data;
}

export async function getPlanSE(user) {

    const response = await requestSE().post({
        url: `${CONSTANTS.INSULINE_URL}/get/plan`,
        data: user,
    })

    return response.data;
}

export async function getModelSE(simulatedMeals, insulineDoses, userId) {
    const response = await requestSE().post({
        url: `${CONSTANTS.INSULINE_URL}/get/model`,
        data: { simulatedMeals, insulineDoses, userId },
    })

    return response.data;
}

export async function getPreictionSE(data, userId) {
    const response = await requestSE().post({
        url: `${CONSTANTS.INSULINE_URL}/get/prediction`,
        data: { data, userId },
    })

    return response.data;
}

export async function getMealSE(user, mealType) {
    const response = await requestSE().post({
        url: `${CONSTANTS.INSULINE_URL}/get/meal/''/${mealType}`,
        data: { user },
    })

    return response.data;
}