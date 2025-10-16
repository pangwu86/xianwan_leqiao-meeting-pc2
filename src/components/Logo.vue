<template>
  <div class="menu-logo">
    <img src="../imgs/IUGSlogo.png" alt="" class="logo-img iugs" />
    <img src="../imgs/ICS_LOGO.png" alt="" class="logo-img ics" />
    <img src="../imgs/logo2.png" alt="" class="logo-img strati" />
    <div class="logo-name">
      <div class="sub-title">5th International Congress on Stratigraphy</div>
      <div class="title">STRATI 2026</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu-logo {
  // width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-img {
    width: 76px;
    height: 60px;
    margin-right: 10px;

    &.iugs {
      // width: 80px;
      // height: 60px;
    }

    &.ics {
      // width: 73px;
      // height: 60px;
    }

    &.strati {
      // width: 80px;
      // height: 60px;
    }
  }

  .logo-name {
    width: 160px;

    .sub-title {
      font-size: 11px;
      font-weight: bold;
    }

    .title {
      font-family: "Arial";
      font-size: 26px;
      font-weight: bold;
      font-style: italic;
    }
  }
}
</style>
