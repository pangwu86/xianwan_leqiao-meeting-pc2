<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-info">
        <div class="row">
          <div class="col">
            <div class="fi-title">CONTACT</div>
            <p class="fi-desc">
              Abstract submission and early registration deadline
            </p>
          </div>
          <div class="col">
            <div class="fi-title">VENUE</div>
            <p class="fi-desc" style="width: 90%">
              Welcome to Suzhou <br/>
              The Congress Venue Accommodation
            </p>
          </div>
          <div class="col"></div>
          <div class="col">
            <Logo></Logo>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        Copyright@ 2025 STRATI2026 All rights reserved service
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
  .menu-logo {
    .logo-name {
      color: #fff;
    }
  }
}
</style>
