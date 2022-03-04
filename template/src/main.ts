/* polyfill IE */
import "@babel/polyfill";
/* vonder*/
import { createApp } from "vue";
import { createPinia } from "pinia";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import App from "C/app.vue"; // webpack alias .vue必须带o(╥﹏╥)o 不然报错
/* styles*/
import "B/assets/css/reset.css";
import "B/assets/css/page.css";
import "@arco-design/web-vue/dist/arco.css";

createApp(App).use(createPinia()).use(ArcoVue).use(router).mount("#app");

// new Vue({
//     el: '#app',
//     template: `<App/>`,
//     components: { App }
// })

//https://pinia.vuejs.org/

/* 
"vue-class-component": "^7.2.6",
"vue-property-decorator": "^9.1.2",
要删除
*/

/* webpack hot reload */
if (module.hot) {
  module.hot.accept();
}
