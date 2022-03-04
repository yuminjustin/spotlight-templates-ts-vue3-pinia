<template>
  <a-layout-header :class="['mhead', config.theme == 'dark' ? '_dark' : '']">
    <a-row>
      <a-col :span="16"> </a-col>
      <a-col :span="8">
        <a-space class="mhead_menu r">
          <a-button
            shape="circle"
            type="primary"
            v-if="config.theme == 'dark'"
            @click="config.changeTheme"
          >
            <icon-moon />
          </a-button>
          <a-button shape="circle" @click="config.changeTheme" v-else>
            <icon-sun />
          </a-button>
          <a-divider direction="vertical" />
          <icon-user />
          <span>Hello \{{ user.name }} </span>
        </a-space>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useConfig } from "../../stores/config";
import { useUser } from "../../stores/user";
import { IconSun, IconMoon, IconUser } from "@arco-design/web-vue/es/icon";

export default defineComponent({
  components: {
    IconSun,
    IconMoon,
    IconUser,
  },
  setup() {
    const config = useConfig();
    const user = useUser();
    return { config, user };
  },
  mounted(){
    this.user.getUserInfo()
  }
});
</script>
