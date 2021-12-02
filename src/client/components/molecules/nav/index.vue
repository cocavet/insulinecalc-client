<template>
  <div class="nav">
    <ul class="nav__ul">
      <li
        class="nav__li"
        v-for="(item, index) in nav"
        :class="{ '--active': currentNav === item.value }"
        :key="`nav__${index}`"
        @click="clickItem(item.value)"
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
