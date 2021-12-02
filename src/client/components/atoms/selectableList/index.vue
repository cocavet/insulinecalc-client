<template>
  <ul class="selectableList">
    <li
      class="selectableList__list"
      v-for="(item, index) in items"
      :class="{[classList]: classList, '--error': item.error, 'active': index === 0 && selectFirstItem }"
      :key="item.id"
      @click="clicking($event, item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { DATA, PROPS, METHODS, MOUNTED } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS,
  mounted: MOUNTED,
};
</script>
