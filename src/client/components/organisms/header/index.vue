<template>
  <div>
    <header class="header">
      <h3 class="header__h3">{{ getTitle() }}</h3>
      <div class="header__avatar" @click="toggleMenu">
        <div
          v-if="avatar.image"
          class="header__avatarImage"
          :style="`background: url(${avatar.image})`"
        ></div>
        <Iconatom
          v-else
          class="header__icon"
          type="fal"
          icon="fa-user-circle"
        />
        <p>{{ avatar["name"] }}</p>
        <Iconatom
          class="header__chevron"
          type="fal"
          :icon="displayMenu ? 'fa-chevron-up' : 'fa-chevron-down'"
        />
      </div>
      <Contextualmenumolecule
        class="header__contextualMenu"
        :isVisible="displayMenu"
        :menu="contextualMenu"
        @clickValue="clickContextual"
        @hide="toggleMenu"
      />
    </header>
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
