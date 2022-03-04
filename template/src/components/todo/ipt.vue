<template>
  <div class="iptbox">
    <input v-model="word" type="text" :placeholder="pla" />
    <button @click="saveWord">\{{ btn_text }}</button>
    <button @click="cancel" v-if="edit">取消</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo } from "../../stores/todo";
export default defineComponent({
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    pla: {
      type: String,
      default: "请输入一段文字",
    },
  },
  setup(props, context) {
    const todo = useTodo();
    const word = ref("");
    async function saveWord() {
      if (props.edit) {
        context.emit("save", word.value);
        word.value = "";
      } else {
        await todo.save(word.value);
        word.value = "";
      }
    }
    return { todo, word, btn_text: props.edit ? "修改" : "添加", saveWord };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
  },
});
</script>
