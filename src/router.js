import { createWebHistory, createRouter } from "vue-router";
import eventBus from "vue3-eventbus";

import NotFoundView from "./components/404View.vue";
import HomeView from "./components/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/main.psp", redirect: "/" },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: { showSideMenu: false },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  // 通知路径修改
  eventBus.emit("pathChange", {
    path: to.fullPath,
  });
  // 通知侧边菜单改变
  eventBus.emit("sideMenuChange", {
    isShow: to.meta.showSideMenu || false,
  });
});

export default router;
