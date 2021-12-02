<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      :type="type"
      @change="updateValue($event, text)"
      :value="value"
      :id="id"
      :checked="isChecked ? 'checked' : ''"
    />
    <label class="checkbox__inputLabel" :for="id">
      <span class="checkbox__icon"></span>
      <div class="checkbox__text" v-html="text"></div>
    </label>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
};
</script>