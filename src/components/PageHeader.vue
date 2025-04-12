<template>
  <header class="">
    <!-- 菜单 -->
    <div class="head-menu-container container" v-if="showMenu">
      <div class="head-menu">
        <!-- logo -->
        <div class="menu-logo">
          <img src="../imgs/logo2.png" alt="" class="logo-img" />
          <div class="logo-name">
            <div class="sub-title">
              5th International Congress on Stratigraphy
            </div>
            <div class="title">STRATI 2026</div>
          </div>
        </div>
        <!-- menu -->
        <div class="menu-list">
          <!-- 搜索 -->
          <div class="search-bar">
            <div class="search-btn">
              <i class="bi bi-search"></i>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="nav-bar">
            <ul class="nav nav-fill justify-content-center">
              <li
                :class="'nav-item ' + (ni.children ? 'dropdown' : '')"
                v-for="(ni, nidx) in menuList"
                :key="'menuitem-' + nidx"
              >
                <!-- 一层 -->
                <RouterLink
                  v-if="!ni.children"
                  class="nav-link"
                  aria-current="page"
                  :to="ni.to"
                  >{{ ni.title }}</RouterLink
                >
                <!-- 二层 -->
                <a
                  v-else
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  >{{ ni.title }}</a
                >
                <ul class="dropdown-menu">
                  <li
                    v-for="(ci, cidx) in ni.children"
                    :key="'menuitem-child-' + cidx"
                  >
                    <RouterLink class="dropdown-item" :to="ci.to">{{
                      ci.title
                    }}</RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { getToken } from "../api/token";
export default {
  data() {
    return {
      hasToken: false,
      showMenu: true,
      menuList: [
        {
          title: "HOME",
          to: "/",
        },
        {
          title: "ABOUT STRATI 2026",
          to: "/about",
        },
        {
          title: "COMMITTEES",
          to: "/",
        },
        {
          title: "PROGRAMME",
          to: "/",
        },
        {
          title: "FIELD TRIPS",
          to: "/",
        },
        {
          title: "SPONSORS",
          to: "/",
        },
        {
          title: "VENUE",
          to: "/",
        },
        {
          title: "CONTACT",
          to: "/",
        },
      ],
    };
  },
  methods: {
    refreshNavitems() {
      console.log("refreshNavitems");
      if (getToken()) {
        this.hasToken = true;
      } else {
        this.hasToken = false;
      }
    },
  },
  mounted() {
    let self = this;
    self.refreshNavitems();
    this.tokenWatch(() => {
      self.refreshNavitems();
    });
  },
};
</script>

<style></style>
