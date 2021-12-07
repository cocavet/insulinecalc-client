<template>
  <div>
    <section class="plantilla"></section>
  </div>
</template>

<script>
import './styles/index.scss';
import { components } from './logic/components'
import { functions } from "./logic/functions";
import { watchers } from "./logic/watchers";
import { mounted } from "./logic/mounted";
import { data, props } from "./logic/data";

export default {
  data() {
    return data;
  },
  components,
  methods: functions,
  props,
  watch: watchers,
  mounted
};
</script>
