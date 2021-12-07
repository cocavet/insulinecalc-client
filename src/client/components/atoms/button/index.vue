<template>
  <button
    class="button"
    :class="[{ '--disabled': loading }, type]"
    @click="clicking"
    :disabled="disabled"
  >
    <Spinner
      v-if="loading"
      :class="{ '--whiteSpinner': type === '--primary' }"
    />
    <Iconatom class="button__icon" v-if="icon" type="fal" :icon="icon" />
    {{ text }}
  </button>
</template>

<script>
import { DATA, PROPS, METHODS, COMPONENTS } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  components: COMPONENTS,
};
</script>
