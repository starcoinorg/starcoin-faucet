<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <div class="main-content container mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
  import Header from "@/views/header.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
  }
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
