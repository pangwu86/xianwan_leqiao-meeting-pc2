<template>
  <div class="notfound">
    <h1>Not Found</h1>
    <h4>
      This page cannot be found. Please get back to the
      <RouterLink to="/">Home page</RouterLink>.
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notfound {
  padding-top: 50px;
  padding-bottom: 200px;

  h1 {
    color: #1b3c90;
  }
}
</style>
