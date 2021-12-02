<template>
  <div>
    <aside class="aside">
      <span class="aside__logo"></span>
      <ul class="aside__ul">
        <li
          class="aside__li"
          v-for="(aside, index) in asideOptions"
          :key="`aside__${index}`"
          :class="{ '--active': matchURL(aside.link) }"
          @click="goTo(aside.link)"
        >
          <Iconatom
            class="aside__icon"
            :type="matchURL(aside.link) ? 'far' : aside.iconType"
            :icon="aside.icon"
          />
          <p class="aside__href" :text="aside.text">{{ aside.text }}</p>
        </li>
      </ul>
    </aside>
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
