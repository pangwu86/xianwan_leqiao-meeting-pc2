<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import PageSideMenu from "./components/PageSideMenu.vue";
import { Tooltip } from "bootstrap";

export default {
  components: {
    PageFooter,
    PageHeader,
    PageSideMenu,
  },
  data() {
    return {
      showSideMenu: true,
    };
  },
  methods: {
    refreshSideMenu(isShow) {
      this.showSideMenu = isShow;
    },
  },
  mounted() {
    let self = this;
    this.$bus.on("sideMenuChange", ({ isShow }) => {
      console.log("sideMenuChange:" + isShow);
      self.refreshSideMenu(isShow);
    });

    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    });
  },
};
</script>

<template>
  <!-- 顶部 -->
  <PageHeader></PageHeader>

  <!-- 中间内容 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- 底部 -->
  <PageFooter></PageFooter>
</template>

<style lang="scss"></style>
