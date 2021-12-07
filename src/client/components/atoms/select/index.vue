<template>
  <div>
    <label class="select__label" v-if="label">{{ label }}</label>
    <select class="select" @change="updateValue">
      <option
        class="select__option"
        v-for="(option, index) in options"
        :value="option.value"
        :key="option+index"
        :selected="String(option.value) === String(selected)"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS
};
</script>
