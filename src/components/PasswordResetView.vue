<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Reset Password</h2>
            </div>

            <div class="mb-3">
              <label for="formSignUpPassword" class="form-label"
                >Email <span class="text-danger">*</span></label
              >
              <div class="row">
                <div class="col-7">
                  <input type="email" class="form-control" v-model="email" placeholder="Please enter the email address you registered with the system." />
                </div>
                <div class="col-5">
                  <div class="d-grid">
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      @click="getPassword"
                      title="Obtain the one-time email verification code."
                      v-if="!codeIng"
                      :disabled="codeRefresh"
                    >
                      {{
                        codeRefresh
                          ? "Refresh In " + codeCountdown + "s"
                          : "Get OTP"
                      }}
                    </button>
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      disabled
                      v-else
                    >
                      <span class="spinner-border spinner-border-sm"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="formSignUpPassword" class="form-label"
                >One-time Password <span class="text-danger">*</span></label
              >
              <div class="password-field position-relative">
                <input type="text" class="form-control" v-model="code" placeholder="Please enter the one-time verification code sent to your email." />
              </div>
            </div>

            <div class="row pt-4">
              <div class="mb-3">
                <label for="formSignUpPassword" class="form-label"
                  >New Password <span class="text-danger">*</span>（8 to 18
                  characters）</label
                >
                <div class="password-field position-relative">
                  <input
                    type="password"
                    placeholder="Please enter a password with 8 to 18 characters, including numbers and special characters such as @#$~!."
                    class="form-control"
                    v-model="password"
                  />
                </div>
              </div>
            </div>

            <div class="row pt-4">
              <div class="mb-3">
                <label for="formSignUpPassword" class="form-label"
                  >Confirm Password <span class="text-danger">*</span></label
                >
                <div class="password-field position-relative">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Please confirm the password by entering it again."
                    v-model="password2"
                  />
                </div>
              </div>
            </div>

            <!-- 按钮 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                @click="doResetPassword"
                v-if="!submitIng"
              >
                Reset Password
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>
          </div>

          <div class="sign-tip">
            Return to
            <RouterLink to="/login">Log in!</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearToken } from "../api/token.js";

export default {
  data() {
    return {
      email: "",
      code: "",
      password: "",
      password2: "",
      submitIng: false,
      codeIng: false,
      codeCountdown: 60,
      codeRefresh: false,
      codeInterval: null,
    };
  },
  methods: {
    getPassword() {
      let email = this.email.trim();
      if (email == "") {
        alert("Email cannot be empty.");
        return;
      }
      if (!this.checkEmail(email)) {
        return;
      }
      this.codeIng = true;
      this.$api
        .getEmailCode({
          receiver: email,
          verificationType: "reset",
          verificationMethod: "email",
        })
        .then((resp) => {
          console.log(resp);
          this.codeIng = false;
          alert(resp.msg);
          if (resp.code == 200) {
            this.codeStartCount();
          }
        });
    },
    codeStartCount() {
      let self = this;
      this.codeRefresh = true;
      this.codeCountdown = 60;
      this.codeInterval = setInterval(() => {
        if (this.codeCountdown > 0) {
          this.codeCountdown--;
        } else {
          this.codeEndCount();
        }
      }, 1000);
    },
    codeEndCount() {
      this.codeRefresh = false;
      if (this.codeInterval) {
        clearInterval(this.codeInterval);
      }
    },
    doResetPassword() {
      let email = this.email.trim();
      let code = this.code.trim();
      let password = this.password.trim();
      let password2 = this.password2.trim();

      if (!this.checkEmpty("Email", email)) {
        return;
      }

      if (!this.checkEmpty("One-time Password", code)) {
        return;
      }

      if (!this.checkEmail(email)) {
        return;
      }

      if (!this.checkEmpty("New Password", password)) {
        return;
      }

      if (!this.checkPassword(password, "New Password")) {
        return;
      }

      if (!this.checkEmpty("Confirm Password", password2)) {
        return;
      }

      if (password != password2) {
        alert(
          "The passwords entered twice are inconsistent. Please re-enter them."
        );
        return;
      }

      this.submitIng = true;
      this.$api
        .resetPassword({
          username: email,
          password,
          code,
          verificationMethod: "email",
        })
        .then((resp) => {
          this.submitIng = false;
          console.log(resp);
          if (resp.code == 200) {
            alert(resp.msg);
            this.doLogout();
          } else {
            alert(resp.msg);
          }
        });
    },
    doLogout() {
      clearToken();
      this.removeStorage("user_profile");
      this.tokenNotice();
      this.$router.push("/login");
    },
  },
  unmounted() {
    this.codeEndCount();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.sign-tip {
  text-align: center;
  font-size: 16px;
}
</style>
