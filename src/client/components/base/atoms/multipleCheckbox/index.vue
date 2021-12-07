<template>
  <div class="multipleCheckbox">
    <label class="multipleCheckbox__label" v-if="label">{{ label }}</label>
    <span v-for="(option, index) in options" :key="option+index+label">
      <label class="multipleCheckbox__inputLabel" :class="{'--checked': checkedValue && checkedValue.find(el => String(el) === String(option.value))}" @click="updateValue(option.value)">
        <span class="multipleCheckbox__icon icon-check"></span>
        <div class="multipleCheckbox__text" v-html="option.text"></div>
      </label>
    </span>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS } from "./ts";
import { mounted } from "./ts/functions/index";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  mounted
};
</script>
