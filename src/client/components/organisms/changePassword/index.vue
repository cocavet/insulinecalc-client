<template>
  <div class="changePassword">
    <Inputatom class="changePassword__input" label="Contraseña actual" />
    <Inputatom class="changePassword__input" label="Nueva contraseña" />
    <Inputatom class="changePassword__input" label="Repetir nueva contraseña" />
    <div class="changePassword__btns">
      <Buttonatom @clicked="close" text="cancelar" />
      <Buttonatom
        :loading="loading"
        @clicked="changePassword"
        text="Cambiar contraseña"
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
