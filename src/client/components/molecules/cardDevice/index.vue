<template>
  <div
    class="cardDevice"
    @click="showDeviceOnMap(device.idPost)"
    :class="{ '--active': currentDevice === device.idPost }"
  >
    <div class="cardDevice__info">
      <h3 class="cardDevice__title">
        {{ device.name ? device.name : "Sín titulo" }}
      </h3>
      <p class="cardDevice__mac">{{ device.mac }}</p>
    </div>
    <div class="cardDevice__batery">
      <p class="cardDevice__bateryText">
        {{ device.bateryLevel }}
        <span class="cardDevice__bateryPercent">%</span>
      </p>
      <Iconatom
        :class="`cardDevice__bateryIcon ${getBateryColor(device.bateryLevel)}`"
        :icon="getBateryIcon(device.bateryLevel)"
        type="fal"
      />
    </div>
    <Buttonatom
      class="cardDevice__button"
      v-if="currentDevice === device.idPost"
      text="Ver detalle"
      @clicked="goToDevice(device.idPost)"
    />
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
