<template>
  <div id="app">
    <Header />
    <Feature />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Feature from "./components/Feature.vue";

export default {
  name: "App",
  components: {
    Header,
    Feature,
    Footer
  }
};
</script>

<style>
</style>
