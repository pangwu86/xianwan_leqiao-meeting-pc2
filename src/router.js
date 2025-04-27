import { createWebHistory, createRouter } from "vue-router";
import eventBus from "vue3-eventbus";

// 首页 + 可操作内容页面
import NotFoundView from "./components/404View.vue";
import HomeView from "./components/HomeView.vue";

import LogInView from "./components/LoginView.vue";
import SignUpView from "./components/SignUpView.vue";

import UserHomeView from "./components/UserHomeView.vue";
import UserProfileView from "./components/UserProfileView.vue";

import PasswordResetView from "./components/PasswordResetView.vue";
import PasswordChangeView from "./components/PasswordChangeView.vue";

import ProposalListView from "./components/ProposalListView.vue";
import ProposalView from "./components/ProposalView.vue";

import FeedbackListView from "./components/FeedbackListView.vue";
import FeedbackView from "./components/FeedbackView.vue";

const routesView = [
  {
    path: "/",
    components: {
      mainBody: HomeView,
    },
    meta: { fillMain: true },
  },
  { path: "/main.psp", redirect: "/" },
  { path: "/login", component: LogInView, meta: {} },
  { path: "/signup", component: SignUpView, meta: {} },
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
    meta: {},
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
    path: "/feedback/list",
    component: FeedbackListView,
    meta: { showSideMenu: true },
  },
  {
    path: "/feedback",
    component: FeedbackView,
    meta: { showSideMenu: true },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: {},
  },
];

// 纯展示内容页面
import welcome_strati_2026 from "./pages/welcome_strati_2026.vue";
import important_dates from "./pages/important_dates.vue";
import call_for_sessions from "./pages/call_for_sessions.vue";
import congress_schedule from "./pages/congress_schedule.vue";
import news_events from "./pages/news_events.vue";
import strati_2026_organization from "./pages/strati_2026_organization.vue";
import strati_2026_field_excursions from "./pages/strati_2026_field_excursions.vue";
import scientific_session_types from "./pages/scientific_session_types.vue";
import registration from "./pages/registration.vue";
import venue from "./pages/venue.vue";
import contact from "./pages/contact.vue";
import sponsor from "./pages/sponsor.vue";
import wait from "./pages/wait.vue";
import visa_policies from "./pages/visa_policies.vue";
import travel_to_suzhou from "./pages/travel_to_suzhou.vue";

const routesPage = [
  {
    path: "/page/welcome_strati_2026.html",
    components: {
      mainBody: welcome_strati_2026,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/travel_to_suzhou.html",
    components: {
      mainBody: travel_to_suzhou,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/contact.html",
    components: {
      mainBody: contact,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/visa_policies.html",
    components: {
      mainBody: visa_policies,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/sponsor.html",
    components: {
      mainBody: sponsor,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/wait.html",
    components: {
      mainBody: wait,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/venue.html",
    components: {
      mainBody: venue,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/strati_2026_organization.html",
    components: {
      mainBody: strati_2026_organization,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/strati_2026_field_excursions.html",
    components: {
      mainBody: strati_2026_field_excursions,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/important_dates.html",
    components: {
      mainBody: important_dates,
    },
    meta: { fillMain: true },
  },{
    path: "/page/scientific_session_types.html",
    components: {
      mainBody: scientific_session_types,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/call_for_sessions.html",
    components: {
      mainBody: call_for_sessions,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/registration.html",
    components: {
      mainBody: registration,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/congress_schedule.html",
    components: {
      mainBody: congress_schedule,
    },
    meta: { fillMain: true },
  },
  {
    path: "/page/news_events.html",
    components: {
      mainBody: news_events,
    },
    meta: { fillMain: true },
  },
];

//
const routes = routesView.concat(routesPage);
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
