<template>
  <a-layout-sider
    :theme="config.theme"
    :width="220"
    collapsible
    breakpoint="xl"
    :collapsed="collapsed"
    @collapse="onCollapse"
  >
    <div class="logo" @click="gohome">
      <img :src="`${config.root}/static/image/white.png`" alt="" v-if="!collapsed"/>
      <p v-else>SP</p>
    </div>
    <div class="menu-demo">
      <a-menu class="mmenu" :default-open-keys="openkey">
        <template v-for="item in list" :key="item.key">
          <mItem :source="item" />
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { useConfig } from "../../../stores/config";
import mItem from "./item.vue";

export default defineComponent({
  components: {
    mItem,
  },
  setup() {
    const config = useConfig();
    const collapsed = ref(false);
    const onCollapse = (val: boolean, type: string) => {
      const content = type === "responsive" ? "触发响应式收缩" : "点击触发收缩";
      Message.info({
        content,
        duration: 2000,
      });
      collapsed.value = val;
    };
    return {
      config,
      collapsed,
      onCollapse,
      openkey: ["0"],
      list: [
        {
          key: 1,
          name: "Todo",
          icon: "apps",
          href: "/todo",
        },
        {
          key: 2,
          name: "arco-design",
          icon: "bug",
          href: "/test",
        },
        {
          key: 3,
          name: "其他",
          icon: "bulb",
          children: [
            {
              key: "3-1",
              name: "404页面",
              href: "/test3",
            },
          ],
        },
      ],
    };
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
});
</script>
