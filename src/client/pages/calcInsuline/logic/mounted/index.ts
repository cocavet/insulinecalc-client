import { getStorage } from '../../../../utils/storage';

export async function mounted() {
    this.simulatedMeals = getStorage('simulatedMeals') ? getStorage('simulatedMeals') : [];
    this.modelSimulatedMeals = getStorage('modelSimulatedMeals') ? getStorage('modelSimulatedMeals') : [];
    this.insulineDoses = getStorage('insulineDoses') ? getStorage('insulineDoses') : [];
    this.modelSimulatedMeals.length > 0 ? this.activeTraining = true : this.activeTraining = false;

    if (this.modelSimulatedMeals.length > 0 && getStorage('haveModel')) {
        this.activeTraining = false;
        this.trainingFinished = true;
    }
}