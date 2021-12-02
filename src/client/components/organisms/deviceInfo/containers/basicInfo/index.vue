<template>
  <div class="basicInfo">
    <Iconatom
      class="basicInfo__back"
      type="fal"
      icon="fa-chevron-left"
      @clicked="backToMap"
    />
    <div class="basicInfo__title">
      <span
        class="basicInfo__avatar"
        :style="
          device.image && device.image[0] !== ''
            ? `background: url(${device.image[0]})`
            : 'background: url(/images/noInfo/noImage.svg)'
        "
      />
      <h1 class="basicInfo__H1">
        {{ device.name ? device.name : "Sín título" }}
      </h1>
      <Iconatom type="fal" icon="fa-pen" @clicked="editTitle" v-if="!edit" />
      <Iconatom type="fal" icon="fa-check" @clicked="saveTitle" v-if="edit" />
    </div>
    <div class="basicInfo__status">
      <span class="basicInfo__battery">
        <p>{{ device.position && device.position[0].bateryLevel }} %</p>
        <Iconatom
          class="basicInfo__batteryIcon"
          :class="
            getBateryColor(device.position && device.position[0].bateryLevel)
          "
          :icon="
            getBateryIcon(device.position && device.position[0].bateryLevel)
          "
          type="fal"
        />
      </span>
      <p>mac: {{ device.mac }}</p>
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
