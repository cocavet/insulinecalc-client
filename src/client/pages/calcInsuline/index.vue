<template>
  <div>
    <section class="calcInsuline">
    <div class="calcInsuline__aside">
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
    </div>

    <main class="calcInsuline__main">
      <div class="simulatedMeals">
        <h2>Simulate meals <span v-if="simulatedMeals.length > 0 && !loading">Done</span></h2>
        <small v-if="loading">Loading recipes...</small>
        <ul v-if="loading">
          <li v-for="(meal, index) in simulatedMeals" :key="`simulatedMeals__${index}`">
            <h3>{{ meal[1] }}</h3>
          </li>
        </ul>
      </div>
      <div class="trainModel"  v-if="simulatedMeals.length > 0 && !loading">
        <h2>Train Model <span v-if="!activeTraining && trainingFinished">Done</span></h2>
      </div>

      <div class="predict" v-if="trainingFinished">
        <h2>New prediction</h2>
        <Input label="Meal" @updateValue="updateMeal('name', $event)"/>
        <Select label="Meal type" :options="mealTypeOptions" @updateValue="updateMeal('mealType', $event)"/>
        <Input label="Weight (kg)" @updateValue="updateContent('weight', $event)" :value="user.weight"/>
        <Input label="Sport (min.)" @updateValue="updateContent('sport', $event)"/>
        <Input label="Stress (median beats x minute)" @updateValue="updateContent('stress', $event)"/>
        <Input label="Sugar Blood" @updateValue="updateContent('bloodGlucose', $event)"/>
        <Button text="Predict insuline" type="--primary" @clicked="predict"/>
      </div>
      <div v-if="predictedInsulineDose" class="calcInsuline__calc">
          <h1>{{predictedInsulineDose}} Units</h1>
      </div>
    </main>

    </section>
  </div>
</template>

<script>

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
