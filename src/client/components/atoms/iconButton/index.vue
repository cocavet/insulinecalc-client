<template>
  <button class="iconButton" :class="[classBtn, buttonType]" @click="clicking">
    <i v-if="icon" class="iconButton__icon" :class="[type, icon]"></i>
    <p class="iconButton__text">{{text}}</p>
  </button>
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
