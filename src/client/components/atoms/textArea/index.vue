<template>
  <div class="textAreaContent">
    <label class="textArea__label"  v-if="label">{{label}}</label>
    <textarea class="textArea" @keyup="updateValue" :value="value"></textarea>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS } from "./ts";
import { mounted } from "./ts/functions";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS
};
</script>
