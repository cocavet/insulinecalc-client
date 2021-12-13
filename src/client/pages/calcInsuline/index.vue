<template>
  <div>
    <section class="calcInsuline">
    <aside>
      <Button text="Edit user" @clicked="editUser"/>
      <h2>User</h2>
      <h3>Features</h3>
      <ul>
        <li>{{getGender()}}</li>
        <li>{{user.age}} years</li>
        <li>{{user.height}} cm</li>
        <li>{{user.weight}} kg</li>
        <li>{{user.numMeals}} meals x day</li>
        <li>{{getActivity()}}</li>
      </ul>
      <h3>Daily nutritional</h3>
      <ul>
        <li>{{(dailyNutritional.Kcal).toFixed(2)}} kcal</li>
        <li>{{(dailyNutritional.CHO).toFixed(2)}} g. of CHO</li>
        <li>{{(dailyNutritional.Fats).toFixed(2)}} g. of fats</li>
        <li>{{(dailyNutritional.Proteins).toFixed(2)}} g. of Proteins</li>
      </ul>
    </aside>

    <main>
      <div class="simulatedMeals">
         <h2>Simulate meals</h2>
        <Button text="Simulate meals" @clicked="simulateMeals"/>
        <ul>
          <li v-for="(meal, index) in simulatedMeals" :key="`simulatedMeals__${index}`">
            {{meal}}
          </li>
        </ul>
      </div>
      <div class="trainModel" v-if="activeTraining">
        <h2>Train Model</h2>
        <Button text="Train Model" @clicked="trainModel"/>
      </div>
      <div v-else-if="!activeTraining && trainingFinished">
        <h2>Trained</h2>
      </div>

      <div class="predict" v-if="trainingFinished">
        <Input label="Meal" @updateValue="updateMeal('name', $event)"/>
        <Select label="Meal type" :options="mealTypeOptions" @updateValue="updateMeal('mealType', $event)"/>
        <Input label="Weight (kg)" @updateValue="updateContent('weight', $event)" :value="user.weight"/>
        <Input label="Sport (min.)" @updateValue="updateContent('sport', $event)"/>
        <Input label="Stress (median beats x minute)" @updateValue="updateContent('stress', $event)"/>
        <Input label="Sugar Blood" @updateValue="updateContent('bloodGlucose', $event)"/>
        <Button text="Predict insuline" @clicked="predict"/>
      </div>
      <h1>Insuline Dose {{predictedInsulineDose}}</h1>
    </main>

    </section>
  </div>
</template>

<script>
import './styles/calcInsuline.scss';
import { components } from './logic/components'
import { functions } from "./logic/functions";
import { watchers } from "./logic/watchers";
import { mounted } from "./logic/mounted";
import { data, props } from "./logic/data";

export default {
  data() {
    return data;
  },
  components,
  methods: functions,
  props,
  watch: watchers,
  mounted
};
</script>
