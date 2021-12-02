<template>
  <ul class="list">
    <li v-for="(item, index) in items" :key="item+index" class="list__item">{{item}}</li>
  </ul>
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
