import { defineStore } from "pinia";

export const useConfig = defineStore({
  id: "config",
  state: () => ({
    theme: "dark",
    root: window.ENV ? "" : ".",
  }),
  getters: {
    // 类似computed
  },
  actions: {
    // 逻辑function
    changeTheme(): void {
      let bool = this.theme == "dark";
      this.theme = bool ? "light" : "dark";
      bool
        ? document.body.removeAttribute("arco-theme")
        : document.body.setAttribute("arco-theme", "dark");
    },
  },
});
