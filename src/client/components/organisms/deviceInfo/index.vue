<template>
  <div class="deviceInfo">
    <Basicinfodevice
      v-if="device"
      :device="device"
      @backToMap="backToMap"
      @updateDeviceName="updateDeviceName"
    />
    <Navinfo
      v-if="device"
      :device="device"
      @backToMap="backToMap"
      @changeNav="changeNav"
    />
    <Routes
      v-if="device && nav === 'route'"
      :deviceId="deviceId"
      @backToMap="backToMap"
    />
    <Warnings
      v-if="device && nav === 'warning'"
      :deviceId="deviceId"
      @backToMap="backToMap"
    />
    <Kms
      v-if="device && nav === 'kms'"
      :deviceId="deviceId"
      @backToMap="backToMap"
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
