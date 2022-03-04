<template>
  <a-layout :style="`height:${h}px`">
    <Menu />
    <a-layout>
      <Head />
      <Content />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "./layout/head.vue";
import Menu from "./layout/menu/index.vue";
import Content from "./layout/content.vue";

export default defineComponent({
  components: { Head, Menu, Content },
  setup() {
    return {
      h: window.innerHeight,
    };
  },
});
</script>
