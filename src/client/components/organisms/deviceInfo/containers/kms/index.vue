<template>
  <div class="kms">
    <Spinneratom v-if="loading" />
    <Noinfomolecule :params="noDataDistance" :visible="noDataVisibility" />
    <Iconbuttonatom
      class="kms__buttonCalendar"
      icon="fa-calendar"
      type="fal"
      :text="buttonDate"
      @clicked="toogleCalendar"
    />
    <div class="kms__datePicker" v-if="showCalendar">
      <DatePicker
        v-model="date"
        title-position="left"
        :max-date="new Date()"
        color="red"
        :is-range="true"
      />
    </div>
    <Chartmolecule
      class="kms__chart"
      v-if="kms && !loading"
      ident="chart"
      :dataChart="kms"
      color="#5e64ff"
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
