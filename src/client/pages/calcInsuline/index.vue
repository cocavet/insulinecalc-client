<template>
  <div>
    <section class="calcInsuline">
    <aside>
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
        <li>{{dailyNutritional.Kcal}} kcal</li>
        <li>{{dailyNutritional.CHO}} CHO</li>
        <li>{{dailyNutritional.Fats}} fats</li>
        <li>{{dailyNutritional.Proteins}} Proteins</li>
      </ul>
    </aside>

    <main>
      <ul>
        <li v-for="(meal, index) in simulatedMeals" :key="`simulatedMeals__${index}`">
          
        </li>
      </ul>
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
