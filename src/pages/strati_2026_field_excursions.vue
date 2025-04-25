<template>
  <div class="container page-content field_excursions">
    <!-- return to top -->
    <!-- <a href="#Top" class="btn-back-to-top"><i class="bi bi-caret-up"></i></a> -->

    <h1>Strati 2026 Field excursions</h1>
    <!-- 导航 -->
    <div id="#Top">
      <feNav></feNav>
    </div>

    <!-- 内容 -->
    <div>
      <pre1></pre1>
      <pre2></pre2>
      <pre3></pre3>
      <pre4></pre4>

      <mid1></mid1>
      <mid2></mid2>
      <mid3></mid3>

      <post1></post1>
      <post2></post2>
      <post3></post3>
      <post4></post4>
      <post5></post5>
    </div>
  </div>
</template>

<script>
import pre1 from "./field_excursions/pre1.vue";
import pre2 from "./field_excursions/pre2.vue";
import pre3 from "./field_excursions/pre3.vue";
import pre4 from "./field_excursions/pre4.vue";

import mid1 from "./field_excursions/mid1.vue";
import mid2 from "./field_excursions/mid2.vue";
import mid3 from "./field_excursions/mid3.vue";

import post1 from "./field_excursions/post1.vue";
import post2 from "./field_excursions/post2.vue";
import post3 from "./field_excursions/post3.vue";
import post4 from "./field_excursions/post4.vue";
import post5 from "./field_excursions/post5.vue";

import feNav from "./field_excursions/fe_nav.vue";

export default {
  components: {
    feNav,
    pre1,
    pre2,
    pre3,
    pre4,
    mid1,
    mid2,
    mid3,
    post1,
    post2,
    post3,
    post4,
    post5,
  },
};
</script>

<style lang="scss" scoped></style>
