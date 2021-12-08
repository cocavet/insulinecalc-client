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