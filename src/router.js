import { createWebHistory, createRouter } from "vue-router";
import eventBus from "vue3-eventbus";

import NotFoundView from "./components/404View.vue";
import HomeView from "./components/HomeView.vue";
import LogInView from "./components/LoginView.vue";
import SignUpView from "./components/SignUpView.vue";
import UserHomeView from "./components/UserHomeView.vue";
import UserProfileView from "./components/UserProfileView.vue";
import PasswordResetView from "./components/PasswordResetView.vue";
import PasswordChangeView from "./components/PasswordChangeView.vue";
import ProposalView from "./components/ProposalView.vue";
import ProposalListView from "./components/ProposalListView.vue";

const routes = [
  {
    path: "/",
    components: {
      mainBody: HomeView,
    },
    meta: { showSideMenu: false, fillMain: true },
  },
  { path: "/main.psp", redirect: "/" },
  { path: "/login", component: LogInView, meta: { showSideMenu: false } },
  { path: "/signup", component: SignUpView, meta: { showSideMenu: false } },
  {
    path: "/user/home",
    component: UserHomeView,
    meta: { showSideMenu: true },
  },
  {
    path: "/user/profile",
    component: UserProfileView,
    meta: { showSideMenu: true },
  },
  {
    path: "/password/reset",
    component: PasswordResetView,
    meta: { showSideMenu: false },
  },
  {
    path: "/password/change",
    component: PasswordChangeView,
    meta: { showSideMenu: true },
  },
  {
    path: "/proposal",
    component: ProposalView,
    meta: { showSideMenu: true },
  },
  {
    path: "/proposal/list",
    component: ProposalListView,
    meta: { showSideMenu: true },
  },
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
  // 填充全部主要内部部分
  eventBus.emit("mainChange", {
    isFill: to.meta.fillMain || false,
  });
});

export default router;
