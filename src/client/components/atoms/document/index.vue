<template>
  <div class="document">
    <ul>
      <Draggable @end="dragEnd"> 
        <li class="document__li" v-for="(option, index) in options" :key="`documents__${option + index}`">
          <label class="document__label">{{ getExtension(option) }}</label>
          <a class="document__href" :href="option" target="_blank">{{ getHrefName(option) }}</a>
          <span class="document__icon icon-close" @click="deleteDoc(index)"></span>
        </li>
      </Draggable>
    </ul>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS, MOUNTED, WATCH, COMPONENTS } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  mounted: MOUNTED,
  watch: WATCH,
  components: COMPONENTS
};
</script>
