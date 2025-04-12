<template>
  <!-- banner -->
  <div class="banner-container">
    <div class="container">
      <div class="banner-info">
        <div class="title">STRATI 2026</div>
        <div class="sub-title">5th International Congress on Stratigraphy</div>
        <div class="other">June 28 – July 3, 2026，Suzhou，China</div>
      </div>
    </div>
  </div>

  <!-- welcome -->

  <!-- Important Dates -->

  <!-- News&Events -->

  <!-- 4 ImgBtn -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner-container {
  width: 100%;
  font-size: 14px;
  position: relative;
  height: 600px;

  .container {
    height: 100%;
  }

  &::before {
    content: "";
    background-image: url("../imgs/banner_item1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  &::after {
    content: "";
    background-image: url("../imgs/banner_left.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}

.banner-info {
  color: #fff;
  font-family: "Arial";
  font-weight: bold;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  .title {
    font-size: 90px;
  }
  .sub-title {
    font-size: 45px;
    width: 45%;
    line-height: 1;
  }
  .other {
    margin-top: 16px;
    color: #ffce00;
    font-size: 26px;
  }
}
</style>
