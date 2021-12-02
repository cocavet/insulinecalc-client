<template>
  <div class="copyBtn" @click="copy">
    <Iconatom icon="fa-copy" type="fal" />
    <Tooltipatom class="copyBtn__tooltip" v-if="copied" text="Copiado" />
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
