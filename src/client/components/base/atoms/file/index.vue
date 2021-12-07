<template>
  <div class="file" :class="classFile">
    <input :id="uniqId" class="file__input" :type="type" @change="updateValue" :name="uniqId" :multiple="multiple"/>
    <label class="file__label" :for="uniqId">
      <p class="file__text">{{text}}</p>
    </label>
  </div>
</template>

<script>
import { DATA, PROPS, METHODS } from "./ts";

export default {
  data() {
    return DATA;
  },
  methods: METHODS,
  props: PROPS
};
</script>