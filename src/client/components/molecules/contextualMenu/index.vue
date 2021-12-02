<template>
  <div class="contextualMenu" v-if="isVisible">
    <ul class="contextualMenu__ul">
      <li
        v-for="(item, index) in menu"
        :key="`cMenu__${index}`"
        class="contextualMenu__li"
        :class="`--${item.color}`"
        @mousedown="clickValue(item.value)"
      >
        {{ item.text }}
      </li>
    </ul>
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
