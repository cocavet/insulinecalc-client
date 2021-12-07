<template>
  <div class="radioButton">
    <label class="radioButton__label" v-if="label">{{ label }}</label>
    <span v-for="(option, index) in options" :key="option + index">
      <input
        class="radioButton__input"
        :type="type"
        :id="option.value + radioName"
        :name="radioName"
        :value="option.value"
        @change="updateValue"
        :checked="String(checkedValue) === String(option.value)"
      />
      <label class="radioButton__inputLabel" :for="option.value + radioName">
        <span class="radioButton__icon"></span>
        <div class="radioButton__text" v-html="option.text"></div>
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
  mounted,
};
</script>
