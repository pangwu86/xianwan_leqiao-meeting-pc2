<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  :class="'nav-link ' + (tabNo == 0 ? 'active' : '')"
                  @click="tabNo = 0"
                  title="Log in to the system using your email account and login password."
                >
                  Log in with Password
                </a>
              </li>
              <li class="nav-item">
                <a
                  :class="'nav-link ' + (tabNo == 1 ? 'active' : '')"
                  @click="tabNo = 1"
                  title="Log in to the system using a one-time verification code from your email."
                >
                  Log in with One-Time Password
                </a>
              </li>
            </ul>

            <div class="row pt-4">
              <!-- 邮件 -->
              <div class="mb-3">
                <label for="signinEmailInput" class="form-label">
                  Email
                  <span class="text-danger">*</span>
                </label>
                <div class="row">
                  <div :class="tabNo == 0 ? 'col' : 'col-7'">
                    <input type="email" class="form-control" v-model="email" placeholder="Please enter your email account." />
                  </div>
                  <div class="col-5" v-if="tabNo == 1">
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

              <!-- 密码 -->
              <div class="mb-3" v-if="tabNo == 0">
                <label for="formSignUpPassword" class="form-label"
                  >Password <span class="text-danger">*</span></label
                >
                <div class="password-field position-relative">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="Please enter your login password."
                  />
                </div>
                <div class="sign-tip-right mt-3">
                  Forgot your password?
                  <RouterLink to="/password/reset" class="reset-txt" title="If you forget your password, please click this link to reset your new login password."
                    >Reset it.</RouterLink
                  >
                </div>
              </div>

              <!-- 验证码 -->
              <div class="mb-3" v-if="tabNo == 1">
                <label for="formSignUpPassword" class="form-label"
                  >One-Time Password <span class="text-danger">*</span></label
                >
                <div class="password-field position-relative">
                  <input type="text" class="form-control" v-model="code" placeholder="Please enter the one-time verification code sent to your email." />
                </div>
              </div>
            </div>

            <!-- 按钮 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                @click="doSignIn"
                title="Please enter the correct email account and login password to log in to the system."
                v-if="!submitIng"
              >
                Log in
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>
          </div>

          <div class="sign-tip">
            Don't have an account?
            <RouterLink to="/signup" title="No account? Click this link to register an account.">Sign up!</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from "../api/token.js";

export default {
  data() {
    return {
      tabNo: 0,
      email: "",
      code: "",
      password: "",
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
          verificationType: "login",
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
    doSignIn() {
      let email = this.email.trim();
      let code = this.code.trim();
      let password = this.password.trim();
      if (email == "") {
        alert("Email cannot be empty.");
        return;
      }
      if (!this.checkEmail(email)) {
        return;
      }

      // 密码
      if (this.tabNo == 0) {
        if (password == "") {
          alert("Password cannot be empty.");
          return;
        }

        this.submitIng = true;
        this.$api
          .loginByPassword({
            username: email,
            password: password,
          })
          .then((resp) => {
            console.log(resp);
            this.submitIng = false;
            if (resp.code == 200 && resp.token) {
              setToken(resp.token);
              this.tokenNotice();
              this.$router.push("/user/home");
            } else {
              alert(resp.msg);
            }
          });
      }
      // 验证码
      else {
        if (code == "") {
          alert("OTP-Code cannot be empty.");
          return;
        }
        this.submitIng = true;
        this.$api
          .loginByOTPCode({
            username: email,
            code: code,
          })
          .then((resp) => {
            console.log(resp);
            this.submitIng = false;
            if (resp.code == 200 && resp.token) {
              setToken(resp.token);
              this.tokenNotice();
              this.$router.push("/user/home");
            } else {
              alert(resp.msg);
            }
          });
      }
    },
  },
  unmounted() {
    console.log("sign-in unmounted");
    this.codeEndCount();
  },
  mounted() {
    this.removeStorage("user_profile");
    this.tokenNotice();
  },
};
</script>

<style lang="scss" scoped>
.sign-tip {
  text-align: center;
  font-size: 16px;
}

.form-label {
  width: 100%;
}

.sign-tip-right {
  text-align: right;
  font-size: 16px;
}

.reset-txt {
  // color: rgb(222, 0, 0);
}
</style>
