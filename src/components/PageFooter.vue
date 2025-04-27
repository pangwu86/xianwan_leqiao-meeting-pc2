<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-info">
        <div class="row">
          <div class="col">
            <div class="fi-title" style="font-size: 20px">CONTACT</div>
            <p class="fi-desc" style="font-size: 20px">
              Abstract submission and early registration deadline
            </p>
          </div>
          <div class="col" style="display: none">
            <div class="fi-title" style="font-size: 20px">VENUE</div>
            <p class="fi-desc" style="width: 110%; font-size: 20px">
              Welcome to Suzhou <br />
              The Congress Venue Accommodation
            </p>
          </div>
          <div class="col"></div>
          <div class="col log-parent">
            <Logo></Logo>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        Copyright@2025 Strati2026 All rights reserved service
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.footer-info {
  .log-parent {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .menu-logo {
    .logo-name {
      color: #fff;
    }
  }
}
</style>
