<template>
  <ul class="list-group">
    <li
      :class="'list-group-item ' + (path == mi.path ? 'active' : '')"
      v-for="mi in menuList"
      :key="mi.path"
      @click="onMenuClick(mi)"
    >
      <i :class="'bi ' + mi.icon"></i><span>{{ mi.name }}</span>
    </li>
  </ul>
</template>

<script>
import { clearToken } from "../api/token";

export default {
  // props: {
  //   path: {
  //     type: String,
  //     default: "",
  //   },
  // },
  data() {
    return {
      path: "",
      menuList: [
        {
          icon: "bi-house-fill",
          name: "Home",
          path: "/user/home",
        },
        {
          icon: "bi-person-fill",
          name: "My Profile",
          path: "/user/profile",
        },
        {
          icon: "bi-lock-fill",
          name: "Change Password",
          path: "/password/change",
        },
        {
          icon: "bi-list-ol",
          name: "My Proposals",
          path: "/proposal/list",
        },
        {
          icon: "bi-info-lg",
          name: "Technical Support",
          mailto: "ima2026@outlook.com",
        },
        {
          icon: "bi-box-arrow-right",
          name: "Log out",
          func: "doLogout",
        },
      ],
    };
  },
  watch: {},
  methods: {
    onMenuClick(mi) {
      if (mi.path) {
        this.$router.push(mi.path);
      }
      if (mi.func) {
        this[mi.func]();
      }
      if (mi.mailto) {
        window.location.href = `mailto:${mi.mailto}`;
      }
    },
    doLogout() {
      clearToken();
      this.removeStorage("user_profile");
      this.tokenNotice();
      this.$router.push("/login");
    },
    refreshPath(path) {
      this.path = path;
    },
  },
  mounted() {
    let self = this;
    this.$bus.on("pathChange", ({ path }) => {
      console.log("pathChange:" + path);
      self.refreshPath(path);
    });
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  display: flex;
  justify-content: start; //水平
  align-items: center; //垂直

  i {
    margin-right: 10px;
    font-size: 20px;
  }

  span {
    font-size: 15px;
  }

  &.active {
    background: #5b125c;
    color: #fff;
  }

  &:hover {
    background: #5b125c;
    color: #fff;
    cursor: pointer;
  }
}
</style>
