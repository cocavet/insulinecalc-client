<template>
  <div class="geofencingName">
    <Inputatom
      class="geofencingName__input"
      :value="title"
      @updateValue="updateValue"
    />
    <div class="geofencingName__btns">
      <Buttonatom @clicked="close" text="cancelar" />
      <Buttonatom
        @clicked="changeTitle"
        text="Cambiar título"
        type="--primary"
      />
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
