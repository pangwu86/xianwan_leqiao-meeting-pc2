<template>
  <div class="menu-logo">
    <img src="../imgs/logo2.png" alt="" class="logo-img" />
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
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-img {
    width: 95px;
    height: 75px;
    margin-right: 10px;
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
