<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <!-- 内容 1 -->
          <section class="pageContent">
            <h1 style="font-size: 2.0rem;">Session Proposal</h1>
            <p>
              <strong>The application deadline is 31 March.</strong>
            </p>
            <p style="text-align: center">
              <button class="btn btn-primary btn-lg" type="submit" onclick="window.location.href='/admin/proposal'">
                Application
              </button>
            </p>
            <p>
              &nbsp;
            </p>
            <h1 style="font-size: 2.0rem;">Student Helper Application</h1>
            <p>
              &nbsp;
            </p>
            <p style="text-align: center">
              <button class="btn btn-secondary btn-lg" type="submit">
                Student Helper Information
              </button>
            </p>
            <p>
              &nbsp;
            </p>
            <h1 style="font-size: 2.0rem;">Register for the conference and all other events</h1>
            <p>
              &nbsp;
            </p>
            <p style="text-align: center">
              <button class="btn btn-secondary btn-lg" type="submit">
                Registration
              </button>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearToken, getToken } from "../api/token.js";
export default {
  components: {},
  data() {
    return {
      currPath: "",
    };
  },
  methods: {},
  unmounted() {},
  mounted() {
    this.currPath = this.$route.path;
    if (!getToken()) {
      this.$router.replace("/login");
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding: 0.25em 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e3dedc;
}
</style>
