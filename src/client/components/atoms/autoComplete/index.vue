<template>
  <div class="autoComplete">
    <input
      class="autoComplete__input"
      @focus="onFocus(value)"
      :value="value"
      :placeholder="placeholder"
      @keyup="keyingUp($event)"
    />
    <ul class="autoComplete__ul">
      <li class="autoComplete__spinner" v-if="loading">
        <Iconatom type="fa" class="autoComplete__spinnerIcon" icon="fa-circle-notch fa-spin" />
      </li>
      <li
        v-else
        @mousedown="selectIngredient(option.value)"
        class="autoComplete__li"
        v-for="(option, index) in optionsData"
        :class="index === 0 ? '--active' : ''"
        :key="option+index"
      >{{option.text}}</li>
    </ul>
  </div>
</template>

<script>
import { DATA, PROPS, COMPONENTS, METHODS, MOUNTED, WATCH } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  components: COMPONENTS,
  watch: WATCH,
  mounted: MOUNTED,
};
</script>
