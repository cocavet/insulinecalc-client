<template>
  <div class="input">
    <label class="label" v-if="label">{{label}}</label>
    <input
      :placeholder="placeholder"
      class="input__input"
      :type="type"
      :min="min"
      @change="updateValue"
      @keyup="updateValue"
      :value="value"
      :disabled="disabled"
    />
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
