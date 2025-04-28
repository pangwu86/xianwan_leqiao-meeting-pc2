<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-info">
        <div class="row">
          <div class="col">
            <div class="fi-title" style="font-size: 20px" onclick="window.location.href='/page/contact.html'">CONTACT</div>
            <p class="fi-desc" style="font-size: 20px; display: none">
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
      <div class="footer-copyright" style="font-size: 18px">
        Copyright@2025 STRATI 2026 All Rights Reserved Service <br>
        <a style="color: #f2f4f7;text-decoration:none;font-size: 15px" class="copyright-text" title="Technical support: Nanjing Xianwan Network Technology Co., Ltd." href="mailto:jiangh@meetopia.cn">Technical Support</a>
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
