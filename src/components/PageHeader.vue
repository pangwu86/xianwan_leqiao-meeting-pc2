<template>
  <header class="">
    <!-- 图片 -->
    <div class="head-img-container d-flex flex-wrap head-img-container">
      <div class="head-img">
        <div class="container head-welcome">
          <div class="head-title">
            <img src="../imgs/head_logo.png" class="head-logo" />
            <h1>Welcome to IMA 2026!</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- 菜单 -->
    <div class="head-menu-container" v-if="showMenu">
      <div class="container">
        <ul class="nav nav-fill justify-content-center">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >HOME</RouterLink
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              >ABOUT IMA 2026</a
            >
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/1">Welcome</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/2">Overview</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/3"
                  >Previous IMA</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link"
              aria-current="page"
              to="/session/proposal"
              >PROPOSAL</RouterLink
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >COMMITTEES</RouterLink
            >
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              >PROGRAMME</a
            >
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/">Themes</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/">Sessions</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/"
                  >Scientific Program</RouterLink
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >ABSTRACT</RouterLink
            >
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >SPONSORS</RouterLink
            >
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >CONTACT</RouterLink
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              >VENUE</a
            >
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/"
                  >Welcome to Nanjing</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/"
                  >The Congress Venue</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/"
                  >Accommodation</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <RouterLink class="nav-link" to="/login">LOG IN</RouterLink>
          </li>
          <li class="nav-item" v-else>
            <RouterLink class="nav-link" to="/user/home">MY ACCOUNT</RouterLink>
          </li>
        </ul>
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
      showMenu: false,
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
