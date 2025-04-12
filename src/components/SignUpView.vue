<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 称谓 -->
            <div class="mb-3">
              <label class="form-label"
                >Prefix<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="prefix"
                >
                  <option disabled="" value="">Please select your prefix.</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Miss</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                  <option>Rev.</option>
                  <option>Sir</option>
                  <option>Madam</option>
                </select>
              </div>
            </div>

            <!-- 名字 -->
            <div class="mb-3">
              <label class="form-label"
                >First Name<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input type="text" class="form-control" v-model="firstName" placeholder="Please enter your first name." />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Middle Name </label>
              <div class="position-relative">
                <input type="text" class="form-control" v-model="middleName" placeholder="Please enter your middle name." />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Last Name<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input type="text" class="form-control" v-model="lastName" placeholder="Please enter your last name." />
              </div>
            </div>

            <!-- 性别 -->
            <div class="mb-3">
              <label class="form-label"
                >Gender<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <select class="form-select" v-model="gender">
                  <option disabled="" value="">Please select your gender.</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Not listed here</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Password<span class="text-danger">*</span> （8 to 18 characters）</label
              >
              <div class="position-relative">
                <input
                  type="password"
                  placeholder="Please enter a password with 8 to 18 characters, including numbers and special characters such as @#$~!."
                  class="form-control"
                  v-model="password"
                />
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Confirm Password<span class="text-danger">*</span></label
              >
              <div class="position-relative">
                <input
                  type="password"
                  placeholder="Please confirm the password by entering it again."
                  class="form-control"
                  v-model="password2"
                />
              </div>
            </div>

            <!-- 邮件 -->
            <div class="mb-3">
              <label for="signinEmailInput" class="form-label">
                Email
                <span class="text-danger">*</span>
              </label>
              <div class="row">
                <div class="col-7">
                  <input type="email" class="form-control" v-model="email" placeholder="Please enter your email account." />
                </div>
                <div class="col-5">
                  <div class="d-grid">
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      title="Obtain the one-time email verification code."
                      @click="getPassword"
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
              <!-- <div class="invalid-feedback">Please enter email.</div> -->
            </div>

            <!-- 验证码 -->
            <div class="mb-3">
              <label for="formSignUpPassword" class="form-label"
                >One-Time Password <span class="text-danger">*</span></label
              >

              <div class="password-field position-relative">
                <input type="text" class="form-control" v-model="code" placeholder="Please enter the one-time verification code sent to your email." />
              </div>
            </div>

            <!-- 按钮 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                title="After confirming the registration information, click to complete the account registration."
                @click="doSignUp"
                v-if="!submitIng"
              >
                Sign Up
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>
          </div>

          <div class="sign-tip">
            Already have an account?
            <RouterLink to="/login" title="If you already have account information, click here to log into the system immediately.">Log in!</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // email: "520180471@qq.com",
      // code: "",
      // prefix: "Mr.",
      // firstName: "Wu",
      // middleName: "",
      // lastName: "Peiwen",
      // gender: "Male",
      email: "",
      code: "",
      prefix: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
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
          verificationType: "registration",
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
    doSignUp() {
      let email = this.email.trim();
      let code = this.code.trim();
      let prefix = this.prefix.trim();
      let firstName = this.firstName.trim();
      let middleName = this.middleName.trim();
      let lastName = this.lastName.trim();
      let gender = this.gender.trim();
      let password = this.password.trim();
      let password2 = this.password2.trim();

      if (!this.checkEmpty("Password", password)) {
        return;
      }

      if (!this.checkPassword(password, "Password")) {
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

      if (!this.checkEmpty("Email", email)) {
        return;
      }
      if (!this.checkEmail(email)) {
        return;
      }
      if (!this.checkEmpty("OTP-Code", code)) {
        return;
      }
      if (!this.checkEmpty("Prefix", prefix)) {
        return;
      }
      if (!this.checkEmpty("First Name", firstName)) {
        return;
      }
      if (!this.checkEmpty("Last Name", lastName)) {
        return;
      }
      if (!this.checkEmpty("Gender", gender)) {
        return;
      }
      this.submitIng = true;
      this.$api
        .signUp({
          username: email,
          code,
          prefix,
          firstName,
          lastName,
          middleName,
          gender,
          password,
        })
        .then((resp) => {
          console.log(resp);
          this.submitIng = false;
          alert(resp.msg);
          if (resp.code == 200) {
            this.$router.push("/login");
          }
        });
    },
  },
  unmounted() {
    console.log("sign-up unmounted");
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
