<template>
  <icon-apps v-if="icon == 'apps'"></icon-apps>
  <icon-bug v-else-if="icon == 'bug'"></icon-bug>
  <icon-bulb v-else-if="icon == 'bulb'"></icon-bulb>
  <icon-common v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconApps,
  IconBug,
  IconBulb,
  IconCommon,
} from "@arco-design/web-vue/es/icon";
export default defineComponent({
  components: {
    IconApps,
    IconBug,
    IconBulb,
    IconCommon,
  },
  props: {
    icon: {
      type: String,
      required: true,
      default: "",
    },
  },
});
</script>
