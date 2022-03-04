<template>
  <div :key="source.key">
    <a-menu-item v-if="!source.children" @click="clickhandled">
      <template v-if="source.icon" #icon>
        <icon :icon="source.icon" />
      </template>
      \{{ source.name }}
    </a-menu-item>
    <a-sub-menu v-else>
      <template v-if="source.icon" #icon>
        <icon :icon="source.icon" />
      </template>
      <template #title>\{{ source.name }}</template>
      <template v-for="item2 in source.children" :key="item2.key">
        <mItem :source="item2" />
      </template>
    </a-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import icon from "./icon.vue";
export default defineComponent({
  name: "mItem",
  components: {
    icon,
  },
  props: {
    source: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {
    clickhandled(e: MouseEvent) {
      this.$router.push(this.source.href || "/");
    },
  },
});
</script>
