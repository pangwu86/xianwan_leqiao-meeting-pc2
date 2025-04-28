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
            <div class="search-btn" v-if="hasToken" @click="doLogin">
              <i class="bi bi-person-fill"></i>
              <span>User Center</span>
            </div>
            <div class="search-btn" v-if="hasToken" @click="doLogout">
              <i class="bi bi-box-arrow-right"></i>
              <span>Log out</span>
            </div>

            <div class="search-btn" v-if="!hasToken" @click="doLogin">
              <i class="bi bi-person-fill"></i>&nbsp;
              <button class="btn btn-primary btn-sm">Log in</button>
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
                    <RouterLink
                      class="dropdown-item"
                      :to="ci.to"
                      v-if="ci.to"
                      >{{ ci.title }}</RouterLink
                    >
                    <div class="dropdown-divider" v-else></div>
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
import { getToken, clearToken } from "../api/token";
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
          title: "STRATI 2026 ORGANIZATION",
          to: "/page/strati_2026_organization.html",
        },
        {
          title: "PROGRAMME",
          to: "/page/scientific_session_types.html",
        },
        {
          title: "FIELD TRIPS",
          to: "/page/strati_2026_field_excursions.html",
        },
        {
          title: "REGISTRATION",
          to: "/page/registration.html",
        },
        {
          title: "VENUE",
          to: "/page/venue.html",
        },
        {
          title: "SPONSORS",
          to: "/page/sponsor.html",
        },
        {
          title: "CONTACT US",
          to: "/page/contact.html",
        },
      ],
    };
  },
  methods: {
    refreshNavitems() {
      if (getToken()) {
        this.hasToken = true;
      } else {
        this.hasToken = false;
      }
    },
    doLogin() {
      this.$router.push("/user/home");
    },
    doLogout() {
      clearToken();
      this.removeStorage("user_profile");
      this.tokenNotice();
      this.$router.push("/login");
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
