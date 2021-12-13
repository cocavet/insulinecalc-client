import uniqid from 'uniqid';
import { Dist3MealsENU, Dist5MealsENU } from '../../contracts/meal';

export function goTo(router, url) {
    router.push({ path: url });
}

export function getUniqId() {
    return uniqid() + uniqid() + uniqid() + uniqid();
}

export function getDistributionMeal(user, nutritional, mealType) {
    const numMeals = user.numMeals;
    const kcals = nutritional.Kcal;

    return numMeals === 3
        ? (kcals * Dist3MealsENU[mealType]) / 100
        : (kcals * Dist5MealsENU[mealType]) / 100;
}