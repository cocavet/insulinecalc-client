<template>
  <div>
    <Radio :options="gender" label="Gender" :checkedValue="user.gender" radioName="gender" @updateValue="updateContent('gender', $event)"/> 
    <Input label="Age" type="number" @updateValue="updateContent('age', $event)"/>
    <Input label="Height (cm)" type="number" @updateValue="updateContent('height', $event)"/>
    <Input label="Weight (kg)" type="number" @updateValue="updateContent('weight', $event)"/>
    <Select label="Activity" :options="activity" :checkedValue="user.activity" @updateValue="updateContent('activity', $event)"/>
    <Select label="Number of meals (x day)" :checkedValue="user.numMeals" :options="numMeals" @updateValue="updateContent('numMeals', $event)"/>
    <Button text="Generate User" type="--primary" :loading="generateUserLoading" @clicked="generateUser"/>
  </div>
</template>

<script>
import './styles/index.scss';
import { components } from './logic/components';
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
