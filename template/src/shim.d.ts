declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
/* 当前环境 */
declare interface Window {
  ENV: boolean;
}
