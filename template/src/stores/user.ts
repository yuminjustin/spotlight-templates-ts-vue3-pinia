import { defineStore } from "pinia";
import axios from "axios";
import { useConfig } from "./config";

export const useUser = defineStore({
  id: "user",
  state: () => ({
    name: "",
  }),
  getters: {
    // 类似computed
  },
  actions: {
    async getUserInfo() {
      const c = useConfig();
      axios
        .get(`${c.root}/static/mock/user.json`)
        .then((r) => {
          this.name = r.data.data.name;
        })
        .catch((e) => console.log(e));
    },
  },
});
