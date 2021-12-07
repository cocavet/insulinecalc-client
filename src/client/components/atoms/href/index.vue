<template>
  <a :href="link" :target="target" @click="clicking">{{ text }}</a>
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
