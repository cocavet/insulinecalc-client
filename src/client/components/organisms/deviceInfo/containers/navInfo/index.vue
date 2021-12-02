<template>
  <div class="navInfo">
    <ul class="navInfo__ul">
      <li
        class="navInfo__li"
        :class="{
          [`--active-${item.color}`]: activeNav === item.link,
        }"
        v-for="(item, index) in nav"
        :key="`navDevices__${index}`"
        @click="goToNav(item.link)"
      >
        <Iconatom
          class="navInfo__icon"
          :icon="item.icon"
          :type="item.iconType"
          :class="`--${item.color}`"
        />
        <p class="navInfo__text">{{ item.text }}</p>
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
