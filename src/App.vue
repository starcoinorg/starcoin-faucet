<template>
  <div id="app">
    <main class="main-container">
      <div class="main-content container mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#app {
  background-color: #fff;
  .main-container {
    .main-content {
      min-height: 800px;
    }
  }
}
</style>
