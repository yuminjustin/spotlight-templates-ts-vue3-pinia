import * as VueRouter from "vue-router";

//lazy load
const Hello = () => import("C/hello.vue");
const notFound = () => import("C/error/index.vue");
const Todo = () => import("C/todo/index.vue");
const Test = () => import("C/test.vue");

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Hello,
    },
    {
      path: "/todo",
      component: Todo,
    },
    {
      path: "/test",
      component: Test,
    },
    {
      path: "/404",
      component: notFound,
    },
  ],
});
/* 404 页面*/
router.beforeEach((to, from, next): void => {
  if (to.matched.length) next();
  else
    next({
      path: "/404",
    });
});

export default router;
