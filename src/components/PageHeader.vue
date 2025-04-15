<template>
  <header class="">
    <!-- 菜单 -->
    <div class="head-menu-container container" v-if="showMenu">
      <div class="head-menu">
        <!-- logo -->
        <Logo></Logo>
        <!-- menu -->
        <div class="menu-list">
          <!-- 搜索 -->
          <div class="search-bar">
            <div class="search-btn">
              <i class="bi bi-person-fill" @click="toUserLogin"></i>
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

    <!-- banner -->
    <div class="banner-container">
      <div class="container">
        <div class="banner-info">
          <div class="title">STRATI 2026</div>
          <div class="sub-title">
            5th International Congress on Stratigraphy
          </div>
          <div class="other">June 28 – July 3, 2026，Suzhou，China</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { getToken } from "../api/token";
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },
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
          title: "STRATI2026 ORGANIZATION",
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
          title: "REGISTRATION",
          to: "/",
        },
        {
          title: "VENUE",
          to: "/",
        },
        {
          title: "SPONSORS",
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
    toUserLogin() {
      this.$router.push("/user/home");
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
