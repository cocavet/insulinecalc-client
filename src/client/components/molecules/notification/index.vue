<template>
  <div class="notification" @click="clickNotification">
    <Iconatom class="notification__close" icon="fa-times" type="fal" />
    <div class="notification__type">
      <Iconatom :icon="params.icon" type="fal" />
      <small>{{ params.type }}</small>
    </div>
    <div class="notification__info">
      <h3>{{ params.title }}</h3>
      <p>{{ params.text }}</p>
    </div>
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
