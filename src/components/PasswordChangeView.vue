<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">Change Password</h2>
            </div>

            <div class="row pt-4">
              <div class="mb-3">
                <label for="formSignUpPassword" class="form-label"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="password-field position-relative">
                  <input
                    type="password"
                    class="form-control"
                    v-model="currentPassword"
                    placeholder="Please enter your current password."
                  />
                </div>
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
                    class="form-control"
                    placeholder="Please enter a password with 8 to 18 characters, including numbers and special characters such as @#$~!."
                    v-model="newPassword"
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
                    v-model="newPassword2"
                  />
                </div>
              </div>
            </div>

            <!-- 按钮 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                @click="doUpdatePassword"
                v-if="!submitIng"
              >
                Change Password
              </button>
              <button class="btn btn-primary" type="button" disabled v-else>
                <span class="spinner-border spinner-border-sm"></span>
              </button>
            </div>
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
      currentPassword: "",
      newPassword: "",
      newPassword2: "",
      submitIng: false,
    };
  },
  methods: {
    doUpdatePassword() {
      let cpwd = this.currentPassword.trim();
      let npwd = this.newPassword.trim();
      let npwd2 = this.newPassword2.trim();
      if (!this.checkEmpty("Current Password", cpwd)) {
        return;
      }
      if (!this.checkEmpty("New Password", npwd)) {
        return;
      }
      if (!this.checkEmpty("Confirm Password", npwd2)) {
        return;
      }
      if (opwd == npwd) {
        alert("The new password cannot be the same as the current password.");
        return;
      }
      if (npwd != npwd2) {
        alert("The new passwords need to be consistent.");
        return;
      }
      if (!this.checkPassword(npwd, "New Password")) {
        return;
      }

      this.submitIng = true;
      this.$api
        .changePassword({
          currentPassword: cpwd,
          newPassword: npwd,
        })
        .then((resp) => {
          this.submitIng = false;
          console.log(resp);
          if (resp.code == 200) {
            alert(
              "The password has been changed successfully. Please log in again."
            );
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
  unmounted() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
