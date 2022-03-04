<template>
  <a-result status="404" subtitle="Whoops, that page is gone.">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="back">Back</a-button>
      </a-space>
    </template>
  </a-result>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    back() {
      this.$router.push("/");
    },
  },
});
</script>
