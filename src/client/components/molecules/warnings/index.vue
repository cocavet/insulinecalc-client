<template>
  <div class="warning">
    <Iconatom class="warnings__help" icon="fa-info-circle" type="fal" />
    <div class="warnings__tooltip">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A adipisci
      error, nulla repudiandae temporibus exercitationem.
    </div>
    <div class="warnings__info">
      <Iconatom icon="fa-vector-square" type="fal" />
      <p>Fuera de zona</p>
    </div>
    <h2 class="warnings__date">12 feb. 2021</h2>
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
