<template>
  <div class="todopage">
    <div class="todobox">
      <h1>Typescript+Vue3 Todolist</h1>
      <ipt />
      <item
        v-for="(item, key) in todo.list"
        :key="key"
        :idx="key"
        :source="item"
      />
      <foot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodo } from "../../stores/todo";
import Ipt from "./ipt.vue";
import Item from "./item.vue";
import Foot from "./foot.vue";
export default defineComponent({
  components: {
    Ipt,
    Item,
    Foot,
  },
  setup() {
    const todo = useTodo();
    return { todo };
  },
});
</script>
