<template>
  <div :class="['todo-item', source.edit ? 'edit' : '']">
    <div class="todo-item-view" v-if="!source.edit" @dblclick="setEdit">
      <input
        type="checkbox"
        :checked="source.isSelected"
        @change="setSelected"
      />
      <span class="word ellipsis">\{{ source.word }}</span>
      <span class="del" @click="del"></span>
    </div>
    <div v-else>
      <ipt @save="save" @cancel="setEdit" :edit="!0" :pla="source.word" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodo } from "../../stores/todo";
import Todo from "../../stores/model/todo";
import Ipt from "./ipt.vue";
export default defineComponent({
  props: {
    source: {
      type: Object,
      default: <Todo>{},
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Ipt,
  },
  setup(props) {
    const todo = useTodo();
    const setEdit = () => {
      todo.setEdit(props.idx);
    };
    const setSelected = () => {
      todo.setSelected(props.idx);
    };
    return { todo, setEdit, setSelected };
  },
  methods: {
    del() {
      this.todo.removeItem(this.idx);
    },
    save(str: string) {
      this.todo.setWord(str, this.idx);
    },
  },
});
</script>
