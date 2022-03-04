<template>
  <div class="foot">
    <span>\{{ todo.selected }}项被选中</span>
    <template v-if="todo.selected > 0">
      <button @click="todo.removeSelected">删除所选</button>
      <button @click="todo.cancelSelected">取消选择</button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodo } from "../../stores/todo";
export default defineComponent({
  setup() {
    const todo = useTodo();
    return {
      todo
    };
  }
});
</script>
