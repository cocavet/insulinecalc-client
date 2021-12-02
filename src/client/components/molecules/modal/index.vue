<template>
  <div class="modal" v-if="visible">
    <div class="modal__content">
      <h2 class="modal__title">{{ title }}</h2>
      <component
        :is="wraps"
        :params="params"
        @close="closeModal"
        @accept="accept"
      ></component>
    </div>
    <div class="modal__bkg" @click="closeModal"></div>
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
