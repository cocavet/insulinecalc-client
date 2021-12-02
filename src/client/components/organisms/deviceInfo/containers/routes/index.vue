<template>
  <div class="routes">
    <Spinneratom v-if="loading" />
    <Noinfomolecule :params="noDataRoutes" :visible="noDataVisibility" />
    <Iconbuttonatom
      class="routes__buttonCalendar"
      icon="fa-calendar"
      type="fal"
      :text="buttonDate"
      @clicked="toogleCalendar"
    />
    <div class="routes__datePicker" v-if="showCalendar">
      <DatePicker
        v-model="date"
        title-position="left"
        :max-date="new Date()"
        color="red"
      />
    </div>
    <div class="routes__map" id="mapRoutes"></div>
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
