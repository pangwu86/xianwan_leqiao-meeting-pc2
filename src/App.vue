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
      isFillMain: false,
    };
  },
  methods: {
    refreshSideMenu(isShow) {
      this.showSideMenu = isShow;
    },
    refreshMain(isFill) {
      this.isFillMain = isFill;
    },
  },
  mounted() {
    let self = this;

    this.$bus.on("sideMenuChange", ({ isShow }) => {
      console.log("sideMenuChange:" + isShow);
      self.refreshSideMenu(isShow);
    });

    this.$bus.on("mainChange", ({ isFill }) => {
      console.log("mainChange:" + isFill);
      self.refreshMain(isFill);
    });

    // BUG: 无法隐藏 且会跑到屏幕左上角
    // new Tooltip(document.body, {
    //   selector: "[data-bs-toggle='tooltip']",
    // });
  },
};
</script>

<template>
  <!-- 顶部 -->
  <PageHeader></PageHeader>

  <!-- 中间内容 -->
  <div class="container my-5" v-if="!isFillMain">
    <div class="row">
      <div class="col-3" v-if="showSideMenu">
        <PageSideMenu></PageSideMenu>
      </div>
      <div :class="showSideMenu ? 'col-9' : 'col-12'">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>

  <!-- 中间内容  -->
  <div v-else>
    <router-view v-slot="{ Component }" name="mainBody">
      <component :is="Component" />
    </router-view>
  </div>

  <!-- 底部 -->
  <PageFooter></PageFooter>
</template>

<style lang="scss"></style>
