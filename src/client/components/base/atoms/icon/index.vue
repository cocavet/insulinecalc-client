<template>
  <i class="icon" @click="clicked" :class="[type, icon]"></i>
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
