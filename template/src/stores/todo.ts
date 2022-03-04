import { defineStore } from "pinia";
import Todo from "./model/todo";

export const useTodo = defineStore({
  id: "todo",
  state: () => ({
    list: <Array<Todo>>[],
  }),
  getters: {
    // 类似computed
    selected: (state) => {
      let num = 0;
      state.list.map((item: Todo) => {
        item.isSelected && num++;
      });
      return num;
    },
  },
  actions: {
    // 逻辑function
    async save(str: string) {
      str && this.list.push(new Todo(str));
      return;
    },
    setEdit(idx: number) {
      let _t = this.list[idx];
      _t.toggleEdit();
    },
    setWord(str: string, idx: number) {
      let _t = this.list[idx];
      _t.changeWord(str);
    },
    setSelected(idx: number) {
      let _t = this.list[idx];
      _t.toggleSelected();
    },
    cancelSelected() {
      this.list.map((item: Todo) => {
        item.toggleSelected(!0);
      });
    },
    removeItem(idx: number) {
      this.list.splice(idx, 1);
    },
    removeSelected() {
      this.list = this.list.filter((item: Todo) => {
        if (!item.isSelected) return item;
      });
    },
  },
});
