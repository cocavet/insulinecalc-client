import { ActivityENU, GenderENU, NumMealsENU } from '../../../../contracts/user/user';

export const RADIO_OPTIONS = [
    {
        text: 'Female',
        value: GenderENU.female,
    },
    {
        text: 'Male',
        value: GenderENU.male,
    },
];

export const ACTIVITY_OPTIONS = [
    {
        text: 'Sedentary',
        value: ActivityENU.sedentary,
    },
    {
        text: 'Low (1-2 times x week)',
        value: ActivityENU.low,
    },
    {
        text: 'Moderate (3 times x week)',
        value: ActivityENU.moderate,
    },
    {
        text: 'High (4-5 times x week)',
        value: ActivityENU.high,
    },
    {
        text: 'Very high (+5 times x week)',
        value: ActivityENU.veryHigh,
    },
];

export const NUM_MEALS_OPTIONS = [
    {
        text: '3 meals',
        value: NumMealsENU.meals3,
    },
    {
        text: '5 meals',
        value: NumMealsENU.meals5,
    },
];

export const user = {
    gender: GenderENU.female,
    age: '',
    height: '',
    weight: '',
    activity: ActivityENU.sedentary,
    numMeals: NumMealsENU.meals3,
}