<template>
  <div class="spinner">
    <span class="loader"></span>
    <span class="spinner__text" v-if="text">{{text}}</span>
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
