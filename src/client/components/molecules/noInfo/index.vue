<template>
  <div class="noInfo" v-if="visible">
    <img class="noInfo__img" :src="params.img" />
    <h3 class="noInfo__h3">{{ params.title }}</h3>
    <p class="noInfo__p">{{ params.text }}</p>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS, WATCH, COMPONENTS, MOUNTED } from "./ts";

export default {
  data() {
    return DATA;
  },
  components: COMPONENTS,
  methods: METHODS,
  props: PROPS,
  watch: WATCH,
  mounted: MOUNTED,
};
</script>
