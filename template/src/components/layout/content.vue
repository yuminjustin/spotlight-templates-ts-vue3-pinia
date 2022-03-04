<template>
  <a-layout-content class="mcontent pr" :style="`height:${h}px`">
    <router-view></router-view>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      h: window.innerHeight - 96,
    };
  },
});
</script>
