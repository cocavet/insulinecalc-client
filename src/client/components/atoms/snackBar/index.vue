<template>
  <div class="snackBar" :class="[{ '--active': activeClass }, status]">{{ text }}</div>
</template>

<script>
import { DATA, PROPS, METHODS, WATCH } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  watch: WATCH
};
</script>



